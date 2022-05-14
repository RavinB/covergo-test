<template>
  <div class="summary-wrapper">
    <div class="content-block">
      <h2>Summary</h2>
      <h5>{{ data.name }}, </h5>
      <p>Name: {{ data.name }}</p>
      <p>Age: {{ data.age }}</p>
      <p>Where do you live: {{ data.live }}</p>
      <p>Package: {{ data.package }}</p>
      <p>Premium: {{ data.premium }}</p>

      <button-global class="white mt-30" link="tell-us-about-yourself" label="Back"/>
      <button-global class="black mt-30" label="Buy"/>

    </div>
  </div>
</template>
<script>
import ButtonGlobal from '@/components/ButtonGlobal.vue'
export default {
  components: {
    ButtonGlobal
  },
  data() {
    return {
      data: {}
    }
  },
  mounted() {
    this.data = this.$route.query;
  }
}
</script>
<style scoped>
.summary-wrapper {
  width: 500px;
  background-color: #fff;
  text-align: center;
}
.content-block {
  background-color: #fafafa;
  padding: 75px;
}
h2 {
  font-weight: bold;
  font-size: 28px;
}
h5 {
  font-weight: bold;
  font-size: 22px;
}
p {
  font-size: 14px;
  padding: 10px 0;
}
.mt-30 {
  margin-top: 30px;
}
</style>
