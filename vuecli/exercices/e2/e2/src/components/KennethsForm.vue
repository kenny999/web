
<template>
	<div>
		<p>
			<label for="phone">Enter phone number</label>
			<input id="phone" v-model="phone"/>
		</p>
		<p>
			<button @click="clickHandler">Press</button>
		</p>
	</div>
</template>

<script>
	module.exports = {
		data : function(){
			return {
				phone : undefined
			}
		},
		methods : {
			clickHandler : function(ev){
				console.log("here");
			}
		}
	}
</script>

<style scoped>
	label {font-weight: bold}
</style>