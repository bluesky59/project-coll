<template>
	<view class="coupons-list-container">
		<view class="coupons-lidt-tabs">
			<view :class="{'coupons-list-tab-active': tabsIndex === index}" @click="clickTab(index)" class="coupons-list-tab" v-for="(item, index) in tabsArr" :key="item">
				<text>{{item.label}}</text>
				<view v-show="tabsIndex === index" class="tabs-divider"></view>
			</view>
		</view>
		<view class="coupons-list" v-if="tabsIndex === 0">
			<view class="coupons-item" v-for="item in couponsArrUnused" :key="item">
				<view class="coupons-imgs" :style="{background: `url(${item.type === '01' ? imgUrl2 : imgUrl1})`, backgroundSize: '95px 95px'}">
					<text class="coupons-limit">¥ {{item.limit}}</text>
					<text class="coupons-des">{{item.des}}</text>
				</view>
				<view class="coupons-txt">
					<text class="coupons-label">{{item.label}}</text>
					<text class="coupons-dateRange">{{item.dateRange}}</text>
				</view>
				<view class="coupons-btn">
					<view v-if="item.type === '01'" class="coupons-click coupons-click-spe">立即使用</view>
					<view v-else class="coupons-click">立即使用</view>
				</view>
			</view>
		</view>
		<view class="coupons-list" v-if="tabsIndex === 1">
			<view class="coupons-item" v-for="item in couponsArrUnused" :key="item">
				<view class="coupons-imgs" :style="{background: `url(${imgUrl3})`, backgroundSize: '95px 95px'}">
					<text class="coupons-limit">¥ {{item.limit}}</text>
					<text class="coupons-des">{{item.des}}</text>
				</view>
				<view class="coupons-txt">
					<text class="coupons-label">{{item.label}}</text>
					<text class="coupons-dateRange">{{item.dateRange}}</text>
				</view>
				<view class="coupons-used">
					<image class="coupons-used-icon" :src="`${baseUrl}/imgs/mine/coupons-used.png`"></image>
				</view>
			</view>
		</view>
		<view class="coupons-list" v-if="tabsIndex === 2">
			<view class="coupons-item" v-for="item in couponsArrExpired" :key="item">
				<view class="coupons-imgs" :style="{background: `url(${imgUrl3})`, backgroundSize: '95px 95px'}">
					<text class="coupons-limit">¥ {{item.limit}}</text>
					<text class="coupons-des">{{item.des}}</text>
				</view>
				<view class="coupons-txt">
					<text class="coupons-label">{{item.label}}</text>
					<text class="coupons-dateRange">{{item.dateRange}}</text>
				</view>
				<view class="coupons-used">
					<image class="coupons-used-icon" :src="`${baseUrl}/imgs/others/coupons-expired.png`"></image>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		computed: {
			couponsArrUnused:function () {
				return this.couponsArr.filter(item => {return item.status === '00'});
			},
			couponsArrUsed:function () {
				return this.couponsArr.filter(item => {return item.status === '01'});
			},
			couponsArrExpired:function () {
				return this.couponsArr.filter(item => {return item.status === '02'});
			}
		},
		data() {
			return {
				baseUrl: 'http://39.108.65.247:8087',
				imgUrl1: 'http://39.108.65.247:8087/imgs/mine/coupons-active-00.png',
				imgUrl2: 'http://39.108.65.247:8087/imgs/mine/coupons-active-01.png',
				imgUrl3: 'http://39.108.65.247:8087/imgs/mine/coupons-inactive.png',
				tabsIndex: 0,
				tabsArr: [
					{
						label: '未使用',
						value: '00'
					},
					{
						label: '已使用',
						value: '01'
					},
					{
						label: '已过期',
						value: '02'
					}
				],
				couponsArr: [
					{
						limit: '10',
						des: '满100可使用',
						label: '仅可购买滤清器部分商品',
						dateRange: '2020.12.12-2021.02.19',
						status: '00',
						type: '00'
					},
					{
						limit: '100',
						des: '代金券',
						label: '仅可购买滤清器部分商品',
						dateRange: '2020.12.12-2021.02.19',
						status: '00',
						type: '01'
					},
					{
						limit: '10',
						des: '满100可使用',
						label: '仅可购买滤清器部分商品',
						dateRange: '2020.12.12-2021.02.19',
						status: '01',
						type: '00'
					},
					{
						limit: '10',
						des: '满100可使用',
						label: '仅可购买滤清器部分商品',
						dateRange: '2020.12.12-2021.02.19',
						status: '01',
						type: '00'
					},
					{
						limit: '10',
						des: '满100可使用',
						label: '仅可购买滤清器部分商品',
						dateRange: '2020.12.12-2021.02.19',
						status: '02',
						type: '00'
					}
				]
			}
		},
		methods: {
			clickTab (index) {
				this.tabsIndex = index;
			}
		}
	}
</script>

<style scoped lang="scss">
	.coupons-list-container {
		width: 100vw;
		min-height: 100vh;
		background-color: #F7F7F7;
		.coupons-lidt-tabs {
			width: 750upx;
			height: 88upx;
			display: flex;
			justify-content: space-between;
			align-items: center;
			background-color: #fff;
			.coupons-list-tab {
				width: 250upx;
				height: 88upx;
				text-align: center;
				font-size: 28upx;
				line-height: 88upx;
				color: #3A3A3A;
				position: relative;
			}
			.coupons-list-tab-active {
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
		.coupons-list {
			width: 750upx;
			height: auto;
			.coupons-item {
				width: 690upx;
				height: 190upx;
				background-color: #fff;
				border-radius: 8upx;
				margin: 30upx 30upx 0 30upx;
				display: flex;
				justify-content: space-between;
				.coupons-imgs {
					width: 190upx;
					height: 190upx;
					display: flex;
					flex-direction: column;
					justify-content: center;
					align-items: center;
					color: #fff;
					font-size: 32upx;
					font-weight: bold;
					.coupons-limit {
						font-size: 60upx;
						line-height: 72upx;
					}
					.coupons-des {
						font-size: 24upx;
						line-height: 32upx;
						font-weight: 400;
					}
				}
				.coupons-txt {
					padding: 16upx 0 0 16upx;
					width: 330upx;
					height: auto;
					display: flex;
					flex-direction: column;
					align-items: flex-start;
					justify-content: flex-start;
					.coupons-label {
						font-size: 30upx;
						line-height: 52upx;
						color: #333;
					}
					.coupons-dateRange {
						font-size: 24upx;
						color: #666;
						line-height: 40upx;
					}
				}
				.coupons-btn {
					width: 120upx;
					height: 160upx;
					display: flex;
					align-items: flex-end;
					.coupons-click {
						font-size: 22upx;
						color: #FF552A;
						line-height: 52upx;
						text-align: center;
						width: 120upx;
						height: 52upx;
						background:rgba(255,255,255,1);
						border-radius: 26upx;
						border: 1upx solid #FF552A;
					}
					.coupons-click-spe {
						color: #2B72D3;
						border: 1upx solid #2B72D3;
					}
				}
				.coupons-used {
					width: 100upx;
					height: 190upx;
					display: flex;
					justify-content: center;
					align-items: center;
					.coupons-used-icon {
						width: 100upx;
						height: 120upx;
					}
				}
			}
		}
	}
</style>
