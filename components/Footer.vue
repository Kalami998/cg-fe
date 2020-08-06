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
      infomation:
        '©2020 Baidu (京)-经营性-2017-0020京公网安备xxxxxxxxxxx号京ICP证030173号',
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
