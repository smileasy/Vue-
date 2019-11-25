import LXToast from './LXToast.vue'
import events from './events.js'
const api = {
	close: function() {
		events.$emit('close', true)
	},
	show: function(val) {
		
		events.$emit('show', val)
	}
}

LXToast.install = function(Vue, options) {
	Vue.prototype.$msg = 'Hello World!!!!!!!!!!';
	let plugin = Vue.extend(LXToast);
	let toast = new plugin().$mount().$el;
	// #ifdef H5
	document.body.appendChild(toast);
	Vue.prototype.$toast = api
	// #endif

	Vue.mixin({
		onShow: function() {
			
		}
	})
}

export default LXToast
