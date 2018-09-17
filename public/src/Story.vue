<template>
    <section id="story">
        <router-link :to="`/home`"><img class="sectionLogo" src="images/Scifi_logo_boxless.svg" alt="Scifi TV logo"></router-link>
        <div id="storyDiv">
          <img v-bind:src="`images/${story.img}`" v-bind:alt="`${story.header}`">
          <h1>{{story.header}}</h1>
          <h4>By: {{story.author}}</h4>
          <p class="paraBreak" v-bind:key="s" v-for="s in story.story">{{s}}</p>
        </div>
    </section>
</template>

<script>
    export default {
        name: 'story',
        data() {
          return {
            story: {}
          }
        },
        created: function() {
          var vm = this;
          var story_id = this.$route.params.id;
          axios.get(`http://localhost:3000/featured/${story_id}`).then(function(response) {
          console.log(response);
          vm.story = response.data;
        });
        }
    }

</script>

<style lang="scss">
</style>
