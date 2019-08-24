<template>
	<div>
	<h1>Component 1</h1>
	<p>
		<label for="firstName">First name</label>
		<input id="firstName" v-model="firstName"/>
	</p>
	<p>
		<label for="lastName">Last name</label>
		<input id="lastName" v-model="lastName"/>
	</p>
	<p>
		<button @click="onClick">Press</button>
	</p>
	</div>
</template>

<script>
	export default {
		data :  function(){
			return {
				firstName : undefined,
				lastName : undefined,
			}
		},
		methods : {
			onClick : function(){
				this.$store.commit("setFirstName", this.firstName);
				this.$store.commit("setLastName", this.lastName);
			}
		}
	}
</script>

