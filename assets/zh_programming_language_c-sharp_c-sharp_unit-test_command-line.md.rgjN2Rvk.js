import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.BtbJBhK4.js";const u=JSON.parse('{"title":"命令行单元测试 C#（xUnit）","description":"","frontmatter":{},"headers":[],"relativePath":"zh/programming/language/c-sharp/c-sharp_unit-test_command-line.md","filePath":"zh/programming/language/c-sharp/c-sharp_unit-test_command-line.md","lastUpdated":1670114049000}'),e={name:"zh/programming/language/c-sharp/c-sharp_unit-test_command-line.md"},t=n(`<h1 id="命令行单元测试-c-xunit" tabindex="-1">命令行单元测试 C#（xUnit） <a class="header-anchor" href="#命令行单元测试-c-xunit" aria-label="Permalink to &quot;命令行单元测试 C\\#（xUnit）&quot;">​</a></h1><p>xUnit 单元测试官方文档：<a href="https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-dotnet-test" target="_blank" rel="noreferrer">https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-dotnet-test</a></p><h2 id="在已有的-solution-中创建测试项目" tabindex="-1">在已有的 solution 中创建测试项目 <a class="header-anchor" href="#在已有的-solution-中创建测试项目" aria-label="Permalink to &quot;在已有的 solution 中创建测试项目&quot;">​</a></h2><p>※ 从 0 新建 solution 的话请参见<a href="https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-dotnet-test#create-the-solution" target="_blank" rel="noreferrer">官方文档</a><br> ※ 通常既存的项目中已有人创建了单元测试的项目</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># -o|--output &lt;OUTPUT_DIRECTORY&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 生成内容的输出位置，默认为当前文件夹</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new xunit --output PrimeService.Tests</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>一个包含了单元测试项目的 solution：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/unit-testing-using-dotnet-test</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    unit-testing-using-dotnet-test.sln</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    /PrimeService</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        PrimeService.cs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        PrimeService.csproj</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">    /PrimeService.Tests</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        PrimeService_IsPrimeShould.cs</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">        PrimeServiceTests.csproj</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="创建测试" tabindex="-1">创建测试 <a class="header-anchor" href="#创建测试" aria-label="Permalink to &quot;创建测试&quot;">​</a></h2><p>官方文档: <a href="https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-dotnet-test#create-a-test" target="_blank" rel="noreferrer">https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-with-dotnet-test#create-a-test</a></p><p>※ 通常仿照项目中已有的测试写法即可</p><h2 id="执行测试" tabindex="-1">执行测试 <a class="header-anchor" href="#执行测试" aria-label="Permalink to &quot;执行测试&quot;">​</a></h2><p>在有 <code>.csproj</code> 文件测试项目目录下执行：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>※ 这个行为将启动测试项目下的所有测试</p><h3 id="执行选定的单元测试" tabindex="-1">执行选定的单元测试 <a class="header-anchor" href="#执行选定的单元测试" aria-label="Permalink to &quot;执行选定的单元测试&quot;">​</a></h3><p>官方文档：<a href="https://docs.microsoft.com/zh-cn/dotnet/core/testing/selective-unit-tests?pivots=xunit" target="_blank" rel="noreferrer">https://docs.microsoft.com/zh-cn/dotnet/core/testing/selective-unit-tests?pivots=xunit</a></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test --filter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Propert</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">y&gt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Operato</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">r&gt;&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Valu</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">[</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">|</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&amp;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">Expression</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>例，测试指定的文件：</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test --filter </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">NamseSpac</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">ClassNam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="打印输出内容" tabindex="-1">打印输出内容 <a class="header-anchor" href="#打印输出内容" aria-label="Permalink to &quot;打印输出内容&quot;">​</a></h2><p>官方文档：<a href="https://xunit.net/docs/capturing-output" target="_blank" rel="noreferrer">https://xunit.net/docs/capturing-output</a></p><div class="language-c# vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Xunit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">using</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> Xunit</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Abstractions</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> class</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyTestClass</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">{</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 创建 ITestOutputHelper 实例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    private</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> readonly</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ITestOutputHelper</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> output</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">    // 传入 ITestOutputHelper 实例</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyTestClass</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">ITestOutputHelper</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> output</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 将传入值赋给当前类中的实例</span></span>
<span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">        this</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.output </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">=</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> output;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    [</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Fact</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">]</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    public</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> void</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> MyTest</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">()</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">        var</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> temp</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> =</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;my class!&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">        // 输出内容在执行 \`dotnet test\` 后的表示内容中显示</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        output.</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">WriteLine</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;This is output from {0}&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, temp);</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">    }</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">}</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test --logger &quot;console;verbosity=detailed&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用-reportgenerator-检查测试覆盖率" tabindex="-1">使用 ReportGenerator 检查测试覆盖率 <a class="header-anchor" href="#使用-reportgenerator-检查测试覆盖率" aria-label="Permalink to &quot;使用 ReportGenerator 检查测试覆盖率&quot;">​</a></h2><ul><li>.NET 官网：<a href="https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-code-coverage?tabs=windows#generate-reports" target="_blank" rel="noreferrer">https://docs.microsoft.com/zh-cn/dotnet/core/testing/unit-testing-code-coverage?tabs=windows#generate-reports</a></li><li>ReportGenerator 官方仓库：<a href="https://github.com/danielpalme/ReportGenerator" target="_blank" rel="noreferrer">https://github.com/danielpalme/ReportGenerator</a></li></ul><h3 id="使用-datacollectors-生成-xml-文件" tabindex="-1">使用 DataCollectors 生成 xml 文件 <a class="header-anchor" href="#使用-datacollectors-生成-xml-文件" aria-label="Permalink to &quot;使用 DataCollectors 生成 xml 文件&quot;">​</a></h3><p>※ 该工具所依赖的 <code>coverlet.collector</code> 工具已与 xUnit 集成，无须另外手动安装</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> test --collect:&quot;XPlat Code Coverage&quot;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><p>运行命令后，会在当前目录下生成 TestResults 目录，其中包含 coverage.cobertura.xml 文件</p><h3 id="使用-reportgenerator-根据-xml-文件生成报表" tabindex="-1">使用 ReportGenerator 根据 xml 文件生成报表 <a class="header-anchor" href="#使用-reportgenerator-根据-xml-文件生成报表" aria-label="Permalink to &quot;使用 ReportGenerator 根据 xml 文件生成报表&quot;">​</a></h3><h4 id="使用-net-自带-nuget-工具安装-reportgenerator-包" tabindex="-1">使用 .NET 自带 NuGet 工具安装 ReportGenerator 包 <a class="header-anchor" href="#使用-net-自带-nuget-工具安装-reportgenerator-包" aria-label="Permalink to &quot;使用 .NET 自带 NuGet 工具安装 ReportGenerator 包&quot;">​</a></h4><ul><li><code>dotnet tool</code> 命令官网: <a href="https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-tool-install" target="_blank" rel="noreferrer">https://docs.microsoft.com/zh-cn/dotnet/core/tools/dotnet-tool-install</a></li><li>教程：使用 .NET CLI 安装和使用 .NET 本地工具：<a href="https://docs.microsoft.com/zh-cn/dotnet/core/tools/local-tools-how-to-use" target="_blank" rel="noreferrer">https://docs.microsoft.com/zh-cn/dotnet/core/tools/local-tools-how-to-use</a></li></ul><p>※ 全局安装比较简单，想装在全局的可以自行查看 ReportGenerator 官方仓库的 <a href="https://github.com/danielpalme/ReportGenerator#install-the-package-matching-your-platform-and-needs" target="_blank" rel="noreferrer">Getting started</a></p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 创建 Dotnet 本地（当前目录）工具清单文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new tool-manifest</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在本地安装 ReportGenerator</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装后将在当前目录生成 .config 目录及 dotnet-tools.json 文件</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tool install dotnet-reportgenerator-globaltool</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 执行本地安装的包</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &lt;Command&gt; 可通过 \`gotnet tool list\` 或 .config/dotnet-tools.json 查看</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tool run </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">Comman</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">d</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="生成报表" tabindex="-1">生成报表 <a class="header-anchor" href="#生成报表" aria-label="Permalink to &quot;生成报表&quot;">​</a></h4><p>※ 目录可以自定义</p><ol><li><p>将 <code>./TestResults/&lt;Hash&gt;/</code> 下的 coverage.cobertura.xml 文件拖入 <code>./TestResults</code> 中</p></li><li><p>运行 ReportGenerator</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 安装在全局的话指令前不需要加 \`dotnet tool run\`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">dotnet</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> tool run reportgenerator \`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-reports:&quot;./TestResults/coverage.cobertura.xml&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-targetdir:</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">&quot;./TestResults/coveragereport&quot;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> \`</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">-reporttypes:Html</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>打开 coveragereport/index.html 查看报表</p></li></ol>`,37),l=[t];function p(r,h,o,k,c,d){return i(),a("div",null,l)}const b=s(e,[["render",p]]);export{u as __pageData,b as default};
