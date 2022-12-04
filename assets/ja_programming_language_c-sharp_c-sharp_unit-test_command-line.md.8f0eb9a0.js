import{_ as s,c as n,o as a,a as e}from"./app.2bacd2cf.js";const C=JSON.parse('{"title":"\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u3067 C# \u3092\u5358\u4F53\u30C6\u30B9\u30C8\uFF08xUnit\uFF09","description":"","frontmatter":{},"headers":[{"level":2,"title":"\u65E2\u5B58\u306E solution \u3067\u30C6\u30B9\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210","slug":"\u65E2\u5B58\u306E-solution-\u3066\u3099\u30C6\u30B9\u30C8\u30D5\u309A\u30ED\u30B7\u3099\u30A7\u30AF\u30C8\u3092\u4F5C\u6210","link":"#\u65E2\u5B58\u306E-solution-\u3066\u3099\u30C6\u30B9\u30C8\u30D5\u309A\u30ED\u30B7\u3099\u30A7\u30AF\u30C8\u3092\u4F5C\u6210","children":[]},{"level":2,"title":"\u30C6\u30B9\u30C8\u3092\u4F5C\u6210","slug":"\u30C6\u30B9\u30C8\u3092\u4F5C\u6210","link":"#\u30C6\u30B9\u30C8\u3092\u4F5C\u6210","children":[]},{"level":2,"title":"\u30C6\u30B9\u30C8\u3092\u5B9F\u884C","slug":"\u30C6\u30B9\u30C8\u3092\u5B9F\u884C","link":"#\u30C6\u30B9\u30C8\u3092\u5B9F\u884C","children":[{"level":3,"title":"\u9078\u629E\u3057\u305F\u5358\u4F53\u30C6\u30B9\u30C8\u306E\u5B9F\u884C","slug":"\u9078\u629E\u3057\u305F\u5358\u4F53\u30C6\u30B9\u30C8\u306E\u5B9F\u884C","link":"#\u9078\u629E\u3057\u305F\u5358\u4F53\u30C6\u30B9\u30C8\u306E\u5B9F\u884C","children":[]}]},{"level":2,"title":"\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u3067\u51FA\u529B\u3092\u6355\u6349","slug":"\u30B3\u30DE\u30F3\u30C8\u3099\u30E9\u30A4\u30F3\u3066\u3099\u51FA\u529B\u3092\u6355\u6349","link":"#\u30B3\u30DE\u30F3\u30C8\u3099\u30E9\u30A4\u30F3\u3066\u3099\u51FA\u529B\u3092\u6355\u6349","children":[]},{"level":2,"title":"ReportGenerator \u3067\u30AB\u30D0\u30EC\u30C3\u30B8\u3092\u78BA\u8A8D","slug":"reportgenerator-\u3066\u3099\u30AB\u30CF\u3099\u30EC\u30C3\u30B7\u3099\u3092\u78BA\u8A8D","link":"#reportgenerator-\u3066\u3099\u30AB\u30CF\u3099\u30EC\u30C3\u30B7\u3099\u3092\u78BA\u8A8D","children":[{"level":3,"title":"DataCollectors \u3067 xml \u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210","slug":"datacollectors-\u3066\u3099-xml-\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210","link":"#datacollectors-\u3066\u3099-xml-\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210","children":[]},{"level":3,"title":"ReportGenerator \u3067 xml \u30D5\u30A1\u30A4\u30EB\u306B\u57FA\u3065\u3044\u305F\u5831\u544A\u3092\u751F\u6210","slug":"reportgenerator-\u3066\u3099-xml-\u30D5\u30A1\u30A4\u30EB\u306B\u57FA\u3064\u3099\u3044\u305F\u5831\u544A\u3092\u751F\u6210","link":"#reportgenerator-\u3066\u3099-xml-\u30D5\u30A1\u30A4\u30EB\u306B\u57FA\u3064\u3099\u3044\u305F\u5831\u544A\u3092\u751F\u6210","children":[]}]}],"relativePath":"ja/programming/language/c-sharp/c-sharp_unit-test_command-line.md","lastUpdated":1670114049000}'),l={name:"ja/programming/language/c-sharp/c-sharp_unit-test_command-line.md"},t=e(`<h1 id="\u30B3\u30DE\u30F3\u30C8\u3099\u30E9\u30A4\u30F3\u3066\u3099-c-\u3092\u5358\u4F53\u30C6\u30B9\u30C8-xunit" tabindex="-1">\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u3067 C# \u3092\u5358\u4F53\u30C6\u30B9\u30C8\uFF08xUnit\uFF09 <a class="header-anchor" href="#\u30B3\u30DE\u30F3\u30C8\u3099\u30E9\u30A4\u30F3\u3066\u3099-c-\u3092\u5358\u4F53\u30C6\u30B9\u30C8-xunit" aria-hidden="true">#</a></h1><p>xUnit \u5358\u4F53\u30C6\u30B9\u30C8\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\uFF1A<a href="https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-with-dotnet-test" target="_blank" rel="noreferrer">https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-with-dotnet-test</a></p><h2 id="\u65E2\u5B58\u306E-solution-\u3066\u3099\u30C6\u30B9\u30C8\u30D5\u309A\u30ED\u30B7\u3099\u30A7\u30AF\u30C8\u3092\u4F5C\u6210" tabindex="-1">\u65E2\u5B58\u306E solution \u3067\u30C6\u30B9\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u4F5C\u6210 <a class="header-anchor" href="#\u65E2\u5B58\u306E-solution-\u3066\u3099\u30C6\u30B9\u30C8\u30D5\u309A\u30ED\u30B7\u3099\u30A7\u30AF\u30C8\u3092\u4F5C\u6210" aria-hidden="true">#</a></h2><p>\u203B 0 \u304B\u3089 solution \u3092\u4F5C\u6210\u3059\u308B\u5834\u5408\u306F<a href="https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-with-dotnet-test#create-the-solution" target="_blank" rel="noreferrer">\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8</a> \u3092\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044<br> \u203B \u65E2\u5B58\u306E\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3067\u3042\u308C\u3070\u901A\u5E38\u306F\u4F5C\u6210\u6E08\u307F\u306E\u30C6\u30B9\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u304C\u5B58\u5728\u3059\u308B</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># -o|--output &lt;OUTPUT_DIRECTORY&gt;</span></span>
<span class="line"><span style="color:#676E95;"># \u4F5C\u6210\u5185\u5BB9\u306E\u51FA\u529B\u7B87\u6240\u3001\u30C7\u30D5\u30A9\u30EB\u30C8\u306F\u73FE\u5728\u306E\u30D5\u30A9\u30EB\u30C0</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet new xunit --output PrimeService.Tests</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><p>\u5358\u4F53\u30C6\u30B9\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u3092\u542B\u3093\u3067\u3044\u308B solution \u306E\u4F8B\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">/unit-testing-using-dotnet-test</span></span>
<span class="line"><span style="color:#A6ACCD;">    unit-testing-using-dotnet-test.sln</span></span>
<span class="line"><span style="color:#A6ACCD;">    /PrimeService</span></span>
<span class="line"><span style="color:#A6ACCD;">        PrimeService.cs</span></span>
<span class="line"><span style="color:#A6ACCD;">        PrimeService.csproj</span></span>
<span class="line"><span style="color:#A6ACCD;">    /PrimeService.Tests</span></span>
<span class="line"><span style="color:#A6ACCD;">        PrimeService_IsPrimeShould.cs</span></span>
<span class="line"><span style="color:#A6ACCD;">        PrimeServiceTests.csproj</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u30C6\u30B9\u30C8\u3092\u4F5C\u6210" tabindex="-1">\u30C6\u30B9\u30C8\u3092\u4F5C\u6210 <a class="header-anchor" href="#\u30C6\u30B9\u30C8\u3092\u4F5C\u6210" aria-hidden="true">#</a></h2><p>\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8: <a href="https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-with-dotnet-test#create-a-test" target="_blank" rel="noreferrer">https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-with-dotnet-test#create-a-test</a></p><p>\u203B \u901A\u5E38\u306F\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u65E2\u5B58\u30C6\u30B9\u30C8\u3092\u6A21\u5023\u3057\u3066\u66F8\u304F</p><h2 id="\u30C6\u30B9\u30C8\u3092\u5B9F\u884C" tabindex="-1">\u30C6\u30B9\u30C8\u3092\u5B9F\u884C <a class="header-anchor" href="#\u30C6\u30B9\u30C8\u3092\u5B9F\u884C" aria-hidden="true">#</a></h2><p><code>.csproj</code> \u306E\u3042\u308B\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067\u4E0B\u8A18\u547D\u4EE4\u3092\u5B9F\u884C\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">dotnet </span><span style="color:#82AAFF;">test</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u203B \u3053\u308C\u306F\u30C6\u30B9\u30C8\u30D7\u30ED\u30B8\u30A7\u30AF\u30C8\u5185\u306E\u5168\u3066\u306E\u30C6\u30B9\u30C8\u3092\u5B9F\u884C\u3059\u308B</p><h3 id="\u9078\u629E\u3057\u305F\u5358\u4F53\u30C6\u30B9\u30C8\u306E\u5B9F\u884C" tabindex="-1">\u9078\u629E\u3057\u305F\u5358\u4F53\u30C6\u30B9\u30C8\u306E\u5B9F\u884C <a class="header-anchor" href="#\u9078\u629E\u3057\u305F\u5358\u4F53\u30C6\u30B9\u30C8\u306E\u5B9F\u884C" aria-hidden="true">#</a></h3><p>\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\uFF1A<a href="https://docs.microsoft.com/ja/dotnet/core/testing/selective-unit-tests?pivots=xunit" target="_blank" rel="noreferrer">https://docs.microsoft.com/ja/dotnet/core/testing/selective-unit-tests?pivots=xunit</a></p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">dotnet </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;"> --filter </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Property&gt;&lt;Operator&gt;&lt;Value</span><span style="color:#89DDFF;">&gt;[|&amp;&lt;</span><span style="color:#A6ACCD;">Expression</span><span style="color:#89DDFF;">&gt;]</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u6307\u5B9A\u3059\u308B\u30C6\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u5B9F\u884C\u3059\u308B\u4F8B\uFF1A</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">dotnet </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;"> --filter </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">NamseSpace</span><span style="color:#89DDFF;">&gt;</span><span style="color:#A6ACCD;">.</span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">ClassName</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="\u30B3\u30DE\u30F3\u30C8\u3099\u30E9\u30A4\u30F3\u3066\u3099\u51FA\u529B\u3092\u6355\u6349" tabindex="-1">\u30B3\u30DE\u30F3\u30C9\u30E9\u30A4\u30F3\u3067\u51FA\u529B\u3092\u6355\u6349 <a class="header-anchor" href="#\u30B3\u30DE\u30F3\u30C8\u3099\u30E9\u30A4\u30F3\u3066\u3099\u51FA\u529B\u3092\u6355\u6349" aria-hidden="true">#</a></h2><p>\u516C\u5F0F\u30C9\u30AD\u30E5\u30E1\u30F3\u30C8\uFF1A<a href="https://xunit.net/docs/capturing-output" target="_blank" rel="noreferrer">https://xunit.net/docs/capturing-output</a></p><div class="language-c# line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">c#</span><pre class="shiki"><code><span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> Xunit</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#F78C6C;">using</span><span style="color:#A6ACCD;"> Xunit.Abstractions</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#F78C6C;">class</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MyTestClass</span></span>
<span class="line"><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ITestOutputHelper \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u4F5C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">private</span><span style="color:#A6ACCD;"> </span><span style="color:#C792EA;">readonly</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">ITestOutputHelper</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">output</span><span style="color:#89DDFF;">;</span></span>
<span class="line"></span>
<span class="line"><span style="color:#89DDFF;">    </span><span style="color:#676E95;">// ITestOutputHelper \u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u4EE3\u5165</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyTestClass</span><span style="color:#89DDFF;">(</span><span style="color:#FFCB6B;">ITestOutputHelper</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">output</span><span style="color:#89DDFF;">)</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u4EE3\u5165\u3055\u308C\u305F\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u3092\u30AF\u30E9\u30B9\u5185\u306E\u30A4\u30F3\u30B9\u30BF\u30F3\u30B9\u306B\u4EE3\u5165 </span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">this</span><span style="color:#89DDFF;">.</span><span style="color:#A6ACCD;">output </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> output</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">[</span><span style="color:#FFCB6B;">Fact</span><span style="color:#89DDFF;">]</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#C792EA;">public</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">void</span><span style="color:#A6ACCD;"> </span><span style="color:#82AAFF;">MyTest</span><span style="color:#89DDFF;">()</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">        </span><span style="color:#F78C6C;">var</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">temp</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">my class!</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">;</span></span>
<span class="line"><span style="color:#89DDFF;">        </span><span style="color:#676E95;">// \u8F93\u51FA\u5185\u5BB9\u5728\u6267\u884C \`dotnet test\` \u540E\u7684\u8868\u793A\u5185\u5BB9\u4E2D\u663E\u793A</span></span>
<span class="line"><span style="color:#A6ACCD;">        output</span><span style="color:#89DDFF;">.</span><span style="color:#82AAFF;">WriteLine</span><span style="color:#89DDFF;">(</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">This is output from {0}</span><span style="color:#89DDFF;">&quot;</span><span style="color:#89DDFF;">,</span><span style="color:#A6ACCD;"> temp</span><span style="color:#89DDFF;">);</span></span>
<span class="line"><span style="color:#A6ACCD;">    </span><span style="color:#89DDFF;">}</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br></div></div><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">dotnet </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;"> --logger </span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">console;verbosity=detailed</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><h2 id="reportgenerator-\u3066\u3099\u30AB\u30CF\u3099\u30EC\u30C3\u30B7\u3099\u3092\u78BA\u8A8D" tabindex="-1">ReportGenerator \u3067\u30AB\u30D0\u30EC\u30C3\u30B8\u3092\u78BA\u8A8D <a class="header-anchor" href="#reportgenerator-\u3066\u3099\u30AB\u30CF\u3099\u30EC\u30C3\u30B7\u3099\u3092\u78BA\u8A8D" aria-hidden="true">#</a></h2><ul><li>.NET HP\uFF1A<a href="https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-code-coverage?tabs=windows#generate-reports" target="_blank" rel="noreferrer">https://docs.microsoft.com/ja/dotnet/core/testing/unit-testing-code-coverage?tabs=windows#generate-reports</a></li><li>ReportGenerator \u516C\u5F0F\u5009\u5EAB\uFF1A<a href="https://github.com/danielpalme/ReportGenerator" target="_blank" rel="noreferrer">https://github.com/danielpalme/ReportGenerator</a></li></ul><h3 id="datacollectors-\u3066\u3099-xml-\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210" tabindex="-1">DataCollectors \u3067 xml \u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210 <a class="header-anchor" href="#datacollectors-\u3066\u3099-xml-\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210" aria-hidden="true">#</a></h3><p>\u203B \u4F9D\u5B58\u3059\u308B <code>coverlet.collector</code> \u30C4\u30FC\u30EB\u306F\u65E2\u306B xUnit \u5185\u306B\u30D0\u30A4\u30F3\u30C9\u3055\u308C\u3066\u3044\u308B\u306E\u3067\u3001\u624B\u52D5\u3067\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3059\u308B\u5FC5\u8981\u306F\u306A\u3044</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#A6ACCD;">dotnet </span><span style="color:#82AAFF;">test</span><span style="color:#A6ACCD;"> --collect:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">XPlat Code Coverage</span><span style="color:#89DDFF;">&quot;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br></div></div><p>\u547D\u4EE4\u5B9F\u884C\u5F8C\u3001\u73FE\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306B TestResults \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u751F\u6210\u3057\u3001\u4E2D\u306B coverage.cobertura.xml \u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210\u3059\u308B</p><h3 id="reportgenerator-\u3066\u3099-xml-\u30D5\u30A1\u30A4\u30EB\u306B\u57FA\u3064\u3099\u3044\u305F\u5831\u544A\u3092\u751F\u6210" tabindex="-1">ReportGenerator \u3067 xml \u30D5\u30A1\u30A4\u30EB\u306B\u57FA\u3065\u3044\u305F\u5831\u544A\u3092\u751F\u6210 <a class="header-anchor" href="#reportgenerator-\u3066\u3099-xml-\u30D5\u30A1\u30A4\u30EB\u306B\u57FA\u3064\u3099\u3044\u305F\u5831\u544A\u3092\u751F\u6210" aria-hidden="true">#</a></h3><h4 id="net-\u5185\u306E-nuget-\u30C4\u30FC\u30EB\u3066\u3099-reportgenerator-\u30CF\u309A\u30C3\u30B1\u30FC\u30B7\u3099\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" tabindex="-1">.NET \u5185\u306E NuGet \u30C4\u30FC\u30EB\u3067 ReportGenerator \u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB <a class="header-anchor" href="#net-\u5185\u306E-nuget-\u30C4\u30FC\u30EB\u3066\u3099-reportgenerator-\u30CF\u309A\u30C3\u30B1\u30FC\u30B7\u3099\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB" aria-hidden="true">#</a></h4><ul><li><code>dotnet tool</code> \u30B3\u30DE\u30F3\u30C9\u516C\u5F0F: <a href="https://docs.microsoft.com/ja/dotnet/core/tools/dotnet-tool-install" target="_blank" rel="noreferrer">https://docs.microsoft.com/ja/dotnet/core/tools/dotnet-tool-install</a></li><li>\u30C1\u30E5\u30FC\u30C8\u30EA\u30A2\u30EB: .NET CLI \u3092\u4F7F\u3063\u3066 .NET \u30ED\u30FC\u30AB\u30EB \u30C4\u30FC\u30EB\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u3066\u4F7F\u7528\u3059\u308B\uFF1A<a href="https://docs.microsoft.com/ja/dotnet/core/tools/local-tools-how-to-use" target="_blank" rel="noreferrer">https://docs.microsoft.com/ja/dotnet/core/tools/local-tools-how-to-use</a></li></ul><p>\u203B \u30B0\u30ED\u30FC\u30D0\u30EB\u3067\u306E\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u306F\u6BD4\u8F03\u7684\u306B\u7C21\u5358\u3067\u3001\u305D\u3046\u3057\u305F\u3044\u4EBA\u306F ReportGenerator \u306E\u516C\u5F0F\u5009\u5EAB <a href="https://github.com/danielpalme/ReportGenerator#install-the-package-matching-your-platform-and-needs" target="_blank" rel="noreferrer">Getting started</a> \u3092\u3054\u81EA\u5206\u3067\u53C2\u7167\u3057\u3066\u304F\u3060\u3055\u3044</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># Dotnet \u30ED\u30FC\u30AB\u30EB\uFF08\u73FE\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\uFF09\u30C4\u30FC\u30EB\u30EA\u30B9\u30C8\u30D5\u30A1\u30A4\u30EB\u3092\u4F5C\u6210</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet new tool-manifest</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u30ED\u30FC\u30AB\u30EB\u4E0B\u3067 ReportGenerator \u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB</span></span>
<span class="line"><span style="color:#676E95;"># \u305D\u306E\u5F8C\u306F\u73FE\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3067 .config \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u53CA\u3073 dotnet-tools.json \u30D5\u30A1\u30A4\u30EB\u3092\u751F\u6210\u3059\u308B</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet tool install dotnet-reportgenerator-globaltool</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;"># \u30ED\u30FC\u30AB\u30EB\u306B\u30D1\u30C3\u30B1\u30FC\u30B8\u3092\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB</span></span>
<span class="line"><span style="color:#676E95;"># &lt;Command&gt; \u306F \`gotnet tool list\` \u53C8\u306F .config/dotnet-tools.json \u3067\u78BA\u8A8D\u3067\u304D\u308B</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet tool run </span><span style="color:#89DDFF;">&lt;</span><span style="color:#A6ACCD;">Command</span><span style="color:#89DDFF;">&gt;</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h4 id="\u5831\u544A\u3092\u4F5C\u6210" tabindex="-1">\u5831\u544A\u3092\u4F5C\u6210 <a class="header-anchor" href="#\u5831\u544A\u3092\u4F5C\u6210" aria-hidden="true">#</a></h4><p>\u203B \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306F\u81EA\u5206\u3067\u5B9A\u7FA9\u3067\u304D\u308B</p><ol><li><p><code>./TestResults/&lt;Hash&gt;/</code> \u5185\u306E coverage.cobertura.xml \u30D5\u30A1\u30A4\u30EB\u3092 <code>./TestResults</code> \u306B\u5165\u308C\u308B</p></li><li><p>ReportGenerator \u3092\u5B9F\u884C\u3059\u308B</p><div class="language-shell line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki"><code><span class="line"><span style="color:#676E95;"># \u30B0\u30ED\u30FC\u30D0\u30EB\u306B\u30A4\u30F3\u30B9\u30C8\u30FC\u30EB\u3057\u305F\u5834\u5408\u306F\u547D\u4EE4\u306E\u524D\u306B \`dotnet tool run\` \u3092\u4ED8\u3051\u308B\u5FC5\u8981\u306F\u306A\u3044</span></span>
<span class="line"><span style="color:#A6ACCD;">dotnet tool run reportgenerator </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">-reports:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./TestResults/coverage.cobertura.xml</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#A6ACCD;">-targetdir:</span><span style="color:#89DDFF;">&quot;</span><span style="color:#C3E88D;">./TestResults/coveragereport</span><span style="color:#89DDFF;">&quot;</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">\`</span></span>
<span class="line"><span style="color:#C3E88D;">-reporttypes:Html</span></span>
<span class="line"></span></code></pre><div class="line-numbers-wrapper"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div></li><li><p>coveragereport/index.html \u3092\u958B\u3044\u3066\u5831\u544A\u3092\u78BA\u8A8D\u3059\u308B</p></li></ol>`,37),p=[t];function o(r,c,i,d,u,y){return a(),n("div",null,p)}const D=s(l,[["render",o]]);export{C as __pageData,D as default};