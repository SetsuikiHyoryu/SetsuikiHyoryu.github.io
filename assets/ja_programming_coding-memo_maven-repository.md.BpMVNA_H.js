import{_ as s,c as a,o as i,a3 as n}from"./chunks/framework.BtbJBhK4.js";const E=JSON.parse('{"title":"Maven 依存パッケージインストール先の設定","description":"","frontmatter":{},"headers":[],"relativePath":"ja/programming/coding-memo/maven-repository.md","filePath":"ja/programming/coding-memo/maven-repository.md","lastUpdated":1708361251000}'),l={name:"ja/programming/coding-memo/maven-repository.md"},p=n(`<h1 id="maven-依存パッケージインストール先の設定" tabindex="-1">Maven 依存パッケージインストール先の設定 <a class="header-anchor" href="#maven-依存パッケージインストール先の設定" aria-label="Permalink to &quot;Maven 依存パッケージインストール先の設定&quot;">​</a></h1><h2 id="eclipse-抜きで-maven-を独立に使う際に" tabindex="-1">Eclipse 抜きで Maven を独立に使う際に <a class="header-anchor" href="#eclipse-抜きで-maven-を独立に使う際に" aria-label="Permalink to &quot;Eclipse 抜きで Maven を独立に使う際に&quot;">​</a></h2><h3 id="maven-グローバル設定ファイルを編集しパッケージインストール先を変更する" tabindex="-1">Maven グローバル設定ファイルを編集しパッケージインストール先を変更する <a class="header-anchor" href="#maven-グローバル設定ファイルを編集しパッケージインストール先を変更する" aria-label="Permalink to &quot;Maven グローバル設定ファイルを編集しパッケージインストール先を変更する&quot;">​</a></h3><p>グローバル設定ファイルは <code>&lt;Maven_インストール先&gt;/conf/setting.xml</code> である（インストールディレクトリは <code>bin</code> ディレクトリがある場所である）。</p><div class="language-xml vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">xml</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- &lt;maven_install_direcotry&gt;/conf/setting.xml--&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;?</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">xml</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> version</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> encoding</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">?&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- ... --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">settings</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> xmlns</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://maven.apache.org/SETTINGS/1.2.0&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          xmlns:xsi</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">          xsi:schemaLocation</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://maven.apache.org/SETTINGS/1.2.0 https://maven.apache.org/xsd/settings-1.2.0.xsd&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- localRepository</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   | The path to the local repository maven will use to store artifacts.</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   |</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">   | Default: \${user.home}/.m2/repository</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  --&gt;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  &lt;!-- この行を編集しインストール先を変更する（初期状態時この行は前文の註釈にある） --&gt;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  &lt;</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">localRepository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;E:\\SOFT\\programming\\package-manage\\maven\\apache-maven-3.9.6\\repository&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">localRepository</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">&lt;!-- ... --&gt;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&lt;/</span><span style="--shiki-light:#22863A;--shiki-dark:#85E89D;">settings</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&gt;</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h3 id="コマンドラインで設定ファイルの情報を確認する" tabindex="-1">コマンドラインで設定ファイルの情報を確認する <a class="header-anchor" href="#コマンドラインで設定ファイルの情報を確認する" aria-label="Permalink to &quot;コマンドラインで設定ファイルの情報を確認する&quot;">​</a></h3><p><code>mvn help:effective-settings</code> 命令で Mave 有効設定情報をプリントする。この命令は全ての設定ファイルを配慮する。（グローバル <code>settings.xml</code> ファイル、ユーザー <code>settings.xml</code> ファイル、プロジェクト <code>pom.xml</code> ファイル）。</p><div class="language-shell vp-adaptive-theme line-numbers-mode"><button title="Copy Code" class="copy"></button><span class="lang">shell</span><pre class="shiki shiki-themes github-light github-dark vp-code"><code><span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">PS</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mave</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">n</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> mvn help:effective-settings</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] Scanning </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">for</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> projects...</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] ------------------</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> org.apache.maven:standalone-pom </span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-------------------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] Building Maven Stub Project (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">No</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> POM</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) 1</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] --------------------------------[ pom ]---------------------------------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO]</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] --- help:3.4.0:effective-settings (</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">default-cli</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">) @ standalone-pom ---</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO]</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">Effective</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> user-specific configuration settings:</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;?</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">xml version=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;1.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> encoding=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;UTF-8&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">?&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ====================================================================== -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                                                        --</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> Generated by Maven Help Plugin                                         -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> See: https://maven.apache.org/plugins/maven-help-plugin/               -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">                                                                        --</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;!</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">--</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> ====================================================================== -</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">-</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">settings xmlns=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://maven.apache.org/SETTINGS/1.2.0&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xmlns:xsi=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://www.w3.org/2001/XMLSchema-instance&quot;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> xsi:schemaLocation=</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">&quot;http://maven.apache.org/SETTINGS/1.2.0 http://maven.apache.org/xsd/settings-1.2.0.xsd&quot;</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">localRepository&gt;E:\\SOFT\\programming\\package-manage\\maven\\apache-maven-3.9.6\\repository&lt;/localRepository&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mirrors&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mirror&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">mirrorOf&gt;external:http:*&lt;/mirrorOf&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">name&gt;Pseudo</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> repository to mirror external repositories initially using HTTP.</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;">/nam</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">e</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">url&gt;http://0.0.0.0/&lt;/url&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">blocked&gt;true&lt;/blocked&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">      &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">id&gt;maven-default-http-blocker&lt;/id&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/mirror&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/mirrors&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pluginGroups&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pluginGroup&gt;org.apache.maven.plugins&lt;/pluginGroup&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">    &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">pluginGroup&gt;org.codehaus.mojo&lt;/pluginGroup&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  &lt;</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">/pluginGroups&gt;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&lt;</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">/settings</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">&gt;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] ------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] BUILD SUCCESS</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] ------------------------------------------------------------------------</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] Total time:  0.645 s</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] Finished at: 2024-02-20T00:28:45+09:00</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[INFO] ------------------------------------------------------------------------</span></span></code></pre><div class="line-numbers-wrapper" aria-hidden="true"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br></div></div><h2 id="使用-eclipse-内置-maven-工具时" tabindex="-1">使用 Eclipse 内置 Maven 工具时 <a class="header-anchor" href="#使用-eclipse-内置-maven-工具时" aria-label="Permalink to &quot;使用 Eclipse 内置 Maven 工具时&quot;">​</a></h2><p><code>メニュー &gt; Window &gt; Preferences</code> から環境設定ウィンドウを開く。サイドバーから <code>Maven &gt; User Settings</code>を見つけ、中の <code>Global Settings</code> 或いは <code>User Settings</code> にカスタムの <code>settings.xml</code> 文件を設置する（設定内容は <code>&lt;Maven_インストール先&gt;/conf/setting.xml</code> ファイルを参照できる）。<code>Update Settings</code> のクリック後、<code>Local Repository</code> が自動に更新される（手動編集不可）。<code>Apply</code> のクリック後に適応される。</p>`,10),e=[p];function t(h,k,r,g,c,d){return i(),a("div",null,e)}const F=s(l,[["render",t]]);export{E as __pageData,F as default};
