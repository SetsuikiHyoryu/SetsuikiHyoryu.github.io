import{_ as a,c as e,o as t,a3 as r}from"./chunks/framework.Cbi_dvob.js";const f=JSON.parse('{"title":"Node 版本管理工具 fnm","description":"","frontmatter":{},"headers":[],"relativePath":"zh/programming/language/javascript/fnm.md","filePath":"zh/programming/language/javascript/fnm.md","lastUpdated":1721378656000}'),n={name:"zh/programming/language/javascript/fnm.md"},i=r('<h1 id="node-版本管理工具-fnm" tabindex="-1">Node 版本管理工具 fnm <a class="header-anchor" href="#node-版本管理工具-fnm" aria-label="Permalink to &quot;Node 版本管理工具 fnm&quot;">​</a></h1><h2 id="官方文档" tabindex="-1">官方文档 <a class="header-anchor" href="#官方文档" aria-label="Permalink to &quot;官方文档&quot;">​</a></h2><p><a href="https://github.com/Schniz/fnm?tab=readme-ov-file#installation" target="_blank" rel="noreferrer">https://github.com/Schniz/fnm?tab=readme-ov-file#installation</a></p><h2 id="安装" tabindex="-1">安装 <a class="header-anchor" href="#安装" aria-label="Permalink to &quot;安装&quot;">​</a></h2><table tabindex="0"><thead><tr><th>OS</th><th>安装方法</th><th>设置 Shell</th></tr></thead><tbody><tr><td>Windows</td><td><a href="https://github.com/Schniz/fnm?tab=readme-ov-file#using-winget-windows" target="_blank" rel="noreferrer">使用 winget 安装</a></td><td><a href="https://github.com/Schniz/fnm?tab=readme-ov-file#powershell" target="_blank" rel="noreferrer">powershell</a></td></tr><tr><td>MacOS</td><td><a href="https://github.com/Schniz/fnm?tab=readme-ov-file#using-homebrew-macoslinux" target="_blank" rel="noreferrer">使用 HomeBrew 安装</a></td><td><a href="https://github.com/Schniz/fnm?tab=readme-ov-file#zsh" target="_blank" rel="noreferrer">zsh</a></td></tr></tbody></table><h2 id="修改-node-安装路径" tabindex="-1">修改 Node 安装路径 <a class="header-anchor" href="#修改-node-安装路径" aria-label="Permalink to &quot;修改 Node 安装路径&quot;">​</a></h2><h3 id="查看当前-node-安装路径" tabindex="-1">查看当前 Node 安装路径 <a class="header-anchor" href="#查看当前-node-安装路径" aria-label="Permalink to &quot;查看当前 Node 安装路径&quot;">​</a></h3><div class="language-sh vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">sh</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 结果中 `FNM_DIR` 指向的就是当前的 Node 安装路径</span></span>\n<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">fnm</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> env</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h3 id="以下两种修改方式中二选一执行" tabindex="-1">以下两种修改方式中二选一执行 <a class="header-anchor" href="#以下两种修改方式中二选一执行" aria-label="Permalink to &quot;以下两种修改方式中二选一执行&quot;">​</a></h3><h4 id="使用全局变量的方式修改" tabindex="-1">使用全局变量的方式修改 <a class="header-anchor" href="#使用全局变量的方式修改" aria-label="Permalink to &quot;使用全局变量的方式修改&quot;">​</a></h4><p>修改（或添加）全局 <code>FNM_DIR</code> 环境变量。</p><h4 id="使用命令行参数的方式修改" tabindex="-1">使用命令行参数的方式修改 <a class="header-anchor" href="#使用命令行参数的方式修改" aria-label="Permalink to &quot;使用命令行参数的方式修改&quot;">​</a></h4><p>在安装后修改 Shell 文件时，其中会包含执行 fnm 命令行命令的代码，在其后添加 <code>--fnm-dir &lt;BASE_DIR&gt;</code> 。</p>',13),o=[i];function s(h,l,d,c,m,p){return t(),e("div",null,o)}const u=a(n,[["render",s]]);export{f as __pageData,u as default};
