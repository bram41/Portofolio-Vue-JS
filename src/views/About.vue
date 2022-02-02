<template>
  <div class="mt-5">
    <b-container>
      <b-col lg="10" offset-lg="1">
        <h1>About Me</h1>
        <p>
          Hi I am Surya Saputra 👋,
          <br />
          Fresh graduate of Diploma 3 Informatics Engineering, Dian Nuswantoro
          University Semarang. Have experience in developing Web and Mobile App
          for jasTukang. I have an interest in a career as an Developer in the
          field of Websites and Android application and improve my skills to be
          better than before.
        </p>
      </b-col>
    </b-container>
    <skills></skills>
    <timeline></timeline>
    <text-bottom></text-bottom>
  </div>
</template>

<script>
import Skills from "../components/about/Skills.vue";
import Timeline from "../components/about/Timeline.vue";
import TextBottom from "../components/Text-bottom.vue";
export default {
  name: "Home",
  components: { Timeline, TextBottom, Skills },
};
</script>

<style></style>
