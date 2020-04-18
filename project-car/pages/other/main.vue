<template>
	<view class="main-container">
		<home v-if="currentName === 'home'"></home>
		<classCom v-if="currentName === 'class'"></classCom>
		<scan v-if="currentName === 'scan'"></scan>
		<cart v-if="currentName === 'cart'"></cart>
		<mine v-if="currentName === 'mine'"></mine>
		<tapBar :tabsName="tabsName" @clickRes="clickRes"></tapBar>
	</view>
</template>

<script>
	import tapBar from '../components/tapBar.vue';
	import home from '../index/index';
	import classCom from '../class/index';
	import scan from '../scan/index';
	import cart from '../cart/index';
	import mine from '../mine/index';
	export default {
		components:{
			tapBar,
			home,
			classCom,
			scan,
			cart,
			mine
		},
		data() {
			return {
				currentName: 'home',
				tabsName: 'home'
			}
		},
		onLoad(options) {
			if (options.tabsName) {
				this.currentName = this.tabsName = options.tabsName;
			}
		},
		methods: {
			clickRes(data) {
				this.currentName = data.value;
				uni.setNavigationBarTitle({
					title: data.title
				})
			}
		}
	}
</script>

<style scoped lang="scss">
	.main-container {
		width: 100%;
		height: calc(100vh - 122upx);
	}
</style>
