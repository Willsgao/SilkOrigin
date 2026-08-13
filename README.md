# SilkOrigin Bio 官网

苏州丝源生物科技有限公司响应式企业官网。项目采用 React、TypeScript 和 Vite，页面内容与组件结构分离，便于后续手动维护文本与图片。

## 本地运行

```bash
npm install
npm run dev
```

开发服务器默认运行于 `http://127.0.0.1:5178`。项目已允许通过 `*.ngrok-free.dev` 域名访问，可使用 `ngrok http 5178` 创建临时公网预览。

生产构建：

```bash
npm run build
```

## 更新网站内容

- 公司资料、产品、应用、技术路线、发展历程和联系方式：编辑 `src/content/site.ts`
- 网站图片：替换 `public/images` 下的同名文件
- 页面布局与组件：编辑 `src/App.tsx`
- 颜色、字体和响应式规则：编辑 `src/styles.css`

`src/content/site.ts` 中有部分内容明确标记为架构示例，正式上线前需使用公司确认的产品、技术、专利与联系方式替换。

## 图片文件说明

- `hero-silk.avif`：首页主视觉
- `product-*.avif`：产品与服务图片
- `application-*.avif`：应用领域图片
- `about-lab.avif`：关于我们图片

建议保持原文件名直接替换，以免修改代码。首页图片推荐横向 16:9，其他图片建议不低于 1600px 宽。
