const getConfig = require("vuepress-bar");

module.exports = {
  title: "Today I Learned",
  description: "",
  themeConfig: {
    ...getConfig(`${__dirname}/../`)
  }
};
