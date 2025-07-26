const {defineConfig} = require("@vue/cli-service");

module.exports = defineConfig({
  transpileDependencies: true,

  // 1. 部署基础路径
  publicPath:
    process.env.NODE_ENV === "production"
      ? "/action_vue/" // 仓库名
      : "/",

  // 2. 打包输出目录（默认 dist）
  outputDir: "dist",
});
