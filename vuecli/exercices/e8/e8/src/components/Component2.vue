<template>
	<div>
	<h1>Component 2</h1>
	<p>
		<label for="street">Street</label>
		<input id="street" v-model="street"/>
	</p>
	<p>
		<label for="zip">Postal code</label>
		<input id="zip" v-model="zip"/>
	</p>
	<p>
		<label for="Town">Town</label>
		<select id="town" v-model="town">
			<option value="Sundsvall">Sundsvall</option>
			<option value="Kiruna">Kiruna</option>
		</select>
	</p>
	<p>
		<button @click="onClick">Press</button>
	</p>
	</div>
</template>

<script>
	export default {
		data : function(){
			return {
				street : undefined,
				zip : undefined,
				town : undefined
			}
		},
		methods : {
			onClick : function(){
				this.$store.commit("setStreet", this.street);
				this.$store.commit("setZip", this.zip);
				this.$store.commit("setTown", this.town);
			}
		}
	}
</script>

