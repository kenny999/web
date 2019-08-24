<template>
	<div>
		<h1>State</h1>
		<dl>
			<dt>First name</dt><dd>{{firstName}}</dd>
			<dt>Last name</dt><dd>{{lastName}}</dd>
			<dt>Street</dt><dd>{{street}}</dd>
			<dt>Zip</dt><dd>{{zip}}</dd>
			<dt>Town</dt><dd>{{town}}</dd>
		</dl>
	</div>
</template>

<script>
	export default {
		computed : {
			firstName : function(){
				return this.$store.state.firstName;
			},
			lastName : function(){
				return this.$store.state.lastName;
			},
			street : function(){
				return this.$store.state.street;
			},
			zip : function(){
				return this.$store.state.zip;
			},
			town : function(){
				return this.$store.state.town;
			},
		}
	}
</script>