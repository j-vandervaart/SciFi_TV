<template>
    <section id="about">
        <router-link :to="`/home`"><img class="sectionLogo" src="images/Scifi_logo_boxless.svg" alt="Scifi TV logo"></router-link>
        <h1 id="aboutTitle">About</h1>
        <div id="mainAboutDiv">
          <p id="aboutCopy">SciFi TV is a web application built for enthusiasts of Science Fiction television. It is a place to read about and stay updated with your favourite science fiction television series.</p>
          <p id="scifiFans">We are for sci-fi fans, by sci-fi fans.</p>
          <hr id="aboutHr">
          <h3 id="connected">Stay Connected</h3>
          <ul id="contactUl">
            <a class="connectedA" href="#"><li class="aboutLinks">Facebook</li></a><div class="divide"></div>
            <a class="connectedA" href="#"><li class="aboutLinks">Twitter</li></a><div class="divide"></div>
            <a class="connectedA" href="#"><li class="aboutLinks">Instagram</li></a><div class="divide"></div>
            <a class="connectedA" href="#"><li class="aboutLinks">Send Email</li></a>
          </ul>
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
        }
    }

</script>

<style lang="scss">
</style>
