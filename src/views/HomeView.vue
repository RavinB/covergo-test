<template>
  <div class="home-wrapper">
    <div class="content-block">
      <h2>Hello There!</h2>
      <p>Let's buy some insurance. It is going to take only a few steps</p>
      <button-global class="black" link="tell-us-about-yourself" label="Start"/>
    </div>
  </div>
</template>
<script>
import ButtonGlobal from '@/components/ButtonGlobal.vue'
export default {
  components: {
    ButtonGlobal
  }
}
</script>
<style scoped>
.home-wrapper {
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
p {
  font-size: 14px;
  padding: 15px 0;
}
</style>
