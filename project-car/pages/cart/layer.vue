<template>
	<view class="cart-layer-container">
		<view class="cart-layer-info">
			<image class="cart-layer-img" :src="dataDetail.img"></image>
			<view class="cart-layer-txt">
				<text class="cart-layer-price">¥ {{dataDetail.price}}</text>
				<text class="cart-layer-number">商品编号： {{dataDetail.number}}</text>
			</view>
		</view>
		<view class="cart-layer-salearr">
			<text class="cart-layer-title">选择促销</text>
			<text @click="couponsSel(item, index)" :class="{'cart-layer-saleitem-sel': couponsSelIndex === index}" class="cart-layer-saleitem" v-for="(item, index) in dataDetail.couponsArrs" :key="item">{{item}}</text>
		</view>
		<view class="cart-layer-btn">
			<button @click="couponsSelSubmit" class="cart-layer-submit">确定</button>
		</view>
	</view>
</template>

<script>
	export default {
		props: {
			dataDetail: {
				type: Object,
				default: () => {}
			}
		},
		data() {
			return {
				couponsSelIndex: null,
				couponsSelData: ''
			}
		},
		watch: {
			'dataDetail': function (val) {
				console.log(val);
			}
		},
		mounted() {
			console.log(this.dataDetail);
		},
		methods: {
			couponsSel (data,index) {
				this.couponsSelData = data;
				this.couponsSelIndex = index;
			},
			couponsSelSubmit () {
				this.$emit('closeLayer', this.couponsSelData);
			}
		}
	}
</script>

<style scoped lang="scss">
	.cart-layer-container {
		width: inherit;
		height: auto;
		background-color: #fff;
		position: absolute;
		bottom: 102upx;
		.cart-layer-info {
			padding: 30upx;
			width: 690upx;
			display: flex;
			.cart-layer-img {
				width: 204upx;
				height: 204upx;
				margin-right: 24upx;
			}
			.cart-layer-txt {
				width: 400upx;
				height: 204upx;
				display: flex;
				flex-direction: column;
				align-items: flex-start;
				justify-content: flex-end;
				.cart-layer-price {
					font-size: 44upx;
					font-weight: bold;
					color: #333;
					line-height: 56upx;
				}
				.cart-layer-number {
					font-size: 30upx;
					color: #999;
					line-height: 44upx;
				}
			}
		}
		.cart-layer-salearr {
			padding: 0 30upx;
			margin: 20upx auto 60upx;
			.cart-layer-title {
				font-size: 32upx;
				color: #333;
				font-weight: 500;
				line-height: 80upx;
				display: block;
			}
			.cart-layer-saleitem {
				width: 550upx;
				height: 64upx;
				padding-left: 30upx;
				line-height: 64upx;
				border-radius: 32upx;
				background-color: #F4F4F4;
				display: inline-block;
				font-size: 28upx;
				color: #666;
				text-align: left;
				margin-bottom: 30upx;
			}
			.cart-layer-saleitem-sel {
				border: 1px solid #FF5101;
				background-color: #FFDCCC;
				color: #FF5101;
			}
		}
		.cart-layer-btn {
			border-top: 1px solid #E1E1E1;
			width: 100%;
			height: 120upx;
			text-align: center;
			.cart-layer-submit {
				width: 600upx;
				height: 76upx;
				background-color: #FF5101;
				display: inline-block;
				margin: 22upx auto;
				line-height: 76upx;
				font-size: 30upx;
				color: #fff;
				border-radius: 38upx;
			}
		}
	}
</style>
