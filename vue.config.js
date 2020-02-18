/* eslint-disable @typescript-eslint/no-var-requires */
const path = require("path");
const resolve = dir => path.join(__dirname, dir);
module.exports = {
  chainWebpack: config => {
    config.module
      .rule("svg")
      .exclude.add(resolve("./src/icon"))
      .end();
    config.module
      .rule("icon")
      .test(/\.svg$/)
      .include.add(resolve("./src/icon"))
      .end()
      .use("svg-sprite-loader")
      .loader("svg-sprite-loader")
      .options({
        symbolId: "icon-[name]"
      });
  }
};
