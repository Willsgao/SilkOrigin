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

## Docker 部署

项目使用多阶段镜像构建：Node.js 只负责生成静态文件，最终由 Nginx 提供网站服务。

在本机或服务器构建并启动：

```bash
docker compose up -d --build
```

默认监听宿主机 `80` 端口，访问 `http://服务器公网IP`。如果端口 80 已被占用，可以指定其他端口：

```bash
SILKORIGIN_PORT=8080 docker compose up -d --build
```

查看运行状态和日志：

```bash
docker compose ps
docker compose logs -f silkorigin
```

停止服务：

```bash
docker compose down
```

### 阿里云服务器部署

服务器安装 Git 和 Docker 后执行：

```bash
git clone https://github.com/Willsgao/SilkOrigin.git
cd SilkOrigin
docker compose up -d --build
```

同时需要在阿里云安全组中放行 TCP `80` 端口。代码更新后重新构建服务：

```bash
cd SilkOrigin
git pull origin main
docker compose up -d --build
```

生产环境不需要运行 `npm run dev`，也不需要 ngrok 或 Cloudflare Tunnel。

### 离线镜像部署

当服务器无法访问 Docker Hub 时，可以直接导入仓库中的 Linux AMD64 镜像：

```bash
docker load -i deploy/silkorigin-image.tar
docker compose up -d --no-build
```

该离线镜像需要在网站代码更新后重新构建并导出，普通在线环境仍优先使用 `docker compose up -d --build`。

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
