import{_ as a,o as n,c as i,a0 as p}from"./chunks/framework.Bb-2yHh0.js";const g=JSON.parse('{"title":"entry.S","description":"","frontmatter":{"title":"entry.S","outline":false,"aside":false},"headers":[],"relativePath":"src/entry-S.md","filePath":"src/entry-S.md"}'),l={name:"src/entry-S.md"};function h(k,s,t,e,r,d){return n(),i("div",null,[...s[0]||(s[0]=[p(`<h1 id="entry-s" tabindex="-1">entry.S <a class="header-anchor" href="#entry-s" aria-label="Permalink to &quot;entry.S&quot;">​</a></h1><div class="src-meta">68 行 · 启动 · 注释已译为中文，代码逐字保留</div><div class="listing numbered src-listing"><div class="listing-gutter" aria-hidden="true"><span>1000</span><span>1001</span><span>1002</span><span>1003</span><span>1004</span><span>1005</span><span>1006</span><span>1007</span><span>1008</span><span>1009</span><span>1010</span><span>1011</span><span>1012</span><span>1013</span><span>1014</span><span>1015</span><span>1016</span><span>1017</span><span>1018</span><span>1019</span><span>1020</span><span>1021</span><span>1022</span><span>1023</span><span>1024</span><span>1025</span><span>1026</span><span>1027</span><span>1028</span><span>1029</span><span>1030</span><span>1031</span><span>1032</span><span>1033</span><span>1034</span><span>1035</span><span>1036</span><span>1037</span><span>1038</span><span>1039</span><span>1040</span><span>1041</span><span>1042</span><span>1043</span><span>1044</span><span>1045</span><span>1046</span><span>1047</span><span>1048</span><span>1049</span><span>1050</span><span>1051</span><span>1052</span><span>1053</span><span>1054</span><span>1055</span><span>1056</span><span>1057</span><span>1058</span><span>1059</span><span>1060</span><span>1061</span><span>1062</span><span>1063</span><span>1064</span><span>1065</span><span>1066</span><span>1067</span></div><div class="listing-code"><pre class="shiki shiki-themes github-light github-dark" style="--shiki-light:#24292e;--shiki-dark:#e1e4e8;--shiki-light-bg:#fff;--shiki-dark-bg:#24292e;" tabindex="0"><code><span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># xv6 内核从这个文件开始执行。该文件与</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 内核 C 代码链接在一起，因此可以引用 main() 等内核符号。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 引导块（bootasm.S 与 bootmain.c）跳转到下面的 entry。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">        </span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Multiboot 头部，供 GNU Grub 之类的 multiboot 引导加载器使用。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># http://www.gnu.org/software/grub/manual/multiboot/multiboot.html</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 使用 GRUB 2 时，你可以从存放在 Linux 文件系统中的文件启动 xv6：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 把 kernel 或 kernelmemfs 复制到 /boot，</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 然后加入下面这个菜单项：</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">#</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># menuentry &quot;xv6&quot; {</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># insmod ext2</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># set root=&#39;(hd0,msdos1)&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># set kernel=&#39;/boot/kernel&#39;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># echo &quot;Loading \${kernel}...&quot;</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># multiboot \${kernel} \${kernel}</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># boot</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># }</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;asm.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;memlayout.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;mmu.h&quot;</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">#</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">include</span><span style="--shiki-light:#032F62;--shiki-dark:#9ECBFF;"> &quot;param.h&quot;</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># Multiboot 头部。供直接的 multiboot 加载器使用的数据。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.p2align </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">2</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.text</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.globl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> multiboot_header</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">multiboot_header:</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> magic 0x1badb002</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  #</span><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">define</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> flags 0</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .long magic</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .long </span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flags</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  .long (-magic-</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">flags</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 按约定，_start 符号指定 ELF 入口点。</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 由于我们尚未建立虚拟内存，入口点就是</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># &#39;entry&#39; 的物理地址。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.globl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> _start</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">_start = V2P_WO(entry)</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;"># 在引导处理器上进入 xv6，此时分页尚未开启。</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">.globl</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> entry</span></span>
<span class="line"><span style="--shiki-light:#6F42C1;--shiki-dark:#B392F0;">entry:</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 为 4 MB 页启用页大小扩展</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl    %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cr4</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  orl     $(CR4_PSE), %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl    %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cr4</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置页目录</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl    $(V2P_WO(entrypgdir)), %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl    %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cr3</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 开启分页。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl    %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cr0</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  orl     $(CR0_PG|CR0_WP), %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl    %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">cr0</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 设置栈指针。</span></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">  movl $(stack + KSTACKSIZE), %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">esp</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 跳转到 main()，并切换到</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 高地址处执行。这里需要间接调用，因为</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # 汇编器对直接跳转会生成</span></span>
<span class="line"><span style="--shiki-light:#6A737D;--shiki-dark:#6A737D;">  # PC 相对的指令。</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  mov</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> $main, %</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span></span>
<span class="line"><span style="--shiki-light:#D73A49;--shiki-dark:#F97583;">  jmp</span><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;"> *%</span><span style="--shiki-light:#005CC5;--shiki-dark:#79B8FF;">eax</span></span>
<span class="line"></span>
<span class="line"><span style="--shiki-light:#24292E;--shiki-dark:#E1E4E8;">.comm stack, KSTACKSIZE</span></span>
<span class="line"></span></code></pre></div></div>`,3)])])}const y=a(l,[["render",h]]);export{g as __pageData,y as default};
