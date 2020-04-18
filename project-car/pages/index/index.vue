<template>
	<view class="content">
		<indexSimple v-if="templateType === 'simple'"></indexSimple>
		<indexCustom v-if="templateType === 'custom'"></indexCustom>
		<indexStandard v-if="templateType === 'standard'"></indexStandard>
		<view @click="isShowConcat" class="index-concat" :class="{'index-concat-hide': isExpand !== true}">
			<image class="index-concat-icon-1" :src="`${baseUrl}/imgs/others/concat-wechat.png`"></image>
			<image class="index-concat-icon-2" :src="`${baseUrl}/imgs/others/concat-phone.png`"></image>
			<image class="index-concat-icon-3" :src="`${baseUrl}/imgs/others/concat-service.png`"></image>
			<image class="index-concat-icon-4" :src="`${baseUrl}/imgs/others/concat-back.png`"></image>
		</view>
		<view @click="isShowConcat" class="index-concat-col"  :class="{'index-concat-col-hide': isExpand === true}">
			<image class="index-concat-icon-4" :src="`${baseUrl}/imgs/others/concat-back.png`"></image>
		</view>
	</view>
</template>

<script>
	import indexSimple from './index-simple.vue';
	import indexCustom from './index-custom.vue';
	import indexStandard from './index-standard.vue';
	export default {
		data() {
			return {
				// 3种模式：标准(standard)、简约(simple)、自定义(custom)
				templateType: 'custom',
				isExpand: true,
				baseUrl: 'http://39.108.65.247:8087',
			}
		},
		components: { indexSimple, indexCustom, indexStandard },
		onLoad() {

		},
		methods: {
			isShowConcat() {
				this.isExpand = !this.isExpand;
			}
		}
	}
</script>

<style scoped lang="scss">
	.content {
		width: 100%;
		min-height: 100vh;
		padding-bottom: 122upx;
		.index-concat {
			width: 70upx;
			height: 360upx;
			background-color: rgba(186,179,176,0.6);
			border-radius: 8upx 0 0 8upx;
			position: fixed;
			right: 0;
			bottom: 220upx;
			display: flex;
			flex-direction: column;
			align-items: center;
			justify-content: space-around;
			transition: .5s;
			.index-concat-icon-1 {
				width: 42upx;
				height: 36upx;
			}
			.index-concat-icon-2 {
				width: 36upx;
				height: 36upx;
			}
			.index-concat-icon-3 {
				width: 44upx;
				height: 44upx;
			}
			.index-concat-icon-4 {
				width: 14upx;
				height: 24upx;
			}
		}
		.index-concat-col {
			width: 70upx;
			height: 56upx;
			background-color: rgba(186,179,176,0.6);
			border-radius: 8upx 0 0 8upx;
			position: fixed;
			right: 0;
			bottom: 220upx;
			display: flex;
			align-items: center;
			justify-content: center;
			transition: .5s;
			.index-concat-icon-4 {
				width: 14upx;
				height: 24upx;
			}
		}
		.index-concat-hide {
			transform: translateX(70upx);
		}
		.index-concat-col-hide {
			transform: translateX(70upx);
		}
	}
</style>
