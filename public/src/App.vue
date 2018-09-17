<template>
	<main>
		<div v-on:click="slideIn" id="hamburg">
			<div class="hamDiv"></div>
			<div class="hamDiv"></div>
			<div class="hamDiv"></div>
		</div>
		<div class="navDiv">
			<router-link v-on:click.native="hideNav" class="navLink" :to="`/home`">Home</router-link>
			<div class="underline"></div>
			<router-link v-on:click.native="hideNav" class="navLink" :to="`/featured`">Featured</router-link>
			<div class="underline"></div>
			<router-link v-on:click.native="hideNav" class="navLink" :to="`/about`">About</router-link>
			<div class="underline"></div>
		</div>
	<transition name="fade">
		<router-view v-bind:shows="shows" the-title="Shows">
		</router-view>
	</transition>
	</main>
</template>

<script>
	export default {
		name: 'app',
		data() {
			return {shows: []}
		},
		created: function() {
			var vm = this;
			axios.get('http://localhost:3000/home').then(function(response) {
				// console.log(response);
				vm.shows = response.data;
			});
		},
		methods: {
			slideIn: function() {
				document.querySelector(".navDiv").classList.toggle("showNav");
			},
			hideNav: function() {
				document.querySelector(".navDiv").classList.remove("showNav");
				// console.log(23423);
			}
		}
	}
</script>

<style lang="scss">
</style>
