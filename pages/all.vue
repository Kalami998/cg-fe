<template>
  <div class="all-page">
    <div class="all-content">
      <a href="https://twitter.com/CryptoGala" class="popularity">
        <img class="tiwtter-icon" src="~assets/img/tiwtter.png" alt />
        TWITTER
      </a>
      <div class="keep-line" @click="backHome()">
        <img class="back-icon" src="~assets/img/back.png" alt />
        <span>index</span>
      </div>
      <div class="all-title">{{ allTitle }}</div>
      <table class="all-main">
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
          <tr
            v-for="(item, index) in allList"
            :key="index"
            @click="goDetail(item)"
          >
            <td class="body-td">
              <div class="product-img">
                <img :src="item.logo" alt />
              </div>
              <div>
                <div class="having-bottom">
                  <span class="product-name">{{ item.title }}</span>
                  <span v-if="item.ticker">({{ item.ticker }})</span>
                </div>
                <div class="product-desc">{{ item.description }}</div>
              </div>
            </td>
            <td class="body-td">{{ item.tag }}</td>
            <td class="body-td">{{ item.rates[0] ? item.rates[0] : '' }}</td>
            <td class="body-td">{{ item.category }}</td>
            <td class="body-td">
              <div class="having-flex">
                <div class="address-area">{{ item.address }}</div>
                <img
                  v-if="item.address"
                  src="~assets/img/copy.png"
                  alt=""
                  class="copy-icon"
                  @click.stop="cliBoadId(item.address)"
                />
              </div>
            </td>
          </tr>
        </tbody>
      </table>
      <div class="back-box">
        <div class="back-line">
          <span @click="backTop()">BACK TO TOP</span>
          <img
            class="top-icon"
            src="~assets/img/top.png"
            alt=""
            @click="backTop()"
          />
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { copyFunc } from '~/plugins/copy.js'
import { baseUrl } from '~/config'
export default {
  asyncData({ app, query }) {
    function getList() {
      return app.$axios.get(
        `${baseUrl}/projects?_where[marketCategory]=${query.number}`
      )
    }
    return app.$axios.all([getList()]).then(
      app.$axios.spread((res) => {
        return {
          allList: res.data,
          allTitle: query.title,
        }
      })
    )
  },
  data() {
    return {
      fans: 33.3,
      allTitle: 'ACTIVE ICO',
      allList: [
        {
          name: 'DMM Governance Token',
          img: '',
          ticker: 'Polkadot',
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
          ticker: 'Polkadot',
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
          ticker: 'Polkadot',
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

  mounted() {
    window.scrollTo(0, 0)
    switch (this.allTitle) {
      case 'unlisted':
        this.allTitle = 'Unlisted'
        break
      case 'mainlylistedinex':
        this.allTitle = 'Mainly Listed in DEX'
        break
      case 'mainlylistedincex':
        this.allTitle = 'Mainly Listed in CEX'
        break
    }
  },
  methods: {
    backHome() {
      this.$router.push({
        path: '/',
      })
    },
    // 复制ID
    cliBoadId(id) {
      copyFunc(id)
    },
    goDetail(item) {
      this.$router.push({
        path: '/detail',
        query: {
          id: item.id,
        },
      })
    },
    backTop() {
      window.scrollTo(0, 0)
    },
  },
}
</script>
<style scoped>
.all-page {
  min-height: 100vh;
  background: #fafafa;
}
.all-content {
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
.all-title {
  font-size: 22px;
  height: 24px;
  line-height: 24px;
  margin-bottom: 20px;
  font-weight: 600;
}
.all-main {
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
  cursor: pointer;
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
  cursor: pointer;
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
  justify-content: center;
  height: 14px;
  cursor: pointer;
}
.top-icon {
  width: 8px;
  height: 6px;
  margin-left: 6px;
}
</style>
