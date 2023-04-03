"use strict";
const common_vendor = require("../../common/vendor.js");
const _sfc_main = {
  __name: "index",
  setup(__props) {
    const btnList = common_vendor.reactive({
      info: [{ name: "Model 3", id: 1 }, { name: "Model Y", id: 2 }]
    });
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(btnList.info, (item, index, i0) => {
          return {
            a: common_vendor.t(item.name),
            b: index,
            c: index
          };
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-20ac5870"], ["__file", "/Users/nan/github/uni-tesla/pages/car/index.vue"]]);
wx.createPage(MiniProgramPage);
