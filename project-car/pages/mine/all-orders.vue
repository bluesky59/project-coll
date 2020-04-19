<template>
	<view class="after-sales-container">
		<view class="after-sales-tabs">
			<view class="order-tabs">
				<view @click="tabSwitch(index)" :class="{'after-sales-tab-active': tabIndex === index}" class="after-sales-tab" v-for="(item, index) in typesArr" :key="item">
					<text>{{item.label}}</text>
					<view v-show="tabIndex === index" class="tabs-divider"></view>
				</view>
			</view>
			<image class="order-query" :src="`${baseUrl}/imgs/others/query-icon.png`"></image>
		</view>
		<view class="after-sales-content">
			<view class="after-sales-apply" v-if="tabIndex === 0">
				待付款
			</view>
			<view class="after-sales-apply" v-if="tabIndex === 1">
				待发货
			</view>
			<view class="after-sales-dealing" v-if="tabIndex === 2">
				<view class="take-goods" @click="skipTo">
					<view class="take-number">
						<text>订单编号：23404325342698</text>
						<text class="orders-status">待收货</text>
					</view>
					<view class="orders-logistics-info">
						<image class="orders-logistics-icon" :src="`${baseUrl}/imgs/others/car-icon.png`"></image>
						<text class="orders-logistics-title">德邦物流</text>
						<text class="orders-logistics-number">单号：43573429572043958</text>
					</view>
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
					<view class="order-btns">
						<view class="order-btn-detail">订单详情</view>
						<view class="order-btn-repeat">再来一单</view>
					</view>
				</view>
				<view class="take-goods">
					<view class="take-number">
						<text>订单编号：23404325342698</text>
						<text class="orders-status">待收货</text>
					</view>
					<view class="orders-logistics-info">
						<image class="orders-logistics-icon" :src="`${baseUrl}/imgs/others/car-icon.png`"></image>
						<text class="orders-logistics-title">德邦物流</text>
						<text class="orders-logistics-number">单号：43573429572043958</text>
					</view>
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
					<view class="order-btns">
						<view class="order-btn-detail">订单详情</view>
						<view class="order-btn-repeat">再来一单</view>
					</view>
				</view>
			</view>
			<view class="after-sales-record" v-if="tabIndex === 3">
				已完成
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseUrl: 'http://39.108.65.247:8087',
				typesArr: [
					{
						label: '待付款',
						value: '0'
					},
					{
						label: '待发货',
						value: '1'
					},
					{
						label: '待收货',
						value: '2'
					},
					{
						label: '已完成',
						value: '3'
					}
				],
				tabIndex: 2
			}
		},
		mounted() {
			console.log(this.$route);
		},
		methods: {
			tabSwitch (index) {
				this.tabIndex = index;
			},
			skipTo() {
				uni.navigateTo({
				    url: `/pages/mine/to-take`
				});	
			}
		}
	}
</script>

<style scoped lang="scss">
	.after-sales-container {
		width: 100%;
		min-height: 100vh;
		background-color: #F7F7F7;
		.after-sales-tabs {
			width: 690upx;
			height: 88upx;
			background-color: #fff;
			padding: 0 30upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.order-tabs {
				width: 620upx;
				height: 88upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.after-sales-tab {
					font-size: 28upx;
					color: #333;
					width: 200upx;
					height: 88upx;
					text-align: center;
					line-height: 88upx;
					position: relative;
				}
				.after-sales-tab-active {
					color: #FF5101;
				}
				.tabs-divider {
					width: 20upx;
					height: 6upx;
					background:linear-gradient(180deg,rgba(255,126,11,1) 0%,rgba(255,58,61,1) 100%);
					border-radius: 3upx;
					position: absolute;
					bottom: 0;
					left: 50%;
					transform: translateX(-50%);
				}
			}
			.order-query {
				width: 52upx;
				height: 52upx;
			}
		}
		.after-sales-content {
			.take-goods {
				width: 690upx;
				height: auto;
				background-color: #fff;
				margin-top: 30upx;
				padding: 12upx 30upx 40upx;
				border-radius: 16upx;
				.take-number {
					font-size: 30upx;
					color: #333;
					line-height: 80upx;
					display: flex;
					justify-content: space-between;
					align-items: center;
					.orders-status {
						font-size: 30upx;
						color: #FF5101;
					}
					.goods-status {
						font-weight: bold;
						display: flex;
						justify-content: flex-end;
						align-items: center;
						.goods-check {
							width: 42upx;
							height: 42upx;
							margin-right: 16upx;
						}
					}
				}
				.orders-logistics-info {
					width: 670upx;
					height: 88upx;
					margin: 16upx auto;
					background:rgba(255,255,255,1);
					border-radius: 8upx;
					border: 1upx solid rgba(225,225,225,1);
					display: flex;
					align-items: center;
					font-size: 30upx;
					padding-left: 20upx;
					.orders-logistics-icon {
						width: 40upx;
						height: 40upx;
					}
					.orders-logistics-title {
						color: #666;
						margin: 0 24upx;
					}
					.orders-logistics-number {
						color: #999;
					}
				}
				.order-btns {
					width: 100%;
					height: 64upx;
					margin-top: 20upx;
					display: flex;
					justify-content: flex-end;
					align-items: center;
					.order-btn-detail {
						border: 1upx solid #979797;
						color: #333;
						margin-right: 30upx;
					}
					.order-btn-repeat {
						color: #FF5101;
						border: 1upx solid #FF5101;
					}
					.order-btn-detail, .order-btn-repeat{
						width: 166upx;
						height: 64upx;
						border-radius: 32upx;
						text-align: center;
						line-height: 64upx;
						font-size: 28upx;
					}
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
				.goods-finished-tips {
					width: 630upx;
					height: 88upx;
					background-color: #F7F7F7;
					border-radius: 16upx;
					line-height: 88upx;
					padding: 0 30upx;
					font-size: 26upx;
					color: #333;
					.goods-finished-tips-spe {
						color: #888;
						margin-left: 30upx;
					}
				}
			}
		}
		.take-price {
			height: auto;
			font-size: 24upx;
			color: #999;
			line-height: 80upx;
			text-align: right;
			.take-price-number {
				font-size: 32upx;
				color: #333;
				font-weight: bold;
			}
		}
		.goods-list {
			width: 690upx;
			height: 160upx;
			border-radius: 16upx;
			background-color: #F7F7F7;
			margin-bottom: 30upx;
			display: flex;
			justify-content: center;
			align-items: center;
			.goods-list-img {
				width: 100upx;
				height: 80upx;
				margin-right: 30upx;
			}
			.goods-list-txt {
				width: 480upx;
				font-size: 28upx;
				color: #666;
				line-height: 48upx;
				display: flex;
				flex-direction: column;
			}
		}
		.after-sale-apply {
			width: 100%;
			height: 100upx;
			display: flex;
			justify-content: flex-end;
			align-items: center;
			.after-sale-apply-btn {
				width: 188upx;
				height: 64upx;
				display: inline-block;
				border: 1upx solid #FF5101;
				border-radius: 32upx;
				text-align: center;
				line-height: 64upx;
				font-size: 28upx;
				color: #FF5101;
			}
		}
	}
</style>
