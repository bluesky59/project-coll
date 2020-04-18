<template>
	<view class="mine-container">
		<view class="mine-header" :style="{background: `url(${imageBgUrl})`, backgroundSize: '375px 247px'}">
			<image class="mine-headernick" :src="`${baseUrl}/imgs/mine/headernick.png`"></image>
			<text>Amaz.qinlan</text>
			<view class="mine-info">
				<view class="mine-txt" @click="skipTo({value: 'remaining'})">
					<text class="mine-number">45612.33</text>
					<text class="mine-type">余额</text>
				</view>
				<view class="mine-txt">
					<text class="mine-number">-13</text>
					<text class="mine-type">欠额</text>
				</view>
				<view class="mine-txt" @click="skipTo({value: 'coupons-list'})">
					<text class="mine-number">5</text>
					<text class="mine-type">优惠券</text>
				</view>
			</view>
		</view>
		<view class="section-container">
			<view class="section-title">我的订单</view>
			<view class="section-list">
				<view class="section-item" v-for="item in orderArrs" :key="item" @click="skipTo(item, 'all-orders')">
					<image class="section-order-img" :src="`${baseUrl}/imgs/mine/${item.value}.png`"></image>
					<text>{{item.label}}</text>
				</view>
			</view>
		</view>
		<view class="section-container">
			<view class="section-title">售后/退款</view>
			<view class="section-list">
				<view class="section-item" v-for="item in serviceArrs" :key="item" @click="skipTo(item, 'after-sales')">
					<image :class="{'section-service-spe': item.tag && item.tag === 'spe'}" class="section-service-img" :src="`${baseUrl}/imgs/mine/${item.value}.png`"></image>
					<text>{{item.label}}</text>
				</view>
			</view>
		</view>
		<view class="section-container">
			<view class="section-title">工具与服务</view>
			<view class="section-list">
				<view class="section-item" v-for="item in toolArrs" :key="item" @click="skipTo(item)">
					<image class="section-tool-img" :src="`${baseUrl}/imgs/mine/${item.value}.png`"></image>
					<text>{{item.label}}</text>
				</view>
			</view>
		</view>
		<view class="mine-footer">技术支持: 配达丰</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseUrl: 'http://39.108.65.247:8087',
				imageBgUrl: 'http://39.108.65.247:8087/imgs/mine/mine-header-bg.png',
				orderArrs: [
					{
						label: '待付款',
						value: 'to-pay'
					},
					{
						label: '待发货',
						value: 'to-delivery'
					},
					{
						label: '待收货',
						value: 'to-take'
					},
					{
						label: '全部订单',
						value: 'all-orders'
					}
				],
				serviceArrs: [
					{
						label: '处理中',
						value: 'dealing',
						tag: 'spe'
					},
					{
						label: '已完成',
						value: 'finished'
					},
					{
						label: '全部订单',
						value: 'all-service'
					},
					{
						label: '',
						icon: ''
					}
				],
				toolArrs: [
					{
						label: '修改资料',
						value: 'modify'
					},
					{
						label: '收货地址',
						value: 'address'
					},
					{
						label: '开票信息',
						value: 'ticket'
					},
					{
						label: '领券中心',
						value: 'coupons'
					},
					{
						label: '新品需求',
						value: 'new-goods'
					},
					{
						label: '邀请注册',
						value: 'invite'
					},
					{
						label: '联系客服',
						value: 'service'
					},
					{
						label: '系统公告',
						value: 'notice'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			skipTo (data, tag = '') {
				const { value } = data || {};
				if (tag === 'after-sales') {
					uni.navigateTo({
					    url: `/pages/mine/after-sales`
					});
				} else if(tag === 'all-orders') {
					uni.navigateTo({
					    url: "/pages/mine/all-orders"
					});
				} else {
					uni.navigateTo({
					    url: `/pages/mine/${value}`
					});
				}
			}
		}
	}
</script>

<style>
	.mine-container {
		width: 750upx;
		height: auto;
		background-color: #F7F7F7;
		padding-bottom: 122upx;
	}
	.mine-header {
		width: 750upx;
		height: 394upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
		color: #fff;
		font-size: 32upx;
		line-height: 48upx;
		font-weight: 500;
	}
	.mine-headernick {
		width: 100upx;
		height: 100upx;
	}
	.mine-info {
		width: 600upx;
		height: 160upx;
		display: flex;
		justify-content: space-between;
		align-items: flex-end;
	}
	.mine-txt {
		width: 160upx;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		color: #FEFEFE;
	}
	.mine-number {
		font-size: 40upx;
		font-weight: bold;
	}
	.section-container {
		width: 630upx;
		height: auto;
		background-color: #fff;
		border-radius: 20upx;
		margin: 24upx auto 0;
		padding: 0 30upx;
	}
	.section-title {
		font-size: 28upx;
		line-height: 88upx;
		color: #333;
		font-weight: bold;
		border-bottom: 1upx solid #F4F4F4;
	}
	.section-list {
		width: 100%;
		height: auto;
		padding: 20upx 0;
		display: flex;
		flex-wrap: wrap;
		justify-content: space-between;
	}
	.section-item {
		width: 150upx;
		height: auto;
		display: flex;
		justify-content: center;
		align-items: center;
		flex-direction: column;
		font-size: 24upx;
		color: #666;
		line-height: 60upx;
	}
	.section-order-img {
		width: 48upx;
		height: 48upx;
	}
	.section-service-img {
		width: 32upx;
		height: 38upx;
	}
	.section-service-spe {
		width: 38upx;
		height: 38upx;
	}
	.section-tool-img {
		width: 92upx;
		height: 92upx;
	}
	.mine-footer {
		font-size: 24upx;
		color: #333333;
		text-align: center;
		line-height: 80upx;
	}
</style>
