<template>
	<div class="page-box">
		<uni-swiper-dot class="uni-swiper-dot-box" @clickItem="clickItem" :info="swiper.info" :current="swiper.current"
			:mode="swiper.mode" :dots-styles="swiper.dotsStyles" field="default">
			<swiper class="swiper-box" @change="changeSwiper" :current="swiper.swiperDotIndex" :style="swiper.style">
				<swiper-item v-for="(item, index) in swiper.info" :key="index">
					<view class="swiper-item" :class="'swiper-item' + index">
						<image class="image_fix" mode="widthFix" :src="item.url" :style="swiper.imgStyle"></image>
						<div class="position-box" :style="swiper.style">
							<div class="flex-box">
								<div class="top">
									<h1 class="title">{{ item.h1 }}</h1>
									<p class="describe">{{ item.p }}</p>
									<p class="more">{{ item.a }}</p>
								</div>
								<div class="bottom">
									<ul class="ul">
										<li class="li" v-for="(v, i) in item.info" :key="i">
											<p class="text">{{ v.text }}</p>
											<p class="p">{{ v.p }}</p>
											<p class="p">{{ v.p2 }}</p>
										</li>
									</ul>
									<p class="btn btn-black">立即订购</p>
									<p class="btn btn-gray" @click="navigateTo(item.href)">预约试驾</p>
								</div>
							</div>
						</div>
					</view>
				</swiper-item>
			</swiper>
		</uni-swiper-dot>
		<!-- 认证二手车模块 -->
		<div class="second-hard-car">
			<h1 class="title">认证二手车</h1>
			<p class="text">品质，别无二致</p>
			<p class="text">实惠，理所应当</p>
			<image src="/static/images/image-two.jpg" mode="widthFix" class="image_fix"></image>
			<div class="btn">购买二手车</div>
		</div>
		<!-- tesla商店模块 -->
		<div class="shop">
			<h1 class="title">Tesla 商店</h1>
			<image src="/static/images/shop.jpg" mode="widthFix" class="image_fix"></image>
			<div class="btn">购买二手车</div>
		</div>
		<!-- 杂志板块 -->
		<view class="magazine">
			<h1 class="title">T - Z O N E</h1>
			<swiper class="swiper" circular :indicator-dots="magazine.indicatorDots" :autoplay="magazine.autoplay"
				:duration="magazine.duration" previous-margin="80px" next-margin="80px" :style="{ height: magazine.Height }">
				<swiper-item v-for="item in magazine.info" :key="item.time">
					<view class="swiper-item-mag swiper-item-mag1">
						<image :src="item.url" mode="heightFix" :style="{ height: magazine.swiperHeight }"></image>
						<p class="time">{{ item.time }}</p>
					</view>
				</swiper-item>
			</swiper>
		</view>
		<!-- 新手指南 -->
		<view class="new-user">
			<image src="/static/images/user-help.jpg" mode="widthFix"></image>
		</view>
	</div>
</template>

<script setup>
	import {
		nextTick,
		onMounted,
		reactive,
		ref,
		getCurrentInstance
	} from 'vue';
	const wxInfo = ref(wx.getSystemInfoSync());

	onMounted(() => {
		setTimeout(() => {
			setSwiperHeight();
			setSwiperMagHeight();
		}, 100);
		console.log(wxInfo.value);
	});

	const _DATA = reactive({
		windowHeight: uni.getWindowInfo().windowHeight,
		windowHeight: uni.getWindowInfo().windowHeight
	});

	/*
	 * swiper 相关
	 */
	const swiper = reactive({
		current: 1,
		mode: 'round',
		swiperDotIndex: 1,
		dotsStyles: {
			backgroundColor: 'rgba(255, 255, 255, .5)',
			border: '1px rgba(255, 255, 255, .5) solid',
			color: '#fff',
			selectedBackgroundColor: 'rgba(255, 255, 255, .9)',
			selectedBorder: '1px rgba(255, 255, 255, .9) solid',
			bottom: 30
		},
		swiperHeight: '',
		imgStyle: {
			margin: ''
		},
		style: {
			height: ''
		},
		info: [{
				url: '/static/images/Homepage-Model-Y.jpg',
				h1: 'Model Y',
				p: '高性能全智能SUV',
				a: '了解更多',
				href: '/pages/car/index?tab=1',
				info: [{
					text: '2,100 +',
					p: '升储物空间'
				}, {
					text: '600公里',
					p: '续航里程',
					p2: 'CLTC 综合工况'
				}, {
					text: '全驱轮动',
					p: '双电机'
				}]
			},
			{
				url: '/static/images/Homepage-Model-X.jpg',
				h1: 'Model 3',
				p: '高性能全智能轿车',
				a: '了解更多',
				href: '/pages/car/index?tab=2',
				info: [{
					text: '3.3 秒',
					p: '百公里加速*'
				}, {
					text: '675公里',
					p: '续航里程',
					p2: 'CLTC 综合工况'
				}, {
					text: '全驱轮动',
					p: '双电机'
				}]
			},
			{
				url: '/static/images/Homepage-Model-S.jpg',
				h1: 'Model S',
				p: '豪华旗舰轿跑',
				a: '了解更多',
				href: '/pages/car/index?tab=2',
				info: [{
					text: '672公里',
					p: '续航里程(CLTC)'
				}, {
					text: '2.1 秒',
					p: '百公里加速*'
				}, {
					text: '322公里/时',
					p: '最高车速+'
				}]
			}
		]
	});
	const navigateTo = href => {
		console.log(href);
		uni.navigateTo({
			url: href
		});
	};
	// -- 动态设置swiper的高度
	const changeSwiper = e => {
		swiper.current = e.detail.current;
		nextTick(() => {
			setSwiperHeight();
		});
	};
	const clickItem = e => {
		swiper.swiperDotIndex = e;
	};
	const instance = getCurrentInstance();
	const setSwiperHeight = (current = 0) => {
		let query = uni.createSelectorQuery().in(instance);
		query.selectAll('.swiper-item').fields({
			dataset: true,
			rect: true,
			id: true,
			size: true
		});
		// 批量获取dom元素时，结果是按照查询的顺序返回的
		query.exec(eles => {
			swiper.swiperHeight = (1576 / 600) * eles[0][current].width;
			if (swiper.swiperHeight > _DATA.windowHeight) {
				// 图片高度>窗口高度？图片高度 = 窗口高度
				const marginTop = (_DATA.windowHeight - swiper.swiperHeight) / 2 + 'px';
				swiper.style = {
					height: _DATA.windowHeight - 80 + 'px'
				};
				swiper.imgStyle = {
					height: _DATA.windowHeight - 80 + 'px',
					marginTop: `${marginTop}`
				};
			} else {
				swiper.style = {
					height: swiper.swiperHeight + 'px'
				};
				swiper.imgStyle = {
					height: _DATA.windowHeight - 80 + 'px',
					marginTop: 0
				};
			}
		});
	};

	/**
	 * swiper 杂志
	 */
	const magazine = reactive({
		indicatorDots: true,
		autoplay: false,
		duration: 500,
		swiperHeight: '',
		Height: '',
		info: [{
				url: '/static/images/magazine1.jpg',
				time: '2023年4月'
			},
			{
				url: '/static/images/magazine2.jpg',
				time: '2023年3月'
			},
			{
				url: '/static/images/magazine3.jpg',
				time: '2023年2月'
			},
			{
				url: '/static/images/magazine4.jpg',
				time: '2023年1月'
			}
		]
	});

	// -- 动态设置swiper高度
	const setSwiperMagHeight = (current = 0) => {
		let query = uni.createSelectorQuery().in(instance);
		query.selectAll('.swiper-item-mag').fields({
			dataset: true,
			rect: true,
			id: true,
			size: true
		});
		// 批量获取dom元素时，结果是按照查询的顺序返回的
		query.exec(eles => {
			magazine.Height = (1805 / 1500) * eles[0][current].width + 'px';
			magazine.swiperHeight = (1805 / 1500) * (eles[0][current].width - 40) + 'px';
		});
	};
</script>

<!-- 分享自定义 -->
<script>
	export default {
		data() {
			return {
				share: {
					title: '有事找超人',
					path: '/pages/index/index', // 全局分享的路径，比如 首页
					imageUrl: '', // 全局分享的图片(可本地可网络)
					desc: '代码是写给人看的1212',
					content: ''
				}
			};
		}
	};
</script>

<style lang="scss" scoped>
	@import '@/static/styles/index.scss';
</style>