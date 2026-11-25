import{_ as a,o as i,c as n,a0 as p}from"./chunks/framework.Bb-2yHh0.js";const c=JSON.parse('{"title":"swtch.S","description":"","frontmatter":{"title":"swtch.S","outline":false,"aside":false},"headers":[],"relativePath":"src/swtch-S.md","filePath":"src/swtch-S.md"}'),l={name:"src/swtch-S.md"};function h(t,s,k,e,r,d){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="swtch-s" tabindex="-1">swtch.S <a class="header-anchor" href="#swtch-s" aria-label="Permalink to &quot;swtch.S&quot;">​</a></h1><div class="src-meta">29 行 · 进程与调度 · 注释已译为中文，代码逐字保留</div><div class="listing numbered src-listing"><div class="listing-gutter" aria-hidden="true"><span>1</span><span>2</span><span>3</span><span>4</span><span>5</span><span>6</span><span>7</span><span>8</span><span>9</span><span>10</span><span>11</span><span>12</span><span>13</span><span>14</span><span>15</span><span>16</span><span>17</span><span>18</span><span>19</span><span>20</span><span>21</span><span>22</span><span>23</span><span>24</span><span>25</span><span>26</span><span>27</span><span>28</span><span>29</span></div><div class="listing-code"><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 上下文切换</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># void swtch(struct context **old, struct context *new);</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把当前寄存器保存到栈上，构造出</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 一个 struct context，并把它的地址存入 *old。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 切换到 new 的栈，并弹出先前保存的寄存器。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.globl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> swtch</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">swtch:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">esp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">8</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">(%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">esp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">edx</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 保存旧的被调用者保存寄存器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ebp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ebx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">esi</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">edi</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 切换栈</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">esp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, (%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">edx</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">esp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 载入新的被调用者保存寄存器</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  popl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">edi</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  popl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">esi</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  popl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ebx</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  popl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ebp</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ret</span></span>
<span class="line"></span></code></pre></div></div>`,3)])])}const g=a(l,[["render",h]]);export{c as __pageData,g as default};
