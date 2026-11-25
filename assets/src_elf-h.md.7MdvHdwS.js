import{_ as i,o as a,c as n,a0 as p}from"./chunks/framework.Bb-2yHh0.js";const g=JSON.parse('{"title":"elf.h","description":"","frontmatter":{"title":"elf.h","outline":false},"headers":[],"relativePath":"src/elf-h.md","filePath":"src/elf-h.md"}'),l={name:"src/elf-h.md"};function h(k,s,t,e,r,E){return a(),n("div",null,[...s[0]||(s[0]=[p(`<h1 id="elf-h" tabindex="-1">elf.h <a class="header-anchor" href="#elf-h" aria-label="Permalink to &quot;elf.h&quot;">​</a></h1><div class="src-meta">42 行 · 系统调用与库 · 注释已译为中文，代码逐字保留</div><div class="listing numbered src-listing"><div class="listing-gutter" aria-hidden="true"><span>0900</span><span>0901</span><span>0902</span><span>0903</span><span>0904</span><span>0905</span><span>0906</span><span>0907</span><span>0908</span><span>0909</span><span>0910</span><span>0911</span><span>0912</span><span>0913</span><span>0914</span><span>0915</span><span>0916</span><span>0917</span><span>0918</span><span>0919</span><span>0920</span><span>0921</span><span>0922</span><span>0923</span><span>0924</span><span>0925</span><span>0926</span><span>0927</span><span>0928</span><span>0929</span><span>0930</span><span>0931</span><span>0932</span><span>0933</span><span>0934</span><span>0935</span><span>0936</span><span>0937</span><span>0938</span><span>0939</span><span>0940</span><span>0941</span></div><div class="listing-code"><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// ELF 可执行文件的格式</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ELF_MAGIC</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;"> 0x</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">464C457F</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">U</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 小端序下的 &quot;\\x7FELF&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 文件头部</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> elfhdr {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> magic;</span><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  // 必须等于 ELF_MAGIC</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  uchar </span><span style="--shiki-light:#E36209;--shiki-dark:#FFAB70;">elf</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">[</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">12</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">];</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ushort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ushort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> machine;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> version;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> entry;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> phoff;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shoff;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flags;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ushort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> ehsize;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ushort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> phentsize;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ushort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> phnum;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ushort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shentsize;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ushort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shnum;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  ushort</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> shstrndx;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// 程序段头部</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">struct</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> proghdr {</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> type;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> off;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> vaddr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> paddr;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> filesz;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> memsz;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flags;</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  uint</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> align;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">};</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Proghdr type 的取值</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ELF_PROG_LOAD</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">           1</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">// Proghdr flags 的标志位</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ELF_PROG_FLAG_EXEC</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      1</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ELF_PROG_FLAG_WRITE</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">     2</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">#define</span><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;"> ELF_PROG_FLAG_READ</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">      4</span></span>
<span class="line"></span></code></pre></div></div>`,3)])])}const y=i(l,[["render",h]]);export{g as __pageData,y as default};
