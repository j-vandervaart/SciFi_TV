<template>
    <section id="home">
        <div class="logoDiv">
                <img class="logo" src="images/Scifi_logo_boxless.svg" alt="Logo">
        </div>
        <div id="logoTextDiv">
                <p id="logoText">Learn more and keep up to date on your favourite <span id="scifi">SCI-Fi</span> TV shows.</p>
        </div>
        <div id="showContainer">    
            <router-link id="showHref" v-for="show in shows" v-bind:key="show.id" :to="`/shows/${show._id}`">
                <div class="showDiv">
                    <div v-on:mouseleave="test($event)" v-on:mouseover="fade($event)" class="overlay"></div>
                    <!-- <div class="showDiv" :style="{ 'background-image': `url('images/${show.img}')` }"> -->
                    <img class="showImg" v-bind:src="`images/${show.img}`" v-bind:alt="`${show.name}`">
                    <div class="nameDiv">
                        <p id="showTitle">{{show.name}}</p>
                    </div>
                </div>
            </router-link>
        </div>
    </section>
</template>

<script>
  export default {
    name: 'shows',
    props: ['theTitle', 'shows'],
    data() {  
        return { num: 0 }
    },
    methods: {
        fade: function(event) {
            if(window.innerWidth < 1025) {
                return;
            }else {
                event.target.style.opacity = "0";
                event.path[1].childNodes[4].classList.add("fadeIn");
            }
        },
        test: function(event) {
            // event.path[1].childNodes[2].classList.remove("fadeIn");
            event.path[1].childNodes[4].classList.remove("fadeIn");
            event.target.style.opacity = ".7";
            console.log(event);
        }
    }
}
</script>

<style lang="scss">
</style>
