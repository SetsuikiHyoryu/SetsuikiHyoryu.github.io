# 用 Neovim 开发 Spring Boot 项目

## 在 Neovim 中安装 Java 用的 LSP 插件

Java 的 LSP 叫 `jdtls`。  
`nvim-lspconfig` 的文档提到，想要完整的 `jdtls` 体验需要用 `nvim-jdtls`。

两个插件都在 `lsp/` 目录下为 `jdtls` 做了配置。  
根据实测，先加载的插件的 `lsp/` 优先级高（数组全覆盖，对象是否会合并未验证）。

`nvim-jdtls` 的 `README` 有安装 `jdtls` 的详细说明。  
因为项目中使用的 Java 版本可能低于 `nvim-jdtls` 所需的 JDK v21，  
区分多个版本需要在 LSP 配置的运行时相关部分硬编码 JDK 路径，  
环境变量设置项目所需的 JDK 版本即可。

相关的环境变量是 `JAVA_HOME` 和 `PATH`，  
一些情况下启动服务时会只看 `PATH` 中的 Java 程序，  
不过 `PATH` 里可以写为 `%JAVA_HOME%/bin`。

`nvim-lspconfig` 现在是只提供 LSP 配置的插件，启动 LSP 服务器由 Neovim 内部完成。  
但是 `nvim-jdtls` 手动调用了 Neovim 的启动 LSP 服务器的 API，  
却没有出现重复的实例，推测是 Neovim 内部做了去重。

## 使用 Maven 启动 Spring Boot 项目

1. 进入 `pom.xml` 所在的目录。
2. 执行 `mvn [clean] spring-boot:run`。
   - 如果项目内有 Maven Wrapper，多半会有 `mvnw` 文件。  
     此时执行 `<mvnw-path> [clean] spring-boot:run`（Windows 下是 `mvnw.cmd`）。
   - 不执行 `clean` 的话是增量编译，  
     执行 `clean` 会删除之前的编译文件（`target/`）重新全量编译。
   - 可以添加 `-Dspring-boot.run.profiles=local` 这样的参数来指定配置文件。
     - See: <https://docs.spring.io/spring-boot/maven-plugin/run.html#run.examples.specify-active-profiles>

Maven Wrapper 会下载一个 Maven 到 `~/.m2` 里，其管理的依赖也会被下载到这里。  
`mvnw` 执行后的编译文件等物会放置在项目内执行命令的目录下新生成的 `target/` 里。
