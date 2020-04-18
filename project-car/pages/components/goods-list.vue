<template>
	<view>
		<view class="product-info" v-for="item in saleArrs" :key="item">
			<image @click="skipTo" class="product-img" :src="item.img"></image>
			<view class="product-txt">
				<text @click="skipTo" class="product-des">{{item.des}}</text>
				<text class="product-coupons" v-if="item.coupons">券</text>
				<text class="product-discount" v-if="item.discount">折</text>
				<text class="product-inventory">库存{{item.inventory}}</text>
				<text class="product-price">¥ {{item.price}}</text>
				<view class="product-action">
					<image @click.prevent="productPlus" v-if="num === 0" class="product-plus" :src="`${baseUrl}/imgs/class/add-icon.png`"></image>
					<view v-else class="cart-num-control">
						<view @click.prevent="goodNumControl('reduce')" class="cart-num-control-action cart-num-control-op">-</view>
						<view class="cart-num-control-action cart-num-control-num">{{num}}</view>
						<view @click.prevent="goodNumControl('plus')" class="cart-num-control-action cart-num-control-op">+</view>
					</view>
				</view>
			</view>
		</view>
		<view v-if="hot" class="hot-recommand">
			<text>-热门推荐-</text>
			<view class="product-info" v-if="index < 3" v-for="(item, index) in saleArrs" :key="item">
				<image @click="skipTo" class="product-img" :src="item.img"></image>
				<view class="product-txt">
					<text @click="skipTo" class="product-des">{{item.des}}</text>
					<text class="product-coupons" v-if="item.coupons">券</text>
					<text class="product-discount" v-if="item.discount">折</text>
					<text class="product-inventory">库存{{item.inventory}}</text>
					<text class="product-price">¥ {{item.price}}</text>
					<view class="product-action">
						<image @click.prevent="productPlus" v-if="num === 0" class="product-plus" :src="`${baseUrl}/imgs/class/add-icon.png`"></image>
						<view v-else class="cart-num-control">
							<view @click.prevent="goodNumControl('reduce')" class="cart-num-control-action cart-num-control-op">-</view>
							<view class="cart-num-control-action cart-num-control-num">{{num}}</view>
							<view @click.prevent="goodNumControl('plus')" class="cart-num-control-action cart-num-control-op">+</view>
						</view>
					</view>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	import { saleArrs } from '../../mock/api-class-goods.js';
	export default {
		name: 'goods-list',
		props: {
			// 是否有特殊处理事件 默认值： 否
			eventHandle: {
				type: String,
				default: ''
			},
			hot: {
				type: Boolean,
				default: false
			}
		},
		data() {
			return {
				saleArrs,
				baseUrl: 'http://39.108.65.247:8087',
				num: 0
			}
		},
		methods: {
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
			},
			productPlus() {
				this.num = 1;
			},
			skipTo() {
				uni.navigateTo({
				    url: "/pages/other/good-detail"
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.hot-recommand {
		margin-top: 30upx;
	}
	.product-info {
		display: flex;
		justify-content: space-between;
		align-items: center;
		margin-top: 30upx;
		width: 100%;
		height: auto;
	}
	.product-img {
		width: 144upx;
		height: 144upx;
	}
	.product-txt {
		width: calc(100% - 160upx);
		height: auto;
		overflow: hidden;
		text-overflow: ellipsis;
		text-align: left;
		position: relative;
	}
	.product-des {
		font-size: 28upx;
		line-height: 44upx;
		color: #333;
		font-weight: 500;
		display: block;
	}
	.product-coupons {
		width: 40upx;
		height: 24upx;
		border: 1upx solid #FF5101;
		text-align: center;
		line-height: 24upx;
		font-size: 18upx;
		color: #FF5101;
		margin: 10upx 12upx 10upx 0;
		display: inline-block;
		border-radius: 4upx;
	}
	.product-discount {
		width: 40upx;
		height: 24upx;
		border: 1upx solid #33AC78;
		text-align: center;
		line-height: 24upx;
		font-size: 18upx;
		color: #33AC78;
		margin: 10upx 12upx 10upx 0;
		display: inline-block;
		border-radius: 4upx;
	}
	.product-inventory {
		color: #666;
		font-size: 24upx;
		line-height: 24upx;
		margin: 10upx 10upx 10upx 0;
	}
	.product-price {
		font-size: 28upx;
		line-height: 44upx;
		font-weight: 500;
		color: #FF5101;
		display: block;
	}
	.product-action {
		position: absolute;
		right: 0upx;
		bottom: 20upx;
		.product-plus {
			width: 48upx;
			height: 48upx;
			margin-top: 80upx;
		}
		.cart-num-control {
			width: 138upx;
			height: 48upx;
			background: rgba(255,255,255,1);
			border-radius: 24upx;
			border: 1upx solid #FF5101;
			display: flex;
			justify-content: space-between;
			align-items: center;
			font-size: 24upx;
			color: #FF5101;
			margin-top: 60upx;
			.cart-num-control-action {
				width: 33%;
				text-align: center;
			}
			.cart-num-control-num {
				color: #4c4c4c;
			}
			.cart-num-control-op {
				font-size: 16px;
				font-weight: bold;
			}
		}
	}
</style>
