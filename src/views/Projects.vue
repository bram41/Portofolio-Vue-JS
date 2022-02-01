<template>
  <div id="app" class="mt-5">
    <b-container>
      <b-row class="mx-auto">
        <b-col>
          <b-card-group columns>
            <a href="" style="text-decoration: none" class="text-dark">
              <b-card
                title="Jastukang Web App"
                img-src="https://bram41.github.io/portofolio/assets/img/jastukang-web.jpg"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
              >
                <b-card-text>
                  Web app to make it easier to find the services off builders
                  and building materials
                </b-card-text>
                <div class="mt-2">
                  <b-badge class="badge-outline mx-1 mb-1">PHP</b-badge>
                  <b-badge class="badge-outline mx-1 mb-1"
                    >CodeIgniter 3</b-badge
                  >
                  <b-badge class="badge-outline mx-1 mb-1">HTML</b-badge>
                  <b-badge class="badge-outline mx-1 mb-1">CSS</b-badge>
                  <b-badge class="badge-outline mx-1 mb-1">MySQL</b-badge>
                  <b-badge class="badge-outline mx-1 mb-1">Javascript</b-badge>
                </div>
              </b-card>
            </a>
            <a href="" style="text-decoration: none" class="text-dark">
              <b-card
                title="Jastukang Web App"
                img-src="https://bram41.github.io/portofolio/assets/img/jastukang-mobile.png"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
              >
                <b-card-text>
                  Mobile app to make it easier to find the services off builders
                  and building materials
                  <div class="mt-2">
                    <b-badge class="badge-outline mx-1 mb-1">Kotlin</b-badge>
                    <b-badge class="badge-outline mx-1 mb-1">XML</b-badge>
                    <b-badge class="badge-outline mx-1 mb-1">Android</b-badge>
                  </div>
                </b-card-text>
              </b-card>
            </a>
            <a href="" style="text-decoration: none" class="text-dark">
              <b-card
                title="Kebudayaan Jawa Tengah"
                img-src="https://bram41.github.io/portofolio/assets/img/kebudayaan.png"
                img-alt="Image"
                img-top
                tag="article"
                class="mb-2"
              >
                <b-card-text>
                  Web app for cultural data collection in Central Java,
                  Indonesia
                  <div class="mt-2">
                    <b-badge class="badge-outline mx-1 mb-1">PHP</b-badge>
                    <b-badge class="badge-outline mx-1 mb-1"
                      >CodeIgniter 3</b-badge
                    >
                    <b-badge class="badge-outline mx-1 mb-1">HTML</b-badge>
                    <b-badge class="badge-outline mx-1 mb-1">CSS</b-badge>
                    <b-badge class="badge-outline mx-1 mb-1">MySQL</b-badge>
                    <b-badge class="badge-outline mx-1 mb-1"
                      >Javascript</b-badge
                    >
                  </div>
                </b-card-text>
              </b-card>
            </a>
          </b-card-group>
        </b-col>
      </b-row>
    </b-container>
    <text-bottom></text-bottom>
  </div>
</template>

<script>
import TextBottom from "../components/Text-bottom.vue";
export default {
  components: { TextBottom },
  title() {
    return `Foo Page — ${this.someValue}`;
  },
  data() {
    return {
      someValue: "bar",
    };
  },
};
</script>

<style>
.badge-outline {
  color: rgb(9, 136, 255);
  border: 1px solid rgb(9, 136, 255);
  background-color: transparent;
  border-radius: 20px;
  padding-left: 10px;
  padding-right: 10px;
  padding-top: 5px;
  padding-bottom: 5px;
}
</style>
