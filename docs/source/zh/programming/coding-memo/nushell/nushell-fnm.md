# Nushell 配置 fnm 使用 Node.js

## 版本

| 名称    | 版本   |
| ------- | ------ |
| Nushell | 0.98.0 |
| fnm     | 1.37.1 |

## 结论

在 `$nu.env-path` 中设置以下内容：

```nu
# 这段注释是官方教程
# To add entries to PATH (on Windows you might use Path), you can use the following pattern:
# $env.PATH = ($env.PATH | split row (char esep) | prepend '/some/path')
# An alternate way to add entries to $env.PATH is to use the custom command `path add`
# which is built into the nushell stdlib:
# use std "path add"
# $env.PATH = ($env.PATH | split row (char esep))
# path add /some/path
# path add ($env.CARGO_HOME | path join "bin")
# path add ($env.HOME | path join ".local" "bin")
# $env.PATH = ($env.PATH | uniq)

fnm env --json | from json | load-env
# 如果是 Linux，则 `node` 在 `$env.FNM_MULTISHELL_PATH jon "bin` 中。
$env.PATH = ($env.PATH | split row (char esep) | prepend $env.FNM_MULTISHELL_PATH)
$env.PATH = ($env.PATH | uniq )
```

## 推导流程

### 观察安装完 fnm 后的设置

以 PowerShell 为例，根据 fnm [官方的设置文档](https://github.com/Schniz/fnm?tab=readme-ov-file#powershell)可知，在安装完 fnm 后，需要在 PowerShell 的配置文件 `Microsoft.PowerShell_profile.ps1` 中添加以下语句：

```sh
fnm env --use-on-cd --shell power-shell | Out-String | Invoke-Expression
```

从这句话可以判断出，在启动 PowerShell 后，它需要以 `power-shell` 的参数执行 `fnm env` 命令，并调用 [`Invoke-Expression`](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/invoke-expression?view=powershell-7.4) 以执行 [`Out-String`](https://learn.microsoft.com/zh-cn/powershell/module/microsoft.powershell.utility/out-string?view=powershell-7.4) 输出的字符串。

检查 `Out-String` 可以得到许多类似于下文这样的语句：

```sh
$env:FNM_LOGLEVEL = "info"
```

这是 PowerShell 的环境变量设置语句。

### 调查 `fnm env` 命令的实装

#### fmn 程序入口

[`src/main.rs`](https://github.com/Schniz/fnm/blob/master/src/main.rs):

```rs
fn main() {
    env_logger::init();
    // 推测由此处解析了 `fnm env` 及之后的参数
    let value = crate::cli::parse();
    // 推测此处调用 `env` 这个 `subcmd` 的 `call` 方法
    value.subcmd.call(value.config);
}
```

#### 调查 `subcmd`

检查 `value.subcmd.call(value.config)` 语句中 `subcmd` 的参照:

[`src/cli.rs`](https://github.com/Schniz/fnm/blob/master/src/cli.rs#L100):

```rs
/// A fast and simple Node.js manager.
#[derive(clap::Parser, Debug)]
#[clap(name = "fnm", version = env!("CARGO_PKG_VERSION"), bin_name = "fnm")]
pub struct Cli {
    #[clap(flatten)]
    pub config: FnmConfig,
    #[clap(subcommand)]
    // 由此处可知 `subcmd` 是 `SubCommand` 结构体的实例
    pub subcmd: SubCommand,
}
```

#### 调查 `SubCommand` 中 `call` 方法的实现

检查 `value.subcmd.call(value.config)` 语句中 `call` 的参照:

[`src/cli.rs`](https://github.com/Schniz/fnm/blob/master/src/cli.rs#L75):

```rs
impl SubCommand {
    pub fn call(self, config: FnmConfig) {
        match self {
            Self::LsLocal(cmd) => cmd.call(config),
            Self::LsRemote(cmd) => cmd.call(config),
            Self::Install(cmd) => cmd.call(config),
            // 可知 `fnm env` 应当是走进了这个分支
            Self::Env(cmd) => cmd.call(config),
            Self::Use(cmd) => cmd.call(config),
            Self::Completions(cmd) => cmd.call(config),
            Self::Alias(cmd) => cmd.call(config),
            Self::Default(cmd) => cmd.call(config),
            Self::Current(cmd) => cmd.call(config),
            Self::Exec(cmd) => cmd.call(config),
            Self::Uninstall(cmd) => cmd.call(config),
            Self::Unalias(cmd) => cmd.call(config),
        }
    }
}
```

#### 调查 `cmd` 实例及 `.call` 实现

检查 `Self::Env(cmd) => cmd.call(config),` 语句中的 `cmd` 参照：

[`src/cli.rs`](https://github.com/Schniz/fnm/blob/master/src/cli.rs#L33):

```rs
pub enum SubCommand {
    // ...

    /// Print and set up required environment variables for fnm
    ///
    /// This command generates a series of shell commands that
    /// should be evaluated by your shell to create a fnm-ready environment.
    ///
    /// Each shell has its own syntax of evaluating a dynamic expression.
    /// For example, evaluating fnm on Bash and Zsh would look like `eval "$(fnm env)"`.
    /// In Fish, evaluating would look like `fnm env | source`
    #[clap(name = "env", bin_name = "env")]
    Env(commands::env::Env),

    // ...
}
```

检查 `Env(commands::env::Env)` 中的 `Env` 参照：

[`src/commands/env.rs`](https://github.com/Schniz/fnm/blob/master/src/commands/env.rs#L60)

```rs
impl Command for Env {
    fn apply(self, config: &FnmConfig) -> Result<(), Self::Error> {
        // ...
    }
}
```

检查 `Command` 特征：

[`src/commands/command.rs`](https://github.com/Schniz/fnm/blob/master/src/commands/command.rs#L5)

```rs
pub trait Command: Sized {
    // ...

    fn call(self, config: FnmConfig) {
        // 可知上文的 `cmd.call` 即是调用了 `Env` 结构体实例的 `apply` 方法
        match self.apply(&config) {
            Ok(()) => (),
            Err(err) => Self::handle_error(err, &config),
        }
    }
}
```

#### 调查 `Env` 结构体中的 `apply` 方法的实现

```rs
impl Command for Env {
    type Error = Error;

    fn apply(self, config: &FnmConfig) -> Result<(), Self::Error> {
        // ...

        let multishell_path = make_symlink(config)?;
        let base_dir = config.base_dir_with_default();

        let env_vars = [
            ("FNM_MULTISHELL_PATH", multishell_path.to_str().unwrap()),
            (
                "FNM_VERSION_FILE_STRATEGY",
                config.version_file_strategy().as_str(),
            ),
            ("FNM_DIR", base_dir.to_str().unwrap()),
            ("FNM_LOGLEVEL", config.log_level().as_str()),
            ("FNM_NODE_DIST_MIRROR", config.node_dist_mirror.as_str()),
            (
                "FNM_COREPACK_ENABLED",
                bool_as_str(config.corepack_enabled()),
            ),
            ("FNM_RESOLVE_ENGINES", bool_as_str(config.resolve_engines())),
            ("FNM_ARCH", config.arch.as_str()),
        ];

        // ...

        let shell: Box<dyn Shell> = self
            .shell
            .map(Into::into)
            .or_else(infer_shell)
            .ok_or(Error::CantInferShell)?;

        // 可以推测这里将 `FNM_MULTISHELL_PATH` 的值和 Windows 的 `PATH` 变量进行了交互
        let binary_path = if cfg!(windows) {
            shell.path(&multishell_path)
        } else {
            shell.path(&multishell_path.join("bin"))
        };

        println!("{}", binary_path?);

        // ...

        Ok(())
    }
}
```

#### 检查 `shell.path` 方法的实现

[`src/shell/powershell.rs`](https://github.com/Schniz/fnm/blob/master/src/shell/powershell.rs#L10):

```rs
impl Shell for PowerShell {
    fn path(&self, path: &Path) -> anyhow::Result<String> {
        let current_path =
            std::env::var_os("PATH").ok_or_else(|| anyhow::anyhow!("Can't read PATH env var"))?;
        let mut split_paths: Vec<_> = std::env::split_paths(&current_path).collect();

        // 此处可知程序将 `FNM_MULTISHELL_PATH` 的值插入了 Windows 的 `PATH` 变量
        split_paths.insert(0, path.to_path_buf());

        let new_path = std::env::join_paths(split_paths)
            .map_err(|source| anyhow::anyhow!("Can't join paths: {}", source))?;
        let new_path = new_path
            .to_str()
            .ok_or_else(|| anyhow::anyhow!("Can't read PATH"))?;
        Ok(self.set_env_var("PATH", new_path))
    }

    fn set_env_var(&self, name: &str, value: &str) -> String {
        format!(r#"$env:{name} = "{value}""#)
    }

    // ...
}
```

至此，可知 `fnm env` 的主要行为就是将 `FNM_MULTISHELL_PATH` 的值插入 Windows 的 `PATH` 环境变量。

### 在 Nushell 中模仿 PowerShell 的实现

尝试 Node 命令会发现找不到可执行文件：

```nu
┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:09:18] ♥ node --version
Error: nu::shell::external_command                                                                                                                                                          × External command failed
   ╭─[entry #7:1:1]
 1 │ node --version
   · ──┬─
   ·   ╰── Command `node` not found
   ╰────
  help: Did you mean `encode`?
```

说明 Nusell 中缺少 fnm 的环境变量（从上文中可知是因为没有设置 `FNM_MULTISHELL_PATH` 到 `PATH`）。根据实践可知在 Nushell 中执行 `fnm env` 会报错：

```nu
┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:02:43] ♥ fnm env
error: Can't infer shell!
fnm can't infer your shell based on the process tree.
Maybe it is unsupported? we support the following shells:
* bash
* zsh
* fish
* powershell
* cmd
```

查看 help 可知可以通过 `--json` 选项获得 JSON：

```nu
┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:05:19] ♥ fnm env --json
{"FNM_RESOLVE_ENGINES":"false","FNM_MULTISHELL_PATH":"C:\\Users\\hyoryu\\AppData\\Local\\fnm_multishells\\60016_1727193923024","FNM_VERSION_FILE_STRATEGY":"local","FNM_DIR":"E:\\SOFT\\programming\\package-manage\\fnm","FNM_COREPACK_ENABLED":"false","FNM_ARCH":"x64","FNM_NODE_DIST_MIRROR":"https://nodejs.org/dist","FNM_LOGLEVEL":"info"}
```

根据 Nushell 官方文档中[环境变量的章节](https://www.nushell.sh/book/environment.html#load-env)，得知可以使用 [`load-env`](https://www.nushell.sh/commands/docs/load-env.html) 批量设置多个环境变量，它接收一个 JSON 作为参数。

直接将 `fnm env --json` 的结果传送给 `load-env` 会报错说和期望得到的 `record` 类型不一致：

```nu
┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:05:23] ♥ fnm env --json | load-env
Error: nu::shell::unsupported_input

  × Unsupported input
   ╭─[entry #5:1:1]
 1 │ fnm env --json | load-env
   · ─┬─              ────┬───
   ·  │                   ╰── 'load-env' expects a single record
   ·  ╰── value originated from here
   ╰────
```

根据 Nushell 官方文档中[数据类型的章节](https://www.nushell.sh/book/types_of_data.html#types-of-data)，可知 [`describe`](https://www.nushell.sh/commands/docs/describe.html) 可以检查数据类型。

用 `describe` 检查数据 `fnm env --json` 的数据类型：

```nu
┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:19:04] ♥ fnm env --json | describe
byte stream
```

可知结果为字节流。

从 [Records](https://www.nushell.sh/book/types_of_data.html#records) 章节中可知文章 [Working with Records](https://www.nushell.sh/book/working_with_records.html#creating-records)，其中提到可以使用 [`fromi json`](https://www.nushell.sh/commands/docs/from_json.html) 命令将 JSON 结构的文字中转化为 Record 类型。

进行实践：

```nu
┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:30:41] ♥ fnm env --json | from json | describe
record<FNM_LOGLEVEL: string, FNM_COREPACK_ENABLED: string, FNM_VERSION_FILE_STRATEGY: string, FNM_MULTISHELL_PATH: string, FNM_NODE_DIST_MIRROR: string, FNM_RESOLVE_ENGINES: string, FNM_ARCH: string, FNM_DIR: string>
```

验证确实为 Record 类型，将其传递给 `load-env` 并检验成功与否：

```nu
┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:34:40] ♥ $env.FNM_LOGLEVEL
Error: nu::shell::column_not_found

  × Cannot find column 'FNM_LOGLEVEL'
   ╭─[entry #1:1:1]
 1 │ $env.FNM_LOGLEVEL
   · ────────┬────────┬
   ·         │        ╰── value originates here
   ·         ╰── cannot find column 'FNM_LOGLEVEL'
   ╰────

┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:34:44] ♥ fnm env --json | from json | load-env
┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:34:49] ♥ $env.FNM_LOGLEVEL
info
```

此时如果尝试执行 `node --version` 会发现还是报错的，因为根据上文查验 PowerShell 配置的结果，得知了最终要将 `FNM_MULTISHELL_PATH` 的值插入 `PATH` 环境变量。

根据 Nushell 官方文档中[设置的章节](https://www.nushell.sh/book/configuration.html#path-configuration)，得知可以使用以下命令来向 `PATH` 中增加内容：

```nu
# 除了 `append` 还可以 `prepend`
$env.PATH = ($env.PATH | split row (char esep) | append '/some/path')
```

实践：

```nu
# 注意如果是 Linux，则 `node` 在 `$env.FNM_MULTISHELL_PATH join "bin` 中。
┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:44:36] ♥ $env.PATH = ($env.PATH | split row (char esep) | append $env.FNM_MULTISHELL_PATH)
┏[ hyoryu][ RAM: 29/63GB][ vitepress][ vite-press ≡  ?3 ~2 -4]
┖[ 01:45:26] ♥ node --version
v20.15.1
```

至此可以成功执行 Node 命令了。

将上述步骤加上去重语句写入 `$nu.env-path`，即能得出文章最开始的结论。
