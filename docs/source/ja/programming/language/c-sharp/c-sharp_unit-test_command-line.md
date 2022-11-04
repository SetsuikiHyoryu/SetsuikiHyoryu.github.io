# コマンドラインで C\# を単体テスト（xUnit）

xUnit 単体テスト公式ドキュメント：<https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-with-dotnet-test>

## 既存の solution でテストプロジェクトを作成

※ 0 から solution を作成する場合は[公式ドキュメント](https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-with-dotnet-test#create-the-solution)  を参照してください  
※ 既存のプロジェクトであれば通常は作成済みのテストプロジェクトが存在する

```shell
# -o|--output <OUTPUT_DIRECTORY>
# 作成内容の出力箇所、デフォルトは現在のフォルダ
dotnet new xunit --output PrimeService.Tests
```

単体テストプロジェクトを含んでいる solution の例：

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

## テストを作成

公式ドキュメント: <https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-with-dotnet-test#create-a-test>

※ 通常はプロジェクト内の既存テストを模倣して書く

## テストを実行

`.csproj` のあるディレクトリで下記命令を実行：

```shell
dotnet test
```

※ これはテストプロジェクト内の全てのテストを実行する

### 選択した単体テストの実行

公式ドキュメント：<https://docs.microsoft.com/ja/dotnet/core/testing/selective-unit-tests?pivots=xunit>

```shell
dotnet test --filter <Property><Operator><Value>[|&<Expression>]
```

指定するテストファイルを実行する例：

```shell
dotnet test --filter <NamseSpace>.<ClassName>
```

## コマンドラインで出力を捕捉

公式ドキュメント：<https://xunit.net/docs/capturing-output>

```c#
using Xunit;
using Xunit.Abstractions;

public class MyTestClass
{
    // ITestOutputHelper インスタンスを作成
    private readonly ITestOutputHelper output;

    // ITestOutputHelper インスタンスを代入
    public MyTestClass(ITestOutputHelper output)
    {
        // 代入されたインスタンスをクラス内のインスタンスに代入 
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

## ReportGenerator でカバレッジを確認

- .NET HP：<https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-code-coverage?tabs=windows#generate-reports>
- ReportGenerator 公式倉庫：<https://github.com/danielpalme/ReportGenerator>

### DataCollectors で xml ファイルを作成

※ 依存する `coverlet.collector` ツールは既に xUnit 内にバインドされているので、手動でインストールする必要はない

```shell
dotnet test --collect:"XPlat Code Coverage"
```

命令実行後、現ディレクトリに TestResults ディレクトリを生成し、中に coverage.cobertura.xml ファイルを生成する

### ReportGenerator で xml ファイルに基づいた報告を生成

#### .NET 内の NuGet ツールで ReportGenerator パッケージをインストール

- `dotnet tool` コマンド公式: <https://docs.microsoft.com/ja/dotnet/core/tools/dotnet-tool-install>
- チュートリアル: .NET CLI を使って .NET ローカル ツールをインストールして使用する：<https://docs.microsoft.com/ja/dotnet/core/tools/local-tools-how-to-use>

※ グローバルでのインストールは比較的に簡単で、そうしたい人は ReportGenerator の公式倉庫 [Getting started](https://github.com/danielpalme/ReportGenerator#install-the-package-matching-your-platform-and-needs) をご自分で参照してください

```shell
# Dotnet ローカル（現ディレクトリ）ツールリストファイルを作成
dotnet new tool-manifest

# ローカル下で ReportGenerator をインストール
# その後は現ディレクトリで .config ディレクトリ及び dotnet-tools.json ファイルを生成する
dotnet tool install dotnet-reportgenerator-globaltool

# ローカルにパッケージをインストール
# <Command> は `gotnet tool list` 又は .config/dotnet-tools.json で確認できる
dotnet tool run <Command>
```

#### 報告を作成

※ ディレクトリは自分で定義できる

1. `./TestResults/<Hash>/` 内の coverage.cobertura.xml ファイルを `./TestResults` に入れる

2. ReportGenerator を実行する

   ```shell
   # グローバルにインストールした場合は命令の前に `dotnet tool run` を付ける必要はない
   dotnet tool run reportgenerator `
   -reports:"./TestResults/coverage.cobertura.xml" `
   -targetdir:"./TestResults/coveragereport" `
   -reporttypes:Html
   ```

3. coveragereport/index.html を開いて報告を確認する
