<template>
	<view class="veh-detail-container">
		<view class="veh-detail-tabs">
			<view class="veh-detail-tab" :class="{'veh-detail-tab-sel': item.tag && item.tag}" v-for="item in tabsArr" :key="item.label">
				<image class="veh-detail-tab-icon" :src="`/static/add/${item.iconEn}.png`"></image>
				<text class="veh-detail-tab-label">{{item.label}}</text>
			</view>
		</view>
		<view class="veh-detail-divider"></view>
		<view class="veh-detail-section" v-for="data in valArr" :key="data">
			<view class="veh-detail-section-title">
				- {{data.title}} -
			</view>
			<view class="veh-detail-section-item" v-for="item in data.data" :key="item">
				<text class="veh-detail-label">{{item.label}}</text>
				<text class="veh-detail-value">{{item.value}}</text>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				tabsArr: [
					{
						label: '车型数据',
						iconEn: 'veh-info-0'
					},
					{
						label: '油液轮胎',
						iconEn: 'veh-info-1',
						tag: true
					},
					{
						label: '保养信息',
						iconEn: 'veh-info-2'
					}
				],
				valArr: [
					{
						title: '油量',
						data: [
							{
								label: '发动机油量：',
								value: '8.2升'
							},
							{
								label: '自动变速箱重力换油量：',
								value: '5.3升'
							},
							{
								label: '自动变速箱循环换油量：',
								value: '8.48升'
							}
						]
					},
					{
						title: '轮胎',
						data: [
							{
								label: '前轮胎规格：',
								value: '225/50 R17'
							},
							{
								label: '后轮胎规格：',
								value: '225/50 R17'
							}
						]
					}
				]
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.veh-detail-container {
		.veh-detail-tabs {
			width: 690upx;
			height: 122upx;
			background-color: #fff;
			padding: 30upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.veh-detail-tab {
				width: 218upx;
				height: 122upx;
				background: rgba(247,247,247,1);
				border-radius: 8upx;
				display: flex;
				justify-content: center;
				align-items: center;
				flex-direction: column;
				color: #333;
				.veh-detail-tab-icon {
					width: 40upx;
					height: 40upx;
					margin-bottom: 10upx;
				}
				.veh-detail-tab-label {
					font-size: 24upx;
					line-height: 34upx;
				}
			}
			.veh-detail-tab-sel {
				background-color: #FF5101;
				color: #fff;
			}
		}
		.veh-detail-divider {
			width: 100%;
			height: 30upx;
			background-color: #F7F7F7;
		}
		.veh-detail-section {
			width: 100%;
			height: auto;
			background-color: #fff;
			.veh-detail-section-title {
				font-size: 30upx;
				color: #3A3A3A;
				line-height: 60upx;
				text-align: center;
				margin: 30upx 0;
			}
			.veh-detail-section-item {
				width: 690upx;
				height: 88upx;
				border-bottom: 1px solid #E1E1E1;
				padding: 0 30upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
				.veh-detail-label {
					color: #999;
				}
				.veh-detail-value {
					color: #333;
				}
			}
		}
	}
</style>
