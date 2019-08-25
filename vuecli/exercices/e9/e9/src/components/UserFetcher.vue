<template>
	<div>
		<p>
			<label for="uid">Enter uid</label>
			<input id="uid" v-model="userid"/>
		</p>
		<p>
			<button @click="onClick">Press</button>
		</p>
		<p v-if="user">
			{{user.author}}
		</p>
		<p v-if="user">
			{{user.isbn}}
		</p>
		<p v-if="user">
			{{user.name}}
		</p>
	</div>
</template>

<script>
	import axios from 'axios'

	export default {
		data : function(){
			return {
				userid : undefined,
				user : undefined
			}
		},
		methods : {
			onClick : function(){
			var data = this.$data;
			var url = 'http://localhost:8080/restserver/rest-prefix/books/'+data.userid;
  			axios
  			.get(url)
  			.then(function(response){
  				data.user = response.data;
  				console.log("huh")
  			})
  			.catch(function(err){
  				var e = 0;
				console.log("huh2")

  			});
			}
		}
	}
</script>

