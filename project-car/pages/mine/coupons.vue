<template>
	<view class="coupons-container">
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
		<view class="coupons-list">
			<view class="coupons-item" v-for="item in couponsArrs" :key="item">
				<view class="coupons-info">
					<text class="coupons-label">{{item.label}}</text>
					<text class="coupons-value">{{item.value}}</text>
					<text class="coupons-rest">剩余可抢{{item.rest}}%</text>
					<view class="coupons-progress"></view>
					<image class="coupons-get" :src="`${baseUrl}/imgs/others/coupons-get.png`"></image>
				</view>
				<view class="coupons-btn">
					<view @click="skipTo" class="coupons-skip">去使用</view>
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
				couponsArrs: [
					{
						label: '壳牌品牌优惠券',
						value: '满1000减100',
						rest: '94',
						status:  '已领取'
					},
					{
						label: '壳牌品牌优惠券',
						value: '满1000减100',
						rest: '64',
						status:  '已领取'
					}
				]
			}
		},
		methods: {
			skipTo() {
				uni.navigateTo({
				    url: `/pages/class/sale`
				});	
			}
		}
	}
</script>

<style scoped lang="scss">
	.swiper {
		width: 690upx;
		height: 228upx;
		padding: 12upx 30upx;
	}
	.swiper-item {
		width: 100%;
		height: 100%;
		border-radius: 16upx;
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
	.coupons-container {
		width: 100%;
		min-height: 100vh;
		background-color: #F7F7F7;
		.coupons-list {
			width: 690upx;
			height: auto;
			padding: 30upx;
			.coupons-item {
				width: 100%;
				height: 180upx;
				background-color: #fff;
				margin-bottom: 24upx;
				display: flex;
				align-items: center;
				.coupons-info {
					width: 436upx;
					height: 148upx;
					padding: 0 30upx;
					margin: 16upx 0;
					border-right: 1upx dashed #FF5F22;
					display: flex;
					flex-direction: column;
					position: relative;
					.coupons-label {
						font-size: 30upx;
						line-height: 44upx;
						color: #333;
						font-weight: bold;
					}
					.coupons-value {
						font-size: 28upx;
						line-height: 44upx;
						color: #666;
						font-weight: 400;
					}
					.coupons-rest {
						font-size: 24upx;
						line-height: 32upx;
						color: #333;
						font-weight: 400;
						margin: 10upx 0;
					}
					.coupons-progress {
						width: 300upx;
						height: 8upx;
						border-radius: 4upx;
						background:linear-gradient(180deg,rgba(255,126,11,1) 0%,rgba(255,58,61,1) 100%);
					}
					.coupons-get {
						width: 108upx;
						height: 104upx;
						position: absolute;
						right: 0;
						top: 0;
					}
				}
				.coupons-btn {
					width: 190upx;
					height: 180upx;
					display: flex;
					justify-content: center;
					align-items: center;
					.coupons-skip {
						width: 128upx;
						height: 52upx;
						border-radius: 26upx;
						background-color: #FF6A1A;
						font-size: 26upx;
						color: #fff;
						line-height: 52upx;
						text-align: center;
					}
				}
			}
		}
	}
</style>
