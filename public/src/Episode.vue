<template>
    <section id="episode">
      <router-link :to="`/home`"><img class="sectionLogo" src="images/Scifi_logo_boxless.svg" alt="Scifi TV logo"></router-link>
      <h1 class="epName">{{eps.eps_name}}</h1>
      <img class="epShowImg" v-bind:src="`images/${eps.eps_img}`" v-bind:alt="`${eps.eps_name}`">
      <div class="indDiv">
        <p class="indCast">{{eps.eps_number}}</p>
        <p class="indCopy">{{eps.synop}}</p>
      </div>
    </section>
</template>

<script>
    export default {
        name: 'episode',
        data() {
          return {
            eps: {}
          }
        },
        created() {
          var vm = this;
          var eps_id = this.$route.params.id;
          // console.log(eps_id);
          axios.get(`http://localhost:3000/eps/${eps_id}`).then(function(response) {
            vm.eps = response.data;
            // console.log(response);
          });
        }
    }

</script>

<style lang="scss">
</style>
