<template>
	<view class="new-goods-container">
		<view class="new-goods-header" :style="{background: `url(${imageBgUrl})`, backgroundSize: '375px 225px'}">
			<text class="new-goods-title">没找到想要的商品？</text>
			<text class="new-goods-tips">告诉我们你需要什么</text>
		</view>
		<view class="goods-mine">我提报过的新品</view>
		<view class="goods-mine-list">
			<view class="goods-mine-item" v-for="item in goodsArr" :key="item">
				<text>{{item.label}}</text>
				<text class="goods-mine-status">已提交</text>
			</view>
		</view>
		<view class="goods-to" @click="skipTo">我要提报新品</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageBgUrl: 'http://39.108.65.247:8087/imgs/mine/new-goods-bg.png',
				goodsArr: [
					{
						label: '滤清器'
					}
				]
			}
		},
		methods: {
			skipTo () {
				uni.navigateTo({
				    url: `/pages/mine/new-goods-add`
				});	
			}
		}
	}
</script>

<style scoped lang="scss">
	.new-goods-container {
		width: 100vw;
		height: 100vh;
		.new-goods-header {
			width: 750upx;
			height: 450upx;
			display: flex;
			align-items: center;
			justify-content: center;
			flex-direction: column;
			.new-goods-title {
				font-size: 56upx;
				font-weight: 500;
				color: #fff;
				line-height: 80upx;
			}
			.new-goods-tips {
				font-size: 30upx;
				font-weight: 400;
				color: #fff;
				line-height: 60upx;
			}
		}
		.goods-mine {
			width: 750upx;
			height: 80upx;
			background-color: #E7E7E7;
			line-height: 80upx;
			text-align: center;
			font-size: 30upx;
			color: #999;
		}
		.goods-mine-list {
			width: 100%;
			height: auto;
			background-color: #fff;
			.goods-mine-item {
				width: 690upx;
				height: 100upx;
				border-bottom: 1upx solid #E1E1E1;
				margin: 0 30upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				font-size: 30upx;
				color: #333;
				font-weight: 400;
				.goods-mine-status {
					color: #FF5101;
				}
			}
		}
		.goods-to {
			width: 750upx;
			height: 98upx;
			background-color: #FF5101;
			line-height: 98upx;
			text-align: center;
			font-size: 30upx;
			color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}
</style>
