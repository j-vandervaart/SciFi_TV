<template>
    <section id="individualShow">
        <router-link :to="`/home`"><img class="sectionLogo" src="images/Scifi_logo_boxless.svg" alt="Scifi TV logo"></router-link>
        <div id="container">
          <div class="epDiv">
            <img class="indShowImg" v-bind:src="`images/${show.img}`" v-bind:alt="`${show.name}`">
            <h1 class="indName">{{show.name}}</h1>
            <p class="indCopy">{{show.desc}}</p>
            <p class="indCast"><span id="spanCast">Cast:</span> {{show.cast}}</p>
          </div>
          <div id="blackBox">
            <h2 id="topRatedTitle">Top Rated Episodes</h2>
            <div id="showLinkDiv">
            <router-link class="showLink" v-for="eps in show.episodes" v-bind:key="eps._id" :to="`/eps/${eps._id}`">{{eps.eps_name}}</router-link><br>
            </div>
          </div>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'show',
        data() {
          return {
            show: {}
          }
        },
        created() {
          var vm = this;
          var show_id = this.$route.params.id;
          // console.log(test);
          axios.get(`http://localhost:3000/shows/${show_id}`).then(function(response) {
            vm.show = response.data;
            // console.log(response);
          });
        }
    }

</script>

<style lang="scss">
</style>
