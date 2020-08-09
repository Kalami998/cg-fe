<template>
  <div class="home-page">
    <a href="https://twitter.com/CryptoGala" class="popularity">
      <img class="tiwtter-icon" src="~assets/img/tiwtter.png" alt />
      TWITTER
    </a>
    <div class="having-flex">
      <div v-for="(item, index) in dataList" :key="index" class="having-right">
        <div class="category-name">{{ item.categoryName }}</div>
        <div class="it-content">
          <div
            v-for="(it, sort) in item.list"
            :key="sort"
            @click="goDetail(it)"
          >
            <div class="detail">
              <div class="left-content">
                <!-- {{ it.img ? it.img : '' }} -->
                <div class="product-img">
                  <img :src="it.logo" alt />
                </div>
                <span v-if="it.icoRate">{{ it.icoRate }}</span>
              </div>

              <div class="right-content">
                <div class="product-name">{{ it.title }}</div>
                <div v-if="it.ticker">({{ it.ticker }})</div>
                <div class="product-id">
                  <span v-if="it.address">{{ it.address }}</span>
                  <img
                    v-if="it.address"
                    class="copy-icon"
                    src="~assets/img/copy.png"
                    @click.stop="cliBoadId(it.address)"
                  />
                </div>
                <div class="product-price">total:{{ it.total }}</div>
                <div class="product-desc">
                  {{ it.description ? it.description : '' }}
                </div>
              </div>
            </div>
            <div class="divi-line"></div>
          </div>
          <div
            v-if="item.list.length"
            class="show-more"
            @click.stop="goAll(item, index)"
          >
            <span>VIEW ALL</span>
            <img class="more-icon" src="~assets/img/more.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { copyFunc } from '~/plugins/copy.js'
import { baseUrl } from '~/config'
export default {
  asyncData({ app }) {
    function getListZero() {
      return app.$axios.get(
        `${baseUrl}/projects?_where[marketCategory]=0&_limit=15`
      )
    }
    function getListOne() {
      return app.$axios.get(
        `${baseUrl}/projects?_where[marketCategory]=1_limit=15`
      )
    }
    function getListTwo() {
      return app.$axios.get(
        `${baseUrl}/projects?_where[marketCategory]=2_limit=15`
      )
    }
    return app.$axios.all([getListZero(), getListOne(), getListTwo()]).then(
      app.$axios.spread((res, reh, rek) => {
        const list = []
        let resData = ''
        let rehData = ''
        let rekData = ''
        resData = res.data
        rehData = reh.data
        rekData = rek.data
        list.push({
          categoryName: 'UNLISTED',
          list: resData,
        })
        list.push({
          categoryName: 'MAINLY LISTED IN DEX',
          list: rehData,
        })
        list.push({
          categoryName: 'MANILY LISTED IN CEX',
          list: rekData,
        })
        return {
          dataList: list,
        }
      })
    )
  },
  data() {
    return {
      fans: 33.3,
      dataList: [
        {
          categoryName: 'UNLISTED',
          list: [
            {
              img: '',
              type: ['Exchange', 'Defi'],
              name: 'polkadot',
              id: '4373249324k3jh3984y3924y43',
              price: '1100',
              pop: 'high',
              desc: 'Huobi goes live on August 3',
            },
            {
              img: '',
              type: ['Exchange'],
              name: 'polkadot',
              id: '4373249324k3jh3984y3924y43',
              price: '1100',
              pop: 'high',
              desc: '',
            },
          ],
        },
        {
          categoryName: 'UNLISTED',
          list: [
            {
              img: '',
              type: ['Exchange', 'Defi'],
              name: 'polkadot',
              id: '4373249324k3jh3984y3924y43',
              price: '1100',
              pop: 'high',
              desc: 'Huobi goes live on August 3',
            },
            {
              img: '',
              type: ['Exchange'],
              name: 'polkadot',
              id: '4373249324k3jh3984y3924y43',
              price: '1100',
              pop: 'high',
              desc: '',
            },
          ],
        },
        {
          categoryName: 'UNLISTED',
          list: [
            {
              img: '',
              type: ['Exchange', 'Defi'],
              name: 'polkadot',
              id: '4373249324k3jh3984y3924y43',
              price: '1100',
              pop: 'high',
              desc: 'Huobi goes live on August 3',
            },
            {
              img: '',
              type: ['Exchange'],
              name: 'polkadot',
              id: '4373249324k3jh3984y3924y43',
              price: '1100',
              pop: 'high',
              desc: '',
            },
          ],
        },
      ],
      chooseNumber: '',
    }
  },
  // async asyncData({ $axios }) {
  //   const { data } = await $axios.get(`${baseUrl}/projects?_where[id]=50`)
  //   return {
  //     list: data,
  //   }
  // },
  mounted() {
    window.scrollTo(0, 0)
  },
  methods: {
    // 去详情页
    goDetail(it) {
      // console.log('详情数据', it)
      this.$router.push({
        path: '/detail',
        query: {
          id: it.id,
        },
      })
    },

    // 去更多页
    goAll(it, index) {
      this.$router.push({
        path: '/all',
        query: {
          title: it.categoryName,
          number: index,
        },
      })
    },

    // 复制ID
    cliBoadId(id) {
      copyFunc(id)
    },

    // 随机色
    randomColor() {
      const colorList = [
        'color: rgba(2,142,233,1)',
        'color: rgba(222,0,27,1)',
        'color:rgba(0, 0, 0, 1)',
      ]
      let randomNumber = Math.floor(Math.random() * 3 + 1) - 1
      if (this.chooseNumber && randomNumber === this.chooseNumber) {
        randomNumber =
          this.chooseNumber - 1 >= 0 ? this.chooseNumber : this.chooseNumber + 1
      }
      this.chooseNumber = randomNumber
      return colorList[randomNumber]
    },
  },
}
</script>

<style scoped>
/* Sample `apply` at-rules with Tailwind CSS
.container {
@apply min-h-screen flex justify-center items-center text-center mx-auto;
}
*/
.home-page {
  min-height: 100vh;
  width: 1200px;
  margin: 10px auto 0 auto;
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
.having-flex {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap;
  cursor: pointer;
}
.having-right {
  margin-right: 18px;
}
.having-right:nth-child(3n) {
  margin-right: 0;
}
.category-name {
  font-size: 22px;
  font-weight: bold;
  margin-bottom: 20px;
  text-align: left;
}
.it-content {
  width: 388px;
  background: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
  border-radius: 4px;
}
.detail {
  display: flex;
  align-items: flex-start;
  padding: 30px 0 0 24px;
  text-align: left;
}
.detail:hover {
  background: #fafafa;
}
.product-img {
  width: 64px;
  height: 64px;
  border-radius: 2px;
  border: 1px solid #eee;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 22px;
}
.left-content {
  margin-right: 10px;
}
.right-content {
  font-size: 14px;
  line-height: 14px;
}
.product-name {
  font-size: 18px;
  line-height: 18px;
  font-weight: bold;
  margin-bottom: 10px;
}
.product-id {
  font-size: 11px;
  font-weight: 300;
  margin: 10px 0 20px;
  display: flex;
  align-items: center;
}
.copy-icon {
  width: 12px;
  height: 12px;
  margin-left: 5px;
}
.product-price {
  font-weight: bold;
  margin-bottom: 10px;
}
.product-desc {
  font-weight: 500;
  line-height: 14px;
  margin-bottom: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  padding-right: 18px;
}
.divi-line {
  height: 1px;
  background: #f1f1f1;
  width: 360px;
  margin: 0 auto;
}
.show-more {
  height: 54px;
  font-size: 14px;
  font-weight: 600;
  color: rgb(31, 31, 31, 1);
  display: flex;
  align-items: center;
  justify-content: center;
}
.more-icon {
  width: 5px;
  height: 7px;
  margin-left: 4px;
}
</style>
