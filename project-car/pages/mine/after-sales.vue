<template>
	<view class="after-sales-container">
		<view class="after-sales-tabs">
			<view @click="tabSwitch(index)" :class="{'after-sales-tab-active': tabIndex === index}" class="after-sales-tab" v-for="(item, index) in typesArr" :key="item">
				<text>{{item.label}}</text>
			</view>
		</view>
		<view class="after-sales-query">
			<view class="after-sales-input">
				<image class='after-sales-icon' :src="`${baseUrl}/imgs/index/custom/query-icon.png`"></image>
				<input class="uni-input after-sales-input-txt" confirm-type="search" placeholder="输入账单相关信息" />
			</view>
			<view class="after-sales-filters">
				<image class="after-sales-filter" :src="`${baseUrl}/imgs/mine/filter-icon.png`"></image>
				筛选
			</view>
		</view>
		<view class="after-sales-content">
			<!-- 售后申请 -->
			<view class="after-sales-apply" v-if="tabIndex === 0">
				<view class="take-goods">
					<view class="take-number">
						<text>订单编号：234043253426981234</text>
					</view>
					<view class="goods-list-apply">
						<view class="good-apply-checkbox">
							<checkbox value="cb" :checked="true" />
						</view>
						<view class="good-apply-info">
							<image class="goods-list-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
							<view class="goods-list-txt">
								<text>意奔马 机油滤清器 YBM521032</text>
								<text>¥ 538 x 3</text>
							</view>
						</view>
					</view>
					<view class="goods-list-apply">
						<view class="good-apply-checkbox">
							<checkbox value="cb" :checked="false" />
						</view>
						<view class="good-apply-info">
							<image class="goods-list-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
							<view class="goods-list-txt">
								<text>意奔马 机油滤清器 YBM521032</text>
								<text>¥ 538 x 3</text>
							</view>
						</view>
					</view>
					<view class="take-price">已选中<text class="take-num">1</text>件商品  退款金额:<text class="take-price-number take-price-number-after">¥1289.00</text></view>
					<view class="after-sale-apply">
						<button class="after-sale-apply-btn">申请售后</button>
					</view>
				</view>
			</view>
			<!-- 处理中 -->
			<view class="after-sales-dealing" v-if="tabIndex === 1">
				<view class="take-goods">
					<view class="take-number">
						<text>订单编号：23404325342698</text>
						<view class="goods-status">
							<image class="goods-check" :src="`${baseUrl}/imgs/mine/dealing-icon.png`"></image>
							退货退款
						</view>
					</view>
					<view class="goods-list">
						<image class="goods-list-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
						<view class="goods-list-txt">
							<text>意奔马 机油滤清器 YBM521032</text>
							<text>¥ 538 x 3</text>
						</view>
					</view>
					<view class="goods-list">
						<image class="goods-list-img" :src="`${baseUrl}/imgs/mine/goods-img.png`"></image>
						<view class="goods-list-txt">
							<text>意奔马 机油滤清器 YBM521032</text>
							<text>¥ 538 x 3</text>
						</view>
					</view>
					<view class="goods-finished-tips">待退款<text class="goods-finished-tips-spe">您的订单正在退款中，剩余0天12小时5分</text></view>
					<view class="take-price">共6件商品 合计：<text class="take-price-number">¥1289.00</text></view>
				</view>
			</view>
			<!-- 申请记录 -->
			<view class="after-sales-record" v-if="tabIndex === 2">
				<view class="take-goods">
					<view class="take-number">
						<text>订单编号：23404325342698</text>
						<view class="goods-status">
							<image class="goods-check" :src="`${baseUrl}/imgs/mine/check-icon.png`"></image>
							已完成
						</view>
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
					<view class="goods-finished-tips">完成<text class="goods-finished-tips-spe">服务已完成，感谢您对好好汽配的支持～</text></view>
				</view>
				<view class="take-goods">
					<view class="take-number">
						<text>订单编号：23404325342698</text>
						<view class="goods-status">
							<image class="goods-check" :src="`${baseUrl}/imgs/mine/check-icon.png`"></image>
							已完成
						</view>
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
					<view class="goods-finished-tips">完成<text class="goods-finished-tips-spe">服务已完成，感谢您对好好汽配的支持～</text></view>
				</view>
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
						label: '售后申请',
						value: '0'
					},
					{
						label: '处理中',
						value: '1'
					},
					{
						label: '申请记录',
						value: '2'
					}
				],
				tabIndex: 0
			}
		},
		mounted() {
			console.log(this.$route);
		},
		methods: {
			tabSwitch (index) {
				this.tabIndex = index;
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
			.after-sales-tab {
				font-size: 28upx;
				color: #333;
				width: 200upx;
				height: 88upx;
				text-align: center;
				line-height: 88upx;
			}
			.after-sales-tab-active {
				color: #FF5101;
				border-bottom: 1upx solid #FF5101;
			}
		}
		.after-sales-query {
			width: 690upx;
			height: 100upx;
			background-color: #fff;
			padding: 0 30upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.after-sales-input {
				width: 570upx;
				height: 72upx;
				padding-left: 40upx;
				border-radius: 36upx;
				background-color: #F1F1F1;
				display: flex;
				justify-content: flex-start;
				align-items: center;
				.after-sales-icon {
					width: 36upx;
					height: 36upx;
					margin-right: 16upx;
				}
				.after-sales-input-txt {
					font-size: 30upx;
					color: #999;
					width: 400upx;
					overflow: hidden;
				}
			}
			.after-sales-filters {
				width: 60upx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				font-size: 22upx;
				color: #999;
				line-height: 32upx;
				.after-sales-filter {
					width: 30upx;
					height: 34upx;
				}
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
			.take-price-number-after {
				margin-left: 24upx;
			}
			.take-num {
				color: #333;
			}
		}
		.goods-list-apply {
			width: 690upx;
			height: 160upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			margin-bottom: 30upx;
			.good-apply-checkbox {
				width: 60upx;
				height: 100%;
				display: flex;
				align-items: center;
				justify-content: flex-start;
			}
			.good-apply-info {
				width: 630upx;
				height: 160upx;
				border-radius: 16upx;
				background-color: #F7F7F7;
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
			height: 64upx;
			text-align: right;
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
