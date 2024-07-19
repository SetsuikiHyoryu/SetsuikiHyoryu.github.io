import{_ as a,c as e,o as s,a3 as i}from"./chunks/framework.Cbi_dvob.js";const u=JSON.parse('{"title":"Neovim でファイルの文字コードを変更する","description":"","frontmatter":{},"headers":[],"relativePath":"ja/programming/coding-memo/neovim-garbled-characters.md","filePath":"ja/programming/coding-memo/neovim-garbled-characters.md","lastUpdated":1721378656000}'),n={name:"ja/programming/coding-memo/neovim-garbled-characters.md"},l=i(`<h1 id="neovim-でファイルの文字コードを変更する" tabindex="-1">Neovim でファイルの文字コードを変更する <a class="header-anchor" href="#neovim-でファイルの文字コードを変更する" aria-label="Permalink to &quot;Neovim でファイルの文字コードを変更する&quot;">​</a></h1><h2 id="neovim-コードを確認する" tabindex="-1">Neovim コードを確認する <a class="header-anchor" href="#neovim-コードを確認する" aria-label="Permalink to &quot;Neovim コードを確認する&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> encoding</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="現在のファイルの文字コードを確認する" tabindex="-1">現在のファイルの文字コードを確認する <a class="header-anchor" href="#現在のファイルの文字コードを確認する" aria-label="Permalink to &quot;現在のファイルの文字コードを確認する&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">set</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> fileencoding</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br></div></div><h2 id="指定したコードで現在のファイルを再度開く" tabindex="-1">指定したコードで現在のファイルを再度開く <a class="header-anchor" href="#指定したコードで現在のファイルを再度開く" aria-label="Permalink to &quot;指定したコードで現在のファイルを再度開く&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># help ++enc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">edit</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ++encoding=shift_jis</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div><h2 id="指定したコードでファイルを保存する" tabindex="-1">指定したコードでファイルを保存する <a class="header-anchor" href="#指定したコードでファイルを保存する" aria-label="Permalink to &quot;指定したコードでファイルを保存する&quot;">​</a></h2><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># help ++enc</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">write</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ++encoding=utf-8</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> new-file.extension</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br></div></div>`,9),t=[l];function r(h,d,p,o,c,m){return s(),e("div",null,t)}const g=a(n,[["render",r]]);export{u as __pageData,g as default};
