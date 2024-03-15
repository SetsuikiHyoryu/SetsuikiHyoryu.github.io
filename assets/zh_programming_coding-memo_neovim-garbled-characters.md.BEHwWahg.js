import{_ as a,c as e,o as s,a3 as i}from"./chunks/framework.cbz3UF0a.js";const g=JSON.parse('{"title":"Neovim 修改文件文字编码","description":"","frontmatter":{},"headers":[],"relativePath":"zh/programming/coding-memo/neovim-garbled-characters.md","filePath":"zh/programming/coding-memo/neovim-garbled-characters.md","lastUpdated":1710505829000}'),n={name:"zh/programming/coding-memo/neovim-garbled-characters.md"},l=i(`<h1 id="neovim-修改文件文字编码" tabindex="-1">Neovim 修改文件文字编码 <a class="header-anchor" href="#neovim-修改文件文字编码" aria-label="Permalink to &quot;Neovim 修改文件文字编码&quot;">​</a></h1><h2 id="查看-neovim-编码" tabindex="-1">查看 Neovim 编码 <a class="header-anchor" href="#查看-neovim-编码" aria-label="Permalink to &quot;查看 Neovim 编码&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> encoding</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="查看当前文件编码" tabindex="-1">查看当前文件编码 <a class="header-anchor" href="#查看当前文件编码" aria-label="Permalink to &quot;查看当前文件编码&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileencoding</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="使用指定编码重新打开当前文件" tabindex="-1">使用指定编码重新打开当前文件 <a class="header-anchor" href="#使用指定编码重新打开当前文件" aria-label="Permalink to &quot;使用指定编码重新打开当前文件&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># help ++enc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">edit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ++encoding=shift_jis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="使用指定编码保存文件" tabindex="-1">使用指定编码保存文件 <a class="header-anchor" href="#使用指定编码保存文件" aria-label="Permalink to &quot;使用指定编码保存文件&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># help ++enc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ++encoding=utf-8</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-file.extension</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,9),t=[l];function r(h,p,d,o,c,m){return s(),e("div",null,t)}const k=a(n,[["render",r]]);export{g as __pageData,k as default};
