<template>
  <div class="detail-page">
    <div></div>
    <div class="detail-content">
      <img src="~assets/img/demo.png" alt />
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      name: '详情',
    }
  },
}
</script>
<style>
.detail-page {
  min-height: 100vh;
  background: #fafafa;
}
.detail-content {
  width: 1200px;
  margin: 0 auto;
}
</style>
