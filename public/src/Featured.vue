<template>
    <section id="featured">
        <router-link :to="`/home`"><img class="sectionLogo" src="images/Scifi_logo_boxless.svg" alt="Scifi TV logo"></router-link>
        <div id="mainFeatured">
          <router-link v-bind:class="n.class" class="newsPrev" v-bind:key="n.class" v-for="n in news" :to="`/featured/${n._id}`">
            <div>
              <img v-bind:src="`images/${n.img}`" v-bind:alt="`${n.header}`">
              <h1>{{n.header}}</h1>
              <p>{{n.teaser}}</p>
              <!-- <p class="paraBreak" v-for="p in n.story">{{p}}</p><br> -->
            </div>
          </router-link>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'show',
        data() {
          return {
            news: [],
            num: 0
          }
        },
        created: function() {
          var vm = this;
          axios.get('http://localhost:3000/featured').then(function(response) {
          console.log(response);
          vm.news = response.data;
        });
        }
    }

</script>

<style lang="scss">
</style>
