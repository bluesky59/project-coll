<template>
	<view class="tabs-container">
		<view class="tabs-list">
			<view class="tabs-box">
				<view @click="skipTo(item)" class="tabs-info" v-for="(item, index) in tabsArrL" :key="index">
					<image v-if="tabsVal === item.value" :class="{'tabs-icon-home': item.value === 'home', 'tabs-icon-class': item.value === 'class'}" :src="`/static/tab/${item.icon}-sel.png`"></image>
					<image v-else :class="{'tabs-icon-home': item.value === 'home', 'tabs-icon-class': item.value === 'class'}" :src="`/static/tab/${item.icon}.png`"></image>
					<text :class="{'tips-active': tabsVal === item.value}">{{item.label}}</text>
				</view>
			</view>
			<view class="tabs-spe" @click="skipTo(scanData)">
				<image class="tabs-scan" src="/static/tab/scan.png"></image>
			</view>
			<view class="tabs-box">
				<view @click="skipTo(item)" class="tabs-info" v-for="(item, index) in tabsArrR" :key="index">
					<image v-if="tabsVal === item.value" :class="{'tabs-icon-cart': item.value === 'cart', 'tabs-icon-mine': item.value === 'mine'}" :src="`/static/tab/${item.icon}-sel.png`"></image>
					<image v-else :class="{'tabs-icon-cart': item.value === 'cart', 'tabs-icon-mine': item.value === 'mine'}" :src="`/static/tab/${item.icon}.png`"></image>
					<text :class="{'tips-active': tabsVal === item.value}">{{item.label}}</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				scanData: {
					label: '',
					value: 'scan',
					icon: 'scan',
					title: '扫描VIN码'
				},
				tabsArrL: [
					{
						label: '首页',
						value: 'home',
						icon: 'home',
						title: '好好汽配'
					},
					{
						label: '分类',
						value: 'class',
						icon: 'class',
						title: '全部商品'
					}
				],
				tabsArrR: [
					{
						label: '购物车',
						value: 'cart',
						icon: 'cart',
						title: '购物车'
					},
					{
						label: '我的',
						value: 'mine',
						icon: 'mine',
						title: '个人中心'
					}
				],
				tabsVal: 'home'
			}
		},
		props: {
			tabsName: {
				type: String,
				default: 'home'
			}
		},
		watch: {
			'tabsName': function (val) {
				this.tabsVal = val;
			}
		},
		methods: {
			skipTo(data) {
				this.$emit('clickRes', data);
				this.tabsVal = data.value;
			}
		}
	}
</script>

<style lang="scss">
	.tabs-container {
		width: 750upx;
		height: 102upx;
		background: rgba(255,255,255,1);
		box-shadow: 0 -3upx 20upx 0 rgba(45,45,45,0.14);
		font-size: 20upx;
		line-height: 34upx;
		color: #ADADAD;
		position: fixed;
		bottom: 0;
		right: 0;
		.tabs-list {
			width: 100%;
			height: 100%;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.tabs-box {
				width: 300upx;
				height: 100%;
				display: flex;
				justify-content: center;
				align-items: center;
				.tabs-info {
					width: 50%;
					height: 100%;
					display: flex;
					align-items: center;
					justify-content: center;
					flex-direction: column;
					.tabs-icon-home {
						width: 42upx;
						height: 35upx;
					}
					.tabs-icon-class {
						width: 37upx;
						height: 37upx;
					}
					.tabs-icon-cart {
						width: 38upx;
						height: 37upx;
					}
					.tabs-icon-mine {
						width: 37upx;
						height: 38upx;
					}
				}
			}
			.tabs-spe {
				width: 110upx;
				height: 110upx;
				background-color: #fff;
				border-radius: 55upx;
				display: flex;
				justify-content: center;
				align-items: center;
				position: relative;
				top: -30upx;
				.tabs-scan {
					width: 92upx;
					height: 92upx;
				}
			}
		}
		.tips-active {
			color: #FF5101;
		}
	}
</style>
