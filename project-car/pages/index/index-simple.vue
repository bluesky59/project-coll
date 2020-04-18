<template>
	<view class="simple-content">
		<!-- 轮播 -->
		<swiper class="swiper" indicator-dots="true" autoplay="true">
			<swiper-item>
				<view class="swiper-item uni-bg-red">A</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-green">B</view>
			</swiper-item>
			<swiper-item>
				<view class="swiper-item uni-bg-blue">C</view>
			</swiper-item>
		</swiper>
		<!-- 搜索 -->
		<view class="query-container">
			<view class="query-input">
				<input class="uni-input query-txt" confirm-type="search" placeholder="车型/商品名/商品型号" />
				<button class="mini-btn query-btn" type="default" size="mini">查询</button>
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
				<image class='types-img' :src="item.icon"></image>
				<text>{{item.text}}</text>
			</view>
		</view>
		<!-- 公告 -->
		<view class="notice-container">
			<view class="notice-box">
				<image class='notice-icon' :src="`${baseUrl}/imgs/index/simple/notice-icon.png`"></image>
				<text class="notice-tips">{{noticeTip}}</text>
			</view>
		</view>
		<!-- 品牌 车型 + 热销 -->
		<view class="brand-container" v-for="item in brandArr" :key="item">
			<view class="brand-txt">
				<text class="brand-title">{{item.title}}</text>
				<text class="more">更多</text>
			</view>
			<view class="brand-list">
				<view class="brand-box" v-for="data in item.dataList" :key="data">
					<image class="brand-img" :src="data.img"></image>
				</view>
			</view>
		</view>
		<!-- 商家推荐 -->
		<view class="merchants-container">
			<text>商家推荐</text>
			<view class="merchants-box">
				<view class="merchants-info" v-for="item in merchantsList" :key="item">
					<text class="merchant-name">{{item.merchantName}}</text>
					<view class="merchants-list">
						<view class="merchants-item" v-for="data in item.merchantData" :key="data">
							<image class="merchant-img" :src="data.icon"></image>
							<text class="merchant-des">{{data.des}}</text>
							<text class="merchant-price">¥ {{data.price}}</text>
						</view>
					</view>
				</view>
			</view>
		</view>
		<!-- 券 -->
		<view class="coupons-container">
			<view class="coupons-box coupons-border">
				<view class="coupons-title">
					<text class="coupons-name">满减券</text>
					<text class="coupons-tag">抢券中</text>
				</view>
				<view class="coupons-info">
					<view>
						<text class="coupons-price">¥ 1000</text>
						<text class="coupons-des">立减优惠券</text>
					</view>
					<image class="coupons-img coupons-full-bg" :src="`${baseUrl}/imgs/index/simple/coupons-bg1.png`"></image>
				</view>
			</view>
			<view class="coupons-box">
				<view class="coupons-title">
					<text class="coupons-name">0元券</text>
					<text class="coupons-tag">抢券中</text>
				</view>
				<view class="coupons-info">
					<view>
						<text class="coupons-price">¥ 0</text>
						<text class="coupons-des text-del">¥ 999</text>
					</view>
					<image class="coupons-img coupons-zero-bg" :src="`${baseUrl}/imgs/index/simple/goods-img.png`"></image>
				</view>
			</view>
		</view>
		<!-- 好货 -->
		<view class="goods-container">
			<view class="brand-txt">
				<text class="brand-title">{{goodsData.title}}</text>
				<text class="more">更多</text>
			</view>
			<image class="goods-bg" :src="goodsData.advertisingImg"></image>
			<view class="goods-list">
				<view  class="goods-item" v-if="index < 3" v-for="(item, index) in goodsData.dataList" :key="item">
					<image class="goods-img" :src="item.img"></image>
					<text class="goods-price">¥{{item.price}}</text>
					<text class="goods-discount">{{item.discount}}折</text>
				</view>
			</view>
		</view>
		<!-- 热门 -->
		<view class="goods-container">
			<view class="brand-txt">
				<text class="brand-title">{{recommendsData.title}}</text>
			</view>
			<image class="recommends-bg" :src="recommendsData.advertisingImg"></image>
			<view class="recommends-list">
				<view  class="recommends-item" v-for="item in recommendsData.dataList" :key="item">
					<image class="recommends-img" :src="item.img"></image>
					<text class="recommends-des">{{item.des}}</text>
					<text class="recommends-price">注册后查看价格</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { typesArr, brandArr, merchantsList, goodsData, recommendsData } from '../../mock/index/data.js';
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
		}
	}
</script>

<style scoped>
	.simple-content {
		width: 100%;
		height: auto;
		background-color: #eee;
	}
	.swiper {
		width: 750upx;
		height: 348upx;
	}
	.swiper-item {
		width: 100%;
		height: 100%;
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
	.types-container {
		width: 750upx;
		height: auto;
		display: flex;
		flex-flow: row wrap;
		justify-content: space-between;
		align-items: center;
		background-color: #fff;
		padding: 0 0 40upx;
	}
	.types-box {
		width: 150upx;
		height: auto;
		color: #717171;
		font-size: 20upx;
		text-align: center;
	}
	.types-img {
		width: 82upx;
		height: 82upx;
		display: block;
		margin: 20upx auto 12upx;
	}
	.brand-container {
		width: 100%;
		height: 274upx;
		margin: 20upx 0;
		background-color: #fff;
	}
	.brand-txt {
		width: 100%;
		height: 92upx;
		line-height: 92upx;
		font-size: 30upx;
		padding: 0 30upx;
		display: flex;
		justify-content: space-between;
		box-sizing: border-box;
	}
	.brand-title {
		color: #333;
	}
	.more {
		color: #A3A3A3;
	}
	.brand-list {
		width: 750upx;
		height: 144upx;
		overflow-y: hidden;
		overflow-x: auto;
		white-space: nowrap;
	}
	.brand-box {
		width: 130upx;;
		height: 144upx;
		display: inline-table;
		margin-left: 30upx;
	}
	.brand-img {
		width: 130upx;
		height: 144upx;
	}
	.merchants-container {
		width: 690upx;
		height: 420upx;
		padding: 30upx;
		background-color: #fff;
		margin-top: 30upx;
		font-size: 30upx;
		color: #333;
	}
	.merchants-box {
		overflow-y: hidden;
		overflow-x: auto;
		white-space: nowrap;
		width: 750upx;
	}
	.merchants-info {
		display: inline-table;
		width: 592upx;
		height: 284upx;
		display: inline-table;
		margin: 24upx 24upx 0 0;
		padding: 24upx;
		border-radius:16upx;
		border:2upx solid rgba(244,244,244,1);
	}
	.merchants-info:last-child{
		margin-right: 79upx;
	}
	.merchant-name {
		font-size: 28upx;
		color: #3A3A3A;
		line-height: 56upx;
	}
	.merchants-list {
		display: flex;
		justify-content: space-between;
		padding-right: 24upx;
	}
	.merchants-item {
		width: 140upx;
		font-size: 24upx;
	}
	.merchant-img {
		width: 140upx;
		height: 140upx;
		display: block;
	}
	.merchant-des {
		color: #4C4C4C;
		display: block;
		line-height: 60upx;
	}
	.merchant-price {
		color: #FF5101;
		font-weight: 600;
		line-height: 44upx;
		display: block;
	}
	.coupons-container {
		width: 750upx;
		height: 248upx;
		background-color: #fff;
		margin-top: 30upx;
		display: flex;
		justify-content: space-between;
	}
	.coupons-box {
		width: 50%;
		padding: 0 30upx;
		box-sizing: border-box;
	}
	.coupons-title {
		height: 100upx;
		line-height: 100upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.coupons-name {
		font-size: 36upx;
		color: #333;
		font-weight: 500;
	}
	.coupons-tag {
		width:80upx;
		height:32upx;
		background:rgba(255,255,255,1);
		border:1upx solid rgba(151,151,151,1);
		font-size: 20upx;
		color: #666;
		line-height: 32upx;
		text-align: center;
	}
	.coupons-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.coupons-price {
		font-size: 36upx;
		color: #FF5101;
		line-height: 44upx;
		font-weight: bold;
		display: block;
	}
	.coupons-des {
		font-size: 24upx;
		color: #999;
		line-height: 36upx;
		font-weight: 400;
		display: block;
	}
	.coupons-img {
		display: block;
	}
	.coupons-full-bg {
		width: 100upx;
		height: 128upx;
	}
	.coupons-zero-bg {
		width: 190upx;
		height: 150upx;
	}
	.text-del {
		text-decoration: line-through;
	}
	.coupons-border{
		border-right: 1upx solid #eee;
	}
	.goods-container {
		width: 100%;
		margin: 20upx 0;
		background-color: #fff;
		padding-bottom: 30upx;
	}
	.goods-bg {
		width: 690upx;
		height: 246upx;
		margin: 0 auto;
		display: block;
	}
	.goods-list {
		width: 626upx;
		height: auto;
		border: 1upx #E6E6E6 solid;
		border-top: none;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
		padding: 20upx 30upx;
		border-radius:0px 0upx 8upx 8upx;
	}
	.goods-item {
		width: 200upx;
	}
	.goods-img {
		width: 144upx;
		height: 108upx;
		display: block;
	}
	.goods-price {
		font-size: 30upx;
		color: #333;
		font-weight: 500;
	}
	.goods-discount {
		padding: 0 8upx;
		height: 32upx;
		line-height: 32upx;
		border: 1upx solid #FF5E14;
		font-size: 24upx;
		color: #FF5E14;
		margin-left: 6upx;
	}
	.recommends-bg {
		width: 690upx;
		height: 292upx;
		margin: 0 auto;
		display: block;
	}
	.recommends-list {
		width: 690upx;
		height: auto;
		margin: 0 auto;
		display: flex;
		justify-content: space-between;
		flex-flow: row wrap;
	}
	.recommends-item {
		width: 316upx;
		margin-top: 70upx;
	}
	.recommends-img {
		width: 316upx;
		height: 336upx;
		display: block;
		margin-bottom: 12upx;
	}
	.recommends-des {
		font-size: 28upx;
		color: #B6B6B6;
		line-height: 44upx;
	}
	.recommends-price {
		font-size: 30upx;
		color: #333;
		font-weight: 500;
		display: block;
		margin-top: 10upx;
	}
	.notice-container {
		width: 690upx;
		background-color: #fff;
		padding: 30upx;
		margin-top: 20upx;
	}
	.notice-box {
		width: 610upx;
		height: 88upx;
		padding: 0 40upx;
		background-image: linear-gradient(#4CD3C3, #4CD3C3, #59BEE0);
		border-radius: 44upx;
		font-size: 32upx;
		color: #fff;
		overflow: hidden;
		white-space: nowrap;
		text-overflow: ellipsis;
		display: flex;
		justify-content: flex-start;
		align-items: center;
	}
	.notice-icon {
		width: 42upx;
		height: 30upx;
		margin-right: 10upx;
	}
	.notice-tips {
		width: 400upx;
	}
	.query-container {
		width: 690upx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		padding: 30upx;
	}
	.query-input {
		width: 452upx;
		height: 88upx;
		padding: 0 24upx;
		background-color: #F5F5F5;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.query-service {
		width: 158upx;
		height: 88upx;
		background-color: #F5F5F5;
		border: 8upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.query-icon {
		width: 44upx;
		height: 48upx;
	}
	.query-divider {
		width: 4upx;
		height: 40upx;
		background-color: #fff;
	}
	.query-txt {
		width: 320upx;
		height: 88upx;
		display: inline-block;
		line-height: 88upx;
		font-size: 28upx;
		color: #666;
	}
	.query-btn {
		width: 128upx;
		height: 54upx;
		background-color: #1BB0DD;
		color: #fff;
	}
</style>
