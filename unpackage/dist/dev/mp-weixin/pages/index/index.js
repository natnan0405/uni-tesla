"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _easycom_uni_swiper_dot2 = common_vendor.resolveComponent("uni-swiper-dot");
  _easycom_uni_swiper_dot2();
}
const _easycom_uni_swiper_dot = () => "../../uni_modules/uni-swiper-dot/components/uni-swiper-dot/uni-swiper-dot.js";
if (!Math) {
  _easycom_uni_swiper_dot();
}
const _sfc_main = {
  __name: "index",
  setup(__props) {
    common_vendor.onMounted(() => {
      setTimeout(() => {
        setSwiperHeight();
      }, 100);
    });
    const _DATA = common_vendor.reactive({
      windowHeight: common_vendor.index.getWindowInfo().windowHeight,
      windowHeight: common_vendor.index.getWindowInfo().windowHeight
    });
    const swiper = common_vendor.reactive({
      current: 1,
      mode: "round",
      swiperDotIndex: 1,
      dotsStyles: {
        backgroundColor: "rgba(255, 255, 255, .5)",
        border: "1px rgba(255, 255, 255, .5) solid",
        color: "#fff",
        selectedBackgroundColor: "rgba(255, 255, 255, .9)",
        selectedBorder: "1px rgba(255, 255, 255, .9) solid",
        bottom: 30
      },
      swiperHeight: "",
      imgStyle: { margin: "" },
      style: { height: "" },
      info: [
        {
          url: "/static/images/Homepage-Model-Y.jpg",
          h1: "Model Y",
          p: "高性能全智能SUV",
          a: "了解更多",
          href: "",
          info: [{ text: "2,100 +", p: "升储物空间" }, { text: "600公里", p: "续航里程", p2: "CLTC 综合工况" }, { text: "全驱轮动", p: "双电机" }]
        },
        {
          url: "/static/images/Homepage-Model-X.jpg",
          h1: "Model 3",
          p: "高性能全智能轿车",
          a: "了解更多",
          href: "",
          info: [{ text: "3.3 秒", p: "百公里加速*" }, { text: "675公里", p: "续航里程", p2: "CLTC 综合工况" }, { text: "全驱轮动", p: "双电机" }]
        },
        {
          url: "/static/images/Homepage-Model-S.jpg",
          h1: "Model S",
          p: "豪华旗舰轿跑",
          a: "了解更多",
          href: "",
          info: [{ text: "672公里", p: "续航里程(CLTC)" }, { text: "2.1 秒", p: "百公里加速*" }, { text: "322公里/时", p: "最高车速+" }]
        }
      ]
    });
    const changeSwiper = (e) => {
      swiper.current = e.detail.current;
      common_vendor.nextTick$1(() => {
        setSwiperHeight();
      });
    };
    const clickItem = (e) => {
      swiper.swiperDotIndex = e;
    };
    const instance = common_vendor.getCurrentInstance();
    const setSwiperHeight = (current = 0) => {
      let query = common_vendor.index.createSelectorQuery().in(instance);
      query.selectAll(".swiper-item").fields({ dataset: true, rect: true, id: true, size: true });
      query.exec((eles) => {
        swiper.swiperHeight = 1576 / 600 * eles[0][current].width;
        if (swiper.swiperHeight > _DATA.windowHeight) {
          const marginTop = (_DATA.windowHeight - swiper.swiperHeight) / 2 + "px";
          swiper.style = {
            height: _DATA.windowHeight - 80 + "px"
          };
          swiper.imgStyle = {
            height: _DATA.windowHeight - 80 + "px",
            marginTop: `${marginTop}`
          };
        } else {
          swiper.style = {
            height: swiper.swiperHeight + "px"
          };
          swiper.imgStyle = {
            height: _DATA.windowHeight - 80 + "px",
            marginTop: 0
          };
        }
      });
    };
    return (_ctx, _cache) => {
      return {
        a: common_vendor.f(swiper.info, (item, index, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.h1),
            c: common_vendor.t(item.p),
            d: common_vendor.t(item.a),
            e: common_vendor.f(item.info, (v, i, i1) => {
              return {
                a: common_vendor.t(v.text),
                b: common_vendor.t(v.p),
                c: common_vendor.t(v.p2),
                d: i
              };
            }),
            f: common_vendor.n("swiper-item" + index),
            g: index
          };
        }),
        b: common_vendor.s(swiper.imgStyle),
        c: common_vendor.s(swiper.style),
        d: common_vendor.o(changeSwiper),
        e: swiper.swiperDotIndex,
        f: common_vendor.s(swiper.style),
        g: common_vendor.o(clickItem),
        h: common_vendor.p({
          info: swiper.info,
          current: swiper.current,
          mode: swiper.mode,
          ["dots-styles"]: swiper.dotsStyles,
          field: "default"
        })
      };
    };
  }
};
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/nan/github/uni-app/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
