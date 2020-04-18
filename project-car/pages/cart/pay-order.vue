<template>
	<view class="pay-order-container">
		<view class="pay-order-header">
			<view>
				<text class="pay-order-tilte">支付金额</text>
				<text class="pay-order-count">¥30.00</text>
			</view>
			<image class="pay-order-money" :src="`${baseUrl}/imgs/cart/monry-icon.png`"></image>
		</view>
		<view class="pay-order-detail">
			<text>支付明细</text>
			<image class="pay-order-down" :src="`${baseUrl}/imgs/mine/down-icon.png`"></image>
		</view>
		<view class="pay-order-types">
			<view @click="triggerMask(true)" class="pay-order-type" v-for="item in payTypes" :key="item">
				<view>
					<image class="pay-order-icon" :src="`${baseUrl}/imgs/cart/${item.iconName}-pay.png`"></image>
					<text>{{item.label}}</text>
				</view>
				<image class="pay-order-right" :src="`${baseUrl}/imgs/public/right-icon.png`"></image>
			</view>
		</view>
		<view :class="{'pay-sel-container-hide': isShowPaySel === true}" class="pay-sel-container">
			<view class="pay-sel-info">
				<view class="pay-sel-title">
					<image @click="triggerMask(false)" class="pay-sel-title-close" :src="`${baseUrl}/imgs/others/close.png`"></image>
					<text>请选择支付渠道</text>
				</view>
				<view class="pay-sel-list">
					<view @click="payTypeSel(index)" class="pay-sel-item" v-for="(item, index) in accountArrs" :key="item.label">
						<image class="pay-sel-item-icon" :src="`${baseUrl}/imgs/others/${item.icon}.png`"></image>
						<view class="pay-sel-item-txt">
							<text class="pay-sel-item-name">开户行：{{item.title}}</text>
							<text>账户名称：{{item.name}}</text>
							<text>账号：{{item.account}}</text>
						</view>
						<image v-if="payTypeIndex === index" class="pay-sel-item-check" :src="`${baseUrl}/imgs/others/check-sel.png`"></image>
						<image v-else class="pay-sel-item-check" :src="`${baseUrl}/imgs/others/check.png`"></image>
					</view>
				</view>
				<view class="pay-sel-btn">上传图片</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				isShowPaySel: false,
				payTypeIndex: null,
				baseUrl: 'http://39.108.65.247:8087',
				accountArrs: [
					{
						icon: 'pay-00',
						title: '招商银行致富路支行',
						name: '配达丰',
						account: '3487324957423875'
					},
					{
						icon: 'pay-01',
						title: '交通银行致富路支行',
						name: '配达丰',
						account: '3487324957423875'
					},
					{
						icon: 'pay-00',
						title: '建设银行致富路支行',
						name: '配达丰',
						account: '3487324957423875'
					}
				],
				payTypes: [
					{
						label: '微信支付',
						value: 'wechat',
						iconName: 'wechat'
					},
					{
						label: '凭证支付',
						value: 'credentials',
						iconName: 'credentials'
					},
					{
						label: '挂帐支付',
						value: 'hang',
						iconName: 'hang'
					},
					{
						label: '余额支付',
						value: 'remain',
						iconName: 'remain'
					}
				]
			}
		},
		methods: {
			triggerMask(tag) {
				this.payTypeIndex = null;
				this.isShowPaySel = tag;
			},
			payTypeSel(index) {
				this.payTypeIndex = index;
			}
		}
	}
</script>

<style scoped lang="scss">
	.pay-order-container {
		width: 100%;
		height: 100vh;
		overflow: hidden;
		background-color: #F7F7F7;
		.pay-sel-container {
			position: absolute;
			bottom: 0;
			top: 0;
			width: 100vw;
			height: 100vh;
			background-color: rgba(0,0,0,0.7);
			transition: .6s;
			transform: translateY(100vh);
			opacity: 0;
			.pay-sel-info {
				background-color: #fff;
				width: 100%;
				height: auto;
				position: absolute;
				bottom: 0;
				left: 0;
				.pay-sel-title {
					width: 100%;
					height: 88upx;
					border-bottom: 1upx solid #D8D8D8;
					font-size: 32upx;
					color: #333;
					line-height: 88upx;
					text-align: center;
					position: relative;
					.pay-sel-title-close {
						width: 32upx;
						height: 32upx;
						position: absolute;
						left: 60upx;
						top: 28upx;
					}
				}
				.pay-sel-list {
					.pay-sel-item {
						width: 630upx;
						height: 160upx;
						border-radius: 16upx;
						margin: 24upx auto;
						padding: 0 30upx;
						border: 1upx solid #F2F2F2;
						display: flex;
						justify-content: space-between;
						align-items: center;
						.pay-sel-item-icon {
							width: 88upx;
							height: 88upx;
						}
						.pay-sel-item-txt {
							width: 420upx;
							height: 100%;
							display: flex;
							flex-direction: column;
							justify-content: center;
							font-size: 24upx;
							color: #666;
							line-height: 32upx;
							.pay-sel-item-name {
								font-size: 30upx;
								color: #333;
								line-height: 44upx;
							}
						}
						.pay-sel-item-check {
							width: 52upx;
							height: 52upx;
						}
					}
				}
				.pay-sel-btn {
					width: 684upx;
					height: 88upx;
					border-radius: 8upx;
					background-color: #FF5101;
					line-height: 88upx;
					text-align: center;
					margin: 60upx auto 40upx;
					font-size: 32upx;
					color: #fff;
				}
			}
		}
		.pay-sel-container-hide {
			transform: translateY(0);
			opacity: 1;
		}
		.pay-order-header {
			width: 630upx;
			height: 260upx;
			padding: 0 60upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #fff;
			background: linear-gradient(270deg,rgba(255,82,2,1) 0%,rgba(255,58,61,1) 100%);
			.pay-order-money {
				width: 128upx;
				height: 128upx;
			}
			.pay-order-tilte {
				font-size: 32upx;
				line-height: 48upx;
				display: block;
			}
			.pay-order-count {
				font-size: 60upx;
				font-weight: bold;
				line-height: 100upx;
			}
		}
		.pay-order-detail {
			width: 690upx;
			height: 88upx;
			padding: 0 30upx;
			background-color: #fff;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 30upx;
			color: #666;
			.pay-order-down {
				width: 32upx;
				height: 18upx;
			}
		}
		.pay-order-types {
			width: 750upx;
			height: auto;
			background-color: #fff;
			margin-top: 30upx;
			.pay-order-type {
				display: flex;
				justify-content: space-between;
				align-items: center;
				width: 690upx;
				height: 88upx;
				padding: 0 30upx;
				border-bottom: 1upx solid #F7F7F7;
				font-size: 30upx;
				color: #666;
				.pay-order-right {
					width: 18upx;
					height: 32upx;
				}
				.pay-order-icon {
					width: 46upx;
					height: 44upx;
					margin-right: 30upx;
				}
			}
		}
	}
</style>
