# 朱意 · AI 产品经理作品集

暖色 Scrapbook / 编辑部风格单页站点。项目文案与简历口径对齐。

## 本地预览

```bash
cd ~/Projects/zhu-yi-portfolio
python3 -m http.server 5173
```

打开 http://localhost:5173

## 怎么改内容

只改 **`js/content.js`**：

| 字段 | 用途 |
|------|------|
| `meta` | 姓名、联系方式、照片、简历路径 |
| `hero` | 首页文案与标签 |
| `coordinates` | 四个入口卡 |
| `experience.items` | 代表项目（对齐简历） |
| `vibe` | Vibe Coding 方法与 Demo 链接 |
| `thinking` | 个人侧写 |
| `contact` | 联系区 |

照片：`assets/hero-photo.png`  
简历：`assets/resume.pdf`

## 结构

```
index.html
css/styles.css
js/content.js   # 文案
js/app.js       # 渲染与动效
assets/
```
