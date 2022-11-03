import{r as e,o as t,c as o,a as n,b as p,F as c,d as s,e as l}from"./app.31e768e6.js";import{_ as u}from"./plugin-vue_export-helper.21dcd24c.js";const r={},i=n("h1",{id:"golang-study",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#golang-study","aria-hidden":"true"},"#"),s(" Golang Study")],-1),k=n("h2",{id:"\u6559\u7A0B\u5730\u5740",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u6559\u7A0B\u5730\u5740","aria-hidden":"true"},"#"),s(" \u6559\u7A0B\u5730\u5740")],-1),b={href:"https://www.bilibili.com/video/BV1fD4y1m7TD",target:"_blank",rel:"noopener noreferrer"},m=s("Go\u8BED\u8A00\u7F16\u7A0B\u5FEB\u901F\u5165\u95E8\uFF08Golang\uFF09\uFF08\u5B8C\u7ED3\uFF09"),d=n("h2",{id:"\u8FDC\u7A0B\u4ED3\u5E93",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u8FDC\u7A0B\u4ED3\u5E93","aria-hidden":"true"},"#"),s(" \u8FDC\u7A0B\u4ED3\u5E93")],-1),g={href:"https://github.com/SetsuikiHyoryu/go_study",target:"_blank",rel:"noopener noreferrer"},h=s("https://github.com/SetsuikiHyoryu/go_study"),f=n("h2",{id:"\u73AF\u5883\u642D\u5EFA",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u73AF\u5883\u642D\u5EFA","aria-hidden":"true"},"#"),s(" \u73AF\u5883\u642D\u5EFA")],-1),v=n("h3",{id:"\u5B98\u7F51",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#\u5B98\u7F51","aria-hidden":"true"},"#"),s(" \u5B98\u7F51")],-1),q=s("\u5883\u5916\uFF1A"),w={href:"https://go.dev/",target:"_blank",rel:"noopener noreferrer"},y=s("https://go.dev/"),x=s("\u5883\u5185\uFF1A"),S={href:"https://golang.google.cn",target:"_blank",rel:"noopener noreferrer"},P=s("https://golang.google.cn"),_=l(`<p>\u203B \u6CE8\u610F\u9700\u8981\u914D\u7F6E GOPATH</p><h3 id="vscode" tabindex="-1"><a class="header-anchor" href="#vscode" aria-hidden="true">#</a> VSCode</h3><ol><li>\u5B89\u88C5 <code>golang.go</code> \u63D2\u4EF6</li><li>\u6267\u884C <code>&gt;go install/update Tools</code> \u547D\u4EE4 <ul><li>\u5B89\u88C5\u76EE\u5F55\u4E3A <code>GOPATH</code></li></ul></li></ol><h4 id="\u5B9A\u5236\u5BF9-go-\u540E\u7F00\u6587\u4EF6\u7684\u64CD\u4F5C" tabindex="-1"><a class="header-anchor" href="#\u5B9A\u5236\u5BF9-go-\u540E\u7F00\u6587\u4EF6\u7684\u64CD\u4F5C" aria-hidden="true">#</a> \u5B9A\u5236\u5BF9 go \u540E\u7F00\u6587\u4EF6\u7684\u64CD\u4F5C</h4><div class="language-json ext-json line-numbers-mode"><pre class="language-json"><code><span class="token property">&quot;[go]&quot;</span><span class="token operator">:</span> <span class="token punctuation">{</span>
  <span class="token comment">// \u4E0D\u5C06\u5236\u8868\u7B26\u8F6C\u6362\u4E3A\u7A7A\u683C</span>
  <span class="token property">&quot;editor.insertSpaces&quot;</span><span class="token operator">:</span> <span class="token boolean">false</span><span class="token punctuation">,</span>
  <span class="token comment">// \u5236\u8868\u7B26\u6240\u5360\u5927\u5C0F\u4E3A 4 \u4E2A\u7A7A\u683C\u7684\u5BBD\u5EA6</span>
  <span class="token property">&quot;editor.tabSize&quot;</span><span class="token operator">:</span> <span class="token number">4</span><span class="token punctuation">,</span>
  <span class="token comment">// \u8BBE\u7F6E\u9ED8\u8BA4\u7684\u683C\u5F0F\u5316\u5DE5\u5177\u4E3A goloang.go</span>
  <span class="token property">&quot;editor.defaultFormatter&quot;</span><span class="token operator">:</span> <span class="token string">&quot;golang.go&quot;</span><span class="token punctuation">,</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h2 id="\u521B\u5EFA-go-\u6587\u4EF6" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-go-\u6587\u4EF6" aria-hidden="true">#</a> \u521B\u5EFA go \u6587\u4EF6</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u5185\u5BB9</th></tr></thead><tbody><tr><td>\u540E\u7F00</td><td>go</td></tr><tr><td>\u7F16\u8BD1\u5E76\u8FD0\u884C</td><td>go run &lt;filename&gt;</td></tr></tbody></table><h2 id="package-function" tabindex="-1"><a class="header-anchor" href="#package-function" aria-hidden="true">#</a> package &amp; function</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// main.go</span>

<span class="token comment">// \u58F0\u660E\u4EE3\u7801\u6240\u5728\u7684\u5305</span>
<span class="token keyword">package</span> main

<span class="token comment">// \u6307\u660E\u4EE3\u7801\u6240\u9700\u7684\u5305</span>
<span class="token keyword">import</span> <span class="token punctuation">(</span>
  <span class="token string">&quot;fmt&quot;</span> <span class="token comment">// \u5305\u4E2D\u5305\u542B\u5F88\u591A\u51FD\u6570</span>
<span class="token punctuation">)</span>

<span class="token comment">// main \u51FD\u6570\u662F go \u8BED\u8A00\u7684\u5165\u53E3\u51FD\u6570\uFF0C\u5982\u679C\u4E0D\u5B9A\u4E49\u5C31\u4F1A\u62A5\u9519</span>
<span class="token comment">// \u5DE6\u5927\u62EC\u53F7\u5FC5\u987B\u548C func \u5728\u540C\u4E00\u884C\uFF0C\u5426\u5219\u62A5\u9519</span>
<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;Hello World!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><h2 id="\u683C\u5F0F\u5316\u6253\u5370" tabindex="-1"><a class="header-anchor" href="#\u683C\u5F0F\u5316\u6253\u5370" aria-hidden="true">#</a> \u683C\u5F0F\u5316\u6253\u5370</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u4F7F\u7528 \`fmt.Printf\`\uFF0C\u7B2C\u4E00\u4E2A\u53C2\u6570\u5FC5\u987B\u662F\u5B57\u7B26\u4E32\u3002</span>
    <span class="token comment">// \u63A5\u53D7\u5982 \`%v\` \u7684\u683C\u5F0F\u5316\u52A8\u8BCD\uFF0C\u5B83\u7684\u503C\u5C06\u7531\u7B2C\u4E8C\u4E2A\u53C2\u6570\u66FF\u6362\u3002</span>
    <span class="token comment">// \u4F20\u5165\u590D\u6570\u683C\u5F0F\u5316\u52A8\u8BCD\u65F6\uFF0C\u503C\u5C06\u7531\u540E\u7EED\u53C2\u6570\u6309\u987A\u5E8F\u66FF\u6362\u3002</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v&#39;s height is %vcm\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;shamare&quot;</span><span class="token punctuation">,</span> <span class="token number">138</span><span class="token punctuation">)</span>
    
    <span class="token comment">// \u524D\u7F6E\u6570\u5B57\u53EF\u4EE5\u5411\u5DE6\u53F3\u586B\u5145\u7A7A\u683C\u4EE5\u81EA\u52A8\u5BF9\u9F50\uFF0C\u8D1F\u53F3\u6B63\u5DE6\u3002</span>
    <span class="token comment">// \u6587\u5B57\u8D85\u51FA\u6307\u5B9A\u6570\u586B\u5145\u6570\u65F6\u5C06\u4E0D\u586B\u5145\u4E00\u90E8\u5206\u3002</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-10v $%4vcm\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;shamare&quot;</span><span class="token punctuation">,</span> <span class="token number">138</span><span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%-10v $%4vcm\\n&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;sora&quot;</span><span class="token punctuation">,</span> <span class="token number">155</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run main<span class="token punctuation">.</span>go
shamare&#39;s height is 138cm
shamare    $ 138cm
sora       $ 155cm
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h2 id="\u58F0\u660E\u53D8\u91CF" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u53D8\u91CF" aria-hidden="true">#</a> \u58F0\u660E\u53D8\u91CF</h2><table><thead><tr><th>\u540D\u79F0</th><th>\u5173\u952E\u5B57</th><th>\u8BF4\u660E</th></tr></thead><tbody><tr><td>\u5E38\u91CF</td><td>const</td><td>\u503C\u4E0D\u53EF\u6539\u53D8</td></tr><tr><td>\u53D8\u91CF</td><td>var</td><td>\u503C\u53EF\u6539\u53D8</td></tr><tr><td>\u53D8\u91CF\u77ED\u58F0\u660E</td><td>:=</td><td>\u4E0D\u53EF\u4EE5\u7528\u6765\u5B9A\u4E49\u5168\u5C40\u53D8\u91CF</td></tr></tbody></table><h3 id="\u590D\u6570\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u590D\u6570\u58F0\u660E" aria-hidden="true">#</a> \u590D\u6570\u58F0\u660E</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>


<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span>  <span class="token punctuation">{</span>
    <span class="token comment">// \u590D\u6570\u58F0\u660E\u7684\u65B9\u5F0F</span>
    <span class="token keyword">var</span><span class="token punctuation">(</span>
        shamare <span class="token operator">=</span> <span class="token string">&quot;shamare&quot;</span>
        shamareHeight <span class="token operator">=</span> <span class="token number">138</span>
    <span class="token punctuation">)</span>
    
    <span class="token comment">// \u65B9\u5F0F\u4E8C</span>
    <span class="token keyword">var</span> suzuran<span class="token punctuation">,</span> suzuranHeight <span class="token operator">=</span> <span class="token string">&quot;suzuran&quot;</span><span class="token punctuation">,</span> <span class="token number">137</span>
    
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shamare<span class="token punctuation">,</span> shamareHeight<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>suzuran<span class="token punctuation">,</span> suzuranHeight<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="\u5FAA\u73AF\u4E0E\u5206\u652F" tabindex="-1"><a class="header-anchor" href="#\u5FAA\u73AF\u4E0E\u5206\u652F" aria-hidden="true">#</a> \u5FAA\u73AF\u4E0E\u5206\u652F</h2><ul><li>\u6761\u4EF6\u4E0D\u9700\u8981\u62EC\u53F7</li><li>\u7A7A\u5B57\u7B26\u4E32\u4E0D\u53EF\u4F5C\u4E3A\u5224\u65AD\u6761\u4EF6</li><li><code>switch</code> \u548C <code>if</code> \u7684\u6761\u4EF6\u6240\u7528\u5230\u7684\u53D8\u91CF\u53EF\u4EE5\u5728\u5224\u65AD\u8BED\u53E5\u4E2D\u58F0\u660E <ul><li>\u4EC5\u53EF\u4F7F\u7528 <code>:=</code> \u7684\u5F62\u5F0F</li></ul></li></ul><h3 id="strings-contains" tabindex="-1"><a class="header-anchor" href="#strings-contains" aria-hidden="true">#</a> strings.Contains</h3><p>\u5224\u65AD\u53C2\u6570\u4E00\u7684\u5B57\u7B26\u4E32\u4E2D\u662F\u5426\u5305\u542B\u53C2\u6570\u4E8C\u7684\u5B57\u7B26\u4E32</p><h3 id="switch" tabindex="-1"><a class="header-anchor" href="#switch" aria-hidden="true">#</a> switch</h3><ul><li><code>switch</code> \u7684 <code>case</code> \u53EF\u4EE5\u586B\u590D\u6570\u503C\uFF0C\u7528 <code>,</code> \u5206\u9694</li><li><code>case</code> \u4E0D\u7528\u76F8\u5BF9\u4E8E <code>switch</code> \u7F29\u8FDB</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token keyword">var</span> operator <span class="token operator">=</span> <span class="token string">&quot;shamare&quot;</span>
    
    <span class="token keyword">switch</span> operator <span class="token punctuation">{</span>
    <span class="token keyword">case</span> <span class="token string">&quot;sora&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;sora is a bunny.&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">&quot;shamare&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;shamare is a fox.&quot;</span><span class="token punctuation">)</span>
        <span class="token comment">// \u4F7F\u7528\u6B64\u5173\u952E\u5B57\u53EF\u6267\u884C\u4E0B\u4E00 case \u4E2D\u7684\u4EE3\u7801</span>
        <span class="token keyword">fallthrough</span>
    <span class="token keyword">case</span> <span class="token string">&quot;suzuran&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;suzuran is a fox.&quot;</span><span class="token punctuation">)</span>
    <span class="token keyword">case</span> <span class="token string">&quot;rope&quot;</span><span class="token punctuation">:</span>
        fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;rope is a bunny.&quot;</span><span class="token punctuation">)</span>
    <span class="token punctuation">}</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run <span class="token keyword">switch</span><span class="token punctuation">.</span>go
shamare is a fox<span class="token punctuation">.</span>
suzuran is a fox<span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="for" tabindex="-1"><a class="header-anchor" href="#for" aria-hidden="true">#</a> for</h3><ul><li>for \u4E4B\u540E\u4E0D\u8DDF\u6761\u4EF6\u5373\u4E3A\u65E0\u9650\u5FAA\u73AF</li><li>\u53EF\u4EE5\u7528 <code>break</code> \u624B\u52A8\u8DF3\u51FA\u5FAA\u73AF</li><li>\u53EA\u5199\u4E00\u4E2A\u5F0F\u5B50\u9ED8\u8BA4\u4E3A\u662F\u7B2C\u4E8C\u533A\u57DF\u7684\u5F0F\u5B50</li></ul><h2 id="\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B" aria-hidden="true">#</a> \u7C7B\u578B</h2><h3 id="\u5B9E\u6570" tabindex="-1"><a class="header-anchor" href="#\u5B9E\u6570" aria-hidden="true">#</a> \u5B9E\u6570</h3><h4 id="\u6D6E\u70B9\u6570" tabindex="-1"><a class="header-anchor" href="#\u6D6E\u70B9\u6570" aria-hidden="true">#</a> \u6D6E\u70B9\u6570</h4><ul><li>\u6D6E\u70B9\u578B\u9ED8\u8BA4\u4E3A <code>float64</code></li><li>32 \u4E3A\u5355\u7CBE\u5EA6\uFF084 \u5B57\u8282\uFF09\uFF1B64 \u4E3A\u53CC\u7CBE\u5EA6\uFF088 \u5B57\u8282\uFF09 <ul><li>\u5904\u7406\u8BF8\u5982 3D \u6E38\u620F\u4E2D\u7684\u5927\u91CF\u6570\u636E\u65F6\uFF0C\u53EF\u4EE5\u727A\u7272\u7CBE\u5EA6\u8282\u7701\u5185\u5B58</li></ul></li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
    <span class="token string">&quot;fmt&quot;</span>
    <span class="token string">&quot;math&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// \u6D6E\u70B9\u578B\u683C\u5F0F\u5316\u52A8\u8BCD</span>
    floatSample <span class="token operator">:=</span> <span class="token number">1.0</span> <span class="token operator">/</span> <span class="token number">3</span>
    
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;v: %v\\n&quot;</span><span class="token punctuation">,</span> floatSample<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;f: %f\\n&quot;</span><span class="token punctuation">,</span> floatSample<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;.3f: %.3f\\n&quot;</span><span class="token punctuation">,</span> floatSample<span class="token punctuation">)</span>

    <span class="token comment">// \u5BBD\u5EA6.\u7CBE\u5EA6\u3002\u6B64\u5904\u610F\u4E3A\u5BBD\u5EA6 4\uFF0C\u7CBE\u5EA6\u4E3A\u4FDD\u7559 2 \u4F4D</span>
    <span class="token comment">// \u5BBD\u5EA6\u5927\u4E8E\u6570\u5B57\u957F\u5EA6\u65F6\uFF0C\u5DE6\u8FB9\u586B\u5145\u7A7A\u683C\uFF1B\u4E0D\u6307\u5B9A\u5BBD\u5EA6\u65F6\uFF0C\u6309\u5B9E\u9645\u957F\u5EA6\u663E\u793A</span>
    <span class="token comment">// \u5982\u679C\u8981\u586B\u5145\u96F6\uFF0C\u53EF\u4EE5\u5199\u4F5C \`%04.2f\`</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;4.2f: %4.2f\\n&quot;</span><span class="token punctuation">,</span> floatSample<span class="token punctuation">)</span>
    
    <span class="token comment">// \u6BD4\u8F83\u6D6E\u70B9\u578B</span>
    piggyBank <span class="token operator">:=</span> <span class="token number">0.1</span>
    piggyBank <span class="token operator">+=</span> <span class="token number">0.2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>piggyBank <span class="token operator">==</span> <span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token comment">// false</span>
    <span class="token comment">// \u6B63\u786E\u6BD4\u8F83\u65B9\u5F0F</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>math<span class="token punctuation">.</span><span class="token function">Abs</span><span class="token punctuation">(</span>piggyBank<span class="token operator">-</span><span class="token number">0.3</span><span class="token punctuation">)</span> <span class="token operator">&lt;</span> <span class="token number">0.0001</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run realNumber<span class="token punctuation">.</span>go 
v: 0<span class="token punctuation">.</span>3333333333333333
f: 0<span class="token punctuation">.</span>333333
<span class="token punctuation">.</span>3f: 0<span class="token punctuation">.</span>333
4<span class="token punctuation">.</span>2f: 0<span class="token punctuation">.</span>33
false
true
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h4 id="\u6574\u6570" tabindex="-1"><a class="header-anchor" href="#\u6574\u6570" aria-hidden="true">#</a> \u6574\u6570</h4><h5 id="\u5341\u79CD\u6574\u6570\u7C7B\u578B-\u672C\u8D28\u662F\u516B\u79CD" tabindex="-1"><a class="header-anchor" href="#\u5341\u79CD\u6574\u6570\u7C7B\u578B-\u672C\u8D28\u662F\u516B\u79CD" aria-hidden="true">#</a> \u5341\u79CD\u6574\u6570\u7C7B\u578B\uFF08\u672C\u8D28\u662F\u516B\u79CD\uFF09</h5><table><thead><tr><th>Type</th><th>Range</th><th>Storage</th></tr></thead><tbody><tr><td>int8</td><td>-128 - 127</td><td>8-bit(one byte)</td></tr><tr><td>uint8</td><td>0 - 255</td><td>8-bit(one byte)</td></tr><tr><td>int16</td><td>-32,768 - 32767</td><td>16-bit(two bytes)</td></tr><tr><td>uint16</td><td>0 - 65535</td><td>16-bit(two bytes)</td></tr><tr><td>int32</td><td>-2,147,483,648 - 2147,483,647</td><td>32-bit(four bytes)</td></tr><tr><td>uint32</td><td>0 - 4,294,967,295</td><td>32-bit(four bytes)</td></tr><tr><td>int64</td><td>-9,223,372,036,854,775,808 - 9,223,372,036,854,775,807</td><td>64-bit(eight bytes)</td></tr><tr><td>uint64</td><td>0 - 18,446,644,073,709,551,615</td><td>64-bit(eight bytes)</td></tr></tbody></table><p>\u203B int, uint \u5728\u8001\u7684\u79FB\u52A8\u8BBE\u5907\u4E0A\u662F 32 \u4F4D\uFF0C\u5728\u65B0\u7684\u8BA1\u7B97\u673A\u4E0A\u662F 64 \u4F4D\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
    <span class="token comment">// int \u4E94\u79CD\u6709\u8D1F\u6570\u7684\u6574\u6570\u4E4B\u4E00</span>
	year <span class="token operator">:=</span> <span class="token number">2022</span>
    <span class="token comment">// uint \u4E94\u79CD\u6CA1\u6709\u8D1F\u6570\u7684\u6574\u6570\u4E4B\u4E00</span>
	<span class="token keyword">var</span> month <span class="token builtin">uint</span> <span class="token operator">=</span> <span class="token number">2</span>
    <span class="token comment">// %T \u53EF\u4EE5\u6253\u5370\u6570\u636E\u7C7B\u578B</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T \u5E74 %T \u6708\\n&quot;</span><span class="token punctuation">,</span> year<span class="token punctuation">,</span> month<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%d \u5E74 %d \u6708\\n&quot;</span><span class="token punctuation">,</span> year<span class="token punctuation">,</span> month<span class="token punctuation">)</span>
    
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;===&quot;</span><span class="token punctuation">)</span>
    
    <span class="token comment">// \u4F7F\u7528 uint8 \u8868\u793A\u989C\u8272</span>
    <span class="token keyword">var</span> red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue <span class="token builtin">uint8</span> <span class="token operator">=</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">141</span><span class="token punctuation">,</span> <span class="token number">213</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>red<span class="token punctuation">,</span> green<span class="token punctuation">,</span> blue<span class="token punctuation">)</span>
    <span class="token comment">// \u5341\u516D\u8FDB\u5236\u8868\u793A\u6CD5</span>
    <span class="token keyword">var</span> red16<span class="token punctuation">,</span> green16<span class="token punctuation">,</span> blue16 <span class="token builtin">uint8</span> <span class="token operator">=</span> <span class="token number">0x00</span><span class="token punctuation">,</span> <span class="token number">0x8d</span><span class="token punctuation">,</span> <span class="token number">0xd5</span>
    <span class="token comment">// \u7528 0 \u586B\u5145\uFF0C\u6700\u5C0F\u5BBD\u5EA6\u4E3A 2</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;color: #%02x%02x%02x\\n&quot;</span><span class="token punctuation">,</span> red16<span class="token punctuation">,</span> green16<span class="token punctuation">,</span> blue16<span class="token punctuation">)</span>
    
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;===&quot;</span><span class="token punctuation">)</span>
    
    <span class="token comment">// \u6574\u6570\u73AF\u7ED5\uFF08\u6700\u5927\u503C\u65F6\u8FDB\u4F4D\u65F6\u8D85\u51FA\u5185\u5B58\uFF0C\u6240\u4EE5\u53D8\u4E3A\u4E86 0\uFF09</span>
    <span class="token keyword">var</span> number <span class="token builtin">uint8</span> <span class="token operator">=</span> <span class="token number">255</span>
    number<span class="token operator">++</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>number<span class="token punctuation">)</span>
    
    <span class="token keyword">var</span> number02 <span class="token builtin">int8</span> <span class="token operator">=</span> <span class="token number">127</span>
    <span class="token comment">// %b \u6253\u5370 bit</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%08b: &quot;</span><span class="token punctuation">,</span> number02<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>number02<span class="token punctuation">)</span>
    number02<span class="token operator">++</span>
    fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%08b: &quot;</span><span class="token punctuation">,</span> number02<span class="token punctuation">)</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>number02<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run integer<span class="token punctuation">.</span>go
int \u5E74 uint \u6708
2022 \u5E74 2 \u6708
===
0 141 213
color: <span class="token comment">#008dd5</span>
===
0
01111111: 127
<span class="token operator">-</span>10000000: <span class="token operator">-</span>128
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><h5 id="big" tabindex="-1"><a class="header-anchor" href="#big" aria-hidden="true">#</a> big</h5><ul><li>\u4F7F\u7528 big.Int \u8FDB\u884C\u8FD0\u7B97\u65F6\uFF0C\u7B49\u5F0F\u4E2D\u7684\u5176\u4ED6\u90E8\u5206\u90FD\u5FC5\u987B\u662F big.Int</li><li><code>NewInt()</code> \u51FD\u6570\u53EF\u4EE5\u628A <code>int64</code> \u8F6C\u5316\u4E3A <code>big.Int</code> \u7C7B\u578B</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math/big&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u6307\u6570\u7684\u503C\u5982\u679C\u4E0D\u4E3B\u52A8\u58F0\u660E\u7C7B\u578B\u5219\u7C7B\u578B\u4E3A float64</span>
	<span class="token keyword">var</span> distance <span class="token operator">=</span> <span class="token number">24e18</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>distance<span class="token punctuation">)</span>

	<span class="token comment">// \u4F7F\u7528 big \u5305</span>
	distance02 <span class="token operator">:=</span> <span class="token function">new</span><span class="token punctuation">(</span>big<span class="token punctuation">.</span>Int<span class="token punctuation">)</span>
	distance02<span class="token punctuation">.</span><span class="token function">SetString</span><span class="token punctuation">(</span><span class="token string">&quot;24000000000000000000&quot;</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>distance02<span class="token punctuation">)</span>

	<span class="token comment">// \u5E38\u91CF\u53EF\u4EE5\u65E0\u7C7B\u578B\uFF08untype\uFF09</span>
	<span class="token keyword">const</span> distance03 <span class="token operator">=</span> <span class="token number">24000000000000000000000000</span>
	<span class="token comment">// \u7A0B\u5E8F\u4E2D\u7684\u6BCF\u4E2A\u5B57\u9762\u503C\u90FD\u662F\u5E38\u91CF</span>
	<span class="token comment">// \u9488\u5BF9\u5B57\u9762\u503C\u7684\u5E38\u91CF\u7684\u8BA1\u7B97\u5728\u7F16\u8BD1\u9636\u6BB5\u5373\u5B8C\u6210</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token number">24000000000000000000000000</span> <span class="token operator">/</span> <span class="token number">299792</span> <span class="token operator">/</span> <span class="token number">86400</span><span class="token punctuation">)</span>

<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run bigPackage<span class="token punctuation">.</span>go 
2<span class="token punctuation">.</span>4e+19
24000000000000000000
926568346646267
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u591A\u8BED\u8A00\u6587\u672C" tabindex="-1"><a class="header-anchor" href="#\u591A\u8BED\u8A00\u6587\u672C" aria-hidden="true">#</a> \u591A\u8BED\u8A00\u6587\u672C</h3><ul><li>\u5B57\u7B26\u4E32\u5B57\u9762\u503C\uFF1A<code>&quot;\\n&quot;</code>\uFF0C\u5373\u53EF\u4EE5\u5305\u542B\u8F6C\u4E49\u3002</li><li>\u539F\u59CB\u5B57\u7B26\u4E32\u5B57\u9762\u503C\uFF1A\`\\n\`</li></ul><table><thead><tr><th>\u540D\u79F0</th><th>\u542B\u4E49</th></tr></thead><tbody><tr><td>\u5B57\u7B26</td><td>\u6BD4\u5982 65 \u4EE3\u8868 A \u5B57\u7B26</td></tr><tr><td>code point</td><td>Unicode \u8054\u76DF\u4E3A\u8D85\u8FC7 100 \u4E07\u4E2A\u5B57\u7B26\u5206\u914D\u4E86\u76F8\u5E94\u7684\u6570\u503C\uFF0C\u8FD9\u4E2A\u6570\u53EB\u4F5C code point</td></tr><tr><td>rune</td><td>\u4E3A\u4E86\u8868\u793A unicode code point\uFF0Cgo \u8BED\u8A00\u63D0\u4F9B\u7684 int32 \u7684\u7C7B\u578B\u522B\u540D</td></tr><tr><td>byte</td><td>uint8 \u7684\u7C7B\u578B\u522B\u540D\uFF0C\u76EE\u7684\u662F\u7528\u4E8E\u4E8C\u8FDB\u5236\u6570</td></tr></tbody></table><h4 id="\u7C7B\u578B\u522B\u540D" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u578B\u522B\u540D" aria-hidden="true">#</a> \u7C7B\u578B\u522B\u540D</h4><p><code>type byte = uint8</code></p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u4EFB\u4F55\u6574\u6570\u7C7B\u578B\u90FD\u53EF\u4EE5\u4F7F\u7528 \`%c\` \u6253\u5370\u5B57\u7B26\uFF0C\u4F46\u662F \`rune\` \u53EF\u4EE5\u6307\u660E\u8BE5\u6570\u503C\u662F\u7528\u6765\u8868\u793A\u4E00\u4E2A\u5B57\u7B26</span>
	<span class="token keyword">var</span> pi <span class="token builtin">rune</span> <span class="token operator">=</span> <span class="token number">960</span>
	<span class="token keyword">var</span> alpha <span class="token builtin">rune</span> <span class="token operator">=</span> <span class="token number">940</span>
	<span class="token keyword">var</span> omega <span class="token builtin">rune</span> <span class="token operator">=</span> <span class="token number">969</span>
	<span class="token keyword">var</span> bang <span class="token builtin">byte</span> <span class="token operator">=</span> <span class="token number">33</span>

	<span class="token comment">// \u6253\u5370\u51FA\u7684\u662F code point</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v %v %v %v\\n&quot;</span><span class="token punctuation">,</span> pi<span class="token punctuation">,</span> alpha<span class="token punctuation">,</span> omega<span class="token punctuation">,</span> bang<span class="token punctuation">)</span>
	<span class="token comment">// \u6253\u5370\u51FA\u7684\u662F\u5B57\u7B26</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%c %c %c %c\\n&quot;</span><span class="token punctuation">,</span> pi<span class="token punctuation">,</span> alpha<span class="token punctuation">,</span> omega<span class="token punctuation">,</span> bang<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run main<span class="token punctuation">.</span>go
960 940 969 33
\u03C0 \u03AC \u03C9 <span class="token operator">!</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h4 id="\u5B57\u7B26" tabindex="-1"><a class="header-anchor" href="#\u5B57\u7B26" aria-hidden="true">#</a> \u5B57\u7B26</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u5B57\u7B26\u5B57\u9762\u503C\u4F7F\u7528 \`&#39;&#39;\` \u5305\u88CF</span>
	<span class="token comment">// \u4E0D\u6307\u5B9A\u7C7B\u578B\u7684\u8BDD\u4F1A\u88AB\u63A8\u65AD\u4E3A rune</span>
	grade <span class="token operator">:=</span> <span class="token char">&#39;A&#39;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;grade: %T %v %c&quot;</span><span class="token punctuation">,</span> grade<span class="token punctuation">,</span> grade<span class="token punctuation">,</span> grade<span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run rune<span class="token punctuation">.</span>go
grade: int32 65 A
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="string" tabindex="-1"><a class="header-anchor" href="#string" aria-hidden="true">#</a> string</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;unicode/utf8&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	operator <span class="token operator">:=</span> <span class="token string">&quot;\u5DEB\u604B&quot;</span>

	<span class="token comment">// len \u8F93\u51FA\u5B57\u8282\u6570\u800C\u4E0D\u662F\u5B57\u7B26\u6570</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">len</span><span class="token punctuation">(</span>operator<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;bytes&quot;</span><span class="token punctuation">)</span>
	<span class="token comment">// utf8 \u7684\u5305\u5E26\u6709\u8F93\u51FA\u5B57\u7B26\u6570\u7684\u65B9\u6CD5</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>utf8<span class="token punctuation">.</span><span class="token function">RuneCountInString</span><span class="token punctuation">(</span>operator<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token string">&quot;runes&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// DecodeRundeInString \u8FD4\u56DE\u5B57\u7B26\u4E32\u4E2D\u7684\u7B2C\u4E00\u4E2A\u5B57\u7B26\u548C\u5B83\u7684\u5B57\u8282\u6570</span>
	runeItem<span class="token punctuation">,</span> size <span class="token operator">:=</span> utf8<span class="token punctuation">.</span><span class="token function">DecodeRuneInString</span><span class="token punctuation">(</span>operator<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;first rune: %c, %v bytes\\n&quot;</span><span class="token punctuation">,</span> runeItem<span class="token punctuation">,</span> size<span class="token punctuation">)</span>

	<span class="token function">println</span><span class="token punctuation">(</span><span class="token string">&quot;===&quot;</span><span class="token punctuation">)</span>

	<span class="token comment">// range \u8FD4\u56DE\u7684 index \u662F\u4EE5\u6839\u636E\u5B57\u8282\u6570\u8BA1\u7B97\u7684</span>
	<span class="token keyword">for</span> index<span class="token punctuation">,</span> item <span class="token operator">:=</span> <span class="token keyword">range</span> operator <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> item<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v, %c\\n&quot;</span><span class="token punctuation">,</span> index<span class="token punctuation">,</span> item<span class="token punctuation">)</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;===&quot;</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run string<span class="token punctuation">.</span>go
6 bytes
2 runes
first rune: \u5DEB<span class="token punctuation">,</span> 3 bytes
===
0 24043
0<span class="token punctuation">,</span> \u5DEB
===
3 24651
3<span class="token punctuation">,</span> \u604B
===
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br></div></div><h3 id="\u7C7B\u5F62\u8F6C\u6362" tabindex="-1"><a class="header-anchor" href="#\u7C7B\u5F62\u8F6C\u6362" aria-hidden="true">#</a> \u7C7B\u5F62\u8F6C\u6362</h3><ul><li>\u65E0\u7B26\u53F7\u4E0E\u6709\u7B26\u53F7\u7684\u6574\u6570\u578B\u4E4B\u95F4\u4E5F\u9700\u8981\u8F6C\u6362\u3002</li><li>\u4E0D\u540C\u5927\u5C0F\u7684\u6574\u6570\u578B\u4E4B\u95F4\u4E5F\u9700\u8981\u8F6C\u6362\u3002</li><li>\u5C06\u6574\u6570\u578B\u8F6C\u5316\u4E3A\u5B57\u7B26\u4E32\u578B\u65F6\uFF0C\u5982\u679C\u5B83\u7684\u503C\u4E0D\u80FD\u8F6C\u5316\u4E3A code point\uFF0C\u867D\u7136\u4E0D\u4F1A\u62A5\u9519\uFF0C\u4F46\u4F1A\u8F38\u51FA\u4E71\u7801\u3002</li><li>\u6574\u6570\u578B\u4E0E\u5E03\u5C14\u578B\uFF0C\u5B57\u7B26\u4E32\u578B\u4E0E\u5E03\u5C14\u578B\u4E4B\u95F4\u65E0\u6CD5\u4E92\u76F8\u8F6C\u6362</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;math&quot;</span>
	<span class="token string">&quot;strconv&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	description <span class="token operator">:=</span> <span class="token string">&quot;Shamare is&quot;</span> <span class="token operator">+</span> <span class="token string">&quot;138cm&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>description<span class="token punctuation">)</span>
	<span class="token comment">// \u76F4\u63A5\u8FDE\u63A5\u5B57\u7B26\u4E32\u4E0E\u6570\u503C\u4F1A\u62A5\u9519</span>
	<span class="token comment">// description02 := &quot;Shamare is &quot; + 138 + &quot;cm&quot;</span>

	<span class="token comment">// \u6574\u6570\u578B\u4E0E\u6D6E\u70B9\u578B\u4E5F\u4E0D\u80FD\u6DF7\u5408\u4F7F\u7528</span>
	pi <span class="token operator">:=</span> math<span class="token punctuation">.</span>Pi
	times <span class="token operator">:=</span> <span class="token number">2</span>
	<span class="token comment">// \u62A5\u9519</span>
	<span class="token comment">// fmt.Println(pi * times)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>pi<span class="token punctuation">,</span> times<span class="token punctuation">)</span>

	<span class="token comment">// \u7C7B\u5F62\u8F6C\u6362\u4F7F\u7528\u76EE\u6807\u7C7B\u578B\u53BB\u5305\u88CF</span>
	<span class="token comment">// \u4ECE\u6D6E\u70B9\u578B\u8F6C\u6362\u4E3A\u6574\u6570\u578B\u65F6\uFF0C\u5C0F\u6570\u70B9\u4E4B\u540E\u7684\u90E8\u5206\u4F1A\u88AB\u622A\u65AD\u800C\u4E0D\u662F\u820D\u5165</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">int</span><span class="token punctuation">(</span>pi<span class="token punctuation">)</span><span class="token punctuation">)</span>

	<span class="token comment">// rune, bype \u53EF\u4EE5\u8F6C\u6362\u6210 string\uFF0C\u8F93\u51FA\u7ED3\u679C\u4E3A\u8BE5\u503C\u5BF9\u5E94\u7684\u5B57\u7B26</span>
	<span class="token keyword">var</span> piItme <span class="token builtin">rune</span> <span class="token operator">=</span> <span class="token number">960</span>
	<span class="token keyword">var</span> bang <span class="token builtin">byte</span> <span class="token operator">=</span> <span class="token number">33</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>piItme<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">string</span><span class="token punctuation">(</span>bang<span class="token punctuation">)</span><span class="token punctuation">)</span>
	<span class="token comment">// \u5982\u679C\u9700\u8981\u76F4\u63A5\u8F93\u51FA\u5B57\u7B26\u4E32\u578B\u7684\u6570\u5B57\uFF0C\u9700\u8981\u4F7F\u7528 strconv \u5305\u7684 Itoa \u51FD\u6570</span>
	<span class="token comment">// Itoa: Integer to ASCII</span>
	description02 <span class="token operator">:=</span> <span class="token string">&quot;Shamare is &quot;</span> <span class="token operator">+</span> strconv<span class="token punctuation">.</span><span class="token function">Itoa</span><span class="token punctuation">(</span><span class="token number">138</span><span class="token punctuation">)</span> <span class="token operator">+</span> <span class="token string">&quot;cm&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>description02<span class="token punctuation">)</span>

	<span class="token comment">// strconv \u5305\u4E2D\u4EA6\u6709 Atoi \u51FD\u6570\uFF0C\u4F46\u9700\u8981\u9519\u8BEF\u5904\u7406</span>
	text<span class="token punctuation">,</span> exception <span class="token operator">:=</span> strconv<span class="token punctuation">.</span><span class="token function">Atoi</span><span class="token punctuation">(</span><span class="token string">&quot;10&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> exception <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>exception<span class="token punctuation">.</span><span class="token function">Error</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run typeChange<span class="token punctuation">.</span>go 
Shamare is138cm
3<span class="token punctuation">.</span>141592653589793 2
3
\u03C0 <span class="token operator">!</span>
Shamare is 138cm
10
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u58F0\u660E\u65B0\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u65B0\u7C7B\u578B" aria-hidden="true">#</a> \u58F0\u660E\u65B0\u7C7B\u578B</h3><ul><li>\u53EF\u4EE5\u4F7F\u7528 <code>type</code> \u5173\u952E\u5B57\u6765\u58F0\u660E\u7C7B\u578B\u3002</li><li>\u81EA\u5B9A\u4E49\u7C7B\u578B\u53EF\u4EE5\u63D0\u9AD8\u4EE3\u7801\u53EF\u8BFB\u6027\u3002</li></ul><h2 id="\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#\u51FD\u6570" aria-hidden="true">#</a> \u51FD\u6570</h2><ul><li>\u5927\u5199\u5B57\u6BCD\u5F00\u5934\u7684\u51FD\u6570\u3001\u53D8\u91CF\u6216\u5176\u4ED6\u6807\u8BC6\u7B26\u88AB\u88AB\u5BFC\u51FA\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">)</span>
	<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \`...\` \u8868\u793A\u51FD\u6570\u7684\u53C2\u6570\u53EF\u53D8\uFF1B\`interface{}\` \u4E3A\u7A7A\u63A5\u53E3\uFF0C\u6240\u6709\u7C7B\u578B\u5747\u53EF\u5B9E\u73B0</span>
<span class="token keyword">func</span> <span class="token function">sleep</span><span class="token punctuation">(</span>nameList <span class="token operator">...</span><span class="token keyword">interface</span><span class="token punctuation">{</span><span class="token punctuation">}</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	length <span class="token operator">:=</span> <span class="token function">len</span><span class="token punctuation">(</span>nameList<span class="token punctuation">)</span>
	<span class="token keyword">var</span> name <span class="token builtin">string</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> length<span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		name <span class="token operator">+=</span> nameList<span class="token punctuation">[</span>i<span class="token punctuation">]</span><span class="token punctuation">.</span><span class="token punctuation">(</span><span class="token builtin">string</span><span class="token punctuation">)</span>

		<span class="token keyword">if</span> i <span class="token operator">!=</span> length<span class="token operator">-</span><span class="token number">1</span> <span class="token punctuation">{</span>
			name <span class="token operator">+=</span> <span class="token string">&quot;, &quot;</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span>

	beVerb <span class="token operator">:=</span> <span class="token string">&quot;is&quot;</span>

	<span class="token keyword">if</span> length <span class="token operator">&gt;</span> <span class="token number">1</span> <span class="token punctuation">{</span>
		beVerb <span class="token operator">=</span> <span class="token string">&quot;are&quot;</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v %v sleeping in my arms.\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">,</span> beVerb<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run parameterChangeableFunction<span class="token punctuation">.</span>go 
Shamare is sleeping in my arms<span class="token punctuation">.</span>
Shamare<span class="token punctuation">,</span> Suzuran are sleeping in my arms<span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u65B9\u6CD5" tabindex="-1"><a class="header-anchor" href="#\u65B9\u6CD5" aria-hidden="true">#</a> \u65B9\u6CD5</h3><ul><li>\u51FD\u6570\u662F\u72EC\u7ACB\u5B58\u5728\u7684\u3002</li><li>\u65B9\u6CD5\u662F\u6307\u4E0E\u7C7B\u578B\u76F8\u5173\u8054\u7684\u51FD\u6570\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token comment">// \u5B9A\u4E49\u7C7B\u578B</span>
<span class="token keyword">type</span> operator <span class="token builtin">string</span>

<span class="token comment">// \u5C06\u65B9\u6CD5\u5173\u8054\u5230\u7C7B\u578B</span>
<span class="token keyword">func</span> <span class="token punctuation">(</span>loli operator<span class="token punctuation">)</span> <span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v is sleeping in my arms.\\n&quot;</span><span class="token punctuation">,</span> loli<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> loli operator <span class="token operator">=</span> <span class="token string">&quot;Shamare&quot;</span>
	<span class="token comment">// \u4F7F\u7528\u5173\u8054\u540E\u7684\u65B9\u6CD5</span>
	loli<span class="token punctuation">.</span><span class="token function">sleep</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run method<span class="token punctuation">.</span>go 
Shamare is sleeping in my arms<span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u58F0\u660E\u51FD\u6570\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u51FD\u6570\u7C7B\u578B" aria-hidden="true">#</a> \u58F0\u660E\u51FD\u6570\u7C7B\u578B</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">var</span> sleep sleep <span class="token operator">=</span> <span class="token keyword">func</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v is sleeping in my arms.\\n&quot;</span><span class="token punctuation">,</span> name<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">sleep</span><span class="token punctuation">(</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u58F0\u660E\u51FD\u6570\u7C7B\u578B</span>
<span class="token keyword">type</span> sleep <span class="token keyword">func</span><span class="token punctuation">(</span>name <span class="token builtin">string</span><span class="token punctuation">)</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run functionType<span class="token punctuation">.</span>go 
Shamare is sleeping in my arms<span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u95ED\u5305" tabindex="-1"><a class="header-anchor" href="#\u95ED\u5305" aria-hidden="true">#</a> \u95ED\u5305</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	count <span class="token operator">:=</span> <span class="token number">0</span>

	visitCount <span class="token operator">:=</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> count
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">visitCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 0</span>

	count<span class="token operator">++</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">visitCount</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span> <span class="token comment">// 1</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run closure<span class="token punctuation">.</span>go 
0
1
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4" aria-hidden="true">#</a> \u6570\u7EC4</h2><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u4E00\u4E2A\u957F\u5EA6\u4E3A 8 \u7684\u5B57\u7B26\u4E32\u7C7B\u578B\u6570\u7EC4</span>
<span class="token keyword">var</span> planets <span class="token punctuation">[</span><span class="token number">8</span><span class="token punctuation">]</span><span class="token builtin">string</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u4F7F\u7528\u590D\u5408\u5B57\u9762\u503C\u521D\u59CB\u5316\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528\u590D\u5408\u5B57\u9762\u503C\u521D\u59CB\u5316\u6570\u7EC4" aria-hidden="true">#</a> \u4F7F\u7528\u590D\u5408\u5B57\u9762\u503C\u521D\u59CB\u5316\u6570\u7EC4</h3><ul><li>\u590D\u5408\u5B57\u9762\u503C\u662F\u4E00\u79CD\u7ED9\u590D\u5408\u7C7B\u578B\u521D\u59CB\u5316\u7684\u7D27\u51D1\u8BED\u6CD5\u3002</li><li>\u4EC5\u7528\u4E00\u6B65\u5373\u53EF\u5B8C\u6210\u6570\u7EC4\u58F0\u660E\u548C\u6570\u7EC4\u521D\u59CB\u5316\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u4F7F\u7528 \`...\` \u4F5C\u4E3A\u957F\u5EA6\u53EF\u4EE5\u8BA9\u7F16\u8BD1\u5668\u81EA\u52A8\u7B97\u51FA\u957F\u5EA6</span>
operators <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;April&quot;</span><span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u904D\u5386\u6570\u7EC4" tabindex="-1"><a class="header-anchor" href="#\u904D\u5386\u6570\u7EC4" aria-hidden="true">#</a> \u904D\u5386\u6570\u7EC4</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	operators <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;April&quot;</span><span class="token punctuation">}</span>

	<span class="token comment">// \u4E5F\u53EF\u4EE5\u4F7F\u7528\u4F20\u7EDF\u7684\u4E09\u6BB5\u5F0F</span>
	<span class="token keyword">for</span> index<span class="token punctuation">,</span> operator <span class="token operator">:=</span> <span class="token keyword">range</span> operators <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>index<span class="token punctuation">,</span> operator<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run iterate<span class="token punctuation">.</span>go
0 Shamare
1 Suzuran
2 April
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u6570\u7EC4\u7684\u590D\u5236" tabindex="-1"><a class="header-anchor" href="#\u6570\u7EC4\u7684\u590D\u5236" aria-hidden="true">#</a> \u6570\u7EC4\u7684\u590D\u5236</h3><p>\u6570\u7EC4\u7684\u8D4B\u503C\u4E0E\u4F20\u503C\u4F1A\u751F\u6210\u4E00\u4E2A\u65B0\u7684\u526F\u672C\uFF0C\u800C\u4E0D\u662F\u4F20\u9012\u4E00\u4E2A\u5F15\u7528\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	operators <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;April&quot;</span><span class="token punctuation">}</span>
	operators02 <span class="token operator">:=</span> operators

	operators<span class="token punctuation">[</span><span class="token number">2</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token string">&quot;Rope&quot;</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>operators<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>operators02<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run <span class="token function">copy</span><span class="token punctuation">.</span>go 
<span class="token namespace">[Shamare Suzuran Rope]</span>
<span class="token namespace">[Shamare Suzuran April]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247" aria-hidden="true">#</a> \u5207\u7247</h2><ul><li>\u5207\u7247\u662F\u6307\u5411\u6570\u7EC4\u7684\u7A97\u53E3</li><li>\u53EF\u4EE5\u5207\u5206\u5B57\u7B26\u4E32 <ul><li>\u5207\u5206\u5B57\u8282\u6570\u800C\u4E0D\u662F\u7B26\u6587</li></ul></li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>operators <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">string</span>
<span class="token comment">// \u8FD9\u5C31\u662F\u4E00\u4E2A\u5207\u7247\uFF0C\u5B83\u8868\u793A\u4E86\u6570\u7EC4\u4E2D\u524D 2 \u4E2A\u5143\u7D20</span>
<span class="token comment">// \u7D22\u5F15\u4E0D\u53EF\u4EE5\u4E3A\u8D1F\u6570</span>
operators<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="\u5FFD\u7565\u7D22\u5F15" tabindex="-1"><a class="header-anchor" href="#\u5FFD\u7565\u7D22\u5F15" aria-hidden="true">#</a> \u5FFD\u7565\u7D22\u5F15</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>operators <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token number">3</span><span class="token punctuation">]</span><span class="token builtin">string</span>

<span class="token comment">// \u5FFD\u7565\u8D77\u59CB\u8868\u793A\u4ECE\u6570\u7EC4\u7684\u8D77\u59CB\u4F4D\u7F6E\u5207\u5206</span>
ignoreStart <span class="token operator">:=</span> operators<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">]</span>
<span class="token comment">// \u5FFD\u7565\u7ED3\u901F\u8868\u793A\u4EE5\u6570\u7EC4\u7684\u957F\u5EA6\u4E3A\u7ED3\u675F\u4F4D\u7F6E</span>
ignoreEnd <span class="token operator">:=</span> operators<span class="token punctuation">[</span><span class="token number">1</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
<span class="token comment">// \u540C\u65F6\u7701\u7565\u4E8C\u8005\u8868\u793A\u5305\u542B\u6570\u7EC4\u7684\u6240\u6709\u5143\u7D20</span>
ignoreDouble <span class="token operator">:=</span> operator<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br></div></div><h3 id="\u5207\u7247\u7684\u590D\u5408\u5B57\u9762\u503C" tabindex="-1"><a class="header-anchor" href="#\u5207\u7247\u7684\u590D\u5408\u5B57\u9762\u503C" aria-hidden="true">#</a> \u5207\u7247\u7684\u590D\u5408\u5B57\u9762\u503C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	operators <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">}</span>
	operatorsSlice <span class="token operator">:=</span> operators<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token punctuation">]</span>

	operatorsSlice2 <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>operatorsSlice<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>operatorsSlice2<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%T %T\\n&quot;</span><span class="token punctuation">,</span> operators<span class="token punctuation">,</span> operatorsSlice2<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run literal<span class="token punctuation">.</span>go 
<span class="token namespace">[Shamare Suzuran]</span>
<span class="token namespace">[Shamare Suzuran]</span>
<span class="token punctuation">[</span>2<span class="token punctuation">]</span>string <span class="token punctuation">[</span><span class="token punctuation">]</span>string
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><h3 id="append-\u51FD\u6570" tabindex="-1"><a class="header-anchor" href="#append-\u51FD\u6570" aria-hidden="true">#</a> append \u51FD\u6570</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	operators <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">}</span>
	operators <span class="token operator">=</span> <span class="token function">append</span><span class="token punctuation">(</span>operators<span class="token punctuation">,</span> <span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>operators<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run append<span class="token punctuation">.</span>go
<span class="token namespace">[Suzuran Shamare]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5BB9\u91CF" tabindex="-1"><a class="header-anchor" href="#\u5BB9\u91CF" aria-hidden="true">#</a> \u5BB9\u91CF</h3><p>\u5BB9\u91CF\u5C31\u662F\u5207\u7247\u6240\u5BF9\u5E94\u7684\u5E95\u5C42\u6570\u7EC4\u7684\u957F\u5EA6</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	operators <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">}</span>
	<span class="token function">dump</span><span class="token punctuation">(</span><span class="token string">&quot;operators&quot;</span><span class="token punctuation">,</span> operators<span class="token punctuation">)</span>
	<span class="token function">dump</span><span class="token punctuation">(</span><span class="token string">&quot;operators[:1]&quot;</span><span class="token punctuation">,</span> operators<span class="token punctuation">[</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">]</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">dump</span><span class="token punctuation">(</span>label <span class="token builtin">string</span><span class="token punctuation">,</span> slice <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v: length %v, capacity %v\\n&quot;</span><span class="token punctuation">,</span> label<span class="token punctuation">,</span> <span class="token function">len</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">,</span> <span class="token function">cap</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>slice<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run capacity<span class="token punctuation">.</span>go 
operators: length 2<span class="token punctuation">,</span> capacity 2
<span class="token namespace">[Shamare Suzuran]</span>
operators<span class="token punctuation">[</span>:1<span class="token punctuation">]</span>: length 1<span class="token punctuation">,</span> capacity 2
<span class="token namespace">[Shamare]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h4 id="\u9650\u5236\u65B0\u5EFA\u5207\u7247\u5BB9\u91CF" tabindex="-1"><a class="header-anchor" href="#\u9650\u5236\u65B0\u5EFA\u5207\u7247\u5BB9\u91CF" aria-hidden="true">#</a> \u9650\u5236\u65B0\u5EFA\u5207\u7247\u5BB9\u91CF</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>operators <span class="token operator">:=</span> <span class="token punctuation">[</span><span class="token operator">...</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> <span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">}</span>
<span class="token comment">// \u6BCF\u6B21\u589E\u52A0\u5BB9\u91CF\u65F6\u53EA\u4F1A\u589E\u52A0 1 \u4E2A\u5BB9\u91CF</span>
slice <span class="token operator">:=</span> operators<span class="token punctuation">[</span><span class="token number">0</span><span class="token punctuation">:</span><span class="token number">2</span><span class="token punctuation">:</span><span class="token number">1</span><span class="token punctuation">]</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u4F7F\u7528-make-\u51FD\u6570\u9884\u7F6E\u5207\u7247" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-make-\u51FD\u6570\u9884\u7F6E\u5207\u7247" aria-hidden="true">#</a> \u4F7F\u7528 make \u51FD\u6570\u9884\u7F6E\u5207\u7247</h3><p>\u53EF\u4EE5\u9632\u6B62\u591A\u4F59\u7684\u5185\u5B58\u6D88\u8017</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u957F\u5EA6\u4E3A 0\uFF0C\u5BB9\u91CF\u4E3A 10</span>
operators <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token number">0</span><span class="token punctuation">,</span> <span class="token number">10</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="map" tabindex="-1"><a class="header-anchor" href="#map" aria-hidden="true">#</a> map</h2><ul><li>map \u5728\u4F20\u9012\u65F6\u4E0D\u4F1A\u521B\u5EFA\u526F\u672C</li><li>\u9664\u975E\u4F7F\u7528\u590D\u5408\u5B57\u9762\u503C\u521D\u59CB\u5316 map\uFF0C\u5426\u5247\u5FC5\u987B\u4F7F\u7528 make \u51FD\u6570\u5206\u914D\u7A7A\u95F4\u3002</li></ul><h3 id="\u58F0\u660E-map" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E-map" aria-hidden="true">#</a> \u58F0\u660E map</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// map[key]value</span>
<span class="token comment">// \u53EF\u4EE5\u4F7F\u7528\u590D\u5408\u5B57\u9762\u503C\uFF0C\u5373\u76F4\u63A5\u52A0\u5927\u62EC\u53F7\u8D4B\u503C</span>
<span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h3 id="\u5411-map-\u8D4B\u503C" tabindex="-1"><a class="header-anchor" href="#\u5411-map-\u8D4B\u503C" aria-hidden="true">#</a> \u5411 map \u8D4B\u503C</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>height <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">{</span><span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">:</span> <span class="token number">138</span><span class="token punctuation">}</span>
height<span class="token punctuation">[</span><span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">]</span> <span class="token operator">=</span> <span class="token number">137</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u5224\u65AD\u503C\u662F\u5426\u5B58\u5728" tabindex="-1"><a class="header-anchor" href="#\u5224\u65AD\u503C\u662F\u5426\u5B58\u5728" aria-hidden="true">#</a> \u5224\u65AD\u503C\u662F\u5426\u5B58\u5728</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">if</span> operator<span class="token punctuation">,</span> exist <span class="token operator">:=</span> height<span class="token punctuation">[</span><span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">]</span><span class="token punctuation">;</span> exist <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;exist&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span> <span class="token keyword">else</span> <span class="token punctuation">{</span>
    fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token string">&quot;not exist&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5220\u9664-map-\u4E2D\u7684\u9879\u76EE" tabindex="-1"><a class="header-anchor" href="#\u5220\u9664-map-\u4E2D\u7684\u9879\u76EE" aria-hidden="true">#</a> \u5220\u9664 map \u4E2D\u7684\u9879\u76EE</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// delete(map, key)</span>
<span class="token function">delete</span><span class="token punctuation">(</span>height<span class="token punctuation">,</span> <span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u8BA1\u6570\u5668\u6848\u4F8B" tabindex="-1"><a class="header-anchor" href="#\u8BA1\u6570\u5668\u6848\u4F8B" aria-hidden="true">#</a> \u8BA1\u6570\u5668\u6848\u4F8B</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	supporter <span class="token operator">:=</span> <span class="token string">&quot;Supporter&quot;</span>
	medic <span class="token operator">:=</span> <span class="token string">&quot;Medic&quot;</span>

	operators <span class="token operator">:=</span> <span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">string</span><span class="token punctuation">{</span>
		<span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">:</span>    supporter<span class="token punctuation">,</span>
		<span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">:</span>    supporter<span class="token punctuation">,</span>
		<span class="token string">&quot;Honeyberry&quot;</span><span class="token punctuation">:</span> medic<span class="token punctuation">,</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u521B\u5EFA\u4E00\u4E2A\u8BA1\u6570\u5668</span>
	classCount <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">map</span><span class="token punctuation">[</span><span class="token builtin">string</span><span class="token punctuation">]</span><span class="token builtin">int</span><span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token boolean">_</span><span class="token punctuation">,</span> class <span class="token operator">:=</span> <span class="token keyword">range</span> operators <span class="token punctuation">{</span>
		<span class="token comment">// \u9047\u5230\u76F8\u540C\u7684 class \u5C31\u4F1A\u53E0\u52A0</span>
		classCount<span class="token punctuation">[</span>class<span class="token punctuation">]</span><span class="token operator">++</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u904D\u5386\u8BA1\u6570\u5668</span>
	<span class="token keyword">for</span> class<span class="token punctuation">,</span> number <span class="token operator">:=</span> <span class="token keyword">range</span> classCount <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%v: %v\\n&quot;</span><span class="token punctuation">,</span> class<span class="token punctuation">,</span> number<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>


</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run count<span class="token punctuation">.</span>go 
Medic: 1
Supporter: 2
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u7ED3\u6784\u7C7B\u578B" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u7C7B\u578B" aria-hidden="true">#</a> \u7ED3\u6784\u7C7B\u578B</h2><h3 id="\u58F0\u660E\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u58F0\u660E\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u58F0\u660E\u7ED3\u6784\u4F53</h3><p>\u7ED3\u6784\u4F53\u7684\u590D\u5236\u4F1A\u521B\u5EFA\u526F\u672C</p><h4 id="\u76F4\u63A5\u58F0\u660E\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u76F4\u63A5\u58F0\u660E\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u76F4\u63A5\u58F0\u660E\u7ED3\u6784\u4F53</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">var</span> shamare <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    height <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token comment">// \u53EF\u4EE5\u76F4\u63A5\u8D4B\u503C</span>
shamare<span class="token punctuation">.</span>name <span class="token operator">=</span> <span class="token string">&quot;Shamare&quot;</span>

<span class="token comment">// \u4F7F\u7528\u590D\u5408\u5B57\u9762\u503C\u58F0\u660E</span>
<span class="token keyword">var</span> suzuran <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name<span class="token punctuation">:</span> <span class="token string">&quot;Suzuran&quot;</span><span class="token punctuation">,</span>
    height<span class="token punctuation">:</span> <span class="token number">137</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br></div></div><h4 id="\u4EE5\u7C7B\u578B\u7684\u65B9\u5F0F\u58F0\u660E" tabindex="-1"><a class="header-anchor" href="#\u4EE5\u7C7B\u578B\u7684\u65B9\u5F0F\u58F0\u660E" aria-hidden="true">#</a> \u4EE5\u7C7B\u578B\u7684\u65B9\u5F0F\u58F0\u660E</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">type</span> operator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
    name <span class="token builtin">string</span>
    height <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">var</span> shamare operator
<span class="token keyword">var</span> suzuran operator
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br></div></div><h3 id="\u5C06\u7ED3\u6784\u4F53\u7F16\u7801\u4E3A-json" tabindex="-1"><a class="header-anchor" href="#\u5C06\u7ED3\u6784\u4F53\u7F16\u7801\u4E3A-json" aria-hidden="true">#</a> \u5C06\u7ED3\u6784\u4F53\u7F16\u7801\u4E3A JSON</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;encoding/json&quot;</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u8981\u8F6C\u6362\u6210 JSON \u65F6\u5C5E\u6027\u540D\u5FC5\u987B\u5927\u5199\uFF0C\u5426\u5219\u5C5E\u6027\u4E0D\u80FD\u5BFC\u51FA</span>
	<span class="token keyword">type</span> operator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u81EA\u5B9A\u4E49 JSON \u8F93\u51FA\u65F6\u7684\u683C\u5F0F</span>
		Name   <span class="token builtin">string</span> <span class="token string">\`json:&quot;name&quot;\`</span>
		Height <span class="token builtin">int</span>    <span class="token string">\`json:&quot;height&quot;\`</span>
	<span class="token punctuation">}</span>

	shamare <span class="token operator">:=</span> operator<span class="token punctuation">{</span>Name<span class="token punctuation">:</span> <span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> Height<span class="token punctuation">:</span> <span class="token number">138</span><span class="token punctuation">}</span>

	bytes<span class="token punctuation">,</span> exception <span class="token operator">:=</span> json<span class="token punctuation">.</span><span class="token function">Marshal</span><span class="token punctuation">(</span>shamare<span class="token punctuation">)</span>
	<span class="token function">handleError</span><span class="token punctuation">(</span>exception<span class="token punctuation">)</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shamare<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token function">string</span><span class="token punctuation">(</span>bytes<span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">handleError</span><span class="token punctuation">(</span>exception <span class="token builtin">error</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> exception <span class="token operator">==</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>exception<span class="token punctuation">)</span>
	<span class="token comment">// \u9000\u51FA\u7A0B\u5E8F</span>
	os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run toJSON<span class="token punctuation">.</span>go 
<span class="token punctuation">{</span>Shamare 138<span class="token punctuation">}</span>
<span class="token punctuation">[</span>123 34 78 97 109 101 34 58 34 83 104 97 109 97 114 101 34 44 34 72 101 105 103 
104 116 34 58 49 51 56 125<span class="token punctuation">]</span>
<span class="token punctuation">{</span><span class="token string">&quot;name&quot;</span>:<span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span><span class="token string">&quot;height&quot;</span>:138<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u5173\u8054\u65B9\u6CD5\u81F3\u7ED3\u6784\u4F53" tabindex="-1"><a class="header-anchor" href="#\u5173\u8054\u65B9\u6CD5\u81F3\u7ED3\u6784\u4F53" aria-hidden="true">#</a> \u5173\u8054\u65B9\u6CD5\u81F3\u7ED3\u6784\u4F53</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	shamare <span class="token operator">:=</span> operator<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">138</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shamare<span class="token punctuation">.</span><span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> operator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name   <span class="token builtin">string</span>
	height <span class="token builtin">int</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>unit operator<span class="token punctuation">)</span> <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token builtin">int</span> <span class="token punctuation">{</span>
	<span class="token keyword">return</span> unit<span class="token punctuation">.</span>height
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run structWithMethod<span class="token punctuation">.</span>go
138
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="\u7ED3\u6784\u4F53\u7684\u5D4C\u5165-embedded" tabindex="-1"><a class="header-anchor" href="#\u7ED3\u6784\u4F53\u7684\u5D4C\u5165-embedded" aria-hidden="true">#</a> \u7ED3\u6784\u4F53\u7684\u5D4C\u5165\uFF08embedded\uFF09</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	shamare <span class="token operator">:=</span> operator<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">,</span> height<span class="token punctuation">:</span> <span class="token number">138</span><span class="token punctuation">}</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shamare<span class="token punctuation">.</span><span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>shamare<span class="token punctuation">.</span>height<span class="token punctuation">.</span><span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> operator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	name
	height
<span class="token punctuation">}</span>

<span class="token keyword">type</span> name <span class="token builtin">string</span>
<span class="token keyword">type</span> height <span class="token builtin">int</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>_height height<span class="token punctuation">)</span> <span class="token function">getHeight</span><span class="token punctuation">(</span><span class="token punctuation">)</span> height <span class="token punctuation">{</span>
	<span class="token keyword">return</span> _height
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run embedded<span class="token punctuation">.</span>go 
138
138
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br></div></div><h2 id="\u63A5\u53E3" tabindex="-1"><a class="header-anchor" href="#\u63A5\u53E3" aria-hidden="true">#</a> \u63A5\u53E3</h2><ul><li>go \u8BED\u8A00\u4E2D\u4E0D\u9700\u8981\u663E\u793A\u58F0\u660E\u63A5\u53E3\u3002</li><li>\u547D\u540D\u89C4\u8303\u4E3A\u7ED3\u5C3E\u52A0 <code>er</code>\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	shamare <span class="token operator">:=</span> operator<span class="token punctuation">{</span>name<span class="token punctuation">:</span> <span class="token string">&quot;Shamare&quot;</span><span class="token punctuation">}</span>
	<span class="token comment">// \u56E0\u4E3A\u6784\u9020\u4F53\u4E2D\u7684\u5B57\u6BB5\u5B9E\u73B0\u4E86 operatorer \u63A5\u53E3\uFF0C\u6240\u4EE5\u6784\u9020\u4F53\u7684\u5B9E\u4F8B\u4E5F\u5C31\u5B9E\u73B0\u4E86\u63A5\u53E3</span>
	<span class="token function">printName</span><span class="token punctuation">(</span>shamare<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> operatorer <span class="token keyword">interface</span> <span class="token punctuation">{</span>
	<span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> name
<span class="token punctuation">}</span>

<span class="token comment">// \u9700\u8981\u4F20\u5165\u5B9E\u73B0\u4E86\u63A5\u53E3\u7684\u53C2\u6570</span>
<span class="token keyword">func</span> <span class="token function">printName</span><span class="token punctuation">(</span>unit operatorer<span class="token punctuation">)</span> <span class="token punctuation">{</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>unit<span class="token punctuation">.</span><span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> operator <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u4F7F\u7528\u5D4C\u5165\u7684\u65B9\u5F0F\u5B9A\u4E49\u6784\u9020\u4F53</span>
	name
<span class="token punctuation">}</span>

<span class="token keyword">type</span> name <span class="token builtin">string</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>_name name<span class="token punctuation">)</span> <span class="token function">getName</span><span class="token punctuation">(</span><span class="token punctuation">)</span> name <span class="token punctuation">{</span>
	<span class="token keyword">return</span> _name
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run main<span class="token punctuation">.</span>go 
Shamare
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u6307\u9488-pointer" tabindex="-1"><a class="header-anchor" href="#\u6307\u9488-pointer" aria-hidden="true">#</a> \u6307\u9488\uFF08pointer\uFF09</h2><ul><li><code>&amp;</code> \u662F\u5730\u5740\u64CD\u4F5C\u7B26\uFF0C\u901A\u8FC7 <code>&amp;</code> \u53EF\u4EE5\u83B7\u53D6\u53D8\u91CF\u7684\u5185\u5B58\u5730\u5740\u3002 <ul><li>\u65E0\u6CD5\u83B7\u5F97\u5B57\u7B26\u4E32\u3001\u6570\u503C\u3001\u5E03\u5C14\u503C\u7684\u5B57\u9762\u503C\u7684\u5730\u5740\u3002</li></ul></li><li><code>*</code> \u53EF\u4EE5\u89E3\u5F15\u7528\uFF0C\u63D0\u4F9B\u5185\u5B58\u5730\u5740\u6307\u5411\u7684\u503C\u3002 <ul><li>\u653E\u5728\u7C7B\u578B\u524D\u8868\u793A\u58F0\u660E\u6307\u9488\u7C7B\u578B\u3002</li></ul></li><li>go \u4E2D\u4E0D\u5141\u8BB8\u6307\u9488\u8FD0\u7B97\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	operator <span class="token operator">:=</span> <span class="token string">&quot;Shamare&quot;</span>
	name <span class="token operator">:=</span> <span class="token operator">&amp;</span>operator
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>name<span class="token punctuation">)</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span><span class="token operator">*</span>name<span class="token punctuation">)</span>

	<span class="token comment">// \u89E3\u5F15\u7528\u4E5F\u53EF\u4EE5\u76F4\u63A5\u66F4\u6539\u6240\u5F15\u7528\u7684\u5730\u5740\u4E2D\u7684\u503C</span>
	<span class="token operator">*</span>name <span class="token operator">=</span> <span class="token string">&quot;Suzuran&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>operator<span class="token punctuation">)</span>

	<span class="token keyword">type</span> class <span class="token keyword">struct</span> <span class="token punctuation">{</span>
		typeName <span class="token builtin">string</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \`&amp;\` \u53EF\u4EE5\u76F4\u63A5\u7528\u5728\u590D\u5408\u5B57\u9762\u91CF\u4E4B\u524D</span>
	_class <span class="token operator">:=</span> <span class="token operator">&amp;</span>class<span class="token punctuation">{</span>typeName<span class="token punctuation">:</span> <span class="token string">&quot;Supporter&quot;</span><span class="token punctuation">}</span>
	<span class="token comment">// \u8BBF\u95EE\u5B57\u6BB5\u548C\u6570\u7EC4\u65F6\uFF0C\u89E3\u5F15\u7528\u4E0D\u662F\u5FC5\u987B\u7684</span>
	_class<span class="token punctuation">.</span>typeName <span class="token operator">=</span> <span class="token string">&quot;medic&quot;</span>
	fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;%+v\\n&quot;</span><span class="token punctuation">,</span> _class<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run main<span class="token punctuation">.</span>go 
0xc00006a250
Shamare
Suzuran
&amp;<span class="token punctuation">{</span>typeName:medic<span class="token punctuation">}</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br></div></div><h3 id="\u9690\u5F0F\u6307\u9488" tabindex="-1"><a class="header-anchor" href="#\u9690\u5F0F\u6307\u9488" aria-hidden="true">#</a> \u9690\u5F0F\u6307\u9488</h3><ul><li>map \u5728\u88AB\u8D4B\u503C\u6216\u4F20\u9012\u65F6\u4E0D\u521B\u5EFA\u526F\u672C\u3002</li><li>slice \u5728\u6307\u5411\u6570\u7EC4\u5143\u7D20\u65F6\u4E5F\u4F7F\u7528\u4E86\u6307\u9488\u3002</li></ul><h2 id="\u9519\u8BEF\u5904\u7406" tabindex="-1"><a class="header-anchor" href="#\u9519\u8BEF\u5904\u7406" aria-hidden="true">#</a> \u9519\u8BEF\u5904\u7406</h2><ul><li>\u51FD\u6570\u5728\u8FD4\u56DE\u9519\u8BEF\u65F6\uFF0C\u6700\u540E\u7684\u4E00\u4E2A\u8FD4\u56DE\u503C\u5E94\u7528\u6765\u8868\u793A\u9519\u8BEF\u3002</li><li>\u8C03\u7528\u51FD\u6570\u540E\uFF0C\u5E94\u7ACB\u5373\u68C0\u67E5\u662F\u5426\u53D1\u751F\u9519\u8BEF\u3002 <ul><li>\u5982\u679C\u6CA1\u6709\u9519\u8BEF\u53D1\u751F\uFF0C\u5E94\u8FD4\u56DE\u503C\u4E3A <code>nil</code> \u7684\u9519\u8BEF\u3002</li></ul></li><li>\u5B9E\u73B0 <code>error</code> \u63A5\u53E3\u4E2D\u7684 <code>Error()</code> \u65B9\u6CD5\u5C31\u53EF\u4EE5\u81EA\u5B9A\u4E49\u9519\u8BEF\u7C7B\u578B\u3002 <ul><li>\u81EA\u5B9A\u4E49\u9519\u8BEF\u7684\u540D\u5B57\u5E94\u8BE5\u4EE5 <code>Error</code> \u7ED3\u5C3E\u3002</li></ul></li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;io&quot;</span>
	<span class="token string">&quot;os&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	exception <span class="token operator">:=</span> <span class="token function">writeFile</span><span class="token punctuation">(</span><span class="token string">&quot;shamare&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> exception <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>exception<span class="token punctuation">)</span>
		os<span class="token punctuation">.</span><span class="token function">Exit</span><span class="token punctuation">(</span><span class="token number">1</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">type</span> safeWriter <span class="token keyword">struct</span> <span class="token punctuation">{</span>
	write     io<span class="token punctuation">.</span>Writer
	exception <span class="token builtin">error</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token punctuation">(</span>_safeWriter safeWriter<span class="token punctuation">)</span> <span class="token function">writeln</span><span class="token punctuation">(</span>text <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">if</span> _safeWriter<span class="token punctuation">.</span>exception <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u6BCF\u6B21\u9519\u8BEF\u53D1\u751F\u65F6\u66F4\u65B0\u7ED3\u6784\u4F53\u4E2D\u7684\u9519\u8BEF</span>
	<span class="token boolean">_</span><span class="token punctuation">,</span> _safeWriter<span class="token punctuation">.</span>exception <span class="token operator">=</span> fmt<span class="token punctuation">.</span><span class="token function">Fprintln</span><span class="token punctuation">(</span>_safeWriter<span class="token punctuation">.</span>write<span class="token punctuation">,</span> text<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">writeFile</span><span class="token punctuation">(</span>fileName <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token builtin">error</span> <span class="token punctuation">{</span>
	file<span class="token punctuation">,</span> exception <span class="token operator">:=</span> os<span class="token punctuation">.</span><span class="token function">Create</span><span class="token punctuation">(</span>fileName<span class="token punctuation">)</span>
	<span class="token comment">// \u4F7F\u7528 defer \u5173\u952E\u5B57\uFF0C\u53EF\u4EE5\u786E\u4FDD deferred \u7684\u52A8\u4F5C\u5728\u51FD\u6570\u8FD4\u56DE\u524D\u6267\u884C\u3002</span>
	<span class="token comment">// \u5373\u4E0D\u7528\u6BCF\u4E2A\u8FD4\u56DE\u6587\u524D\u90FD\u6DFB\u52A0\u76F8\u540C\u7684\u64CD\u4F5C\u3002</span>
	<span class="token keyword">defer</span> file<span class="token punctuation">.</span><span class="token function">Close</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token keyword">if</span> exception <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
		<span class="token keyword">return</span> exception
	<span class="token punctuation">}</span>

	_safeWriter <span class="token operator">:=</span> safeWriter<span class="token punctuation">{</span>write<span class="token punctuation">:</span> file<span class="token punctuation">}</span>
	_safeWriter<span class="token punctuation">.</span><span class="token function">writeln</span><span class="token punctuation">(</span><span class="token string">&quot;Shamare is a supporter.&quot;</span><span class="token punctuation">)</span>
	_safeWriter<span class="token punctuation">.</span><span class="token function">writeln</span><span class="token punctuation">(</span><span class="token string">&quot;Suzuran is a supporter too.&quot;</span><span class="token punctuation">)</span>

	<span class="token keyword">return</span> _safeWriter<span class="token punctuation">.</span>exception
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br></div></div><h3 id="\u5176\u4ED6\u8BED\u8A00\u4E2D\u7684\u5F02\u5E38\u4E0E-go-\u7684\u9519\u8BEF\u503C\u7684\u6BD4\u8F83" tabindex="-1"><a class="header-anchor" href="#\u5176\u4ED6\u8BED\u8A00\u4E2D\u7684\u5F02\u5E38\u4E0E-go-\u7684\u9519\u8BEF\u503C\u7684\u6BD4\u8F83" aria-hidden="true">#</a> \u5176\u4ED6\u8BED\u8A00\u4E2D\u7684\u5F02\u5E38\u4E0E go \u7684\u9519\u8BEF\u503C\u7684\u6BD4\u8F83</h3><ul><li>\u5176\u4ED6\u8BED\u8A00\u4E2D\u7684\u5F02\u5E38\u5982\u679C\u6CA1\u6709\u4EBA\u6355\u83B7\uFF0C\u4F1A\u4E00\u76F4\u5192\u6CE1\u76F4\u5230\u6808\u7684\u9876\u90E8\u3002\u6240\u4EE5\u9519\u8BEF\u5904\u7406\u672C\u8EAB\u662F\u53EF\u9009\u7684\u3002</li><li>go \u8BED\u8A00\u4E2D\u9664\u975E\u5F00\u53D1\u8005\u6709\u610F\u5FFD\u7565\uFF0C\u5426\u5219\u4E0D\u80FD\u4E0D\u5904\u7406\u9519\u8BEF\u3002</li></ul><h3 id="\u521B\u5EFA-panic" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA-panic" aria-hidden="true">#</a> \u521B\u5EFA panic</h3><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u53C2\u6570\u53EF\u4EE5\u662F\u4EFB\u610F\u7C7B\u578B</span>
<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;some text&quot;</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h4 id="\u4F7F\u7528-recover-\u4FDD\u8BC1\u53D1\u751F-panic-\u7A0B\u5E8F\u4E5F\u80FD\u6B63\u5E38\u8FD0\u884C\u7ED3\u675F" tabindex="-1"><a class="header-anchor" href="#\u4F7F\u7528-recover-\u4FDD\u8BC1\u53D1\u751F-panic-\u7A0B\u5E8F\u4E5F\u80FD\u6B63\u5E38\u8FD0\u884C\u7ED3\u675F" aria-hidden="true">#</a> \u4F7F\u7528 recover \u4FDD\u8BC1\u53D1\u751F panic \u7A0B\u5E8F\u4E5F\u80FD\u6B63\u5E38\u8FD0\u884C\u7ED3\u675F</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;fmt&quot;</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token comment">// \u88AB defer \u7684\u5185\u5BB9\u4F1A\u5728\u51FD\u6570\u8FD4\u56DE\u524D\u6267\u884C</span>
	<span class="token keyword">defer</span> <span class="token keyword">func</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
		_panic <span class="token operator">:=</span> <span class="token function">recover</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

		<span class="token keyword">if</span> _panic <span class="token operator">!=</span> <span class="token boolean">nil</span> <span class="token punctuation">{</span>
			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>_panic<span class="token punctuation">)</span>
		<span class="token punctuation">}</span>
	<span class="token punctuation">}</span><span class="token punctuation">(</span><span class="token punctuation">)</span>

	<span class="token function">panic</span><span class="token punctuation">(</span><span class="token string">&quot;panic happened!&quot;</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run recover<span class="token punctuation">.</span>go 
panic happened!
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="\u5E76\u53D1-concurrent-calculation" tabindex="-1"><a class="header-anchor" href="#\u5E76\u53D1-concurrent-calculation" aria-hidden="true">#</a> \u5E76\u53D1\uFF08Concurrent Calculation\uFF09</h2><h3 id="goroutine" tabindex="-1"><a class="header-anchor" href="#goroutine" aria-hidden="true">#</a> goroutine</h3><ul><li>go \u8BED\u8A00\u4E2D\uFF0C\u72EC\u7ACB\u7684\u4EFB\u52A1\u53EB\u4F5C goroutine\u3002</li><li>\u5728\u4EFB\u610F\u8C03\u7528\u524D\u4F7F\u7528 <code>go</code> \u5173\u952E\u5B57\u5373\u53EF\u542F\u7528 goroutine\u3002</li></ul><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">go</span> <span class="token function">shamareAttack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token function">suzuranAttack</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">shamareAttack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">2</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Shamare attacked.&quot;</span><span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">suzuranAttack</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>i<span class="token operator">+</span><span class="token number">1</span><span class="token punctuation">,</span> <span class="token string">&quot;Suzuran attacked.&quot;</span><span class="token punctuation">)</span>
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run main<span class="token punctuation">.</span>go 
1 Suzuran attacked<span class="token punctuation">.</span>
1 Shamare attacked<span class="token punctuation">.</span>
2 Shamare attacked<span class="token punctuation">.</span>
2 Suzuran attacked<span class="token punctuation">.</span>
3 Suzuran attacked<span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br></div></div><h3 id="\u901A\u9053" tabindex="-1"><a class="header-anchor" href="#\u901A\u9053" aria-hidden="true">#</a> \u901A\u9053</h3><ul><li>\u4F7F\u7528\u901A\u9053\u53EF\u4EE5\u5728\u591A\u4E2A goroutine \u4E4B\u95F4\u5B89\u5168\u5730\u4F20\u503C\u3002</li><li>\u5F80\u901A\u9053\u53D1\u9001\u6D88\u606F\u548C\u4ECE\u901A\u9053\u4E2D\u63A5\u6536\u6D88\u606F\u90FD\u4F1A\u963B\u585E\u4EE3\u7801\u7684\u8FD0\u884C\u3002</li></ul><h4 id="\u521B\u5EFA\u901A\u9053" tabindex="-1"><a class="header-anchor" href="#\u521B\u5EFA\u901A\u9053" aria-hidden="true">#</a> \u521B\u5EFA\u901A\u9053</h4><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code>_channel <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">int</span><span class="token punctuation">)</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token comment">// \u5411\u901A\u9053\u53D1\u9001\u503C</span>
_channel <span class="token operator">&lt;-</span> <span class="token number">99</span>
<span class="token comment">// \u4ECE\u901A\u9053\u63A5\u6536\u503C</span>
temp <span class="token operator">:=</span> <span class="token operator">&lt;-</span> _channel
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br></div></div><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token punctuation">(</span>
	<span class="token string">&quot;fmt&quot;</span>
	<span class="token string">&quot;time&quot;</span>
<span class="token punctuation">)</span>

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	channelShamare <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	channelSuzuran <span class="token operator">:=</span> <span class="token function">make</span><span class="token punctuation">(</span><span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span>
	<span class="token keyword">var</span> count <span class="token builtin">int</span>

	<span class="token keyword">go</span> <span class="token function">shamareAttack</span><span class="token punctuation">(</span>channelShamare<span class="token punctuation">)</span>
	<span class="token keyword">go</span> <span class="token function">suzuranAttack</span><span class="token punctuation">(</span>channelSuzuran<span class="token punctuation">)</span>

	<span class="token keyword">for</span> <span class="token punctuation">{</span>
		<span class="token comment">// \u4F7F\u7528 select \u6267\u884C\u672A\u88AB\u963B\u585E\u7684\u901A\u9053</span>
		<span class="token keyword">select</span> <span class="token punctuation">{</span>
		<span class="token keyword">case</span> text<span class="token punctuation">,</span> opening <span class="token operator">:=</span> <span class="token operator">&lt;-</span>channelShamare<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>opening <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>

			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
			count<span class="token operator">++</span>

		<span class="token keyword">case</span> text<span class="token punctuation">,</span> opening <span class="token operator">:=</span> <span class="token operator">&lt;-</span>channelSuzuran<span class="token punctuation">:</span>
			<span class="token keyword">if</span> <span class="token operator">!</span>opening <span class="token punctuation">{</span>
				<span class="token keyword">return</span>
			<span class="token punctuation">}</span>

			fmt<span class="token punctuation">.</span><span class="token function">Println</span><span class="token punctuation">(</span>text<span class="token punctuation">)</span>
			count<span class="token operator">++</span>
		<span class="token punctuation">}</span>

		fmt<span class="token punctuation">.</span><span class="token function">Printf</span><span class="token punctuation">(</span><span class="token string">&quot;Attaced %v times.\\n&quot;</span><span class="token punctuation">,</span> count<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">shamareAttack</span><span class="token punctuation">(</span>channel <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	text <span class="token operator">:=</span> <span class="token string">&quot;Shamare attacked.&quot;</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">3</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		channel <span class="token operator">&lt;-</span> text
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Second<span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token comment">// \u4F7F\u7528 close \u5173\u95ED\u901A\u9053\u4EE5\u907F\u514D\u963B\u585E\u6B7B\u9501</span>
	<span class="token function">close</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">func</span> <span class="token function">suzuranAttack</span><span class="token punctuation">(</span>channel <span class="token keyword">chan</span> <span class="token builtin">string</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	text <span class="token operator">:=</span> <span class="token string">&quot;Suzuran attacked.&quot;</span>

	<span class="token keyword">for</span> i <span class="token operator">:=</span> <span class="token number">0</span><span class="token punctuation">;</span> i <span class="token operator">&lt;</span> <span class="token number">5</span><span class="token punctuation">;</span> i<span class="token operator">++</span> <span class="token punctuation">{</span>
		channel <span class="token operator">&lt;-</span> text
		time<span class="token punctuation">.</span><span class="token function">Sleep</span><span class="token punctuation">(</span>time<span class="token punctuation">.</span>Millisecond <span class="token operator">*</span> <span class="token number">500</span><span class="token punctuation">)</span>
	<span class="token punctuation">}</span>

	<span class="token function">close</span><span class="token punctuation">(</span>channel<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br><span class="line-number">55</span><br><span class="line-number">56</span><br><span class="line-number">57</span><br><span class="line-number">58</span><br><span class="line-number">59</span><br><span class="line-number">60</span><br><span class="line-number">61</span><br><span class="line-number">62</span><br><span class="line-number">63</span><br></div></div><div class="language-powershell ext-powershell line-numbers-mode"><pre class="language-powershell"><code>$ go run channel<span class="token punctuation">.</span>go 
Shamare attacked<span class="token punctuation">.</span>
Attaced 1 times<span class="token punctuation">.</span>
Suzuran attacked<span class="token punctuation">.</span>
Attaced 2 times<span class="token punctuation">.</span>
Suzuran attacked<span class="token punctuation">.</span>
Attaced 3 times<span class="token punctuation">.</span>
Shamare attacked<span class="token punctuation">.</span>
Attaced 4 times<span class="token punctuation">.</span>
Suzuran attacked<span class="token punctuation">.</span>
Attaced 5 times<span class="token punctuation">.</span>
Suzuran attacked<span class="token punctuation">.</span>
Attaced 6 times<span class="token punctuation">.</span>
Shamare attacked<span class="token punctuation">.</span>
Attaced 7 times<span class="token punctuation">.</span>
Suzuran attacked<span class="token punctuation">.</span>
Attaced 8 times<span class="token punctuation">.</span>
</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br></div></div><h3 id="\u4E92\u65A5\u9501-mutex" tabindex="-1"><a class="header-anchor" href="#\u4E92\u65A5\u9501-mutex" aria-hidden="true">#</a> \u4E92\u65A5\u9501\uFF08mutex\uFF09</h3><p>\u963B\u6B62\u590D\u6570 goroutine \u5728\u540C\u4E00\u65F6\u95F4\u64CD\u4F5C\u76F8\u540C\u7684\u4E1C\u897F\u3002</p><div class="language-go ext-go line-numbers-mode"><pre class="language-go"><code><span class="token keyword">package</span> main

<span class="token keyword">import</span> <span class="token string">&quot;sync&quot;</span>

<span class="token comment">// \u58F0\u660E\u4E92\u65A5\u9501</span>
<span class="token keyword">var</span> mutex sync<span class="token punctuation">.</span>Mutex

<span class="token keyword">func</span> <span class="token function">main</span><span class="token punctuation">(</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
	mutex<span class="token punctuation">.</span><span class="token function">Lock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
	<span class="token keyword">defer</span> mutex<span class="token punctuation">.</span><span class="token function">Unlock</span><span class="token punctuation">(</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br></div></div>`,171);function z(A,$){const a=e("ExternalLinkIcon");return t(),o(c,null,[i,k,n("p",null,[n("a",b,[m,p(a)])]),d,n("p",null,[n("a",g,[h,p(a)])]),f,v,n("ul",null,[n("li",null,[q,n("a",w,[y,p(a)])]),n("li",null,[x,n("a",S,[P,p(a)])])]),_],64)}var C=u(r,[["render",z]]);export{C as default};
