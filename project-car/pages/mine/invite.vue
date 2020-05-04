<template>
	<view class="invie-container" :style="{backgroundImage: `url(${imgUrl})`, backgroundSize: 'contain', backgroundRepeat: 'no-repeat'}">
		<view class="invite-info">
			<text class="invite-title">限时推广最高可得</text>
			<text class="invite-gift">30000.00</text>
			<text class="invite-tips">赶快邀请好友注册，大批福利等你拿</text>
			<image class="invite-img" :src="`${baseUrl}/imgs/mine/invite-mini.png`"></image>
		</view>
		<text class="invite-remark">* 活动最终解释权归好好汽配所有</text>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseUrl: 'http://39.108.65.247:8087',
				imgUrl: 'http://39.108.65.247:8087/imgs/mine/invite-bg.png'
			}
		},
		methods: {
			
		}
	}
</script>

<style scoped>
	.invie-container {
		width: 100vw;
		text-align: center;
		background-color: #F7F7F7;
		padding-top: 660upx;
	}
	.invite-info {
		width: 690upx;
		height: 644upx;
		background: rgba(255,255,255,1);
		box-shadow: 0px 2upx 8upx 0upx rgba(231,231,231,1);
		border-radius: 20upx;
		margin: 0 auto 60upx;
		display: flex;
		flex-direction: column;
		justify-content: center;
		align-items: center;
	}
	.invite-title {
		font-size: 30upx;
		line-height: 60upx;
		color: #999;
		font-weight: 400;
		text-shadow: 0px 4upx 16upx rgba(231,231,231,1);
	}
	.invite-gift {
		font-size: 88upx;
		line-height: 120upx;
		color: #333;
		font-weight: bold;
		text-shadow:0px 4upx 16upx rgba(231,231,231,1);
	}
	.invite-tips {
		font-size: 30upx;
		line-height: 60upx;
		color: #333;
		font-weight: 400;
		text-shadow:0px 4upx 16upx rgba(231,231,231,1);
	}
	.invite-img {
		width: 284upx;
		height: 272upx;
	}
	.invite-remark {
		font-size: 24upx;
		line-height: 80upx;
		color: #666;
	}
</style>
