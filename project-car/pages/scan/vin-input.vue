<template>
	<view class="import-container" :style="{background: `url(${imageBgUrl})`, backgroundSize: '375px 378px'}">
		<view class="input-container">
			<view class="import-inputs">
				<input v-for="(item, index) in inputArr" maxlength="1" confirm-hold :focus="item.focus" @input.prevent="inputHandle(index)" v-model="item.value" :key="item.num" class="uni-input import-input" type="number" />
			</view>
			<view class="import-tips">
				<text>长按输入框粘贴</text>
				<text @click="clearInputs">清空</text>
			</view>
			<button class="import-btn">确认</button>
		</view>
	</view>
</template>

<script>
	export default {
		data() {
			return {
				imageBgUrl: 'http://39.108.65.247:8087/imgs/others/vin-bg.png',
				inputArr: []
			}
		},
		created() {
			this.initInput();
		},
		methods: {
			initInput() {
				this.inputArr = [];
				for (let i = 0; i < 17; i++) {
					this.inputArr.push({
						value: '',
						num: i,
						focus: i === 0
					});
				}
			},
			inputHandle(index) {
				if (index < this.inputArr.length - 1) {
					this.inputArr[index + 1].focus = true;
				}
			},
			clearInputs() {
				this.initInput();
			}
		}
	}
</script>

<style scoped lang="scss">
	.import-container {
		width: 100%;
		min-height: 100vh;
		.input-container {
			width: 690upx;
			height: auto;
			padding: 20upx 30upx;
			background-color: #fff;
			display: flex;
			flex-direction: column;
			position: absolute;
			bottom: 0;
			.import-inputs {
				width: 690upx;
				height: 72upx;
				display: flex;
				justify-content: space-between;
				border: 1upx solid #979797;
				border-right: none;
				.import-input {
					width: 40upx;
					height: 72upx;
					border-right: 1upx solid #979797;
					line-height: 72upx;
					text-align: center;
				}
			}
			.import-tips {
				font-size: 26upx;
				color: #999;
				width: 100%;
				height: 80upx;
				display: flex;
				justify-content: space-between;
				align-items: center;
			}
			.import-btn {
				width: 690upx;
				height: 88upx;
				background-color: #FF5C00;
				color: #fff;
				line-height: 88upx;
				text-align: center;
				font-size: 32upx;
			}
		}
	}
</style>
