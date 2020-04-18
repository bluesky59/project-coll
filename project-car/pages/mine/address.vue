<template>
	<view class="address-container">
		<view class="address-query">
			<view class="address-title">
				<image class="address-wechat" :src="`${baseUrl}/imgs/public/wechat-icon.png`"></image>
				<text>获取微信收货地址</text>
			</view>
			<image class="address-right" :src="`${baseUrl}/imgs/public/right-icon.png`"></image>
		</view>
		<view class="address-info">
			<view class="addr-item">
				<text class="addr-item-label">联系人</text>
				<input class="uni-input addr-item-value" confirm-type="search" placeholder="请填写收货人姓名" />
			</view>
			<view class="addr-item">
				<text class="addr-item-label">手机号</text>
				<input class="uni-input addr-item-value" confirm-type="search" placeholder="请填写联系电话" />
			</view>
			<view class="addr-item">
				<text class="addr-item-label">收货地址</text>
				<input class="uni-input addr-item-value" confirm-type="search" placeholder="所在地区" />
			</view>
			<view class="addr-item">
				<text class="addr-item-label">具体地址</text>
				<input class="uni-input addr-item-value" confirm-type="search" placeholder="街道，楼牌号等" />
			</view>
			<text class="addr-auto">智能识别地址</text>
		</view>
		<view class="address-set">
			<text>设为默认</text>
			<switch checked />
		</view>
		<view class="address-btn">保存</view>
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
			
		}
	}
</script>

<style scoped lang="scss">
	.address-container {
		width: 100%;
		min-height: 100vh;
		background-color: #F7F7F7;
		font-size: 30upx;
		.address-query {
			width: 690upx;
			height: 88upx;
			padding: 0 30upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			color: #333;
			background-color: #fff;
			.address-wechat {
				width: 52upx;
				height: 42upx;
				margin-right: 30upx;
			}
			.address-right {
				width: 16upx;
				height: 28upx;
			}
			.address-title {
				display: flex;
				justify-content: flex-start;
				align-items: center;
			}
		}
		.address-info {
			width: 750upx;
			height: auto;
			margin-top: 30upx;
			background-color: #fff;
			text-align: right;
			.addr-item {
				width: 690upx;
				padding: 0 30upx;
				height: 88upx;
				display: flex;
				align-items: center;
				justify-content: space-between;
				border-bottom: 1upx solid #E1E1E1;
				.addr-item-label {
					color: #999;
				}
				.addr-item-value {
					color: #666;
					width: 400upx;
					overflow: hidden;
				}
			}
			.addr-auto {
				color: #FF5101;
				margin: 80upx 30upx 20upx 0;
				display: inline-block;
			}
		}
		.address-set {
			width: 690upx;
			height: 88upx;
			background-color: #fff;
			margin-top: 30upx;
			padding: 0 30upx;
			color: #999;
			font-size: 30upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
		}
		.address-btn {
			width: 100%;
			height: 100upx;
			line-height: 100upx;
			text-align: center;
			background-color: #FF5101;
			font-size: 30upx;
			color: #fff;
			position: absolute;
			bottom: 0;
		}
	}
</style>
