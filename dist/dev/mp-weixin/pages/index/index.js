"use strict";
const common_vendor = require("../../common/vendor.js");
if (!Array) {
  const _component_uni_swiper_dot = common_vendor.resolveComponent("uni-swiper-dot");
  _component_uni_swiper_dot();
}
const __default__ = {
  data() {
    return {
      share: {
        title: "\u6709\u4E8B\u627E\u8D85\u4EBA",
        path: "/pages/index/index",
        imageUrl: "",
        desc: "\u4EE3\u7801\u662F\u5199\u7ED9\u4EBA\u770B\u76841212",
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
      imgStyle: {
        margin: ""
      },
      style: {
        height: ""
      },
      info: [
        {
          url: "/static/images/Homepage-Model-Y.jpg",
          h1: "Model Y",
          p: "\u9AD8\u6027\u80FD\u5168\u667A\u80FDSUV",
          a: "\u4E86\u89E3\u66F4\u591A",
          href: "/pages/car/index?tab=1",
          info: [{
            text: "2,100 +",
            p: "\u5347\u50A8\u7269\u7A7A\u95F4"
          }, {
            text: "600\u516C\u91CC",
            p: "\u7EED\u822A\u91CC\u7A0B",
            p2: "CLTC \u7EFC\u5408\u5DE5\u51B5"
          }, {
            text: "\u5168\u9A71\u8F6E\u52A8",
            p: "\u53CC\u7535\u673A"
          }]
        },
        {
          url: "/static/images/Homepage-Model-X.jpg",
          h1: "Model 3",
          p: "\u9AD8\u6027\u80FD\u5168\u667A\u80FD\u8F7F\u8F66",
          a: "\u4E86\u89E3\u66F4\u591A",
          href: "/pages/car/index?tab=2",
          info: [{
            text: "3.3 \u79D2",
            p: "\u767E\u516C\u91CC\u52A0\u901F*"
          }, {
            text: "675\u516C\u91CC",
            p: "\u7EED\u822A\u91CC\u7A0B",
            p2: "CLTC \u7EFC\u5408\u5DE5\u51B5"
          }, {
            text: "\u5168\u9A71\u8F6E\u52A8",
            p: "\u53CC\u7535\u673A"
          }]
        },
        {
          url: "/static/images/Homepage-Model-S.jpg",
          h1: "Model S",
          p: "\u8C6A\u534E\u65D7\u8230\u8F7F\u8DD1",
          a: "\u4E86\u89E3\u66F4\u591A",
          href: "/pages/car/index?tab=2",
          info: [{
            text: "672\u516C\u91CC",
            p: "\u7EED\u822A\u91CC\u7A0B(CLTC)"
          }, {
            text: "2.1 \u79D2",
            p: "\u767E\u516C\u91CC\u52A0\u901F*"
          }, {
            text: "322\u516C\u91CC/\u65F6",
            p: "\u6700\u9AD8\u8F66\u901F+"
          }]
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
      query.selectAll(".swiper-item").fields({
        dataset: true,
        rect: true,
        id: true,
        size: true
      });
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
          time: "2023\u5E744\u6708"
        },
        {
          url: "/static/images/magazine2.jpg",
          time: "2023\u5E743\u6708"
        },
        {
          url: "/static/images/magazine3.jpg",
          time: "2023\u5E742\u6708"
        },
        {
          url: "/static/images/magazine4.jpg",
          time: "2023\u5E741\u6708"
        }
      ]
    });
    const setSwiperMagHeight = (current = 0) => {
      let query = common_vendor.index.createSelectorQuery().in(instance);
      query.selectAll(".swiper-item-mag").fields({
        dataset: true,
        rect: true,
        id: true,
        size: true
      });
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
        k: magazine.indicatorDots,
        l: magazine.autoplay,
        m: magazine.duration,
        n: magazine.Height
      };
    };
  }
});
const MiniProgramPage = /* @__PURE__ */ common_vendor._export_sfc(_sfc_main, [["__scopeId", "data-v-83a5a03c"], ["__file", "/Users/nannan/github/uni-tesla/src/pages/index/index.vue"]]);
wx.createPage(MiniProgramPage);
