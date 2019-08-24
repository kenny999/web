<template>
	<table>
		<th v-for="h in headers">{{h}}</th>
		<tr><td v-for="d in data">{{d}}</td></tr>
	</table>
</template>

<script src="./cooltable.js">
</script>

<style src="./cooltable.css">
</style>
