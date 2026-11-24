# xv6 中文版

MIT 6.828 教材《xv6: a simple, Unix-like teaching operating system》（x86 版，rev11）的简体中文全文翻译，附带可直接阅读的静态站点。

在线阅读：<https://stx-x.github.io/xv6-book-zh/>

## 翻译范围

- 依据 `book-rev11.pdf`（2018 年 9 月 4 日草案，108 页）逐段全译，未作增补、删减或改写。
- 覆盖前言与致谢、第 0–7 章、附录 A（PC 硬件）、附录 B（引导加载器），共 11 个部分。
- 段落、小节、插图编号、代码清单与行号引用均与原书一一对应。
- 原书正文中的行号引用（如 `(1230)`）是 `xv6-rev11.pdf` 源码手册中的“页号 + 行内序号”，译文原样保留。
- 插图沿用原书 SVG 矢量图，图注已译；图内标注（寄存器名、地址、源码标识符）保留英文，以免破坏图示布局。
- 表格（系统调用表、锁表、Xeon 延迟表）的表头与说明文字已译，代码标识符保留原文。

## 目录结构

```
├── content/            译文源文件（Markdown，含占位符）
│   ├── ch0.md … ch7.md 第 0–7 章
│   ├── appA.md/appB.md 附录 A、B
│   ├── preface.md      前言与致谢
│   └── glossary.json   图注与表格术语对照
├── docs/               VitePress 站点
│   ├── .vitepress/     配置与自定义主题
│   ├── fig/            插图（由 SVG 渲染并裁边）
│   └── *.md            构建产物（由 tools/build.py 生成）
├── src-troff/          原书 troff 源与插图 SVG（MIT 许可）
└── tools/
    ├── parse.py        troff → 结构化 JSON
    ├── lines.py        重建源码手册行号映射
    ├── figures.py      SVG → 裁边 PNG
    ├── highlight.mjs   Shiki 双主题高亮
    ├── build.py        占位符展开 → VitePress 页面
    └── check.py        段落/图表数量一致性校验
```

## 技术栈

| 组件 | 作用 |
| --- | --- |
| VitePress 1.x | 静态站点生成：侧边栏、页内目录、上一页/下一页、本地搜索、明暗主题 |
| Shiki | 代码高亮，同时输出 light/dark 双主题色值，随主题切换 |
| 自研 Python 管线 | 解析 troff 源、重建行号映射、渲染插图、展开占位符 |
| 自定义 CSS | 中文正文排版（字号、行距、两端对齐）、代码清单行号槽、插图卡片、移动端断点 |

## 本地构建

```bash
npm install
python3 tools/parse.py      # 解析原书 troff
python3 tools/lines.py      # 生成行号映射
python3 tools/figures.py    # 渲染插图（需本机 Chrome）
node tools/highlight.mjs    # 代码高亮
python3 tools/build.py      # 生成 docs/*.md
npx vitepress build docs    # 构建静态站点
npx vitepress dev docs      # 本地预览
```

## 许可

原书正文与源码版权归 Russ Cox、Frans Kaashoek、Robert Morris 所有，以 MIT 许可发布，允许复制、修改、分发与再发布，惟须保留版权声明与许可声明。本译本保留上述声明，并以相同方式自由提供。
