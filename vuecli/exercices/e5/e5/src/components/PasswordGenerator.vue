
<template>
	<div>
		<p>
			<label for="username">Enter a username</label>
			<input id="username" v-model="username"/>
		</p>
		<div id="pwd">
			<div>Suggested password:</div>
			<div>{{password}}</div>
		</div>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				username : undefined
			}
		},
		computed : {
			password : function(){
				if(! this.username){
					return "";
				}
				let r = "";
				let i = 0;
				for(i = 0;i<this.username.length;i++){
					r += String.fromCharCode(this.username.charCodeAt(i) + 1);
				}
				return r;
			}
		}
	}
</script>

<style scoped>
	#pwd {
		div {font-weight: bold}
	}
</style>
