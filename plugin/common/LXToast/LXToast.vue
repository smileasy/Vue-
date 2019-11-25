<template v-if='showing'>
	<view class="box">
		<view class="content">{{ message }}</view>
	</view>
</template>

<script>
import events from './events';
export default {
	name: 'LXToast',
	data() {
		return {
			message: '',
			showing: false 
		};
	},
	created() {
		console.log(this.showing)
		events.$on('close', val => {
			this.showing = false
		});
		events.$on('show', val => {
			console.log('show',val)
			this.showing = true
			this.message = val.content
			setTimeout(() => {
				console.log('-------')
				this.showing = false
			}, val.timeOut)
		});
	},
	methods: {

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
