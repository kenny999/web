
const moduleUpper = {
	namespaced : true,
	state : {
		upperValue : undefined
	},
	mutations : {
		setUpperValue(state, newValue){
			state.upperValue = newValue;
		}
	}
}

const moduleLower = {
	namespaced : true,
	state : {
		lowerValue : undefined
	},
	mutations : {
		setLowerValue(state, newValue){
			state.lowerValue = newValue;
		}
	}
}

const store = new Vuex.Store({
	modules : {
		upper : moduleUpper,
		lower : moduleLower
	}
})

var app = new Vue({
  el: '#app',
  data: {
  	toBeUpper : undefined,
  	toBeLower : undefined    
  },
  methods : {
  	update : function(ev){
  		store.commit("upper/setUpperValue", this.toBeUpper);
  		store.commit("lower/setLowerValue", this.toBeLower);
  	}
  },
  computed : {
  	displayUpper : function(){
  		return store.state.upper.upperValue;
  	},
  	displayLower : function(){
  		return store.state.lower.lowerValue;
  	},
  },
  store
})