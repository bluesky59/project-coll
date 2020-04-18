<template>
	<view class="cart-content">
		<checkbox-group class="cart-list" v-for="data in cartArrs" :key="data">
			<label class="uni-list-cell uni-list-cell-pd">
				<view class="cart-title-box">
					<checkbox :value="date.date" :checked="data.checked" />
					<text class="cart-title">{{data.date}}</text>
				</view>
				<view class="cart-goods">
					<view class="goods-sale-info" v-if="data.action">
						<view class="goods-sale-detail">
							<text class="goods-sale-tag">{{data.sale}}</text>
							<text>{{data.action}}</text>
						</view>
						<text @click.prevent="skipToSale">去凑单></text>
					</view>
					<checkbox-group>
						<view class="uni-list-cell uni-list-cell-pd cart-good-item" v-for="item in data.dataList" :key="item">
							<checkbox class="cart-checkbox" :value="item.fullReduction" :checked="data.checked" />
							<view class="cart-good-detail">
								<image class="cart-good-img" :src="item.img"></image>
								<view class="cart-good-txt">
									<text class="cart-good-des">{{item.des}}</text>
									<view class="cart-goos-other">
										<text class="cart-good-inventory">库存{{item.inventory}}件</text>
										<text @click="saleInfoSel(item)" class="cart-good-couponsArrs" v-if="item.couponsArrs.length">选折扣</text>
									</view>
									<view class="cart-good-buy">
										<text class="cart-good-price">¥ {{item.price}}</text>
										<view class="cart-num-control">
											<view @click.prevent="goodNumControl('reduce')" class="cart-num-control-action">-</view>
											<view class="cart-num-control-action">{{num}}</view>
											<view @click.prevent="goodNumControl('plus')" class="cart-num-control-action">+</view>
										</view>
									</view>
									<view class="">
										<text class="cart-good-coupons cart-good-sale" v-if="item.coupons">券</text>
										<text class="cart-good-discount cart-good-sale" v-if="item.discount">折</text>
									</view>
								</view>
							</view>
						</view>
					</checkbox-group>
				</view>
			</label>
		</checkbox-group>
		<view class="cart-btn-container">
			<view class="cart-btn-all">
				<checkbox value="cb" :checked="false" /> 全选
			</view>
			<view class="cart-btn-del">删除</view>
			<view @click="skipTo" class="cart-btn-count"><text class="cart-btn-num">合计:¥{{totalCount}}</text>结算</view>
		</view>
		<view v-if="isShowLayer" class="layer-container">
			<Layer @closeLayer="closeLayer" :dataDetail="dataDetail"></Layer>
		</view>
	</view>
</template>

<script>
	import { cartArrs } from '../../mock/api-cart.js';
	import Layer from './layer.vue';
	export default {
		components: {
			Layer
		},
		data() {
			return {
				totalCount: 999,
				cartArrs,
				dataDetail: {},
				isShowLayer: false,
				num: 1
			}
		},
		onLoad() {

		},
		methods: {
			radioChange: function(evt) {
				for (let i = 0; i < this.items.length; i++) {
					if (this.items[i].value === evt.target.value) {
						this.current = i;
						break;
					}
				}
			},
			saleInfoSel (data) {
				this.dataDetail = data;
				this.isShowLayer = true;
			},
			closeLayer (data) {
				console.log(data);
				this.isShowLayer = false;
			},
			skipTo () {
				uni.navigateTo({
				    url: "/pages/cart/order-confirm"
				});
			},
			skipToSale() {
				uni.navigateTo({
				    url: "/pages/class/sale"
				});
			},
			goodNumControl(tag) {
				switch (tag) {
					case 'reduce': {
						this.num = Math.max(0, --this.num);
						break;
					}
					case 'plus': {
						this.num = Math.min(200, ++this.num);
						break;
					}
					default: break;
				}
			}
		}
	}
</script>

<style scoped lang="scss">
	.cart-content {
		width: 750upx;
		min-height: 100vh;
		background-color: #F7F7F7;
		position: relative;
		padding: 30upx 0 260upx;
		.layer-container {
			width: 100%;
			height: 100vh;
			background-color: rgba(0,0,0,0.6);
			overflow: hidden;
			position: fixed;
			top: 0;
			left: 0;
			transition: .6s;
		}
		.cart-btn-container {
			width: 750upx;
			height: 110upx;
			position: fixed;
			bottom: 102upx;
			background-color: #fff;
			display: flex;
			justify-content: center;
			align-items: center;
			text-align: center;
			font-size: 30upx;
			line-height: 110upx;
			color: #333;
			.cart-btn-all {
				width: 272upx;
				height: 110upx;
			}
			.cart-btn-del {
				width: 168upx;
				height: 110upx;
				background-color: #FFCFB9;
				color: #333;
			}
			.cart-btn-count {
				width: 308upx;
				height: 110upx;
				background-color: #FF5101;
				color: #fff;
				.cart-btn-num {
					font-size: 24upx;
					margin-right: 16upx;
				}
			}
		}
		.cart-list {
			width: 690upx;
			margin: 0 30upx;
			height: auto;
			background-color: #fff;
			border-radius: 12upx;
			margin-bottom: 30upx;
			.cart-title-box {
				width: 630upx;
				height: 92upx;
				padding: 0 30upx;
				display: block;
				line-height: 104upx;
				font-size: 30upx;
				color: #333;
				border-bottom: 1px solid #D8D8D8;
				.cart-title {
					margin-left: 24upx;
				}
			}
			.cart-goods {
				.goods-sale-info {
					display: flex;
					justify-content: space-between;
					align-items: center;
					width: 560upx;
					padding-left: 80upx;
					height: 80upx;
					font-size: 30upx;
					color: #333;
					.goods-sale-detail {
						font-weight: 500;
						width: auto;
						height: 80upx;
						display: flex;
						align-items: center;
						.goods-sale-tag {
							width: auto;
							height: 36upx;
							display: inline-block;
							line-height: 36upx;
							text-align: center;
							color: #fff;
							font-size: 20upx;
							background-color: #FF5101;
							padding: 0 8upx;
							margin-right: 10upx;
							font-weight: 400;
						}
					}
				}
				.cart-good-item {
					display: flex;
					justify-content: space-between;
					align-items: center;
					.cart-checkbox {
						width: 90upx;
						height: 144upx;
						text-align: right;
					}
					.cart-good-detail {
						width: 570upx;
						margin-right: 30upx;
						border-bottom: 1px solid #E1E1E1;
						display: flex;
						align-items: flex-start;
						justify-content: space-between;
						.cart-good-img {
							width: 144upx;
							height: 144upx;
						}
						.cart-good-txt {
							width: 410upx;
							padding: 20upx 0;
							.cart-good-des {
								font-size: 28upx;
								line-height: 40upx;
								color: #424242;
							}
							.cart-good-inventory, .cart-good-couponsArrs {
								height: 40upx;
								width: auto;
								line-height: 40upx;
								text-align: center;
								border-radius: 20upx;
								background-color: #EBEBEB;
								font-size: 20upx;
								color: #666;
								margin-right: 30upx;
								display: inline-block;
								margin-top: 12upx;
								padding: 0 16upx;
							}
							.cart-good-couponsArrs {}
							.cart-good-buy {
								margin: 10upx 0;
								display: flex;
								justify-content: space-between;
								.cart-good-price {
									font-size: 30upx;
									color: #FF5101;
									line-height: 44upx;
									font-weight: 500;
								}
								.cart-num-control {
									width: 158upx;
									height: 40upx;
									background: rgba(255,255,255,1);
									border-radius: 8upx;
									border: 1upx solid rgba(151,151,151,1);
									display: flex;
									justify-content: space-between;
									align-items: center;
									font-size: 13px;
									color: #999;
									.cart-num-control-action {
										width: 33%;
										text-align: center;
										border-right: 1upx solid rgba(151,151,151,1);
									}
									.cart-num-control-action:last-child{
										border-right: none;
									}
								}
							}
							.cart-good-sale {
								width: 36upx;
								height: 36upx;
								border-radius: 8upx;
								font-size: 20upx;
								line-height: 36upx;
								text-align: center;
								display: inline-block;
							}
							.cart-good-coupons {
								border: 1px solid #FF5101;
								color: #FF5101;
								margin-right: 6px;
							}
							.cart-good-discount {
								border: 1px solid #33A977;
								color: #33AC78;
							}
						}
					}
				}
			}
		}
	}
</style>
