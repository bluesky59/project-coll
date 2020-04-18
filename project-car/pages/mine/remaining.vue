<template>
	<div class="remaining-container">
		<view class="remaining-header" :style="{background: `url(${imgUrl})`, backgroundSize: '345px 132px'}">
			<image class="remaining-qianbao" src="http://39.108.65.247:8087/imgs/mine/qianbao.png"></image>
			<text class="remaining-title">钱包余额</text>
			<text class="remaining-num">¥345098.00</text>
		</view>
		<view class="remaining-list" v-for="item in remainingArrs" :key="item" @click="skipTo(item)">
			<view class="remaining-info">
				<image class="remaining-icon" :src="item.icon"></image>
				<text>{{item.label}}</text>
			</view>
			<text> > </text>
		</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				imgUrl: 'http://39.108.65.247:8087/imgs/mine/remaining-bg.png',
				remainingArrs: [
					{
						label: '电子账单',
						icon: 'http://39.108.65.247:8087/imgs/mine/remaining-00.png',
						value: '00'
					},
					{
						label: '欠款查询',
						icon: 'http://39.108.65.247:8087/imgs/mine/remaining-01.png',
						value: '01'
					},
					{
						label: '我的银行卡',
						icon: 'http://39.108.65.247:8087/imgs/mine/remaining-02.png',
						value: '02'
					},
					{
						label: '提现申请',
						icon: 'http://39.108.65.247:8087/imgs/mine/remaining-03.png',
						value: '03'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			skipTo (data) {
				data.value === '00' && uni.navigateTo({
					url: `/pages/mine/remaining-detail`
				});	
			}
		}
	}
</script>

<style scoped>
	.remaining-container {
		width: 100%;
		min-height: 100vh;
		background-color: #F7F7F7;
	}
	.remaining-header {
		width: 690upx;
		height: 264upx;
		margin: 30upx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
	}
	.remaining-qianbao {
		width: 58upx;
		height: 52upx;
	}
	.remaining-title {
		font-size: 28upx;
		color: #fff;
		line-height: 48upx;
	}
	.remaining-num {
		font-size: 32upx;
		line-height: 44upx;
		font-weight: bold;
		color: #fff;
		margin-top: 10upx;
	}
	.remaining-list {
		width: 690upx;
		height: 100upx;
		padding: 0 30upx;
		border-bottom: 1upx solid #E1E1E1;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		color: #D8D8D8;
	}
	.remaining-info {
		display: flex;
		align-items: center;
		font-size: 32upx;
		color: #333;
	}
	.remaining-icon {
		width: 44upx;
		height: 44upx;
		margin-right: 20upx;
	}
</style>
