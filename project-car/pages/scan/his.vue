<template>
	<view class="history-container">
		<view class="his-section" v-for="data in hisArrs" :key="data">
			<text class="his-date">{{data.date}}</text>
			<view class="his-box" v-for="item in data.dataList" :key="item">
				<view class="his-text">
					<text class="his-series">{{item.series}}</text>
					<text class="his-txt">{{item.name}}</text>
					<text class="his-txt">{{item.time}}</text>
				</view>
				<view class="his-btn">再次查询</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { hisArrs } from '../../mock/api-scan-history.js';
	export default {
		data() {
			return {
				hisArrs
			}
		},
		methods: {
			
		}
	}
</script>

<style>
	.history-container {
		width: 100%;
		height: auto;
		background-color: #F7F7F7;
		padding-bottom: 60upx;
	}
	.his-date {
		font-size: 32upx;
		color: #333;
		line-height: 80upx;
		font-weight: 500;
		padding-left: 30upx;
	}
	.his-box {
		width: 646upx;
		height: 140upx;
		padding: 0 24upx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin: 24upx auto;
	}
	.his-text {
		background-color: 400upx;
	}
	.his-series {
		font-size: 30upx;
		color: #424A5D;
		line-height: 44upx;
		font-weight: 500;
		display: block;
	}
	.his-txt {
		font-size: 30upx;
		color: #999;
		line-height: 44upx;
		font-weight: 400;
	}
	.his-btn {
		width: 156upx;
		height: 64upx;
		line-height: 64upx;
		border-radius: 32upx;
		text-align: center;
		background-color: #FF5C00;
		color: #fff;
		font-size: 26upx;
	}
</style>
