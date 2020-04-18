<template>
	<view class="to-take-container">
		<view class="to-take-header" :style="{backgroundImage: `url(${imageBgUrl})`, backgroundSize: '375px 126px', backgroundRepeat: 'no-repeat'}">
			<view class="take-info">
				<view class="take-addr">
					<view class="take-address">
						<image class="take-location" :src="`${baseUrl}/imgs/mine/location.png`"></image>
						合能璞丽2栋一单元
					</view>
					<text class="take-phone">左老师 13666233732</text>
				</view>
				<image class="take-skip" :src="`${baseUrl}/imgs/public/right-icon.png`"></image>
			</view>
		</view>
		<view class="take-goods">
			<view class="take-number">订单编号：23404325342698</view>
			<view class="take-goods-list">
				<view class="take-goods-detail">
					<image class="take-goods-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
					<image class="take-goods-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
					<image class="take-goods-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
					<image class="take-goods-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
				</view>
				<text class="take-goods-count">共4件></text>
			</view>
			<view class="take-price">共6件商品 合计：<text class="take-price-number">¥1289.00</text></view>
		</view>
		<view class="take-detail">
			<view class="take-row">
				<text class="take-label">订单编号：</text>
				<text class="take-value">365476498769</text>
			</view>
			<view class="take-row">
				<text class="take-label">下单时间</text>
				<text class="take-value">2020-02-12 19:23</text>
			</view>
			<view class="take-divider"></view>
			<view class="take-row">
				<text class="take-label">支付方式：</text>
				<text class="take-value">微信支付</text>
			</view>
			<view class="take-row">
				<text class="take-label">配送方式：</text>
				<text class="take-value">顺丰速运</text>
			</view>
			<view class="take-row">
				<text class="take-label">物流单号：</text>
				<text class="take-value">454325432654365</text>
			</view>
			<view class="take-divider"></view>
			<view class="take-total">
				<text class="take-total-label">商品总额：</text>
				<text class="take-total-value">¥ 1923.00</text>
			</view>
			<view class="take-total">
				<text class="take-total-label">运费：</text>
				<text class="take-total-value">¥ 0.00</text>
			</view>
			<view class="take-total">
				<text class="take-total-label">优惠：</text>
				<text class="take-total-value">¥ -0.01</text>
			</view>
			<view class="take-divider"></view>
			<view class="take-pay">需付款<text class="take-money">¥ 1289.00</text></view>
		</view>
		<view class="take-btn">
			<view class="take-confirm">确认收货</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseUrl: 'http://39.108.65.247:8087',
				imageBgUrl: 'http://39.108.65.247:8087/imgs/mine/to-take-bg.png',
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.to-take-container {
		background-color: #F7F7F7;
		.to-take-header {
			width: 750upx;
			height: 172upx;
			padding-top: 220upx;
			.take-info {
				width: 690upx;
				height: 168upx;
				padding: 0 30upx;
				border-radius: 16upx;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				align-items: center;
				border-radius: 24upx 24upx 0 0;
				.take-addr {
					width: 560upx;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: center;
					font-size: 32upx;
					color: #666;
					line-height: 60upx;
					.take-address {
						color: #333;
						display: flex;
						align-items: center;
						justify-content: flex-start;
						font-weight: 500;
						.take-location {
							width: 26upx;
							height: 34upx;
							margin-right: 20upx;
						}
					}
				}
				.take-phone {
					padding-left: 46upx;
				}
				.take-skip {
					width: 18upx;
					height: 32upx;
				}
			}
		}
		.take-goods {
			width: 690upx;
			height: 330upx;
			background-color: #fff;
			margin-top: 30upx;
			padding: 10upx 30upx;
			.take-number {
				font-size: 30upx;
				color: #333;
				line-height: 80upx;
			}
			.take-goods-list {
				width: 100%;
				height: 168upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.take-goods-detail {
					width: 560upx;
					display: flex;
					align-items: center;
					justify-content: space-between;
					.take-goods-img {
						width: 128upx;
						height: 128upx;
					}
				}
				.take-goods-count {
					width: 100upx;
					font-size: 30upx;
					color: #999;
				}
			}
			.take-price {
				font-size: 24upx;
				color: #999;
				line-height: 80upx;
				float: right;
				.take-price-number {
					font-size: 32upx;
					color: #333;
					font-weight: bold;
				}
			}
		}
		.take-detail {
			width: 720upx;
			height: auto;
			padding: 0 0 0 30upx;
			background-color: #fff;
			margin-top: 30upx;
			.take-row {
				display: flex;
				align-items: center;
				justify-content: flex-start;
				font-size: 30upx;
				font-weight: 400;
				width: 100%;
				height: 68upx;
				.take-label {
					width: 160upx;
					color: #999;
				}
				.take-value {
					color: #333;
					font-weight: 500;
				}
			}
			.take-divider {
				width: 560upx;
				height: 2upx;
				background-color: #E1E1E1;
				float: right;
			}
			.take-total {
				width: 690upx;
				padding-right: 30upx;
				height: 68upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30upx;
				color: #333;
				.take-total-label {
					font-weight: 400;
					width: 160upx;
				}
				.take-total-value {
					font-weight: bold;
					width: 400upx;
					text-align: right;
				}
			}
			.take-pay {
				width: 690upx;
				height: 108upx;
				line-height: 108upx;
				font-size: 24upx;
				color: #333;
				background-color: #fff;
				display: flex;
				justify-content: flex-end;
				align-items: center;
				.take-money {
					font-size: 36upx;
					font-weight: 500;
					color: #FF5101;
					margin-left: 16upx;
				}
			}
		}
		.take-btn {
			width: 670upx;
			height: 108upx;
			padding: 0 40upx;
			margin-top: 30upx;
			background-color: #fff;
			display: flex;
			align-items: center;
			justify-content: flex-end;
			.take-confirm {
				width: 168upx;
				height: 64upx;
				background-color: #FF5101;
				border-radius: 32upx;
				line-height: 64upx;
				text-align: center;
				font-size: 28upx;
				color: #fff;
			}
		}
	}
</style>
