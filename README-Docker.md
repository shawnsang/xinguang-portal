# Docker 部署指南

本项目已配置好 Docker 支持，可以通过以下方式构建和运行。

## 构建 Docker 镜像

### 方法一：使用 Docker 命令

```bash
# 构建镜像
docker build -t xinguang-portal .

# 运行容器
docker run -p 3000:3000 xinguang-portal
```

### 方法二：使用 Docker Compose（推荐）

```bash
# 构建并启动服务
docker-compose up --build

# 后台运行
docker-compose up -d --build

# 停止服务
docker-compose down
```

## 访问应用

应用启动后，可以通过以下地址访问：
- http://localhost:3000

## Docker 镜像特性

- 基于 Node.js 18 Alpine 镜像，体积小巧
- 多阶段构建，优化镜像大小
- 使用非 root 用户运行，提高安全性
- 支持 Next.js standalone 输出模式
- 包含 .dockerignore 文件，排除不必要的文件

## 环境变量

可以通过环境变量配置应用：

- `NODE_ENV`: 运行环境（默认：production）
- `PORT`: 端口号（默认：3000）

## 生产部署

在生产环境中，建议：

1. 使用具体的镜像标签而不是 latest
2. 配置适当的资源限制
3. 设置健康检查
4. 使用 Docker Swarm 或 Kubernetes 进行编排

```bash
# 构建带标签的镜像
docker build -t xinguang-portal:v1.0.0 .

# 推送到镜像仓库
docker tag xinguang-portal:v1.0.0 your-registry/xinguang-portal:v1.0.0
docker push your-registry/xinguang-portal:v1.0.0
```