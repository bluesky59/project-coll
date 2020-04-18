<template>
	<view class="standard-content">
		<!-- 头图 -->
		<view class="header-container" :style="{backgroundImage:                             
        'url('+imageURL+')', backgroundSize: '375px 475px'}">
			<view class="nav-container">
				<!-- 搜索 -->
				<view class="query-input">
					<image class='query-bg' :src="`${baseUrl}/imgs/index/custom/query-icon.png`"></image>
					<input class="uni-input query-txt" confirm-type="search" placeholder="车型/商品名/商品型号" />
				</view>
				<!-- 分类导航 -->
				<swiper class="nav-swiper" indicator-dots="true" autoplay="true">
					<swiper-item>
						<view class="nav-swiper-item">
							<view class="types-box" v-for="item in typesP1" :key="item">
								<image class='types-img' :src="`${baseUrl}/imgs/index/custom/type-${item.num}.png`"></image>
								<text class="types-txt">{{item.text}}</text>
							</view>
						</view>
					</swiper-item>
					<swiper-item>
						<view class="nav-swiper-item">
							<view class="types-box" v-for="item in typesP2" :key="item">
								<image class='types-img' :src="`${baseUrl}/imgs/index/custom/type-${item.num}.png`"></image>
								<text class="types-txt">{{item.text}}</text>
							</view>
						</view>
					</swiper-item>
				</swiper>
			</view>
		</view>
		<view class="main-container">
			<!-- 公告 -->
			<view class="notice-container section-gap">
				<view class="notice-box">
					<text class="notice-title">公告</text>
					<text class="notice-txt">{{noticeTip}}</text>
				</view>
			</view>
			<!-- 品牌导航 -->
			<view class="brand-container section-gap">
				<view class="brand-box-top">
					<view class="brand-box-1">
						<text class="brand-title">壳牌专区</text>
						<image class='brand-1-img' :src="`${baseUrl}/imgs/index/standard/brand-qp.png`"></image>
						<text class="brand-txt">壳牌油液低价出</text>
					</view>
					<view class="brand-top-right">
						<view class="brand-box-2">
							<view class="brand-2-info">
								<text class="brand-title">龙蟠专区</text>
								<text class="brand-des">龙蟠油液低价出</text>
							</view>
							<image class='brand-2-img' :src="`${baseUrl}/imgs/index/standard/brand-lp.png`"></image>
						</view>
						<view class="brand-box-2">
							<view class="brand-2-info">
								<text class="brand-title">曼牌专区</text>
								<text class="brand-des">曼牌油液低价出</text>
							</view>	
							<image class='brand-3-img' :src="`${baseUrl}/imgs/index/standard/brand-mp.png`"></image>							
						</view>
					</view>
				</view>
				<view class="brand-box-bottom">
					<view class="brand-box-3">
						<view class="brand-3-label">
							<text class="brand-title">法雷奥专区</text>
							<text class="brand-des">法雷奥油液低价出</text>
						</view>
						<view class="brand-3-pic">
							<image class='brand-4-img' :src="`${baseUrl}/imgs/index/standard/brand-fla.png`"></image>
						</view>
					</view>
					<view class="brand-box-3">
						<view class="brand-3-label">
							<text class="brand-title">百适通专区</text>
							<text class="brand-des">百适通油液低价出</text>
						</view>
						<view class="brand-3-pic">
							<image class='brand-5-img' :src="`${baseUrl}/imgs/index/standard/brand-bst.png`"></image>
						</view>
					</view>
					<view class="brand-box-3">
						<view class="brand-3-label">
							<text class="brand-title">欧司朗专区</text>
							<text class="brand-des">欧司朗油液低价出</text>
						</view>
						<view class="brand-3-pic">
							<image class='brand-6-img' :src="`${baseUrl}/imgs/index/standard/brand-osl.png`"></image>
						</view>
					</view>
				</view>
			</view>
			<view class="coupons-container section-gap">
				<text>满额立减200</text>
				<image class='discount-tag' :src="`${baseUrl}/imgs/index/standard/discount-tag.png`"></image>
				<text>新品VIP尊享</text>
				<image class='discount-tag' :src="`${baseUrl}/imgs/index/standard/discount-tag.png`"></image>
				<text>油液8折起</text>
			</view>
			<!-- 车型品牌导航 -->
			<view class="model-container section-gap">
				<image class='model-img' v-for="item in brandImgs" :key="item" :src="item"></image>
			</view>
			<!-- 商家推荐 -->
			<view class="section-container section-gap">
				<view class="section-title">- 商家推荐 -</view>
				<image class='recommend-bg' :src="`${baseUrl}/imgs/index/standard/recommend-bg.png`"></image>
				<view class="goods-list section-gap">
					<view class="goods-item" v-for="item in goodsArr" :key="item">
						<image class='good-img' :src="item.img"></image>
						<view class="good-txt">
							<text class="good-des">{{item.name}}</text>
							<text class="good-num">{{item.num}}</text>
						</view>
					</view>
				</view>
			</view>
			<!-- 便宜好货 -->
			<view class="discount-container">
				<view class="discount-title">
					<text class="discount-part">便宜好货</text>
					<text class="discount-des">样样低至4折</text>
				</view>
				<view class="discount-content">
					<view class="discount-info" v-for="item in goodsData.dataList" :key="item">
						<image class='discount-img' :src="item.img"></image>
						<text class="discount-name">{{item.name}}</text>
					</view>
				</view>
			</view>
			<!-- 热门推荐 -->
			<view class="section-container section-gap">
				<view class="section-title">- 热门推荐 -</view>
				<view class="hot-tips">
					<text class="hot-text">好物推荐</text>
					<text class="hot-text">-认准好好汽配-</text>
				</view>
				<view class="hot-list" @click="skipTo">
					<view class="hot-item" v-for="item in recommendsData.dataList" :key="item">
						<image class="hot-img" :src="item.img"></image>
						<text class="hot-des">{{item.des}}</text>
						<text class="hot-price">注册后查看价格</text>
					</view>
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
				baseUrl: 'http://39.108.65.247:8087',
				imageURL: 'http://39.108.65.247:8087/imgs/index/standard/header-bg.png',
				typesArr,
				brandArr,
				merchantsList,
				goodsData,
				recommendsData,
				noticeTip: '公告:每周四晚八点部分商品低至3折哦哦哦哦哦哦',
				brandImgs: [
					'http://39.108.65.247:8087/imgs/index/standard/brand-00.png',
					'http://39.108.65.247:8087/imgs/index/standard/brand-01.png',
					'http://39.108.65.247:8087/imgs/index/standard/brand-02.png',
					'http://39.108.65.247:8087/imgs/index/standard/brand-03.png',
					'http://39.108.65.247:8087/imgs/index/standard/brand-04.png',
					'http://39.108.65.247:8087/imgs/index/standard/brand-05.png',
					'http://39.108.65.247:8087/imgs/index/standard/brand-06.png',
					'http://39.108.65.247:8087/imgs/index/standard/brand-07.png'
				],
				goodsArr: [
					{
						img: 'http://39.108.65.247:8087/imgs/index/standard/recommend-img.png',
						name: '壳牌原装进口',
						num: '99人已付款'
					},
					{
						img: 'http://39.108.65.247:8087/imgs/index/standard/recommend-img.png',
						name: '壳牌原装进口',
						num: '199人已付款'
					},
					{
						img: 'http://39.108.65.247:8087/imgs/index/standard/recommend-img.png',
						name: '壳牌原装进口',
						num: '299人已付款'
					},
					{
						img: 'http://39.108.65.247:8087/imgs/index/standard/recommend-img.png',
						name: '壳牌原装进口',
						num: '399人已付款'
					}
				]
			}
		},
		computed: {
			typesP1() {
				return this.typesArr.slice(0, 5);
			},
			typesP2() {
				return this.typesArr.slice(5, 10);
			},
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
	.section-gap {
		margin-top: 24upx;
	}
	.header-container {
		width: 750upx;
		padding-top: 840upx;
		background-repeat: no-repeat;
		background-color: #fff;
	}
	.nav-container {
		box-shadow:0px 2px 4px 0px rgba(194,194,194,0.5);
		width: 690upx;
		margin: 0 auto;
		border-radius: 16upx;
		background-color: #fff;
		display: flex;
		justify-content: center;
		flex-direction: column;
	}
	.query-input {
		width: 590upx;
		height: 72upx;
		line-height: 72upx;
		margin: 30upx auto 10upx;
		background:rgba(241,241,241,1);
		box-shadow:0upx 1upx 2upx 0upx rgba(194,194,194,0.5);
		border-radius: 36upx;
		padding: 0 30upx;
		font-size: 28upx;
		color: #A3A3A3;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.query-txt {
		width: 400upx;
		height: 72upx;
		display: inline-block;
	}
	.query-bg {
		width: 36upx;
		height: 36upx;
		margin-right: 10upx;
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
		display: flex;
		justify-content: space-around;
	}
	.types-box {
		width: 100upx;
		text-align: center;
	}
	.types-img {
		width: 100upx;
		height: 100upx;
		display: block;
		margin-top: 24upx;
	}
	.types-txt {
		font-size: 24upx;
		color: #666;
		line-height: 40upx;
	}
	.main-container {
		width: 690upx;
		height: auto;
		padding: 0 30upx;
		background-color: #fff;
	}
	.notice-container {
		width: 690upx;
		height: 132upx;
		background-color: #FF5101;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.notice-box {
		width: 610upx;
		height: 64upx;
		border-radius: 46upx;
		background-color: #fff;
		padding: 20upx;
		display: flex;
	}
	.notice-title {
		width: 160upx;
		height: 64upx;
		display: block;
		border-right: 1upx solid #D8D8D8;
		font-size: 56upx;
		color: #3D3D3D;
		line-height: 64upx;
		font-weight: bolder;
		text-align: center;
		padding-right: 16upx;
	}
	.notice-txt {
		padding: 0 20upx;
		font-size: 26upx;
		color: #333;
		line-height: 32upx;
	}
	.brand-container {
		width: 686upx;
		height: auto;
		border: 1upx solid #CBCBCB;
	}
	.brand-box-top {
		display: flex;
	}
	.brand-top-right {
		
	}
	.brand-box-1 {
		width: 344upx;
		height: 344upx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.brand-box-2 {
		width: 344upx;
		height: 172upx;
		padding: 0 20upx;
		box-sizing: border-box;
		border-left: 1upx solid #CBCBCB;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.brand-box-2:last-child {
		border-top: 1upx solid #CBCBCB;
	}
	.brand-box-bottom {
		width: 690upx;
		height: 230upx;
		box-sizing: border-box;
		border-top: 1upx solid #CBCBCB;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.brand-box-3 {
		width: 230upx;
		height: 230upx;
		box-sizing: border-box;
		border-right: 1upx solid #CBCBCB;
		display: flex;
		justify-content: space-between;
		align-items: center;
		flex-direction: column;
	}
	.brand-box-3:last-child {
		border-right: none;
	}
	.brand-3-label {
		margin-top: 12upx;
	}
	.brand-3-pic {
		flex: 1;
		display: flex;
		align-items: center;
	}
	.brand-title {
		font-size: 30upx;
		line-height: 44upx;
		color: #333;
		font-weight: 500;
		display: block;
	}
	.brand-des {
		font-size: 20upx;
		line-height: 32upx;
		color: #999;
		font-weight: 400;
		display: block;
	}
	.brand-txt {
		font-size: 28upx;
		line-height: 40upx;
		color: #999;
		font-weight: 400;
		display: block;
	}
	.brand-1-img {
		width: 208upx;
		height: 200upx;
	}
	.brand-2-img {
		width: 140upx;
		height: 50upx;
	}
	.brand-3-img {
		width: 120upx;
		height: 58upx;
	}
	.brand-4-img {
		width: 140upx;
		height: 70upx;
	}
	.brand-5-img {
		width: 140upx;
		height: 42upx;
	}
	.brand-6-img {
		width: 166upx;
		height: 58upx;
	}
	.coupons-container {
		width: 686upx;
		height: 88upx;
		background:rgba(255,255,255,1);
		border:1upx solid rgba(203,203,203,1);
		display: flex;
		justify-content: space-around;
		align-items: center;
		font-size: 30upx;
		color: #333;
	}
	.discount-tag {
		width: 30upx;
		height: 30upx;
	}
	.model-container {
		width: 690upx;
		height: auto;
		display: flex;
		flex-wrap: wrap;
	}
	.model-img {
		width: 172upx;
		height: 150upx;
	}
	.section-container {
		width: 100%;
		height: auto;
	}
	.section-title {
		font-size: 30upx;
		color: #333;
		line-height: 80upx;
		width: 100%;
		text-align: center;
	}
	.recommend-bg {
		width: 690upx;
		height: 152upx;
		display: block;
	}
	.goods-list {
		width: 690upx;
		height: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.goods-item {
		width: 284upx;
		height: 120upx;
		padding: 0 24upx;
		border: 1upx solid #979797;
		border-radius: 8upx;
		display: flex;
		align-items: center;
		margin-bottom: 20upx;
	}
	.good-img {
		width: 80upx;
		height: 80upx;
		display: block;
		margin-right: 12upx;
	}
	.good-des {
		font-size: 30upx;
		color: #333;
		line-height: 44upx;
		font-weight: 500;
		display: block;
	}
	.good-num {
		font-size: 24upx;
		color: #999;
		line-height: 44upx;
		font-weight: 400;
		display: block;
	}
	.discount-container {
		width: 686upx;
		height: 156upx;
		margin-top: 12upx;
		background:rgba(255,255,255,1);
		border-radius:8upx;
		border:1upx solid rgba(151,151,151,1);
		display: flex;
	}
	.discount-title {
		width: 140upx;
		height: 96upx;
		margin: 40upx 0 40upx 40upx;
		padding-right: 30upx;
		border-right: 1upx solid #979797;
		display: flex;
		flex-direction: column;
		justify-content: space-between;
	}
	.discount-part {
		font-size: 34upx;
		color: #333;
		font-weight: 500;
	}
	.discount-des {
		font-size: 22upx;
		color: #999;
		font-weight: 400;
	}
	.discount-content {
		width: 440upx;
		height: 100%;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.discount-info {
		width: 88upx;
		text-align: center;
	}
	.discount-img {
		width: 88upx;
		height: 88upx;
	}
	.discount-name {
		font-size: 22upx;
		color: #666;
		line-height: 32upx;
	}
	.hot-tips {
		width: 332upx;
		height: 160upx;
		background: rgba(255,81,1,1);
		font-size: 30upx;
		line-height: 44upx;
		color: #fff;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		float: right;
	}
	.hot-text {
		display: block;
	}
	.hot-list {
		width: 690upx;
		height: auto;
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.hot-item {
		width: 332upx;
		margin-top: 36upx;
	}
	.hot-item:nth-of-type(2n + 1) {
		margin-top: -160upx;
	}
	.hot-img {
		width: 332upx;
		height: 332upx;
		display: block;
		margin-bottom: 12upx;
	}
	.hot-des {
		font-size: 28upx;
		color: #B6B6B6;
		line-height: 44upx;
	}
	.hot-price {
		font-size: 30upx;
		color: #333;
		font-weight: 500;
		display: block;
		margin-top: 10upx;
	}
	.t-header {
		width: 100%;
		height: 1000upx;
	}
</style>
