# 基于镜像node版本
FROM node:20.10.0
# 参数，node的环境为生产环境
ENV NODE_ENV=production
# 任意ip
ENV HOST 0.0.0.0
# 容器内创建目录/nuxt3
RUN mkdir -p /nuxt3
# 复制当前的内容到容器内容部目录/nuxt3
COPY .output/public /nuxt3/public/
COPY .output/server /nuxt3/server/
COPY .output/nitro.json /nuxt3/nitro.json
# 切换工作目录到/nuxt3
WORKDIR /nuxt3
# 暴露端口3000，默认端口
EXPOSE 3000
# start
CMD ["node","./server/index.mjs"]