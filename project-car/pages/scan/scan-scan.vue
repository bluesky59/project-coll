<template>
	<view class="scan-scan">
		<view class="scan-content">
			<image @click="scanHandle" class="scan-box" src="/static/add/scan-bg.png"></image>
			<view class="scan-tips">请将车架号，vin码信息置于扫码框内</view>
		</view>
		<view class="scan-footer">
			<image @click="clickHandle(item)" v-for="item in footerArrs" :key="item.icon" class="scan-footer-icon" :src="`/static/add/${item.icon}.png`"></image>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				footerArrs: [
					{
						label: '返回',
						icon: 'scan-back'
					},
					{
						label: '扫码',
						icon: 'scan-scan'
					},
					{
						label: '转换',
						icon: 'scan-trans'
					}
				]
			}
		},
		methods: {
			clickHandle(data) {
				switch(data.icon) {
					case 'scan-back': {
						uni.navigateTo({
						    url: `/pages/other/main?tabsName=scan`
						});	
						break;
					}
					case 'scan-scan': {
						this.scanHandle();
						break;
					}
					case 'scan-trans': {
						break;
					}
					default: break;
				}
			},
			scanHandle() {
				uni.scanCode({
				    scanType: ['barCode'],
				    success: function (res) {
				        console.log('条码类型：' + res.scanType);
				        console.log('条码内容：' + res.result);
				    }
				});
			}
		}
	}
</script>

<style scoped lang="scss">
	.scan-scan {
		width: 100vw;
		height: 100vh;
		overflow: hidden;
		.scan-content {
			width: 100%;
			height: calc(100% - 212upx);
			background-color: #2C2C2C;
			text-align: center;
			position: relative;
			.scan-box {
				width: 670upx;
				height: 163upx;
				display: block;
				position: absolute;
				top: 50%;
				left: 50%;
				transform: translate(-50%, -50%);
			}
			.scan-tips {
				width: 100%;
				height: 72upx;
				font-size: 28upx;
				color: #fff;
				line-height: 72upx;
				position: absolute;
				bottom: 0;
				text-align: center;
			}
		}
		.scan-footer {
			width: 630upx;
			height: 212upx;
			padding: 0 60upx;
			background-color: #080606;
			display: flex;
			justify-content: space-between;
			align-items: center;
			.scan-footer-icon {
				width: 96upx;
				height: 96upx;
			}
		}
	}
</style>
