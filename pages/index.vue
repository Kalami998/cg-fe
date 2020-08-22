<template>
  <div class="home-page">
    <div class="popularity">
      <!-- <a href="https://twitter.com/CryptoGala"
        ><img class="tiwtter-icon" src="~assets/img/tiwtter.png" alt
      /></a>
      TWITTER -->
      <!-- <div class="copy-success">
        Copy succeeded
      </div> -->
    </div>
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
                <div v-if="it.icoRate" class="rate-style">{{ it.icoRate }}</div>
              </div>

              <div class="right-content">
                <div class="product-name">
                  {{ it.title
                  }}<span v-if="it.ticker" class="ticker-style"
                    >({{ it.ticker }})</span
                  >
                  <span v-if="returnTime(it) == 'HOT'" class="hot-product">
                    <span class="small-size">{{ returnTime(it) }}</span>
                  </span>
                  <span v-else-if="returnTime(it) == 'NEW'" class="new-product"
                    ><span class="small-size">{{ returnTime(it) }}</span></span
                  >
                </div>
                <div v-if="it.tag" class="tag-area">
                  <span>{{ it.tag }}</span>
                  <!-- <span>{{ it.markets }}</span> -->
                  <img
                    v-if="returnIcon('Binance', it.markets)"
                    class="market-icon"
                    src="~/assets/img/binance.png"
                    alt=""
                  />
                  <img
                    v-if="returnIcon('Coinbase Pro', it.markets)"
                    class="market-icon"
                    src="~/assets/img/coinbasepro.png"
                    alt=""
                  />
                  <img
                    v-if="returnIcon('Huobi Global', it.markets)"
                    class="market-icon"
                    src="~/assets/img/huobiglobal.png"
                    alt=""
                  />
                </div>
                <div v-if="it.address" class="product-id">
                  <span class="id-width">{{ it.address }}</span>
                  <img
                    class="copy-icon"
                    src="~assets/img/copy.png"
                    @click.stop="cliBoadId($event, it.address)"
                  />
                </div>
                <div class="product-price">
                  TOTAL:{{ it.total ? it.total : 'NOT SET' }}
                </div>
                <div
                  :class="{
                    'product-desc': true,
                    'blue-desc': it.child,
                    'red-desc': it.popular,
                  }"
                >
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
        `${baseUrl}/projects?_where[marketCategory]=1&_limit=15`
      )
    }
    function getListTwo() {
      return app.$axios.get(
        `${baseUrl}/projects?_where[marketCategory]=2&_limit=15`
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
    // console.log(this.dataList, '数据列表')
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
    cliBoadId($event, id) {
      const e = $event
      // e.xdata = e.target.offsetLeft - 38
      // e.ydata = e.target.offsetTop + 22
      // console.log('高度：', e.target.offsetTop, '左边：', e.target.offsetLeft)
      copyFunc(e, id)
      // document.querySelector(
      //   '.copy-success'
      // ).style.transform = `translate3d(${e.xdata}px, ${e.ydata}px, 0)`
      // document.querySelector('.copy-success').style.display = 'block'
      // setTimeout(() => {
      //   document.querySelector('.copy-success').style.display = 'none'
      // }, 1000)
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
    returnIcon(test, target) {
      let targetString = ''
      for (let i = 0; i < target.length; i++) {
        targetString += target[i].exchange
        if (i === target.length - 1 && targetString.includes(test)) {
          return true
        }
      }
    },
    returnTime(it) {
      const nowTime = new Date()
      if (it.icoRate.toUpperCase().includes('HIGH')) {
        this.$set(it, 'popular', true)
        return 'HOT'
      } else if (
        // 先判定一天内产生的为新
        nowTime - new Date(it.created_at).getTime() <=
        1000 * 60 * 60 * 24 * 1
      ) {
        this.$set(it, 'child', true)
        return 'NEW'
      } else {
        return false
      }
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
  justify-content: flex-start;
}
.tiwtter-icon {
  width: 12px;
  height: 10px;
}
.having-flex {
  display: flex;
  align-items: flex-start;
  flex-wrap: wrap; /* cursor: pointer; */
  padding-bottom: 120px;
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
  height: 202px;
}
.detail:hover {
  background: #fafafa;
  cursor: pointer;
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
.rate-style {
  width: 62px;
  text-align: center;
  font-size: 12px;
}
.product-img img {
  border-radius: 2px;
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
  display: flex;
  align-items: center;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
  width: 260px;
}
.ticker-style {
  font-weight: normal;
  margin-left: 5px;
}
.tag-area {
  display: flex;
  align-items: center;
  height: 14px;
  margin-bottom: 10px;
}

.product-id {
  font-size: 11px;
  font-weight: 300;
  height: 15px;
  margin: 0 0 20px;
  display: flex;
  align-items: center;
}
.id-width {
  width: 228px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.copy-icon {
  width: 12px;
  height: 12px;
  margin-left: 5px;
  cursor: pointer;
}
.product-price {
  font-weight: 500;
  margin-bottom: 10px;
}
.product-desc {
  font-weight: 500;
  width: 280px;
  height: 32px;
  line-height: 16px;
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
  cursor: pointer;
}
.show-more:hover {
  background: #fafafa;
}
.more-icon {
  width: 5px;
  height: 7px;
  margin-left: 4px;
}
.market-icon {
  width: 16px;
  height: 16px;
  margin: 0 0 0 5px;
}
.copy-success {
  font-size: 11px;
  width: 88px;
  height: 26px;
  line-height: 26px;
  text-align: center;
  border-radius: 1px;
  color: #fff;
  background: rgba(0, 0, 0, 0.5);
  position: absolute;
  top: 0;
  left: 0;
  display: none;
}
.hot-product {
  width: 24px;
  height: 12px;
  line-height: 12px;
  color: #fff;
  text-align: center;
  font-weight: normal;
  font-size: 12px;
  background: linear-gradient(
    270deg,
    rgba(255, 108, 108, 1) 0%,
    rgba(255, 52, 52, 1) 100%
  );
  border-radius: 1px;
  margin-left: 5px;
}
.new-product {
  width: 24px;
  height: 12px;
  line-height: 12px;
  color: #fff;
  text-align: center;
  font-weight: normal;
  font-size: 12px;
  background: linear-gradient(
    270deg,
    rgba(0, 178, 233, 1) 0%,
    rgba(0, 140, 233, 1) 100%
  );
  border-radius: 1px;
  margin-left: 5px;
}
.small-size {
  transform: scale(0.6);
  display: block;
}
.blue-desc {
  color: #028ee9;
}
.red-desc {
  color: #de001b;
}
</style>
