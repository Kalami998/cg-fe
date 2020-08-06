<template>
  <div class="header">
    <div class="header-class">
      <div class="having-flex">
        <img class="logo-style" src="~assets/img/logo.png" alt />
        <input class="input-style" type="text" placeholder="Search" />
        <div class="search-box" @click="searchSome()">
          <img class="search-icon" src="~assets/img/search.png" alt />
        </div>
      </div>
      <div class="hot-category">
        <span class="right-distance">Unlisted</span>
        <span class="right-distance">Mainly Listed in DEX</span>
        <span>Mainly Listed in CEX</span>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'Header',
  data() {
    return {
      hot: [],
    }
  },
  methods: {
    searchSome() {
      console.log('what are you？')
    },
  },
}
</script>

<style>
.header {
  width: 100%;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #ddd;
}
.header-class {
  width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
}
.having-flex {
  display: flex;
  align-items: center;
}
.logo-style {
  width: 164px;
  height: 28px;
  margin-right: 200px;
}
.input-style {
  width: 340px;
  height: 30px;
  border-radius: 1px;
  border: 1px solid #ddd;
  padding-left: 10px;
}
.search-box {
  background: rgba(248, 248, 248, 1);
  border: 1px solid rgba(221, 221, 221, 1);
  border-left: none;
  cursor: pointer;
}
.search-icon {
  width: 18px;
  height: 18px;
  margin: 5px 20px;
}
.hot-category {
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
}
.right-distance {
  margin-right: 20px;
}
</style>
