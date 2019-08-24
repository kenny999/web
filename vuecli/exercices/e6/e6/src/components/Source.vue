<template>
	<div>
		<p>
			<label for="ind">Enter a value</label>
			<input id="ind" v-model="ind"/>
		</p>
		<button @click="clickHandler">Press</button>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				ind : undefined
			}
		},
		methods : {
			clickHandler :  function(){
				this.$emit("sourceEvent", "kenneth");
			}
		}

	}
</script>

<style scoped>
	div {color: blue}
</style>
