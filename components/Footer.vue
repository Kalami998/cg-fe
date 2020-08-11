<template>
  <div class="footer">
    <div href="https://t.me/CryptoGalaOffical" class="footer-class">
      <img
        class="footer-logo"
        src="~assets/img/footer-logo.png"
        alt=""
        title="back TOP"
        @click="goTop()"
      />
      <span class="keep-distance">|</span>
      <a
        href="https://twitter.com/CryptoGala"
        title="https://twitter.com/CryptoGala"
        >Twitter</a
      >
      <span class="keep-distance">|</span>
      <a
        href="https://t.me/CryptoGalaOffical"
        title="https://t.me/CryptoGalaOffical"
        >Telegram Chat</a
      >
    </div>
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
  methods: {
    goTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>

<style>
.footer {
  width: 100%;
  min-width: 1200px;
  height: 64px;
  line-height: 64px;
  text-align: center;
}
.footer-logo {
  width: 116px;
  height: 20px;
  cursor: pointer;
}
.keep-distance {
  margin: 0 12px;
}
.footer-class {
  width: 1200px;
  margin: 0 auto;
  text-align: center;
  display: flex;
  align-items: center;
  justify-content: center;
  border-top: 1px solid #ddd;
}
</style>
