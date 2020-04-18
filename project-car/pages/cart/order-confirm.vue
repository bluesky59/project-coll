<template>
	<view class="to-take-container">
		<view class="to-take-header">
			<view class="take-info">
				<view class="take-addr">
					<view class="take-address">
						<image class="take-location" :src="`${baseUrl}/imgs/mine/location.png`"></image>
						合能璞丽2栋一单元
					</view>
					<text class="take-phone">左老师 13666233732</text>
				</view>
				<text class="take-skip"> > </text>
			</view>
		</view>
		<view class="take-goods">
			<view class="take-number">订单详情</view>
			<view class="take-goods-list">
				<view class="take-goods-detail">
					<image class="take-goods-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
					<image class="take-goods-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
					<image class="take-goods-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
					<image class="take-goods-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
				</view>
				<text class="take-goods-count">共4件></text>
			</view>
			<view class="take-price">合计：<text class="take-price-number">¥1289.00</text></view>
		</view>
		<view class="order-confirm-info">
			<view class="order-confirm-form">
				<text>配送</text>
				<view class="order-confirm-item">
					<text>顺丰速运</text>
					<image class="order-confirm-right" :src="`${baseUrl}/imgs/public/right-icon.png`"></image>
				</view>
			</view>
			<view class="order-confirm-form">
				<text>发票</text>
				<view class="order-confirm-item">
					<text>不要发票</text>
					<image class="order-confirm-right" :src="`${baseUrl}/imgs/public/right-icon.png`"></image>
				</view>
			</view>
			<view class="order-confirm-form">
				<text>优惠</text>
				<view class="order-confirm-item">
					<text>省10元：新增优惠券</text>
					<image class="order-confirm-right" :src="`${baseUrl}/imgs/public/right-icon.png`"></image>
				</view>
			</view>
			<view class="order-confirm-form">
				<text>备注</text>
				<view class="order-confirm-item">
					<text>无</text>
					<image class="order-confirm-right" :src="`${baseUrl}/imgs/public/right-icon.png`"></image>
				</view>
			</view>
		</view>
		<view class="order-confirm-detail">
			<view class="order-confirm-txt">
				<text>商品金额</text>
				<text class="order-confirm-num">¥199.00</text>
			</view>
			<view class="order-confirm-txt">
				<text>本单运费</text>
				<text class="order-confirm-num">+ ¥12.00</text>
			</view>
			<view class="order-confirm-txt">
				<text>优惠金额</text>
				<text class="order-confirm-sale">-¥10.00</text>
			</view>
		</view>
		<view class="take-btn">
			<view class="take-btn-price">合计：<text class="take-btn-number">¥1289.00</text></view>
			<view @click="skipTo" class="take-confirm">确认付款</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseUrl: 'http://39.108.65.247:8087'
			}
		},
		methods: {
			skipTo () {
				uni.navigateTo({
				    url: `/pages/cart/pay-order`
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.to-take-container {
		background-color: #F7F7F7;
		.to-take-header {
			width: 750upx;
			height: 184upx;
			.take-info {
				width: 690upx;
				height: 184upx;
				padding: 0 30upx;
				border-radius: 16upx;
				background-color: #fff;
				display: flex;
				justify-content: space-between;
				align-items: center;
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
					font-size: 28upx;
					width: 40upx;
					color: #D8D8D8;
				}
			}
		}
		.take-goods {
			width: 690upx;
			height: 330upx;
			background-color: #fff;
			margin-top: 30upx;
			padding: 0 30upx;
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
					width: 120upx;
					font-size: 30upx;
					color: #999;
				}
			}
			.take-price {
				font-size: 30upx;
				color: #C5C5C5;
				line-height: 80upx;
				float: right;
				font-weight: 400;
				.take-price-number {
					font-size: 40upx;
					color: #FF6400;
				}
			}
		}
		.order-confirm-info {
			background-color: #fff;
			margin-top: 30upx;
			.order-confirm-form {
				padding: 0 30upx;
				width: 690upx;
				height: 88upx;
				border-bottom: 1px solid #E1E1E1;
				display: flex;
				align-items: center;
				justify-content: space-between;
				font-size: 30upx;
				color: #999;
				.order-confirm-item {
					display: flex;
					justify-content: flex-end;
					align-items: center;
					color: #333;
					.order-confirm-right {
						width: 16upx;
						height: 28upx;
						margin-left: 24upx;
					}
				}
			}
		}
		.order-confirm-detail {
			height: auto;
			width: 690upx;
			padding: 20upx 30upx;
			margin-top: 30upx;
			background-color: #fff;
			.order-confirm-txt {
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30upx;
				color: #717171;
				height: 72upx;
				.order-confirm-num {
					color: #FF5101;
					font-weight: bold;
				}
				.order-confirm-sale {
					color: #424242;
					font-weight: bold;
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
			.take-btn-price {
				font-size: 24upx;
				color: #BEBEBE;
				.take-btn-number {
					font-size: 40upx;
					color: #FF5A00;
					font-weight: bold;
				}
			}
			.take-confirm {
				width: 168upx;
				height: 64upx;
				background-color: #FF5101;
				border-radius: 32upx;
				line-height: 64upx;
				text-align: center;
				font-size: 28upx;
				color: #fff;
				margin-left: 20upx;
			}
		}
	}
</style>
