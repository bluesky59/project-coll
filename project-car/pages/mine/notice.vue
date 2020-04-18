<template>
	<view class="notice-container">
		<view class="notice-list">
			<view class="notice-item" v-for="item in noticeArrs" :key="item">
				<image class="notice-icon" src="http://39.108.65.247:8087/imgs/mine/notice-icon.png"></image>
				<view class="notice-txt">
					<text class="notice-label">{{item.label}}</text>
					<text class="notice-date">{{item.date}}</text>
				</view>
			</view>
		</view>
		<text class="notice-tips">右滑移除公告信息</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				noticeArrs: [
					{
						id: 1,
						label: '公告：每周四晚八点部分商品低至3折...',
						date: '2020/02/29 18:32:54'
					},
					{
						id: 2,
						label: '公告：每周四晚八点部分商品低至3折...',
						date: '2020/02/29 18:32:54'
					},
					{
						id: 3,
						label: '公告：每周四晚八点部分商品低至3折...',
						date: '2020/02/29 18:32:54'
					},
					{
						id: 4,
						label: '公告：每周四晚八点部分商品低至3折...',
						date: '2020/02/29 18:32:54'
					}
				],
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped lang="scss">
	.notice-container {
		width: 690upx;
		height: auto;
		padding: 30upx;
		text-align: center;
		.notice-tips {
			font-size: 28upx;
			line-height: 80upx;
			color: #999;
		}
		.notice-item {
			width: 690upx;
			height: 128upx;
			margin-bottom: 24upx;
			background: rgba(255,255,255,1);
			box-shadow: 0px 0px 8upx 0px rgba(237,237,237,1);
			border-radius: 8upx;
			display: flex;
			align-items: center;
			.notice-icon {
				width: 92upx;
				height: 92upx;
				margin-right: 20upx;
			}
			.notice-txt {
				flex: 1;
				display: flex;
				flex-direction: column;
				font-weight: 400;
				justify-content: center;
				align-items: flex-start;
				overflow: hidden;
				text-overflow: ellipsis;
				.notice-label {
					font-size: 28upx;
					line-height: 44upx;
					color: #333;
				}
				.notice-date {
					font-size: 24upx;
					line-height: 40upx;
					color: #999;
				}
			}
		}
	}
</style>
