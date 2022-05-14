<template>
  <div class="error-wrapper">
    <div class="content-block">
      <h2>Opps</h2>
      <p>Your age is over our accepted limit. <br>
        We are sorry but we cannot insure you now
      </p>
      <button-global class="black" link="/" label="Ok :("/>
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
.error-wrapper {
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
