# 命令行单元测试 C\#（xUnit）

xUnit 单元测试官方文档：<https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-dotnet-test>

## 在已有的 solution 中创建测试项目

※ 从 0 新建 solution 的话请参见[官方文档](https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-dotnet-test#create-the-solution)  
※ 通常既存的项目中已有人创建了单元测试的项目

```shell
# -o|--output <OUTPUT_DIRECTORY>
# 生成内容的输出位置，默认为当前文件夹
dotnet new xunit --output PrimeService.Tests
```

一个包含了单元测试项目的 solution：

```shell
/unit-testing-using-dotnet-test
    unit-testing-using-dotnet-test.sln
    /PrimeService
        PrimeService.cs
        PrimeService.csproj
    /PrimeService.Tests
        PrimeService_IsPrimeShould.cs
        PrimeServiceTests.csproj
```

## 创建测试

官方文档: <https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-dotnet-test#create-a-test>

※ 通常仿照项目中已有的测试写法即可

## 执行测试

在有 `.csproj` 文件测试项目目录下执行：

```shell
dotnet test
```

※ 这个行为将启动测试项目下的所有测试

### 执行选定的单元测试

官方文档：<https://docs.microsoft.com/zh-cn/dotnet/core/testing/selective-unit-tests?pivots=xunit>

```shell
dotnet test --filter <Property><Operator><Value>[|&<Expression>]
```

例，测试指定的文件：

```shell
dotnet test --filter <NamseSpace>.<ClassName>
```

## 打印输出内容

官方文档：<https://xunit.net/docs/capturing-output>

```c#
using Xunit;
using Xunit.Abstractions;

public class MyTestClass
{
    // 创建 ITestOutputHelper 实例
    private readonly ITestOutputHelper output;

    // 传入 ITestOutputHelper 实例
    public MyTestClass(ITestOutputHelper output)
    {
        // 将传入值赋给当前类中的实例
        this.output = output;
    }

    [Fact]
    public void MyTest()
    {
        var temp = "my class!";
        // 输出内容在执行 `dotnet test` 后的表示内容中显示
        output.WriteLine("This is output from {0}", temp);
    }
}
```

```shell
dotnet test --logger "console;verbosity=detailed"
```

## 使用 ReportGenerator 检查测试覆盖率

- .NET 官网：<https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-code-coverage?tabs=windows#generate-reports>
- ReportGenerator 官方仓库：<https://github.com/danielpalme/ReportGenerator>

### 使用 DataCollectors 生成 xml 文件

※ 该工具所依赖的 `coverlet.collector` 工具已与 xUnit 集成，无须另外手动安装

```shell
dotnet test --collect:"XPlat Code Coverage"
```

运行命令后，会在当前目录下生成 TestResults 目录，其中包含 coverage.cobertura.xml 文件

### 使用 ReportGenerator 根据 xml 文件生成报表

#### 使用 .NET 自带 NuGet 工具安装 ReportGenerator 包

- `dotnet tool` 命令官网: <https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-tool-install>
- 教程：使用 .NET CLI 安装和使用 .NET 本地工具：<https://docs.microsoft.com/zh-cn/dotnet/core/tools/local-tools-how-to-use>

※ 全局安装比较简单，想装在全局的可以自行查看 ReportGenerator 官方仓库的 [Getting started](https://github.com/danielpalme/ReportGenerator#install-the-package-matching-your-platform-and-needs)

```shell
# 创建 Dotnet 本地（当前目录）工具清单文件
dotnet new tool-manifest

# 在本地安装 ReportGenerator
# 安装后将在当前目录生成 .config 目录及 dotnet-tools.json 文件
dotnet tool install dotnet-reportgenerator-globaltool

# 执行本地安装的包
# <Command> 可通过 `gotnet tool list` 或 .config/dotnet-tools.json 查看
dotnet tool run <Command>
```

#### 生成报表

※ 目录可以自定义

1. 将 `./TestResults/<Hash>/` 下的 coverage.cobertura.xml 文件拖入 `./TestResults` 中

2. 运行 ReportGenerator

   ```shell
   # 安装在全局的话指令前不需要加 `dotnet tool run`
   dotnet tool run reportgenerator `
   -reports:"./TestResults/coverage.cobertura.xml" `
   -targetdir:"./TestResults/coveragereport" `
   -reporttypes:Html
   ```

3. 打开 coveragereport/index.html 查看报表
