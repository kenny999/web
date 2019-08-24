
<template>
	<div>
		<ul v-if="listStyle === 'ul'">
			<li v-for="l in listData">{{l}}</li>
		</ul>
		<ol v-else>
			<li v-for="l in listData">{{l}}</li>
		</ol>
	</div>
</template>

<script>
	export default  {
		props : {
			listStyle: {
				type: String,
				required: true
			},
			listData : {
				type : Array,
				required: true
			}
		}
	}
</script>

<style>

</style>
