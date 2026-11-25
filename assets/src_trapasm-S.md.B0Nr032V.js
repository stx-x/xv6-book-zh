import{_ as a,o as i,c as n,a0 as p}from"./chunks/framework.Bb-2yHh0.js";const g=JSON.parse('{"title":"trapasm.S","description":"","frontmatter":{"title":"trapasm.S","outline":false,"aside":false},"headers":[],"relativePath":"src/trapasm-S.md","filePath":"src/trapasm-S.md"}'),l={name:"src/trapasm-S.md"};function h(t,s,k,e,r,E){return i(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="trapasm-s" tabindex="-1">trapasm.S <a class="header-anchor" href="#trapasm-s" aria-label="Permalink to &quot;trapasm.S&quot;">​</a></h1><div class="src-meta">32 行 · 陷阱与中断 · 注释已译为中文，代码逐字保留</div><div class="listing numbered src-listing"><div class="listing-gutter" aria-hidden="true"><span>3300</span><span>3301</span><span>3302</span><span>3303</span><span>3304</span><span>3305</span><span>3306</span><span>3307</span><span>3308</span><span>3309</span><span>3310</span><span>3311</span><span>3312</span><span>3313</span><span>3314</span><span>3315</span><span>3316</span><span>3317</span><span>3318</span><span>3319</span><span>3320</span><span>3321</span><span>3322</span><span>3323</span><span>3324</span><span>3325</span><span>3326</span><span>3327</span><span>3328</span><span>3329</span><span>3330</span><span>3331</span></div><div class="listing-code"><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;mmu.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # vectors.S sends all traps here.</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.globl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> alltraps</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">alltraps:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Build trap frame.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ds</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">es</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushal</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Set up data segments.</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movw $(SEG_KDATA&lt;&lt;</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">3</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">), %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movw %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ds</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movw %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">es</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Call trap(tf), where tf=%esp</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  pushl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">esp</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  call</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> trap</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  addl </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">$4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">esp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # Return falls through to trapret...</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.globl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> trapret</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">trapret:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  popal</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  popl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">gs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  popl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">fs</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  popl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">es</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  popl %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">ds</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  addl $0x8, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">esp</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # trapno and errcode</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  iret</span></span>
<span class="line"></span></code></pre></div></div>`,3)])])}const c=a(l,[["render",h]]);export{g as __pageData,c as default};
