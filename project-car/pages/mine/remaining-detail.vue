<template>
	<div class="remaining-container">
		<view class="remaining-query">
			<view class="remaining-txt">
				<image class='remaining-search-icon' src="http://39.108.65.247:8087/imgs/index/custom/query-icon.png"></image>
				<text class="remaining-key">输入账单相关信息</text>
			</view>
			<text class="remaining-search">搜索</text>
		</view>
		<view class="remaining-data" v-for="data in remainingArrs" :key="data">
			<view class="remaining-title">
				<view class="remaining-title-block">
					<text class="remaining-date">{{data.date}}</text>
					<image @click="isShowDetail = !isShowDetail" class='remaining-down-icon' src="http://39.108.65.247:8087/imgs/mine/down-icon.png"></image>
				</view>
				<view class="remaining-title-block">
					<text>支出 {{data.expend}}</text>
					<text class="remaining-income">收入 {{data.income}}</text>
				</view>
			</view>
			<view v-if="isShowDetail" v-for="item in data.dataList" :key="item">
				<view class="remaining-box">
					<image class="remaining-type-icon" :src="item.icon"></image>
					<view class="remaining-info">
						<view class="remaining-des">
							<text class="remaining-type">{{item.label}}</text>
							<text class="remaining-idnumber">订单号: {{item.idNumber}}</text>
						</view>
						<text :class="{'remaining-price-spe': Number(item.price) > 0}" class="remaining-price">{{item.price}}</text>
					</view>
				</view>
			</view>
		</view>
		<view class="remaining-btn">立即充值</view>
	</div>
</template>

<script>
	export default {
		data() {
			return {
				isShowDetail: true,
				remainingArrs: [
					{
						date: '本月',
						expend: '3244.99',
						income: '2983.78',
						dataList: [
							{
								type: '00',
								label: '充值',
								icon: 'http://39.108.65.247:8087/imgs/mine/remaining-type-00.png',
								idNumber: '32987423031081',
								price: '-340.00'
							},
							{
								type: '01',
								label: '订货',
								icon: 'http://39.108.65.247:8087/imgs/mine/remaining-type-01.png',
								idNumber: '32987423031081',
								price: '-340.00'
							},
							{
								type: '02',
								label: '运费',
								icon: 'http://39.108.65.247:8087/imgs/mine/remaining-type-02.png',
								idNumber: '32987423031081',
								price: '-340.00'
							},
							{
								type: '03',
								label: '挂帐',
								icon: 'http://39.108.65.247:8087/imgs/mine/remaining-type-03.png',
								idNumber: '32987423031081',
								price: '-340.00'
							},
							{
								type: '04',
								label: '售后',
								icon: 'http://39.108.65.247:8087/imgs/mine/remaining-type-04.png',
								idNumber: '32987423031081',
								price: '900.00'
							}
						]
					}
				]
			}
		},
		onLoad() {

		},
		methods: {

		}
	}
</script>

<style scoped>
	.remaining-btn {
		width: 680upx;
		height: 88upx;
		margin: 40upx auto;
		border-radius: 8upx;
		background-color: #FF5101;
		text-align: center;
		line-height: 88upx;
		font-size: 32upx;
		color: #fff;
	}
	.remaining-container {}
	.remaining-query {
		width: 630upx;
		height: 72upx;
		border-radius: 36upx;
		background-color: #F1F1F1;
		margin: 20upx 30upx;
		padding: 0 30upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
		font-size: 30upx;
	}
	.remaining-txt {
		display: flex;
		align-items: center;
		width: 440upx;
	}
	.remaining-search-icon {
		width: 36upx;
		height: 36upx;
		margin-right: 20upx;
	}
	.remaining-key {
		color: #999;
	}
	.remaining-search {
		color: #A3A3A3;
	}
	.remaining-data {}
	.remaining-title {
		width: 690upx;
		height: 100upx;
		background-color: #F7F7F7;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding: 0 30upx;
	}
	.remaining-title-block {
		display: flex;
		align-items: center;
		font-size: 28upx;
		color: #A3A3A3;
	}
	.remaining-date {
		font-size: 32upx;
		color: #333;
	}
	.remaining-down-icon {
		width: 24upx;
		height: 14upx;
		margin-left: 12upx;
	}
	.remaining-income {
		margin-left: 12upx;
	}
	.remaining-box {
		margin-bottom: 24upx;
		height: 140upx;
		padding-left: 30upx;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.remaining-type-icon {
		width: 80upx;
		height: 80upx;
	}
	.remaining-info {
		width: 580upx;
		height: 140upx;
		padding-right: 30upx;
		border-bottom: 1upx solid #E1E1E1;
		display: flex;
		align-items: center;
		justify-content: space-between;
	}
	.remaining-price {
		font-size: 28upx;
		color: #777;
		font-weight: bold;
	}
	.remaining-price-spe {
		color: #FF5101;
	}
	.remaining-des {
		display: flex;
		align-items: flex-start;
		flex-direction: column;
		justify-content: center;
	}
	.remaining-type {
		font-size: 28upx;
		line-height: 44upx;
		color: #565656;
	}
	.remaining-idnumber {
		font-size: 24upx;
		line-height: 36upx;
		color: #999;
	}
</style>
