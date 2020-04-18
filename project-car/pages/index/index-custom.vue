<template>
	<view>
		<view class="header-container">
			<view class="notice-container">
				<image class='notice-tag' :src="`${baseUrl}/imgs/index/custom/notice-tag.png`"></image>
				<text>{{noticeTip}}</text>
			</view>
			<view class="nav-container">
				<swiper class="nav-swiper" indicator-dots="true" autoplay="true">
					<swiper-item>
						<view class="nav-swiper-item uni-bg-red">A</view>
					</swiper-item>
					<swiper-item>
						<view class="nav-swiper-item uni-bg-green">B</view>
					</swiper-item>
					<swiper-item>
						<view class="nav-swiper-item uni-bg-blue">C</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="custom-content">
			<!-- 搜索 -->
			<view class="query-container">
				<view class="query-input">
					<image class='query-bg' :src="`${baseUrl}/imgs/index/custom/query-icon.png`"></image>
					<input class="uni-input query-txt" confirm-type="search" placeholder="车型/商品名/商品型号" />
				</view>
				<view class="query-service">
					<image class='query-icon' :src="`${baseUrl}/imgs/index/simple/service-icon.png`"></image>
					<view class="query-divider"></view>
					<image class='query-icon' :src="`${baseUrl}/imgs/index/simple/phone-icon.png`"></image>
				</view>
			</view>
			<!-- 分类导航 -->
			<view class="types-container">
				<view class="types-box" v-for="item in typesArr" :key="item">
					<image class='types-img' :src="`${baseUrl}/imgs/index/custom/type-${item.num}.png`"></image>
					<text class="types-name">{{item.text}}</text>
				</view>
			</view>
			<!-- 车型品牌查询 + 热销品牌 -->
			<view class="brand-container section-gap" v-for="item in brandArr" :key="item">
				<view class="brand-txt">
					<view>
						<image :class="{'veh-tag': item.tagIcon === 'veh', 'brand-tag': item.tagIcon === 'brand'}" :src="`${baseUrl}/imgs/index/custom/${item.tagIcon}-tag.png`"></image>
						<text class="brand-title">{{item.title}}</text>
					</view>
					<text class="more">更多</text>
				</view>
				<view class="brand-list">
					<view v-if="item.tagIcon === 'veh'" class="brand-box" v-for="data in item.dataList" :key="data">
						<image class="brand-img" :src="`${baseUrl}/imgs/others/veh-brand-${data.nameEn}.png`"></image>
						<text class="brand-name">{{data.text}}</text>
					</view>
					<view class="brand-list-imgs" v-if="item.tagIcon === 'brand'" v-for="(data, index) in item.dataList" :key="data.text">
						<image class="brand-list-img" :src="`${baseUrl}/imgs/others/hot-brand-${index}.png`"></image>
					</view>
				</view>
			</view>
			<!-- 广告 -->
			<view class="ad-container section-gap">
				<image class='ad-bg' :src="`${baseUrl}/imgs/index/custom/notice-bg.png`"></image>
			</view>
			<!-- 商家推荐 -->
			<view class="merchants-container section-gap">
				<view class="brand-txt">
					<view>
						<image class='merchants-tag' :src="`${baseUrl}/imgs/index/custom/recommend-tag.png`"></image>
						<text class="brand-title">商家推荐</text>
					</view>
					<text class="more">更多</text>
				</view>
				<swiper class="swiper" indicator-dots="true" autoplay="true">
					<swiper-item v-for="item in merchantsList" :key="item">
						<view class="swiper-brand">
							<text class="merchant-name">{{item.merchantName}}</text>
							<view class="merchants-list">
								<view class="merchants-item" v-for="data in item.merchantData" :key="data">
									<image class="merchant-img" :src="data.icon"></image>
									<text class="merchant-des">{{data.des}}</text>
									<text class="merchant-price">¥ {{data.price}}</text>
								</view>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
			<!-- 便宜好货 -->
			<view class="goods-container section-gap">
				<view class="brand-txt">
					<view>
						<image class='goods-tag' :src="`${baseUrl}/imgs/index/custom/goods-tag.png`"></image>
						<text class="brand-title">便宜好货</text>
					</view>
					<text class="more">更多</text>
				</view>
				<view v-for="item in goodsData.dataList" :key="item">
					<view class="goods-info">
						<image class="goods-img" :src="item.img"></image>
						<view class="goods-txt">
							<text class="goods-des">{{item.des}}</text>
							<text class="goods-spec">{{item.spec}}</text>
							<text class="goods-price">¥ {{item.price}}</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 热门推荐 -->
			<view class="recommends-container section-gap">
				<image class="recommends-bg" :src="`${baseUrl}/imgs/index/custom/hot-bg.png`"></image>
				<view class="recommends-list">
					<view @click="skipTo" class="recommends-item" v-for="item in recommendsData.dataList" :key="item">
						<image class="recommend-img" :src="item.img"></image>
						<text class="recommend-des">{{item.des}}</text>
						<text class="recommend-price">{{item.price}}</text>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { brandArr } from '../../mock/api-brand.js';
	import { typesArr, merchantsList, goodsData, recommendsData } from '../../mock/index/data.js';
	export default {
		data() {
			return {
				typesArr,
				brandArr,
				merchantsList,
				goodsData,
				recommendsData,
				noticeTip: '公告:每周四晚八点部分商品低至3折...',
				baseUrl: 'http://39.108.65.247:8087'
			}
		},
		methods: {
			skipTo() {
				uni.navigateTo({
				    url: `/pages/other/good-detail`
				});	
			}
		}
	}
</script>

<style scoped>
	@import './common/public.css';
	.custom-content {
		width: 690upx;
		padding: 30upx;
		height: auto;
		background-color: #F7F7F8;
	}
	.types-container {
		width: 690upx;
		height: auto;
		margin-top: 24upx;
		background-color: #fff;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
		padding: 0 0 24upx;
	}
	.types-box {
		width: 120upx;
		height: auto;
		text-align: center;
		margin-top: 24upx;
	}
	.types-img {
		width: 100upx;
		height: 100upx;
		display: block;
		margin: 0 auto;
	}
	.types-name {
		font-size: 24upx;
		color: #666;
		line-height:36upx;
	}
	.brand-container {
		width: 690upx;
		height: auto;
		background-color: #fff;
	}
	.brand-txt {
		width: 650upx;
		padding: 20upx;
		height: 64upx;
		line-height: 64upx;
		display: flex;
		justify-content: space-between;
		font-size: 30upx;
	}
	.brand-title {
		color: #009EF3;
		font-weight: 500;
	}
	.more {
		color: #999;
		font-weight: 400;
	}
	.brand-list {
		width: 100%;
		display: flex;
		justify-content: space-around;
		flex-wrap: wrap;
	}
	.brand-box {
		width: 144upx;
		height: 112upx;
		background-color: #fff;
		border-radius: 16upx;
		border: 2upx solid #F4F4F4;
		margin-bottom: 24upx;
		text-align: center;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.brand-img {
		width: 50upx;
		height: 50upx;
	}
	.brand-name {
		font-size: 30upx;
		color: #3A3A3A;
		line-height: 44upx;
	}
	.ad-container, .ad-bg {
		width: 690upx;
		height: 132upx;
		display: block;
		margin: 24upx auto 0;
	}
	.merchants-container {
		background-color: #fff;
	}
	.swiper {
		height: 400upx;
	}
	.swiper-brand {
		width: 600upx;
		margin: 0 auto 20upx;
		padding: 20upx;
		background:rgba(255,255,255,1);
		border-radius: 8upx;
		border:1upx solid rgba(244,244,244,1);
	}
	.merchant-name {
		font-size: 28upx;
		color: #3A3A3A;
		line-height: 40upx;
	}
	.merchants-list {
		width: 100%;
		margin: 24upx 0 0;
		display: flex;
		justify-content: space-between;
	}
	.merchants-item {
		width: 120upx;
		font-size: 24upx;
	}
	.merchant-img {
		width: 112upx;
		height: 112upx;
		display: block;
		margin-bottom: 20upx;
	}
	.merchant-des {
		color: #4C4C4C;
		line-height: 32upx;
		display: block;
	}
	.merchant-price {
		color: #FF5101;
		line-height: 30upx;
		font-weight: bold;
		display: block;
	}
	.goods-container {
		background-color: #fff;
		padding-bottom: 30upx;
	}
	.goods-info {
		width: 640upx;
		height: 172upx;
		border: 1upx solid #F4F4F4;
		border-radius: 8upx;
		margin: 0 auto 20upx;
		display: flex;
		align-items: center;
	}
	.goods-img {
		width: 120upx;
		height: 120upx;
	}
	.goods-txt {
		font-weight: 400;
		margin-left: 20upx;
	}
	.goods-des {
		font-size: 28upx;
		line-height: 40upx;
		color: #3A3A3A;
		display: block;
	}
	.goods-spec {
		font-size: 24upx;
		line-height: 32upx;
		color: #4C4C4C;
		display: block;
	}
	.goods-price {
		font-size: 24upx;
		line-height: 30upx;
		color: #FF5101;
		font-weight: bold;
		display: block;
	}
	.recommends-bg {
		width: 342upx;
		height: 42upx;
		display: block;
		margin: 20upx auto;
	}
	.recommends-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.recommends-item {
		width: 336upx;
		margin-bottom: 20upx;
		background:rgba(255,255,255,1);
		box-shadow:0px 1upx 2upx 0upx rgba(204,204,204,1);
		border-radius:8upx;
		padding-bottom: 30upx;
	}
	.recommend-img {
		width: 336upx;
		height: 226upx;
		margin-bottom: 10upx;
	}
	.recommend-des {
		font-size: 28upx;
		color: #666;
		line-height: 40upx;
		padding-left: 24upx;
		display: block;
	}
	.recommend-price {
		font-size: 30upx;
		color: #E41D24;
		line-height: 40upx;
		padding-left: 24upx;
		display: block;
	}
	.goods-tag {
		width: 38upx;
		height: 38upx;
		margin-right: 20upx;
	}
	.merchants-tag {
		width: 38upx;
		height: 32upx;
		margin-right: 20upx;
	}
	.veh-tag {
		width: 48upx;
		height: 26upx;
		margin-right: 20upx;
	}
	.brand-tag {
		width: 34upx;
		height: 34upx;
		margin-right: 20upx;
	}
	.header-container {
		width: 750upx;
		height: auto;
		background:linear-gradient(90deg,rgba(34,42,67,1) 0%,rgba(73,79,103,1) 100%,rgba(68,65,67,1) 100%);
	}
	.notice-container {
		width: 690upx;
		height: 40upx;
		line-height: 40upx;
		font-size: 30upx;
		color: #fff;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: flex;
		align-items: center;
		padding: 30upx;
	}
	.notice-tag {
		width: 40upx;
		height: 40upx;
		margin-right: 24upx;
	}
	.nav-container {
		width: 100%;
		height: 284upx;
		padding: 20upx;
		box-sizing: border-box;
		background-color: #fff;
		border-radius: 40upx 40upx 0 0;
	}
	.nav-swiper {
		width: 680upx;
		height: 244upx;
		margin: 0 auto;
	}
	.nav-swiper-item {
		width: 100%;
		height: 100%;
		border-radius: 20upx;
	}
	.uni-bg-red {
		background-color: red;
	}
	.uni-bg-green {
		background-color: green;
	}
	.uni-bg-blue {
		background-color: blue;
	}
	.query-divider {
		width: 4upx;
		height: 40upx;
		background-color: #F7F7F7;
	}
	.brand-list-imgs{
		width: 146upx;
		height: 114upx;
		margin-bottom: 24upx;
		text-align: center;
	}
	.brand-list-img {
		width: 146upx;
		height: 114upx;
	}
</style>
