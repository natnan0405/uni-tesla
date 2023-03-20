<template>
	<div class="page-box">
		<uni-swiper-dot
			class="uni-swiper-dot-box"
			@clickItem="clickItem"
			:info="swiper.info"
			:current="swiper.current"
			:mode="swiper.mode"
			:dots-styles="swiper.dotsStyles"
			field="default"
		>
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
									<p class="btn btn-gray">预约试驾</p>
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
	</div>
</template>

<script setup>
import { nextTick, onMounted, reactive, ref, getCurrentInstance } from 'vue';

onMounted(() => {
	setTimeout(() => {
		setSwiperHeight();
	}, 100);
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
	imgStyle: { margin: '' },
	style: { height: '' },
	info: [
		{
			url: '/static/images/Homepage-Model-Y.jpg',
			h1: 'Model Y',
			p: '高性能全智能SUV',
			a: '了解更多',
			href: '',
			info: [{ text: '2,100 +', p: '升储物空间' }, { text: '600公里', p: '续航里程', p2: 'CLTC 综合工况' }, { text: '全驱轮动', p: '双电机' }]
		},
		{
			url: '/static/images/Homepage-Model-X.jpg',
			h1: 'Model 3',
			p: '高性能全智能轿车',
			a: '了解更多',
			href: '',
			info: [{ text: '3.3 秒', p: '百公里加速*' }, { text: '675公里', p: '续航里程', p2: 'CLTC 综合工况' }, { text: '全驱轮动', p: '双电机' }]
		},
		{
			url: '/static/images/Homepage-Model-S.jpg',
			h1: 'Model S',
			p: '豪华旗舰轿跑',
			a: '了解更多',
			href: '',
			info: [{ text: '672公里', p: '续航里程(CLTC)' }, { text: '2.1 秒', p: '百公里加速*' }, { text: '322公里/时', p: '最高车速+' }]
		}
	]
});
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
	query.selectAll('.swiper-item').fields({ dataset: true, rect: true, id: true, size: true });
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
</script>

<style lang="scss" scoped>
@import '@/static/styles/index.scss';
</style>
