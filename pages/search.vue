<template>
  <div class="search-page">
    <div class="search-content">
      <div class="popularity">
        <img class="tiwtter-icon" src="~assets/img/tiwtter.png" alt />
        TWITTER [{{ fans }}K]
      </div>
      <div class="keep-line" @click="backHome()">
        <img class="back-icon" src="~assets/img/back.png" alt />
        <span>index</span>
      </div>
      <div class="search-title">SEARCH RESULTS FOR: {{ searchTitle }}</div>
      <table class="search-main">
        <thead>
          <tr class="table-head" style="border-top: none;">
            <td style="width: 42%;">PROJECT</td>
            <td style="width: 10%;">TAG</td>
            <td style="width: 10%;">RATE</td>
            <td style="width: 10%;">CATEGORY</td>
            <td style="width: 28%;">ADDRESS</td>
          </tr>
        </thead>
        <tbody>
          <tr v-for="(item, index) in searchList" :key="index">
            <td class="body-td">
              <div class="product-img">
                <!-- <img src="~assets/img/search.png" alt /> -->
                <img
                  v-if="item.main"
                  :src="item.main"
                  alt=""
                  class="product-icon"
                />
              </div>
              <div>
                <div class="having-bottom">
                  <span class="product-name">{{ item.title }}</span
                  >({{ item.shortname }})
                </div>
                <div class="product-desc">{{ item.description }}</div>
              </div>
            </td>
            <td class="body-td">{{ item.tag }}</td>
            <td class="body-td">{{ item.rate }}</td>
            <td class="body-td">{{ item.category }}</td>
            <td class="body-td">
              <div class="having-flex">
                <div class="address-area">{{ item.address }}</div>
                <img
                  v-if="item.address"
                  src="~assets/img/copy.png"
                  alt=""
                  class="copy-icon"
                  @click="cliBoadId(item.address)"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="back-box">
        <div class="back-line">
          <span>BACK TO TOP</span>
          <img class="top-icon" src="~assets/img/top.png" alt="" />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { copyFunc } from '~/plugins/copy.js'
import { baseUrl } from '~/config'
export default {
  data() {
    return {
      fans: 33.3,
      searchTitle: 'DMM Governance',
      searchList: [
        {
          name: 'DMM Governance Token',
          img: '',
          shortname: 'Polkadot',
          category: 'Defi',
          isNew: true,
          address:
            '4373249324k3jh3984y3924y434373249324k3jh3984y3924y434373249324k3jh3984y3924y434373249324k3jh3984y3924y43',
          price: '1100',
          rate: 'high',
          desc:
            'Ownership of DMG represents the right to goverasdasd asdjaspd]a',
          tag: 'DIA',
        },
        {
          name: 'DMM Governance Token',
          img: '',
          shortname: 'Polkadot',
          category: 'Defi',
          isNew: true,
          address: '4373249324k3jh3984y3924y43',
          price: '1100',
          rate: 'high',
          desc:
            'Ownership of DMG represents the right to goverasdasd asdjaspd]a',
          tag: 'DIA',
        },
        {
          name: 'DMM Governance Token',
          img: '',
          shortname: 'Polkadot',
          category: 'Defi',
          isNew: true,
          address: '4373249324k3jh3984y3924y43',
          price: '1100',
          rate: 'high',
          desc:
            'Ownership of DMG represents the right to goverasdasd asdjaspd]a',
          tag: 'DIA',
        },
      ],
    }
  },
  // asyncData({ app, query }) {
  //   function getResult() {
  //     return app.$axios.get(
  //       `${baseUrl}/projects?_where[_or][0][title_contains]=${query.target}&_where[_or][1][description_contains]=${query.target}`
  //     )
  //   }
  //   return app.$axios.all([getResult()]).then(
  //     app.$axios.spread((res) => {
  //       return {
  //         searchList: res,
  //         searchTitle: query.type,
  //       }
  //     })
  //   )
  // },
  mounted() {
    this.getList()
  },
  methods: {
    backHome() {
      this.$router.push({
        path: '/',
      })
    },
    getList() {
      this.$axios
        .get(
          `${baseUrl}/projects?_where[_or][0][title_contains]=${this.$route.query.target}&_where[_or][1][description_contains]=${this.$route.query.target}`
        )
        .then((res) => {
          this.searchList = res.data
          this.searchTitle = this.$route.query.target
        })
    },
    // 复制ID
    cliBoadId(id) {
      copyFunc(id)
    },
  },
}
</script>
<style scoped>
.search-page {
  min-height: 100vh;
  background: #fafafa;
}
.search-content {
  width: 1200px;
  margin: 10px auto 0 auto;
  font-size: 14px;
  padding-bottom: 112px;
}
.popularity {
  width: 100%;
  font-size: 12px;
  color: rgb(68, 68, 68);
  margin-bottom: 50px;
  display: flex;
  align-items: center;
  justify-content: flex-end;
}
.tiwtter-icon {
  width: 12px;
  height: 10px;
}
.keep-line {
  display: flex;
  align-items: center;
  height: 20px;
  color: #028ee9;
  margin-bottom: 10px;
  cursor: pointer;
}
.back-icon {
  width: 12px;
  height: 12px;
}
.search-title {
  font-size: 22px;
  height: 24px;
  line-height: 24px;
  margin-bottom: 20px;
  font-weight: 600;
}
.search-main {
  width: 1200px;
  padding: 0 26px;
  background: #fff;
  border-radius: 4px;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
  font-size: 14px;
  line-height: 14px;
}
.table-head td {
  font-weight: bold;
  color: #fff;
  padding: 14px 0;
  background: linear-gradient(
    180deg,
    rgb(0, 138, 231) 0%,
    rgb(0, 179, 233) 100%
  );
}
.table-head td:first-child {
  padding-left: 26px;
  border-radius: 4px 0 0 0;
}
.table-head td:last-child {
  border-radius: 0 4px 0 0;
  padding-right: 26px;
}
.body-td {
  background: #fff;
  padding: 24px 0;
}
.having-flex {
  display: flex;
  align-items: center;
}
.body-td:first-child {
  padding-left: 26px;
}
.body-td:last-child {
  padding-right: 26px;
}
.ell {
  text-overflow: ellipsis;
  white-space: nowrap;
  overflow: hidden;
}
.address-area {
  max-width: 296px;
  line-height: 24px;
  word-wrap: break-word;
  word-break: break-all;
  overflow: hidden;
}
.copy-icon {
  width: 12px;
  height: 12px;
  margin-left: 6px;
}

.td-detail {
  display: flex;
  align-items: center;
}
.product-img {
  width: 50px;
  height: 50px;
  border-radius: 2px;
  border: 1px solid rgb(238, 238, 238, 1);
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 10px;
  float: left;
}
.product-icon {
  width: 48px;
  height: 48px;
}
.having-bottom {
  margin-bottom: 10px;
}
.product-name {
  font-size: 14px;
  line-height: 18px;
  font-weight: bold;
  margin-right: 8px;
}
.product-desc {
  width: 314px;
  height: 16px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.back-box {
  font-size: 14px;
  color: rgb(153, 153, 153);
  font-weight: bold;
  width: 100%;
  padding: 0 26px;
  text-align: center;
  background: #fff;
}
.back-line {
  padding: 20px;
  border-top: 1px solid rgb(241, 241, 241);
  display: flex;
  align-items: center;
  height: 14px;
  justify-content: center;
}
.top-icon {
  width: 8px;
  height: 6px;
  margin-left: 6px;
}
</style>
