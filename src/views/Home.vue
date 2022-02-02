<template>
  <div>
    <b-container>
      <b-col class="text-center">
        <image-home></image-home>
        <text-home></text-home>
      </b-col>
    </b-container>
    <text-bottom></text-bottom>
  </div>
</template>

<script>
import ImageHome from "../components/home/Image-home.vue";
import TextHome from "../components/home/Text-home.vue";
import TextBottom from "../components/Text-bottom.vue";
export default {
  name: "Home",
  components: { ImageHome, TextHome, TextBottom },
};
</script>
<style></style>
