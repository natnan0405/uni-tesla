"use strict";
Object.defineProperty(exports, Symbol.toStringTag, { value: "Module" });
const common_vendor = require("./common/vendor.js");
const utils_share = require("./utils/share.js");
if (!Math) {
  "./pages/index/index.js";
  "./pages/map/index.js";
  "./pages/find/index.js";
  "./pages/activity/index.js";
  "./pages/me/index.js";
  "./pages/car/index.js";
}
const _sfc_main = {
  onLaunch: function() {
    console.log("App Launch");
  },
  onShow: function() {
    console.log("App Show");
  },
  onHide: function() {
    console.log("App Hide");
  }
};
const App = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__file", "/Users/nan/github/uni-tesla/App.vue"]]);
function createApp() {
  const app = common_vendor.createSSRApp(App);
  app.mixin(utils_share.share);
  return {
    app
  };
}
createApp().app.mount("#app");
exports.createApp = createApp;
