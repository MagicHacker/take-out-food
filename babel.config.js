module.exports = {
  presets: ["@vue/cli-plugin-babel/preset"],
  plugins: [
    [
      "@nutui/babel-plugin-separate-import",
      {
        libraryName: "@nutui/nutui",
        style: "css"
      }
    ]
  ]
};
