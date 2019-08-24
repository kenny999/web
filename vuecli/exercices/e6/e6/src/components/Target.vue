
<template>
	<div><h1>Target</h1>
	<p>{{event}}</p>
	</div>
</template>

<script>
	export default {
		props : {
			event  : {
				type : String,
				required :  true
			}
		}

	}
</script>

<style scoped>
	div {color: red}
</style>
