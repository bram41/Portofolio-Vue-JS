<template>
  <b-container>
    <b-col lg="5" offset-lg="1">
      <h5>No label</h5>
      <b-progress :value="value" :max="max" class="mb-3"></b-progress>
    </b-col>
  </b-container>
</template>

<script>
export default {
  data() {
    return {
      value: 33.333333333,
      max: 50,
    };
  },
};
</script>
