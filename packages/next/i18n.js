module.exports = {
  locales: ["ar", "en"],
  defaultLocale: "ar",
  currentPagesDir: "pages_",
  finalPagesDir: "pages",
  // localesPath: "locales",
  localesPath: "@org/common/src/locales",
  pages: {
    "*": ["common"],
    // "/": ["home", "example"],
    "/client/manage-clients": ["manage-clients"],
  },
};
