<template>
  <button class="button" type="button" name="button">
    <RouterLink :to="link ? link : ''">{{label}}</RouterLink>
  </button>
</template>
<script>
export default {
  props: {
    label: {
      required: true,
      type: String
    },
    link: {
      required: false,
      type: String
    }
  }
}
</script>
<style>
.button {
  font-size: 14px;
  border: none;
  border-radius: 3px;
  cursor: pointer;
  margin: 0 5px;
}
.button a {
  text-decoration: none;
  font-weight: bold;
  padding: 12px 40px;
  line-height: 40px;
}
.black {
  background-color: #000;
}
.black a {
  color: #fff;
}
.white {
  background-color: #fff;
  border: 1px solid #888;
}
.white a {
  color: #000;
}
</style>
