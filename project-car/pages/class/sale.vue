<template>
	<view class="sale-container">
		<!-- 搜索栏 -->
		<view class="query-container">
			<view class="query-box">
				<input v-model="keyword" class="uni-input query-txt" confirm-type="search" placeholder="车型/商品名/商品型号" />
				<image v-if="keyword" @click="keyword = ''" class="query-cancel" :src="`${baseUrl}/imgs/class/close-icon.png`"></image>
			</view>
			<image class="service-icon" :src="`${baseUrl}/imgs/index/simple/service-icon.png`"></image>
		</view>
		<!-- 筛选条件 -->
		<view class="condition-container">
			<view :class="{'condition-box-active': conditionIndex === index}" class="condition-box" @click="tabsSwitch(index)" v-for="(item, index) in conditionArrs" :key="item">
				<text class="condition-label">{{item.label}}</text>
				<view v-if="item.icon && conditionIndex !== 1" class="recommends-sort">
					<image class="condition-img" :src="`${baseUrl}/imgs/class/price-up.png`"></image>
					<image class="condition-img" :src="`${baseUrl}/imgs/class/price-down.png`"></image>
				</view>
				<view v-if="item.icon && conditionIndex === 1" class="recommends-sort">
					<image class="condition-img" :src="`${baseUrl}/imgs/class/price-up-active.png`"></image>
					<image class="condition-img" :src="`${baseUrl}/imgs/class/price-down-active.png`"></image>
				</view>
			</view>
		</view>
		<view class="content-main">
			<!-- 促销信息 -->
			<view class="sale-tips">
				限时促销：以下商品可使用<text class="sale-txt">{{saleTips}}</text>优惠
			</view>
			<!-- 商品信息 -->
			<goodsList></goodsList>
		</view>
		<image @click="skipTo" class="cart-icon" :src="`${baseUrl}/imgs/class/cart-icon.png`"></image>
		<!-- 抽屉 -->
		<view class="drawer-container" :class="{'drawer-container-animate': conditionIndex === 2}">
			<view class="drawer-box">
				<view class="drawer-info">
					<image class="drawer-icon" :src="`${baseUrl}/imgs/class/filter-icon.png`"></image>
					<text>筛选</text>
				</view>
				<view class="drawer-section">
					<text class="drawer-title">商品品牌</text>
					<view class="drawer-list">
						<view class="drawer-wrap" v-for="(item, index) in brandArr[1].dataList" :key="item"  @click="checkboxSelHandle('brand', index)">
							<view :class="{'drawer-item-sel': brandSel === index}" class="drawer-item drawer-item-spe">
								<image  v-if="index < 4" class="drawer-brand-img" :src="`${baseUrl}/imgs/imgs/brand/${item.nameEn}.png`"></image>
							</view>
							<text class="drawer-text">{{item.text}}</text>
						</view>
					</view>
				</view>
				<view class="drawer-section">
					<text class="drawer-title">商品分类</text>
					<view class="drawer-list">
						<view v-if="index < 6" v-for="(item, index) in typesArr" :key="item" :class="{'drawer-item-sel': typesSel === index}" class="drawer-item" @click="checkboxSelHandle('type', index)">
							<text>{{item.text}}</text>
						</view>
					</view>
				</view>
				<view class="drawer-btns">
					<button class="drawer-btn drawer-reset" @click="resetDrawer">重置</button>
					<button class="drawer-btn drawer-submit" @click="submitDrawer">确定</button>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { typesArr, brandArr } from '../../mock/index/data.js';
	import goodsList from '../components/goods-list.vue';
	export default {
		components: {
			goodsList,
		},
		data() {
			return {
				baseUrl: 'http://39.108.65.247:8087',
				brandArr,
				typesArr,
				saleTips: '满199减20元',
				keyword: '',
				conditionArrs: [
					{
						label: '全部',
						value: 'all',
						icon: ''
					},
					{
						label: '价格',
						value: 'price',
						icon: 'down'
					},
					{
						label: '筛选',
						value: 'filter',
						icon: ''
					}
				],
				conditionIndex: 0,
				brandSel: null,
				typesSel: null
			}
		},
		methods: {
			tabsSwitch (index) {
				this.conditionIndex = index;
				switch (index) {
					case 0: {
						// 默认获取全部数据
						break;
					}
					case 1: {
						// 价格倒叙正序
						break;
					}
					case 2: {
						// 抽屉打开
						break;
					}
					default: break;
				}
			},
			checkboxSelHandle (tag = '', index) {
				switch (tag){
					case 'brand': {
						this.brandSel = index;
						break;
					}
					case 'type': {
						this.typesSel = index;
						break;
					}
					default: break;
				}
			},
			resetDrawer () {
				this.brandSel = this.typesSel = null;
			},
			submitDrawer () {
				this.conditionIndex = 0;
			},
			skipTo () {
				uni.navigateTo({
				    url: `/pages/other/main?tabsName=cart`
				});
			}
		}
	}
</script>

<style>
	.sale-container {
		width: 750upx;
		min-height: 100vh;
		background-color: #F7F7F7;
	}
	.query-container {
		width: 690upx;
		height: 68upx;
		padding: 0 30upx;
		background-color: #FFFFFF;
		display: flex;
		justify-content: space-between;
		align-items: center;
		padding-top: 16upx;
	}
	.query-box {
		width: 560upx;
		height: 60upx;
		border-radius: 30upx;
		padding: 0 20upx;
		background-color: #F7F7F7;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.query-txt {
		font-size: 24upx;
		color: #888;
	}
	.query-cancel {
		width: 32upx;
		height: 32upx;
	}
	.service-icon {
		width: 44upx;
		height: 44upx;
	}
	.condition-container {
		width: 750upx;
		height: 88upx;
		background-color: #fff;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.condition-box {
		width: 160upx;
		height: 88upx;
		display: flex;
		justify-content: center;
		align-items: center;
		font-size: 28upx;
		color: #3A3A3A;
		box-sizing: border-box;
	}
	.condition-box-active {
		color: #FF5A00;
		border-bottom: 2upx solid #FF5A00;
	}
	.recommends-sort {
		width: 40upx;
		height: auto;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.condition-img {
		width: 12upx;
		height: 10upx;
		margin: 4upx auto;
	}
	.content-main {
		background-color: #fff;
		width: 690upx;
		height: auto;
		padding: 20upx 30upx 60upx;
		margin-top: 30upx;
	}
	.sale-tips {
		width: 690upx;
		height: 72upx;
		background: rgba(255,243,237,1);
		border-radius:  36upx;
		line-height: 72upx;
		text-align: center;
		font-size: 28upx;
		color: #666;
	}
	.sale-txt {
		color: #FF5101;
	}
	.cart-icon {
		width: 88upx;
		height: 88upx;
		position: fixed;
		left: 50upx;
		bottom: 80upx;
	}
	.drawer-container {
		width: 750upx;
		height: auto;
		position: fixed;
		top: 0;
		left: 0;
		background-color: #000;
		opacity: 0.8;
		z-index: 10;
		transform: translateX(750upx);
		transition: .5s;
	}
	.drawer-container-animate {
		transform: translateX(0);
	}
	.drawer-box {
		width: 660upx;
		height: auto;
		background-color: #FFFFFF;
		margin-left: 90upx;
	}
	.drawer-info {
		display: flex;
		align-items: center;
		justify-content: flex-start;
		font-size: 30upx;
		color: #333;
		font-weight: 500;
		padding: 30upx;
	}
	.drawer-icon {
		width: 26upx;
		height: 30upx;
		margin-right: 16upx;
	}
	.drawer-section {
		padding: 0 30upx;
	}
	.drawer-title {
		font-size: 26upx;
		color: #333;
		font-weight: 500;
		line-height: 120upx;
	}
	.drawer-list {
		display: flex;
		justify-content: space-between;
		flex-wrap: wrap;
	}
	.drawer-item {
		width: 180upx;
		height: 80upx;
		margin-bottom: 40upx;
		background: rgba(255,255,255,1);
		border-radius: 8upx;
		border:1upx solid rgba(220,220,220,1);
		font-size: 24upx;
		color: #333;
		display: flex;
		justify-content: center;
		align-items: center;
	}
	.drawer-item-sel {
		border: 1upx solid #FF5101;
		color: #FF5101;
	}
	.drawer-wrap {
		width: 184upx;
		height: auto;
		text-align: center;
	}
	.drawer-item-spe {
		margin-bottom: 0;
	}
	.drawer-brand-img {
		width: 50%;
		height: 50%;
	}
	.drawer-text {
		font-size: 24upx;
		color: #333;
		line-height: 40upx;
		margin: 24upx auto;
	}
	.drawer-btns {
		border-top: 1upx solid #E1E1E1;
		width: 600upx;
		height: 120upx;
		padding: 30upx;
		margin-top: 60upx;
		display: flex;
		justify-content: space-between;
		align-items: flex-start;
	}
	.drawer-btn {
		width: 280upx;
		height: 72upx;
		line-height: 72upx;
		border-radius: 36upx;
		text-align: center;
		font-size: 28upx;
		font-weight: 500;
	}
	.drawer-submit {
		border: 1upx solid #FF5101;
		color: #fff;
		background-color: #FF5101;
	}
	.drawer-reset {
		border: 1upx solid #979797;
		color: #333;
		background-color: #fff;
	}
</style>
