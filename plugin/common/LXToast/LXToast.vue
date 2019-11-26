<template>
	<view class="box" v-if="showing">
		<view class="content">{{ message }}</view>
	</view>
</template>

<script>
export default {
	name: 'LXToast',
	data() {
		return {
			message: '',
			showing: false,
			options: {}
		};
	},
	created() {
		console.log('this.options')
		console.log(this.options)
		
	},
	methods: {
		show(param = null) {
			if (this.showing === true) {
				return;
			}
			console.log(this.options)
			this.showing = true;
			this.message = (param && param.content) || '操作成功！';
			const timeOut = (param && param.timeOut) || 1000;
			setTimeout(() => {
				this.showing = false;
			}, timeOut);
		}
	}
};
</script>

<style lang="scss" scoped>
.box {
	.content {
		position: fixed;
		left: 50%;
		top: 50%;
		transform: translate(-50%, -50%);
		padding: 15upx 30upx;
		background-color: #4cd964;
		color: #ffffff;
	}
}
</style>
