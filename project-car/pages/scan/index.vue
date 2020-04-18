<template>
	<view class="scan-container">
		<view class="scan-content" :style="{background: `url(${imageBgUrl})`, backgroundSize: 'cover'}">
			<image class='scan-img' @click="scanHandle" :src="`${baseUrl}/imgs/scan/scan-icon.png`"></image>
			<view class="scan-box">
				<view class="query-container">
					<view class="query-box" v-for="item in queryArr" :key="item" @click="queryHandle(item)">
						<image class='query-img' :src="item.imgUrl"></image>
						<text>{{item.text}}</text>
					</view>
				</view>
				<view class="btn-container" @click="skipToHis">
					<image class="btn-img" :src="`${baseUrl}/imgs/scan/his-icon.png`"></image>
					<text>历史查询</text>
				</view>
			</view>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				baseUrl: 'http://39.108.65.247:8087',
				imageBgUrl: 'http://39.108.65.247:8087/imgs/scan/bg.png',
				btnBgURL: 'http://39.108.65.247:8087/imgs/scan/his-icon.png',
				queryArr: [
					{
						text: '传图识别',
						imgUrl: 'http://39.108.65.247:8087/imgs/scan/q-img.png',
						type: 'img'
					},
					{
						text: '输入识别',
						imgUrl: 'http://39.108.65.247:8087/imgs/scan/q-text.png',
						type: 'query'
					},
					{
						text: '按车型查询',
						imgUrl: 'http://39.108.65.247:8087/imgs/scan/q-veh.png',
						type: 'veh'
					}
				]
			}
		},
		onLoad() {

		},
		methods: {
			queryHandle (data) {
				switch(data.type) {
					case 'img': {
						uni.chooseImage({
						    count: 9,
						    sizeType: ['original', 'compressed'],
						    sourceType: ['album'], //从相册选择
						    success: (res) => {
								const imgUrl = JSON.stringify(res.tempFilePaths);
								console.log(imgUrl);
								uni.navigateTo({
								    url: "/pages/scan/scan-img"
								});
						    }
						});
						break;
					}
					case 'query': {
						uni.navigateTo({
						    url: "/pages/scan/vin-input"
						});
						break;
					}
					default: break;
				}
			},
			scanHandle() {
				uni.navigateTo({
				    url: "/pages/scan/scan-scan"
				});
			},
			skipToHis () {
				uni.navigateTo({
				    url: "/pages/scan/his"
				});
			}
		}
	}
</script>

<style>
	.scan-container {
		width: 100%;
		height: 100vh;
		overflow: hidden;
	}
	.scan-content {
		width: 100vw;
		height: calc(100vh - 102upx);
		overflow: hidden;
		text-align: center;
		position: relative;
	}
	.scan-img {
		width: 340upx;
		height: 340upx;
		margin-top: 50%;
	}
	.scan-box {
		position: absolute;
		bottom: 80upx;
		width: 750upx;
	}
	.query-container {
		width: 100%;
		height: auto;
		display: flex;
		justify-content: space-between;
		color: #fff;
		font-size: 32upx;
	}
	.query-box {
		width: 280upx;
		height: auto;
		text-align: center;
	}
	.query-img {
		width: 110upx;
		height: 110upx;
		display: block;
		margin: 60upx auto 20upx;
	}
	.btn-container {
		width: 248upx;
		height: 72upx;
		line-height: 72upx;
		border-radius: 36upx;
		background-color: #FF5101;
		margin: 40upx auto 0;
		color: #fff;
		font-size: 32upx;
		display: flex;
		align-items: center;
		justify-content: center;
	}
	.btn-img {
		width: 36upx;
		height: 36upx;
		vertical-align: baseline;
		margin-right: 8upx;
	}
</style>
