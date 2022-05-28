import{r as t,o as e,c as o,a as n,b as p,F as c,d as s,e as l}from"./app.844c01cb.js";import{_ as r}from"./plugin-vue_export-helper.21dcd24c.js";const u={},i=n("h1",{id:"vue3-\u306E\u4E2D\u3066\u3099-usereducer-\u3092\u5B9F\u88C5\u3059\u308B\u3053\u3068\u3092\u5B66\u7FD2\u3059\u308B",tabindex:"-1"},[n("a",{class:"header-anchor",href:"#vue3-\u306E\u4E2D\u3066\u3099-usereducer-\u3092\u5B9F\u88C5\u3059\u308B\u3053\u3068\u3092\u5B66\u7FD2\u3059\u308B","aria-hidden":"true"},"#"),s(" Vue3 \u306E\u4E2D\u3067 useReducer \u3092\u5B9F\u88C5\u3059\u308B\u3053\u3068\u3092\u5B66\u7FD2\u3059\u308B")],-1),k=s("\u5B66\u7FD2\u3057\u305F\u8AB2\u7A0B\uFF1A"),b={href:"https://www.bilibili.com/video/BV1n34y1e7ui",target:"_blank",rel:"noopener noreferrer"},d=s("https://www.bilibili.com/video/BV1n34y1e7ui"),m=s("\u79C1\u306E\u5009\u5EAB\uFF1A"),y={href:"https://github.com/SetsuikiHyoryu/vue3_use-reducer",target:"_blank",rel:"noopener noreferrer"},g=s("https://github.com/SetsuikiHyoryu/vue3_use-reducer"),h=l(`<p>\u203B \u624B\u9593\u3092\u7701\u3051\u308B\u70BA\u306B\u3001\u672C\u6587\u3067\u306F\u4ECA\u56DE\u306E\u30DD\u30A4\u30F3\u30C8\u3067\u306F\u306A\u3044\u30D5\u30A1\u30A4\u30EB\u3084\u5B9A\u7FA9\u3078\u306E\u8AAC\u660E\u3092\u7701\u7565\u3057\u305F\u3002Vue \u306B\u8A73\u3057\u304F\u306A\u3044\u540C\u5FD7\u306F\u79C1\u306E\u5009\u5EAB\u3092\u898B\u3066\u304F\u3060\u3055\u3044\u3002</p><h2 id="src-\u5185\u306E\u30C6\u3099\u30A3\u30EC\u30AF\u30C8\u30EA\u69CB\u9020" tabindex="-1"><a class="header-anchor" href="#src-\u5185\u306E\u30C6\u3099\u30A3\u30EC\u30AF\u30C8\u30EA\u69CB\u9020" aria-hidden="true">#</a> src \u5185\u306E\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u69CB\u9020</h2><div class="language-bash ext-sh line-numbers-mode"><pre class="language-bash"><code>E:.
\u2502   App.vue
\u2502   env.d.ts
\u2502   main.ts
\u2502
\u251C\u2500\u2500\u2500assets
\u2502       logo.png
\u2502
\u251C\u2500\u2500\u2500components
\u251C\u2500\u2500\u2500hooks
\u2502       index.ts
\u2502       useReducer.ts
\u2502
\u2514\u2500\u2500\u2500views
    \u2502   .keep
    \u2502
    \u2514\u2500\u2500\u2500TodoAPP
        \u2502   index.vue
        \u2502   TodoForm.vue
        \u2502   TodoList.vue
        \u2502
        \u2514\u2500\u2500\u2500store
                actions.ts
                actionTypes.ts
                index.ts
                reducer.ts
                types.ts

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br></div></div><h2 id="_1-usereducer-\u3092\u4F5C\u6210" tabindex="-1"><a class="header-anchor" href="#_1-usereducer-\u3092\u4F5C\u6210" aria-hidden="true">#</a> 1. useReducer \u3092\u4F5C\u6210</h2><ol><li><code>src</code> \u306E\u4E2D\u3067 <code>hooks</code> \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u4F5C\u6210</li><li><code>useReducer.ts</code> \u3092\u4F5C\u6210\u3057\u3001<code>useReducer</code> \u3092\u5B9A\u7FA9\u3059\u308B</li><li><code>index.ts</code> \u3092\u4F5C\u6210\u3057\u3001<code>useReducer</code> \u3092\u66F8\u304D\u51FA\u3059</li></ol><h3 id="usereducer-ts" tabindex="-1"><a class="header-anchor" href="#usereducer-ts" aria-hidden="true">#</a> useReducer.ts</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Ref<span class="token punctuation">,</span> UnwrapRef <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Action</span> <span class="token punctuation">{</span>
  type<span class="token operator">:</span> <span class="token builtin">string</span>
  payload<span class="token operator">:</span> <span class="token builtin">any</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Reducer</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>state<span class="token operator">:</span> Ref<span class="token operator">&lt;</span><span class="token builtin">any</span><span class="token operator">&gt;</span><span class="token punctuation">,</span> action<span class="token operator">:</span> Action<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">interface</span> <span class="token class-name">Dispatch</span> <span class="token punctuation">{</span>
  <span class="token punctuation">(</span>action<span class="token operator">:</span> Action<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token generic-function"><span class="token function">useReducer</span><span class="token generic class-name"><span class="token operator">&lt;</span>State<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>
  reducer<span class="token operator">:</span> Reducer<span class="token punctuation">,</span>
  initialState<span class="token operator">:</span> State
<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token punctuation">[</span>Ref<span class="token operator">&lt;</span>UnwrapRef<span class="token operator">&lt;</span>State<span class="token operator">&gt;&gt;</span><span class="token punctuation">,</span> Dispatch<span class="token punctuation">]</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> state <span class="token operator">=</span> <span class="token generic-function"><span class="token function">ref</span><span class="token generic class-name"><span class="token operator">&lt;</span>State<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span>initialState<span class="token punctuation">)</span>

  <span class="token keyword">const</span> dispatch <span class="token operator">=</span> <span class="token punctuation">(</span>action<span class="token operator">:</span> Action<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token keyword">void</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    <span class="token function">reducer</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> action<span class="token punctuation">)</span>
  <span class="token punctuation">}</span>

  <span class="token keyword">return</span> <span class="token punctuation">[</span>state<span class="token punctuation">,</span> dispatch<span class="token punctuation">]</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">default</span> useReducer

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br></div></div><h2 id="_2-reducer-\u3092\u4F5C\u6210" tabindex="-1"><a class="header-anchor" href="#_2-reducer-\u3092\u4F5C\u6210" aria-hidden="true">#</a> 2. reducer \u3092\u4F5C\u6210</h2><ol><li>reducer \u306E\u4F7F\u7528\u304C\u5FC5\u8981\u306E\u90E8\u54C1\u306E\u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306E\u4E2D\u3067 <code>store</code> \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u3092\u4F5C\u6210</li><li><code>store</code> \u306E\u4E2D\u3067 <code>reducer.ts</code> \u3092\u4F5C\u6210\u3057\u3001 <code>todoReducer</code> \u3092\u5B9A\u7FA9\u3059\u308B <ul><li>\u540C\u6642\u306B <code>index.ts</code>\u3001<code>actionTypes</code>\u3001<code>types</code> \u3092\u5B9A\u7FA9\u3059\u308B</li></ul></li></ol><h3 id="reducer-ts" tabindex="-1"><a class="header-anchor" href="#reducer-ts" aria-hidden="true">#</a> reducer.ts</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Action <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks/useReducer&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TodoList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> addTodo<span class="token punctuation">,</span> removeTodo<span class="token punctuation">,</span> toggleTodo <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./action&#39;</span>
<span class="token keyword">import</span> actionTypes <span class="token keyword">from</span> <span class="token string">&#39;./actionTypes&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">todoReducer</span><span class="token punctuation">(</span>state<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>TodoList<span class="token operator">&gt;</span><span class="token punctuation">,</span> action<span class="token operator">:</span> Action<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token keyword">const</span> <span class="token punctuation">{</span> type<span class="token punctuation">,</span> payload <span class="token punctuation">}</span><span class="token operator">:</span> Action <span class="token operator">=</span> action

  <span class="token keyword">const</span> actionMap <span class="token operator">=</span> <span class="token keyword">new</span> <span class="token class-name">Map<span class="token operator">&lt;</span><span class="token builtin">string</span><span class="token punctuation">,</span> <span class="token builtin">Function</span><span class="token operator">&gt;</span></span><span class="token punctuation">(</span><span class="token punctuation">[</span>
    <span class="token punctuation">[</span>actionTypes<span class="token punctuation">.</span><span class="token constant">ADD_TODO</span><span class="token punctuation">,</span> addTodo<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>actionTypes<span class="token punctuation">.</span><span class="token constant">TOGGLE_TODO</span><span class="token punctuation">,</span> toggleTodo<span class="token punctuation">]</span><span class="token punctuation">,</span>
    <span class="token punctuation">[</span>actionTypes<span class="token punctuation">.</span><span class="token constant">REMOVE_TODO</span><span class="token punctuation">,</span> removeTodo<span class="token punctuation">]</span><span class="token punctuation">,</span>
  <span class="token punctuation">]</span><span class="token punctuation">)</span>

  actionMap<span class="token punctuation">.</span><span class="token function">get</span><span class="token punctuation">(</span>type<span class="token punctuation">)</span><span class="token operator">?.</span><span class="token punctuation">(</span>state<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br></div></div><h2 id="_3-action-\u3092\u4F5C\u6210" tabindex="-1"><a class="header-anchor" href="#_3-action-\u3092\u4F5C\u6210" aria-hidden="true">#</a> 3. action \u3092\u4F5C\u6210</h2><ol><li><code>store</code> \u306E\u4E2D\u3067 <code>actions.ts</code> \u3092\u4F5C\u6210</li></ol><h3 id="actions-ts" tabindex="-1"><a class="header-anchor" href="#actions-ts" aria-hidden="true">#</a> actions.ts</h3><div class="language-typescript ext-ts line-numbers-mode"><pre class="language-typescript"><code><span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> Ref <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;vue&#39;</span>
<span class="token keyword">import</span> <span class="token keyword">type</span> <span class="token punctuation">{</span> TodoItem<span class="token punctuation">,</span> TodoList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./types&#39;</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">addTodo</span><span class="token punctuation">(</span>state<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>TodoList<span class="token operator">&gt;</span><span class="token punctuation">,</span> payload<span class="token operator">:</span> TodoItem<span class="token punctuation">)</span> <span class="token punctuation">{</span>
  state<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">push</span><span class="token punctuation">(</span>payload<span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span>state<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>TodoList<span class="token operator">&gt;</span><span class="token punctuation">,</span> payload<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  state<span class="token punctuation">.</span>value <span class="token operator">=</span> state<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token generic-function"><span class="token function">map</span><span class="token generic class-name"><span class="token operator">&lt;</span>TodoItem<span class="token operator">&gt;</span></span></span><span class="token punctuation">(</span><span class="token punctuation">(</span>item<span class="token punctuation">)</span> <span class="token operator">=&gt;</span> <span class="token punctuation">{</span>
    item<span class="token punctuation">.</span>id <span class="token operator">===</span> payload <span class="token operator">&amp;&amp;</span> <span class="token punctuation">(</span>item<span class="token punctuation">.</span>completed <span class="token operator">=</span> <span class="token operator">!</span>item<span class="token punctuation">.</span>completed<span class="token punctuation">)</span>
    <span class="token keyword">return</span> item
  <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">export</span> <span class="token keyword">function</span> <span class="token function">removeTodo</span><span class="token punctuation">(</span>state<span class="token operator">:</span> Ref<span class="token operator">&lt;</span>TodoList<span class="token operator">&gt;</span><span class="token punctuation">,</span> payload<span class="token operator">:</span> <span class="token builtin">number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token builtin">console</span><span class="token punctuation">.</span><span class="token function">log</span><span class="token punctuation">(</span>state<span class="token punctuation">.</span>value<span class="token punctuation">,</span> payload<span class="token punctuation">)</span>
  state<span class="token punctuation">.</span>value <span class="token operator">=</span> state<span class="token punctuation">.</span>value<span class="token punctuation">.</span><span class="token function">filter</span><span class="token punctuation">(</span>
    <span class="token punctuation">(</span>item<span class="token operator">:</span> TodoItem<span class="token punctuation">)</span><span class="token operator">:</span> <span class="token builtin">boolean</span> <span class="token operator">=&gt;</span> item<span class="token punctuation">.</span>id <span class="token operator">!==</span> payload
  <span class="token punctuation">)</span>
<span class="token punctuation">}</span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br></div></div><h2 id="_4-\u753B\u9762\u90E8\u54C1\u306E\u4E2D\u3066\u3099-reducer-\u3092\u4F7F\u7528" tabindex="-1"><a class="header-anchor" href="#_4-\u753B\u9762\u90E8\u54C1\u306E\u4E2D\u3066\u3099-reducer-\u3092\u4F7F\u7528" aria-hidden="true">#</a> 4. \u753B\u9762\u90E8\u54C1\u306E\u4E2D\u3067 reducer \u3092\u4F7F\u7528</h2><div class="language-html ext-html line-numbers-mode"><pre class="language-html"><code><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">export</span> <span class="token keyword">default</span> <span class="token punctuation">{</span> <span class="token literal-property property">name</span><span class="token operator">:</span> <span class="token string">&#39;TodoAPP&#39;</span> <span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>script</span> <span class="token attr-name">setup</span> <span class="token attr-name">lang</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>ts<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span><span class="token script"><span class="token language-javascript">
<span class="token keyword">import</span> TodoListVue <span class="token keyword">from</span> <span class="token string">&#39;./TodoList.vue&#39;</span>
<span class="token keyword">import</span> TodoForm <span class="token keyword">from</span> <span class="token string">&#39;./TodoForm.vue&#39;</span>

<span class="token keyword">import</span> type <span class="token punctuation">{</span> TodoItem<span class="token punctuation">,</span> TodoList <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store/types&#39;</span>

<span class="token keyword">import</span> <span class="token punctuation">{</span> useReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;@/hooks&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> todoReducer <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store/reducer&#39;</span>
<span class="token keyword">import</span> <span class="token punctuation">{</span> actionTypes <span class="token punctuation">}</span> <span class="token keyword">from</span> <span class="token string">&#39;./store&#39;</span>

<span class="token comment">// \u4ECA\u56DE\u306F\u76F4\u63A5\u7A7A\u767D\u306E\u914D\u5217\u3092\u4E0E\u3048\u305F\u304C\u3001\`store\` \u30C7\u30A3\u30EC\u30AF\u30C8\u30EA\u306E\u4E2D\u306B \`state.ts\` \u3092\u4F5C\u6210\u3057\u3066\u521D\u671F\u5024\u3092\u96C6\u4E2D\u7684\u306B\u7BA1\u7406\u3059\u308B\u3053\u3068\u3082\u53EF\u80FD</span>
<span class="token keyword">const</span> <span class="token punctuation">[</span>todoList<span class="token punctuation">,</span> todoDispatch<span class="token punctuation">]</span> <span class="token operator">=</span> useReducer<span class="token operator">&lt;</span>TodoList<span class="token operator">&gt;</span><span class="token punctuation">(</span>todoReducer<span class="token punctuation">,</span> <span class="token punctuation">[</span><span class="token punctuation">]</span><span class="token punctuation">)</span>

<span class="token keyword">function</span> <span class="token function">addTodo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">todo</span><span class="token operator">:</span> TodoItem</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">todoDispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> actionTypes<span class="token punctuation">.</span><span class="token constant">ADD_TODO</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> todo <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">toggleTodo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">todoDispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> actionTypes<span class="token punctuation">.</span><span class="token constant">TOGGLE_TODO</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>

<span class="token keyword">function</span> <span class="token function">removeTodo</span><span class="token punctuation">(</span><span class="token parameter"><span class="token literal-property property">id</span><span class="token operator">:</span> number</span><span class="token punctuation">)</span> <span class="token punctuation">{</span>
  <span class="token function">todoDispatch</span><span class="token punctuation">(</span><span class="token punctuation">{</span> <span class="token literal-property property">type</span><span class="token operator">:</span> actionTypes<span class="token punctuation">.</span><span class="token constant">REMOVE_TODO</span><span class="token punctuation">,</span> <span class="token literal-property property">payload</span><span class="token operator">:</span> id <span class="token punctuation">}</span><span class="token punctuation">)</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>script</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>template</span><span class="token punctuation">&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>div</span> <span class="token attr-name">id</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-app<span class="token punctuation">&quot;</span></span><span class="token punctuation">&gt;</span></span>
    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TodoForm</span> <span class="token attr-name">@add-todo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>addTodo<span class="token punctuation">&quot;</span></span> <span class="token punctuation">/&gt;</span></span>

    <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>TodoListVue</span>
      <span class="token attr-name">class</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todo-list<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">:todo-list</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>todoList<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@toggle-todo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>toggleTodo<span class="token punctuation">&quot;</span></span>
      <span class="token attr-name">@remove-todo</span><span class="token attr-value"><span class="token punctuation attr-equals">=</span><span class="token punctuation">&quot;</span>removeTodo<span class="token punctuation">&quot;</span></span>
    <span class="token punctuation">/&gt;</span></span>
  <span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>div</span><span class="token punctuation">&gt;</span></span>
<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>template</span><span class="token punctuation">&gt;</span></span>

<span class="token tag"><span class="token tag"><span class="token punctuation">&lt;</span>style</span> <span class="token attr-name">scope</span><span class="token punctuation">&gt;</span></span><span class="token style"><span class="token language-css">
<span class="token selector">#todo-app</span> <span class="token punctuation">{</span>
  <span class="token property">height</span><span class="token punctuation">:</span> 100%<span class="token punctuation">;</span>
  <span class="token property">padding</span><span class="token punctuation">:</span> 2rem<span class="token punctuation">;</span>
<span class="token punctuation">}</span>

<span class="token selector">.todo-list</span> <span class="token punctuation">{</span>
  <span class="token property">margin</span><span class="token punctuation">:</span> 1rem 0 0 <span class="token important">!important</span><span class="token punctuation">;</span>
<span class="token punctuation">}</span>
</span></span><span class="token tag"><span class="token tag"><span class="token punctuation">&lt;/</span>style</span><span class="token punctuation">&gt;</span></span>

</code></pre><div class="line-numbers"><span class="line-number">1</span><br><span class="line-number">2</span><br><span class="line-number">3</span><br><span class="line-number">4</span><br><span class="line-number">5</span><br><span class="line-number">6</span><br><span class="line-number">7</span><br><span class="line-number">8</span><br><span class="line-number">9</span><br><span class="line-number">10</span><br><span class="line-number">11</span><br><span class="line-number">12</span><br><span class="line-number">13</span><br><span class="line-number">14</span><br><span class="line-number">15</span><br><span class="line-number">16</span><br><span class="line-number">17</span><br><span class="line-number">18</span><br><span class="line-number">19</span><br><span class="line-number">20</span><br><span class="line-number">21</span><br><span class="line-number">22</span><br><span class="line-number">23</span><br><span class="line-number">24</span><br><span class="line-number">25</span><br><span class="line-number">26</span><br><span class="line-number">27</span><br><span class="line-number">28</span><br><span class="line-number">29</span><br><span class="line-number">30</span><br><span class="line-number">31</span><br><span class="line-number">32</span><br><span class="line-number">33</span><br><span class="line-number">34</span><br><span class="line-number">35</span><br><span class="line-number">36</span><br><span class="line-number">37</span><br><span class="line-number">38</span><br><span class="line-number">39</span><br><span class="line-number">40</span><br><span class="line-number">41</span><br><span class="line-number">42</span><br><span class="line-number">43</span><br><span class="line-number">44</span><br><span class="line-number">45</span><br><span class="line-number">46</span><br><span class="line-number">47</span><br><span class="line-number">48</span><br><span class="line-number">49</span><br><span class="line-number">50</span><br><span class="line-number">51</span><br><span class="line-number">52</span><br><span class="line-number">53</span><br><span class="line-number">54</span><br></div></div>`,17);function f(w,v){const a=t("ExternalLinkIcon");return e(),o(c,null,[i,n("ul",null,[n("li",null,[k,n("a",b,[d,p(a)])]),n("li",null,[m,n("a",y,[g,p(a)])])]),h],64)}var x=r(u,[["render",f]]);export{x as default};
