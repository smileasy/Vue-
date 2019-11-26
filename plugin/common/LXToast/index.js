import LXToast from './LXToast.vue'

LXToast.install = function(Vue) {
	let plugin = Vue.extend(LXToast);
	let toast = new plugin()
	// #ifdef H5
	document.body.appendChild(toast.$mount().$el);
	Vue.prototype.$toast = toast
	// #endif
}

export default LXToast
