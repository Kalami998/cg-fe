<template>
  <div class="footer">
    <div class="footer-class">{{ infomation }}</div>
  </div>
</template>

<script>
export default {
  // name: 'Footer',
  data() {
    return {
      infomation: 'Connect Us at Email | Twitter | Telegram Chat',
    }
  },
}
</script>

<style>
.footer {
  width: 100%;
  height: 64px;
  line-height: 64px;
  border-top: 1px solid #ddd;
}
.footer-class {
  text-align: center;
}
</style>
