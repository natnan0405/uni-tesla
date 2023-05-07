<template>
	<div class="page-box">
		<!-- 图片盒子 -->
		<div class="car-image-box"><image src="../../static/images/3-white.png" mode="widthFix" class="img"></image></div>
		<!-- 按钮 -->
		<p class="label">试驾车型</p>
		<div class="btn-box">
			<button type="default" plain="true" v-for="(item, index) in btnList.info" :index="index" :key="index">{{ item.name }}</button>
		</div>
		<p class="message">Model S, Model X 车型暂无法提供试驾</p>
	</div>
</template>

<script setup>
import { reactive } from 'vue';
const btnList = reactive({
	info: [{ name: 'Model 3', id: 1 }, { name: 'Model Y', id: 2 }]
});
</script>

<style lang="scss" scoped>
@import '@/static/styles/car.scss';
</style>
