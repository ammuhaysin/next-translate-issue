const { locales, defaultLocale } = require("./i18n.js");
const withTM = require("next-transpile-modules")(["@org/common"]);

module.exports = withTM({
  i18n: { locales, defaultLocale },
});
