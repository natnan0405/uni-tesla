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
const __default__ = {
  data() {
    return {
      share: {
        title: "有事找超人",
        path: "/pages/index/index",
        // 全局分享的路径，比如 首页
        imageUrl: "",
        // 全局分享的图片(可本地可网络)
        desc: "代码是写给人看的1212",
        content: ""
      }
    };
  }
};
const _sfc_main = /* @__PURE__ */ Object.assign(__default__, {
  __name: "index",
  setup(__props) {
    const wxInfo = common_vendor.ref(common_vendor.wx$1.getSystemInfoSync());
    common_vendor.onMounted(() => {
      setTimeout(() => {
        setSwiperHeight();
        setSwiperMagHeight();
      }, 100);
      console.log(wxInfo.value);
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
          href: "/pages/car/index?tab=1",
          info: [{ text: "2,100 +", p: "升储物空间" }, { text: "600公里", p: "续航里程", p2: "CLTC 综合工况" }, { text: "全驱轮动", p: "双电机" }]
        },
        {
          url: "/static/images/Homepage-Model-X.jpg",
          h1: "Model 3",
          p: "高性能全智能轿车",
          a: "了解更多",
          href: "/pages/car/index?tab=2",
          info: [{ text: "3.3 秒", p: "百公里加速*" }, { text: "675公里", p: "续航里程", p2: "CLTC 综合工况" }, { text: "全驱轮动", p: "双电机" }]
        },
        {
          url: "/static/images/Homepage-Model-S.jpg",
          h1: "Model S",
          p: "豪华旗舰轿跑",
          a: "了解更多",
          href: "/pages/car/index?tab=2",
          info: [{ text: "672公里", p: "续航里程(CLTC)" }, { text: "2.1 秒", p: "百公里加速*" }, { text: "322公里/时", p: "最高车速+" }]
        }
      ]
    });
    const navigateTo = (href) => {
      console.log(href);
      common_vendor.index.navigateTo({
        url: href
      });
    };
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
    const magazine = common_vendor.reactive({
      indicatorDots: true,
      autoplay: false,
      duration: 500,
      swiperHeight: "",
      Height: "",
      info: [
        {
          url: "/static/images/magazine1.jpg",
          time: "2023年4月"
        },
        {
          url: "/static/images/magazine2.jpg",
          time: "2023年3月"
        },
        {
          url: "/static/images/magazine3.jpg",
          time: "2023年2月"
        },
        {
          url: "/static/images/magazine4.jpg",
          time: "2023年1月"
        }
      ]
    });
    const setSwiperMagHeight = (current = 0) => {
      let query = common_vendor.index.createSelectorQuery().in(instance);
      query.selectAll(".swiper-item-mag").fields({ dataset: true, rect: true, id: true, size: true });
      query.exec((eles) => {
        magazine.Height = 1805 / 1500 * eles[0][current].width + "px";
        magazine.swiperHeight = 1805 / 1500 * (eles[0][current].width - 40) + "px";
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
            f: common_vendor.o(($event) => navigateTo(item.href), index),
            g: common_vendor.n("swiper-item" + index),
            h: index
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
        }),
        i: common_vendor.f(magazine.info, (item, k0, i0) => {
          return {
            a: item.url,
            b: common_vendor.t(item.time),
            c: item.time
          };
        }),
        j: magazine.swiperHeight,
        k: _ctx.indicatorDots,
        l: magazine.autoplay,
        m: magazine.duration,
        n: magazine.Height
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-1cf27b2a"], ["__file", "/Users/nan/github/uni-tesla/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
