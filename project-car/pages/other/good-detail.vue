<template>
	<view class="good-detail-container">
		<view class="good-detail-tabs">
			<view @click="tabsSwitch(0)" :class="{'good-detail-tab-sel': tabsIndex === 0}" class="good-detail-tab">货品详情</view>
			<view @click="tabsSwitch(1)" :class="{'good-detail-tab-sel': tabsIndex === 1}" class="good-detail-tab">适配车型</view>
		</view>
		<view v-if="tabsIndex === 0">
			<swiper class="swiper" indicator-dots="true" autoplay="true">
				<swiper-item>
					<view class="swiper-item">
						<image class="good-detail-headerbg" :src="`${baseUrl}/imgs/others/good-img.png`"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image class="good-detail-headerbg" :src="`${baseUrl}/imgs/others/good-img.png`"></image>
					</view>
				</swiper-item>
				<swiper-item>
					<view class="swiper-item">
						<image class="good-detail-headerbg" :src="`${baseUrl}/imgs/others/good-img.png`"></image>
					</view>
				</swiper-item>
			</swiper>
			<image class="good-detail-des" :src="`${baseUrl}/imgs/others/goods-des.png`"></image>
			<view class="good-detail-sale">
				<text class="good-detail-sale-title">优惠</text>
				<view class="good-detail-sale-info">
					<view class="good-detail-sale-txt">
						<text class="good-detail-sale-text">领券</text>
						<image class="good-detail-sale-icon" :src="`${baseUrl}/imgs/others/sale-tag.png`"></image>
					</view>
					<view class="good-detail-sale-txt">
						<text class="good-detail-sale-text">满减</text>
						<text>满199元减20元，满299元减30元</text>
					</view>
				</view>
			</view>
			<view class="good-detail-params">
				<view class="good-detail-params-title">
					<image class="good-detail-params-icon" :src="`${baseUrl}/imgs/others/params-des.png`"></image>
					<text>规格参数</text>
				</view>
				<view class="good-detail-params-list">
					<view class="good-detail-params-item" v-for="item in paramsArr" :key="item.label">
						<text class="good-detail-params-label">{{item.label}}</text>
						<text class="good-detail-params-value">{{item.value}}</text>
					</view>
				</view>
			</view>
			<view class="good-detail-ad">
				<view class="good-detail-ad-title">商品详情</view>
				<image class="good-detail-holder" :src="`${baseUrl}/imgs/others/detail-holder.png`"></image>
			</view>
			<view class="good-detail-btns">
				<view class="good-detail-btns-concat">
					<view class="good-detail-concat">
						<image class="good-detail-concat-icon" :src="`${baseUrl}/imgs/others/wechat-icon.png`"></image>
						微信
					</view>
					<view class="good-detail-concat">
						<image class="good-detail-concat-icon" :src="`${baseUrl}/imgs/others/phone-icon.png`"></image>
						电话
					</view>
				</view>
				<view class="good-detail-btns-cart">
					<image class="good-detail-cart-icon" src="/static/add/cart.png"></image>购物车</view>
				<view class="good-detail-btns-add">加入购物车</view>
			</view>
		</view>
		<view v-if="tabsIndex === 1">适配车型</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabsIndex: 0,
				baseUrl: 'http://39.108.65.247:8087',
				paramsArr: [
					{
						label: '品牌',
						value: '壳牌'
					},
					{
						label: '型号',
						value: 'FKDSH4297542'
					},
					{
						label: '规格',
						value: '18.8x8.8x9.2'
					},
					{
						label: '重量',
						value: '12.9kg'
					},
					{
						label: '产地',
						value: '英国'
					},
					{
						label: '装箱数',
						value: '12'
					}
				]
			}
		},
		methods: {
			tabsSwitch(index) {
				this.tabsIndex = index;
			}
		}
	}
</script>

<style scoped lang="scss">
	.good-detail-container {
		width: 100%;
		min-height: 100vh;
		background-color: #f7f7f7;
		padding-bottom: 70upx;
		.good-detail-tabs {
			width: 100%;
			height: 88upx;
			background-color: #fff;
			display: flex;
			justify-content: space-around;
			align-items: center;
			.good-detail-tab {
				width: 30%;
				height: 88upx;
				box-sizing: border-box;
				line-height: 88upx;
				text-align: center;
				font-size: 24upx;
				color: #333;
			}
			.good-detail-tab-sel {
				color: #FF5101;
				font-weight: 500;
				border-bottom: 2upx solid #FF5101;
			}
		}
		.swiper, .swiper-item {
			width: 750upx;
			height: 620upx;
		}
		.good-detail-headerbg {
			width: 750upx;
			height: 620upx;
			vertical-align: top;
		}
		.good-detail-des {
			width: 750upx;
			height: 274upx;
		}
		.good-detail-sale {
			width: 690upx;
			height: auto;
			padding: 30upx;
			margin-top: 30upx;
			background-color: #fff;
			display: flex;
			justify-content: flex-start;
			align-items: flex-start;
			.good-detail-sale-title {
				font-size: 30upx;
				color: #424242;
				font-weight: 500;
				line-height: 52upx;
				margin-right: 40upx;
			}
			.good-detail-sale-info {
				width: 480upx;
				display: flex;
				flex-direction: column;
				justify-content: center;
				align-items: flex-start;
				.good-detail-sale-txt {
					width: 100%;
					height: 52upx;
					font-size: 24upx;
					color: #666;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					.good-detail-sale-text {
						width: 60upx;
						height: 32upx;
						background-color: #FFE7DC;
						border-radius: 4upx;
						text-align: center;
						line-height: 32upx;
						font-size: 24upx;
						color: #FF5101;
						display: inline-block;
						margin-right: 28upx;
					}
					.good-detail-sale-icon {
						width: 158upx;
						height: 46upx;
					}
				}
			}
		}
		.good-detail-params {
			width: 690upx;
			padding: 30upx;
			margin-top: 30upx;
			background-color: #fff;
			.good-detail-params-title {
				font-size: 30upx;
				color: #333;
				width: 100%;
				height: 40upx;
				line-height: 40upx;
				display: flex;
				align-items: center;
				.good-detail-params-icon {
					width: 40upx;
					height: 40upx;
					margin-right: 24upx;
				}
			}
			.good-detail-params-list {
				width: 690upx;
				height: auto;
				margin: 30upx auto;
				border: 1upx solid #E1E1E1;
				.good-detail-params-item {
					width: 690upx;
					height: 56upx;
					border-bottom: 1upx solid #E1E1E1;
					font-size: 24upx;
					color:#999;
					line-height: 56upx;
					.good-detail-params-label {
						display: inline-block;
						width: 164upx;
						height: 56upx;
						text-align: center;
						border-right: 1upx solid #E1E1E1;
					}
					.good-detail-params-value {
						display: inline-block;
						width: 520upx;
						height: 56upx;
						text-indent: 40upx;
					}
				}
				.good-detail-params-item:last-child{
					border-bottom: none;
				}
			}
		}
		.good-detail-ad {
			margin-top: 30upx;
			.good-detail-ad-title {
				width: 100%;
				height: 100upx;
				background-color: #fff;
				line-height: 100upx;
				font-size: 32upx;
				color: #333;
				font-weight: 500;
				text-indent: 30upx;
			}
			.good-detail-holder {
				width: 750upx;
				height: 330upx;
			}
		}
		.good-detail-btns {
			width: 100%;
			height: 100upx;
			display: flex;
			align-items: center;
			justify-content: space-between;
			position: fixed;
			bottom: 0;
			left: 0;
			text-align: center;
			font-size: 30upx;
			color: #fff;
			.good-detail-btns-concat {
				width: 270upx;
				height: 100upx;
				background-color: #fff;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.good-detail-concat {
					width: 44upx;
					height: 100upx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					font-size: 22upx;
					line-height: 30upx;
					color: #666;
					margin-left: 44upx;
					.good-detail-concat-icon {
						width: 42upx;
						height: 36upx;
					}
				}
			}
			.good-detail-btns-cart {
				width: 220upx;
				height: 100upx;
				background-color: #FFB701;
				line-height: 100upx;
				text-align: center;
				display: flex;
				justify-content: center;
				align-items: center;
				.good-detail-cart-icon {
					width: 44upx;
					height: 44upx;
					margin-right: 12upx;
				}
			}
			.good-detail-btns-add {
				width: 270upx;
				height: 100upx;
				background-color: #FF5101;
				line-height: 100upx;
			}
		}
	}
</style>
