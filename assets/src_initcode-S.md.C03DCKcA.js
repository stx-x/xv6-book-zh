import{_ as a,o as i,c as n,a0 as p}from"./chunks/framework.Bb-2yHh0.js";const E=JSON.parse('{"title":"initcode.S","description":"","frontmatter":{"title":"initcode.S","outline":false,"aside":false},"headers":[],"relativePath":"src/initcode-S.md","filePath":"src/initcode-S.md"}'),l={name:"src/initcode-S.md"};function t(e,s,h,k,r,d){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="initcode-s" tabindex="-1">initcode.S <a class="header-anchor" href="#initcode-s" aria-label="Permalink to &quot;initcode.S&quot;">​</a></h1><div class="src-meta">32 行 · 用户程序 · 注释已译为中文，代码逐字保留</div><div class="listing numbered src-listing"><div class="listing-gutter" aria-hidden="true"><span>8400</span><span>8401</span><span>8402</span><span>8403</span><span>8404</span><span>8405</span><span>8406</span><span>8407</span><span>8408</span><span>8409</span><span>8410</span><span>8411</span><span>8412</span><span>8413</span><span>8414</span><span>8415</span><span>8416</span><span>8417</span><span>8418</span><span>8419</span><span>8420</span><span>8421</span><span>8422</span><span>8423</span><span>8424</span><span>8425</span><span>8426</span><span>8427</span><span>8428</span><span>8429</span><span>8430</span><span>8431</span></div><div class="listing-code"><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 初始进程 exec /init。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 这段代码在用户空间运行。</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;syscall.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;traps.h&quot;</span></span>
<span class="line"></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># exec(init, argv)</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.globl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> start</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">start:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl $argv</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl $init</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  // 调用者 PC 所在的位置</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl $SYS_exec, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $T_SYSCALL</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># for(;;) exit();</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">exit:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl $SYS_exit, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  int</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $T_SYSCALL</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  jmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> exit</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># char init[] = &quot;/init\\0&quot;;</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">init:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .string &quot;/init\\</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># char *argv[] = { init, 0 };</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.p2align </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">argv:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .long init</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .long </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">0</span></span>
<span class="line"></span>
<span class="line"></span></code></pre></div></div>`,3)])])}const g=a(l,[["render",t]]);export{E as __pageData,g as default};
