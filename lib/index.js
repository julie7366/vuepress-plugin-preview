const path= require('path');
// 函数式:
module.exports = (options, context) => ({
    define() {
      //全局函数
      return {
        selector: options.selector||'.theme-default-content img'
      };
    },
    name:'vuepress-plugin-preview',
    // 引入rootMixin
    clientRootMixin: path.resolve(__dirname, "clientRootMixin.js")
});