# xv6 中文版

MIT 6.828 教材《xv6: a simple, Unix-like teaching operating system》（x86 版，rev11）的简体中文全文翻译，以及配套的 xv6 源代码中文注释版，附带可直接阅读的静态站点。

在线阅读：<https://stx-x.github.io/xv6-book-zh/>

## 翻译范围

**教材正文**（`/` 至 `/appB`）

- 依据 `book-rev11.pdf`（2018 年 9 月 4 日草案，108 页）逐段全译，未作增补、删减或改写。
- 覆盖前言与致谢、第 0–7 章、附录 A（PC 硬件）、附录 B（引导加载器），共 11 个部分。
- 段落、小节、插图编号、代码清单与行号引用均与原书一一对应。
- 原书正文中的行号引用（如 `(1230)`）是 `xv6-rev11.pdf` 源码手册中的“页号 + 行内序号”，译文原样保留。
- 插图沿用原书矢量图，图注已译；图 1-2、图 1-3 因原 SVG 引用了作者本机的位图而缺字，已按 PDF 原页重新裁剪补全。
- 表格（系统调用表、锁表、Xeon 延迟表）的表头与说明文字已译，代码标识符保留原文。

**源代码**（`/src/`）

- 收录 xv6 x86 版全部 75 个 `.c` / `.h` / `.S` 文件，其中 61 个含注释的文件已逐条译为中文，共 1,331 处注释。
- 代码逐字保留：脚本比对确认去掉注释后的代码与上游完全一致（61/61 通过）。
- 行号槽显示的是源码手册 `xv6-rev11.pdf` 的编号，与正文中的 `(1230)` 一类引用可直接对照。

## 目录结构

```
├── content/
│   ├── ch0.md … ch7.md 第 0–7 章
│   ├── appA.md/appB.md 附录 A、B
│   ├── preface.md      前言与致谢
│   ├── glossary.json   图注与表格术语对照
│   └── src-zh/         61 个源文件的注释译文（按文件分片的 JSON）
├── docs/               VitePress 站点
│   ├── .vitepress/     配置与自定义主题
│   ├── fig/            插图
│   ├── src/            源码阅读页（生成）
│   └── *.md            正文页（生成）
├── src-troff/          原书 troff 源与插图
├── work/               中间产物（解析结果、行号映射、高亮 HTML）
└── tools/
    ├── parse.py        troff → 结构化 JSON
    ├── lines.py        重建源码手册行号映射
    ├── figures.py      SVG → 裁边 PNG
    ├── srcextract.py   抽取源码注释
    ├── srctranslate.py 回填注释译文（保持行数不变）
    ├── figzh.py        生成中文重绘插图（复用原图矢量几何）
    ├── figtext.py      抽取插图文字
    ├── figzh.py        生成中文重绘插图（复用原图矢量几何）
    ├── figtext.py      抽取插图文字
    ├── figzh.py        生成中文重绘插图（复用原图矢量几何）
    ├── figtext.py      抽取插图文字
    ├── srcpages.py     生成源码页数据
    ├── srcrender.py    渲染源码页
    ├── highlight.mjs   Shiki 双主题高亮
    ├── build.py        正文页生成
    └── check.py        段落/图表数量一致性校验
```

## 技术栈

| 组件 | 作用 |
| --- | --- |
| VitePress 1.x | 静态站点生成：侧边栏、页内目录、上下页、本地搜索、明暗主题 |
| Shiki | 代码高亮，同时输出 light/dark 双主题色值 |
| 自研 Python 管线 | 解析 troff、重建行号、渲染插图、抽取与回填注释译文 |
| 自定义 CSS | 中文排版、代码行号槽、插图卡片、移动端断点 |

## 本地构建

构建有严格的先后顺序：正文与源码页共用同一份 Shiki 高亮缓存，若跳过数据生成直接高亮，页面会停留在上一版内容。

```bash
npm install

# 1. 正文：解析 troff → 重建行号映射 → 渲染插图（含中文重绘） → 高亮代码 → 生成页面
python3 tools/parse.py && python3 tools/lines.py
python3 tools/figures.py            # 原图，需本机 Chrome
python3 tools/figzh.py              # 中文重绘图
node tools/highlight.mjs
python3 tools/build.py

# 2. 源码：回填注释译文 → 生成行号与元数据 → 高亮 → 渲染页面
python3 tools/srctranslate.py
python3 tools/srcpages.py
node tools/highlight.mjs
python3 tools/srcrender.py

# 3. 构建与预览
npx vitepress build docs
npx vitepress dev docs
```

校验脚本：

```bash
python3 tools/verify_src.py         # 代码逐字节一致、注释条数对齐
python3 tools/check.py              # 章节段落数与图表数对齐原文
python3 tools/check_anchors.py      # 线上内部锚点可达性
```

## 许可

原书正文与源码版权归 Russ Cox、Frans Kaashoek、Robert Morris 所有，以 MIT 许可发布，允许复制、修改、分发与再发布，惟须保留版权声明与许可声明。本译本保留上述声明，并以相同方式自由提供。
