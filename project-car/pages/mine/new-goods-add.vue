<template>
	<view class="goods-add-container">
		<view class="goods-add-form">
			<view class="goods-add-formitem">
				<label class="goods-add-label">*名称</label>
				<input class="uni-input goods-add-input" confirm-type="search" placeholder="输入名称" />
			</view>
			<view class="goods-add-formitem">
				<label class="goods-add-label">*分类</label>
				<input class="uni-input goods-add-input" confirm-type="search" placeholder="请选择分类" />
			</view>
			<view class="goods-add-formitem">
				<label class="goods-add-label">品牌</label>
				<input class="uni-input goods-add-input" confirm-type="search" placeholder="例: 壳牌" />
			</view>
			<view class="goods-add-formitem">
				<label class="goods-add-label">规格</label>
				<input class="uni-input goods-add-input" confirm-type="search" placeholder="例: 壳250ml x 24瓶/箱" />
			</view>
			<view class="goods-add-formitem">
				<label class="goods-add-label">车架号</label>
				<input class="uni-input goods-add-input" confirm-type="search" placeholder="请输入车架号" />
			</view>
			<view class="goods-add-formitem">
				<label class="goods-add-label">月需求量</label>
				<input class="uni-input goods-add-input" confirm-type="search" placeholder="预计一个月购买量" />
			</view>
			<view class="goods-add-formitem">
				<label class="goods-add-label">备注</label>
				<input class="uni-input goods-add-input" confirm-type="search" placeholder="请输入" />
			</view>
			<view class="goods-add-upload">
				<label>上传照片</label>
				<view class="goods-upload-list">
					<view class="goods-upload-add">
						<image class="goods-upload-icon" src="http://39.108.65.247:8087/imgs/mine/upload-icon.png"></image>
						<text>最多三张</text>
					</view>
					<view class="goods-upload-item"></view>
					<view class="goods-upload-item"></view>
				</view>
			</view>
		</view>
		<view class="goods-to">提交</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.goods-add-container {
		.goods-add-form {
			.goods-add-formitem {
				width: 690upx;
				height: 100upx;
				margin: 0 30upx;
				border-bottom: 1upx solid #E1E1E1;
				display: flex;
				align-items: center;
				font-size: 32upx;
				.goods-add-label {
					color: #4C4C4C;
					width: 160upx;
				}
				.goods-add-input {
					color: #B6B6B6;
					width: 530upx;
				}
			}
			.goods-add-upload {
				width: 690upx;
				margin: 0 30upx;
				padding-top: 16upx;
				font-size: 32upx;
				color: #4C4C4C;
				line-height: 60upx;
				.goods-upload-list {
					display: flex;
					align-items: center;
					justify-content: space-between;
					.goods-upload-item {
						width: 216upx;
						height: 160upx;
						border-radius: 8upx;
						border: 1upx dashed #D1D1D1;
					}
					.goods-upload-add {
						width: 216upx;
						height: 160upx;
						border-radius: 8upx;
						background-color: #EFEFEF;
						display: flex;
						flex-direction: column;
						justify-content: center;
						align-items: center;
						font-size: 26upx;
						color: #999;
						.goods-upload-icon {
							width: 48upx;
							height: 48upx;
						}
					}
				}
			}
		}
		.goods-to {
			width: 750upx;
			height: 98upx;
			background-color: #FF5101;
			line-height: 98upx;
			text-align: center;
			font-size: 30upx;
			color: #fff;
			position: fixed;
			bottom: 0;
			left: 0;
		}
	}
</style>
