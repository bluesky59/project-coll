<template>
	<view class="class-container">
		<!-- 搜索 -->
		<view class="header-container">
			<image class="header-icon" :src="`${baseUrl}/imgs/class/coupons-icon.png`"></image>
			<view class="query-container">
				<view class="query-input">
					<image class='query-bg' :src="`${baseUrl}/imgs/index/custom/query-icon.png`"></image>
					<input class="uni-input query-txt" confirm-type="search" placeholder="车型/商品名/商品型号" />
				</view>
				<view class="query-service">
					<image class='query-icon' :src="`${baseUrl}/imgs/index/simple/service-icon.png`"></image>
					<image class='query-icon' :src="`${baseUrl}/imgs/index/simple/phone-icon.png`"></image>
				</view>
			</view>
		</view>
		<!-- 车型信息 -->
		<view class="veh-container" v-if="isShowVeh">
			<image class="veh-icon" :src="`${baseUrl}/imgs/class/veh-icon.png`"></image>
			<view class="veh-txt">
				<text class="veh-name">宝马 x3 xDrive28i(G08</text>
				<text class="veh-series">FLDSJFSD3240923KD9</text>
			</view>
			<text @click="skipToVehInfo" class="veh-detail">车型详情 >></text>
			<image @click="isShowVeh = false" class="close-icon" :src="`${baseUrl}/imgs/class/close-icon.png`"></image>
		</view>
		<!-- tab栏 -->
		<view class="tabs-container">
			<view class="tabs-box" v-for="(item, index) in tabsArr" :key="index" @click="tabsSwitch(index)">
				<image v-if="item.icon" class="tabs-icon" :src="item.icon"></image>
				<text :class="{'tabs-name-active': tabsIndex === index}">{{item.text}}</text>
				<view v-if="tabsIndex === index" class="tabs-bottom"></view>
			</view>
		</view>
		<!-- 商品信息 -->
		<view class="class-content">
			<view class="class-goods-container">
				<view class="class-types-nav">
					<view @click="typeSelScroll(index)" v-if="!item.spe" :class="{'class-type-nav-active': typeSelindex === index}" class="class-type-nav" v-for="(item, index) in typesArr" :key="item">
						<text>{{item.text}}</text>
					</view>
				</view>
				<view class="class-goods-info">
					<view class="class-type-children">
						<view class="class-type-child" v-for="item in typesArr[typeSelindex].children" :key="item">
							{{item.label}}
						</view>
					</view>
					<view class="class-type-goods-detail">
						<goodsList :hot="true"></goodsList>
					</view>
					<text @click="skipTo" class="class-nogoods-tips">没有找到相关产品？<text class="class-nogoods-tips-spe">告诉我们</text></text>
				</view>
			</view>
			<view class="class-brand-sel" :class="{'class-brand-sel-show': tabsIndex === 1, 'class-brand-sel-hide': tabsIndex !== 1}">
				<view @click="clickBrand(index)" :class="{'class-brand-item-sel': brandSelIndex.includes(index)}" class="class-brand-item" v-for="(item, index) in brandArr[1].dataList" :key="item.text">
					<view class="class-brand-box">
						<image class="brand-sel" v-if="brandSelIndex.includes(index)" :src="`${baseUrl}/imgs/class/sel-icon.png`"></image>
						<image class="class-brand-img" :src="`${baseUrl}/imgs/brand/${item.nameEn}.png`"></image>
					</view>
					<text class="class-brand-name">{{item.text}}</text>
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
	import { brandArr, typesArr } from '../../mock/index/data.js';
	import goodsList from '../components/goods-list.vue';
	export default {
		components: {
			goodsList
		},
		data() {
			return {
				baseUrl: 'http://39.108.65.247:8087',
				brandArr,
				typesArr,
				typeSelindex: 1,
				brandSelIndex: [],
				isShowVeh: true,
				tabsIndex: 0,
				tabsArr: [
					{
						text: '全部',
						tag: 'all',
						icon: ''
					},
					{
						text: '品牌',
						tag: 'brand',
						icon: 'http://39.108.65.247:8087/imgs/class/brand-icon.png'
					},
					{
						text: '促销',
						tag: 'sale',
						icon: 'http://39.108.65.247:8087/imgs/class/sale-icon.png'
					}
				]
			}
		},
		methods: {
			tabsSwitch (num) {
				if (num === 2) {
					uni.navigateTo({
					    url: "/pages/class/sale"
					});
				} else {
					this.tabsIndex = num;
				}
			},
			clickBrand (index) {
				this.brandSelIndex.push(index);
			},
			resetDrawer() {
				this.brandSelIndex = [];
			},
			submitDrawer() {
				this.tabsIndex = 0;
			},
			typeSelScroll (index) {
				this.typeSelindex = index
			},
			skipTo () {
				uni.navigateTo({
				    url: "/pages/mine/new-goods"
				});
			},
			skipToVehInfo() {
				uni.navigateTo({
				    url: "/pages/other/veh-detail"
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.class-container{
		padding-bottom: 122upx;
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		width: 100%;
		height: calc(100vh - 122upx);
		overflow: hidden;
	}
	// 搜索部分
	.header-container {
		display: flex;
		justify-content: space-between;
		align-items: center;
		width: 690upx;
		height: 70upx;
		padding: 0 30upx;
		margin-top: 24upx;
	}
	.header-icon {
		width: 66upx;
		height: 66upx;
	}
	.query-container {
		width: 580upx;
		height: 70upx;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.query-input {
		width: 460upx;
		height: 70upx;
		border-radius: 44upx;
		padding: 0 24upx;
		font-size: 24upx;
		background-color: #F7F7F7;
		color: #666;
		display: flex;
		align-items: center;
	}
	.query-bg {
		width: 36upx;
		height: 36upx;
		margin-right: 10upx;
	}
	.query-service {
		width: 158upx;
		height: 70upx;
		background-color: #fff;
		border: 8upx;
		display: flex;
		justify-content: space-around;
		align-items: center;
	}
	.query-icon {
		width: 44upx;
		height: 48upx;
	}
	.query-txt {
		width: 320upx;
		height: 70upx;
		display: inline-block;
		line-height: 88upx;
		font-size: 28upx;
		color: #666;
	}
	.veh-container {
		width: 690upx;
		height: 100upx;
		padding: 0 30upx;
		margin-top: 24upx;
		background: rgba(247,247,247,1);
		box-shadow: 0upx 1upx 4upx 0upx rgba(232,232,232,1);
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.veh-icon {
		width: 70upx;
		height: 70upx;
	}
	.veh-detail {
		font-size: 24upx;
		color: #666;
		font-weight: 400;
	}
	.close-icon {
		width: 42upx;
		height: 42upx;
	}
	.veh-txt {
		width: 340upx;
		display: flex;
		flex-direction: column;
		white-space: nowrap;
		text-overflow: ellipsis;
		overflow: hidden;
	}
	.veh-name {
		font-size: 28upx;
		line-height: 40upx;
		color: #3A3A3A;
		font-weight: 400;
	}
	.veh-series {
		font-size: 22upx;
		line-height: 30upx;
		color: #999;
		font-weight: 400;
	}
	.tabs-container {
		width: 690upx;
		height: 84upx;
		padding: 0 30upx;
		border-bottom: 1upx solid #D8D8D8;
		display: flex;
		justify-content: space-between;
		align-items: center;
	}
	.tabs-box {
		display: flex;
		justify-content: center;
		align-items: center;
		width: 160upx;
		height: 80upx;
		font-size: 30upx;
		color: #333;
		font-weight: 500;
		position: relative;
		box-sizing: border-box;
	}
	.tabs-bottom {
		width: 28upx;
		height: 6upx;
		background-color: #FF5101;
		position: absolute;
		bottom: 0;
	}
	.tabs-icon {
		width: 32upx;
		height: 32upx;
		margin-right: 12upx;
	}
	.tabs-name-active {
		color: #FF5101;
	}
	.class-content {
		position: relative;
		width: 750upx;
		height: calc(100vh - 240upx);
		overflow: hidden;	
		display: flex;
		flex-direction: column;
		align-items: center;
		justify-content: center;
		.class-goods-container {
			width: 750upx;
			height: calc(100vh - 240upx);
			background-color: red;
			overflow: hidden;
			background-color: #fff;
			display: flex;
			.class-types-nav {
				width: 144upx;
				height:calc(100vh -346upx);
				background-color: #F7F7F7;
				overflow: scroll;
				.class-type-nav {
					width: 144upx;
					height: 104upx;
					text-align: center;
					line-height: 104upx;
					font-size: 24upx;
					color: #666;
				}
				.class-type-nav-active {
					color: #FF5101;
					background-color: #fff;
				}
			}
			.class-goods-info {
				width: 600upx;
				height:calc(100vh -346upx);
				overflow-y: scroll;
				text-align: center;
				.class-type-children {
					width: 560upx;
					overflow: hidden;
					height: auto;
					margin: 12upx 20upx;
					display: flex;
					align-items: center;
					justify-content: flex-start;
					flex-wrap: nowrap;
					.class-type-child {
						width: auto;
						height: 44upx;
						padding: 0 20upx;
						border-radius: 22upx;
						line-height: 44upx;
						text-align: center;
						font-size: 20upx;
						color: #666;
						border: 1upx solid #999;
						margin-right: 12upx;
						display: inline-block;
					}
				}
				.class-type-goods-detail {
					padding: 10upx 30upx;
				}
				.class-nogoods-tips {
					font-size: 24upx;
					line-height: 80upx;
					color: #7d7d7d;
					.class-nogoods-tips-spe {
						color: #FF5101;
					}
				}
			}
		}
		.class-brand-sel {
			position: absolute;
			top: 0;
			left: 0;
			width: 750upx;
			height: auto;
			background-color: #fff;
			z-index: 10;
			transition: .5s;
			opacity: 0;
			display: flex;
			flex-wrap: wrap;
			border-bottom: 1upx solid #E1E1E1;
			.class-brand-item {
				width: 120upx;
				height: auto;
				font-size: 28upx;
				line-height: 40upx;
				color: #999;
				margin: 20upx 30upx;
				text-align: center;
				.class-brand-box {
					width: 120upx;
					height: 120upx;
					margin-bottom: 20upx;
					border: 1upx solid #fff;
					display: flex;
					align-items: center;
					justify-content: center;
					position: relative;
					.class-brand-img {
						width: 50%;
						height: 50%;
					}
				}
			}
			.class-brand-item-sel {
				color: #FF5101;
				.class-brand-box {
					border: 1upx solid #FF5101;
				}
			}
		}
		.brand-sel {
			position: absolute;
			top: 0;
			right: 0;
			width: 52upx;
			height: 52upx;
		}
		.class-brand-sel-show {
			transform: translateY(0px);
			opacity: 1;
		}
		.class-brand-sel-hide {
			transform: translateY(-1000px);
			opacity: 0;
		}
	}
	.drawer-btns {
		border-top: 1upx solid #E1E1E1;
		width: 600upx;
		height: 120upx;
		padding: 30upx 0;
		margin: 60upx auto 0;
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
