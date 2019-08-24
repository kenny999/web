import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
  	firstName : undefined,
  	lastName : undefined,
  	street : undefined,
  	zip : undefined,
  	town : undefined
  },
  mutations: {
  	setFirstName(state, newValue){
  		state.firstName = newValue;
  	},
  	setLastName(state, newValue){
  		state.lastName = newValue;
  	},
  	setStreet(state, newValue){
  		state.street = newValue;
  	},
  	setZip(state, newValue){
  		state.zip = newValue;
  	},
  	setTown(state, newValue){
  		state.town = newValue;
  	},
  },
  actions: {

  }
})
