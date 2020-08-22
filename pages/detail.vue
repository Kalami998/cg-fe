<template>
  <div class="detail-page">
    <div class="detail-content">
      <div class="popularity">
        <!-- <a href="https://twitter.com/CryptoGala"
          ><img class="tiwtter-icon" src="~assets/img/tiwtter.png" alt
        /></a>
        TWITTER -->
      </div>
      <div class="keep-line" @click="backHome()">
        <img class="back-icon" src="~assets/img/back.png" alt />
        <span>index</span>
      </div>

      <div class="product-main">
        <div class="product-info">
          <div class="left-icon">
            <img
              v-if="
                productInfo.main.includes('jpeg') ||
                productInfo.main.includes('jpg') ||
                productInfo.main.includes('png')
              "
              :src="productInfo.main"
              alt
              class="img-size"
            />
            <iframe
              v-else
              :title="'What is' + productInfo.title + '?'"
              :src="productInfo.main"
              width="564"
              height="340"
              frameborder="0"
              allow="autoplay; fullscreen"
              allowfullscreen=""
            ></iframe>
          </div>

          <div class="right-info">
            <div class="fixed-height">
              <div class="having-bottom">
                <div class="img-area">
                  <img
                    v-if="productInfo.logo"
                    class="demo-icon"
                    :src="productInfo.logo"
                    alt
                  />
                </div>
                <div>
                  <span class="it-name">{{ productInfo.title }}</span>
                  <span class="symbol-desc">({{ productInfo.category }})</span>
                </div>
              </div>

              <div class="tag-area">
                <!-- <span
                v-for="(tag, index) in productInfo.category"
                :key="index"
                class="tag-style"
                >{{ tag }}</span
              >-->
                <span v-if="productInfo.tag" class="tag-style">{{
                  productInfo.tag
                }}</span>
                <img
                  v-if="marketString.includes('Binance')"
                  class="market-icon"
                  src="~/assets/img/binance.png"
                  alt=""
                />
                <img
                  v-if="marketString.includes('Coinbase Pro')"
                  class="market-icon"
                  src="~/assets/img/coinbasepro.png"
                  alt=""
                />
                <img
                  v-if="marketString.includes('Huobi Global')"
                  class="market-icon"
                  src="~/assets/img/huobiglobal.png"
                  alt=""
                />
              </div>

              <div class="brief">{{ productInfo.description }}</div>
            </div>
            <div class="icon-area">
              <img
                v-for="(item, index) in productInfo.socials"
                :key="index"
                :src="returnRoute(item.text)"
                alt
                :title="item.url"
                class="icon-size"
                @click="goItem(item.url)"
              />
            </div>

            <div class="btn-area">
              <div
                class="dosome-btn btn-right"
                @click="goItem(productInfo.website)"
              >
                <span>WEBSITE</span>
              </div>
              <div class="dosome-btn" @click="goItem(productInfo.whitepaper)">
                <span>WHITEPAPAER</span>
              </div>
            </div>
          </div>
        </div>

        <div class="divi-line"></div>

        <div class="param-detail">
          <div class="left-param">
            <div class="small-section keep-bottom">TOKEN</div>
            <div class="keep-bottom">
              symbol:
              <span class="strong-desc">{{ productInfo.ticker }}</span>
            </div>
            <div class="keep-bottom">
              TOTAL:
              <span class="strong-desc">{{
                productInfo.total ? productInfo.total : 'NOT SET'
              }}</span>
            </div>
            <div class="keep-bottom">
              base:
              <span class="strong-desc">{{ productInfo.baseChain }}</span>
            </div>
            <div class="having-flex keep-bottom">
              <span>contract address:</span>
              <span class="strong-desc">{{ productInfo.address }}</span>
              <img
                v-if="productInfo.address"
                class="copy-icon"
                src="~assets/img/copy.png"
                alt=""
                @click="cliBoadId($event, productInfo.address)"
              />
            </div>
            <!-- <div class="keep-bottom">
              24h Volume:
              <span class="strong-desc">$2,358,053</span>
            </div>
            <div class="keep-bottom">
              Market Cap:
              <span class="strong-desc">$2,358,053</span>
            </div> -->
          </div>
          <!-- <div class="right-param">
            <div>
              <img class="show-avatar" src alt />
              <p class="show-desc">$2,358,053</p>
            </div>
            <div>
              <img class="show-avatar" src alt />
              <p class="show-desc">$2,358,053</p>
            </div>
            <div>
              <img class="show-avatar" src alt />
              <p class="show-desc">$2,358,053</p>
            </div>
          </div> -->
        </div>

        <div class="divi-line"></div>

        <div v-if="productInfo.rates.length > 0" class="rate-style">
          <div class="small-section">RATING</div>
          <div class="rate-area">
            <div
              v-for="(item, index) in productInfo.rates"
              :key="index"
              class="box-style"
            >
              <p>
                {{ item.text }}
              </p>
              <p class="show-desc">
                {{ item.type }}
              </p>
            </div>
          </div>
        </div>

        <div v-if="productInfo.rates.length > 0" class="divi-line"></div>

        <div v-if="productInfo.events" class="rate-style">
          <div class="small-section">IMPORTANT EVENTS</div>
          <div v-for="(item, index) in timeline" :key="index">
            <div class="line-style">
              <span class></span>
              <span>{{ item.time }}</span>
              <span class="strong-desc">{{ item.desc }}</span>
            </div>
            <div v-if="timeline[index + 1]" class="vertical-line"></div>
          </div>
        </div>

        <div v-if="productInfo.events" class="divi-line"></div>

        <div>
          <div v-if="showList.length" class="small-section">RECOMMEND</div>
          <div class="other-product">
            <div
              v-for="(it, sort) in showList"
              :key="sort"
              class="product-style"
              @click="goDetail(it)"
            >
              <!-- <div class="detail">
                <div class="left-content">
                   {{ it.img ? it.img : '' }}
                  <div class="product-img">
                    <img :src="it.logo" alt />
                  </div>
                  <span v-if="it.icoRate">{{ it.icoRate }}</span>
                </div>

                <div class="right-content">
                  <div class="product-name">{{ it.title }}</div>
                  <div v-if="it.ticker">{{ it.ticker }}</div>
                  <div class="product-id">
                    <span v-if="it.address" class="id-width">{{
                      it.address
                    }}</span>
                    <img
                      v-if="it.address"
                      class="copy-product"
                      src="~assets/img/copy.png"
                      @click.stop="cliBoadId(it.address)"
                    />
                  </div>
                  <div class="product-price">
                    TOTAL:{{ it.total ? it.total : 'NOT SET' }}
                  </div>
                  <div class="product-desc">{{ it.desc ? it.desc : '' }}</div>
                </div>
              </div> -->
              <div class="detail">
                <div class="left-content">
                  <!-- {{ it.img ? it.img : '' }} -->
                  <div class="product-img">
                    <img :src="it.logo" alt />
                  </div>
                  <div v-if="it.icoRate" class="icorate-style">
                    {{ it.icoRate }}
                  </div>
                </div>

                <div class="right-content">
                  <div class="product-name">
                    {{ it.title
                    }}<span v-if="it.ticker" class="ticker-style"
                      >({{ it.ticker }})</span
                    >
                  </div>
                  <div class="tag-detail">
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
                  <div class="product-id">
                    <span v-if="it.address" class="id-width">{{
                      it.address
                    }}</span>
                    <img
                      v-if="it.address"
                      class="copy-icon"
                      src="~assets/img/copy.png"
                      @click.stop="cliBoadId($event, it.address)"
                    />
                  </div>
                  <div class="product-price">
                    TOTAL:{{ it.total ? it.total : 'NOT SET' }}
                  </div>
                  <div class="product-desc">
                    {{ it.description ? it.description : '' }}
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { baseUrl } from '~/config'
import { copyFunc } from '~/plugins/copy.js'
export default {
  layout: 'default',
  asyncData({ $axios, app, query }) {
    return app.$axios.get(`${baseUrl}/projects/${query.id}`).then((res) => {
      return {
        productInfo: res.data,
      }
    })
  },
  data() {
    return {
      fans: 33.3,
      showList: '', // 底部展示产品
      timeline: [
        { time: '2020/08/03', desc: 'list on houbi' },
        { time: '2020/08/03', desc: 'list on houbi' },
        { time: '2020/08/03', desc: 'list on houbi' },
        { time: '2020/08/03', desc: 'list on houbi' },
        { time: '2020/08/03', desc: 'list on houbi' },
      ],
      productInfo: {
        title: 'DIA',
        category: 'DeFi',
        main: 'https://player.vimeo.com/video/436079874?dnt=1&app_id=122963',
        logo:
          '//icodrops.com/wp-content/plugins/a3-lazy-load/assets/images/lazy_placeholder.gif',
        description:
          'DIA (Decentralised Information Asset) is an open-source, data and oracle platform for the DeFi ecosystem. DIA leverages crypto economic incentives to drive supply, share and use transparent, crowd-verified price data and oracles on financial and digital assets.',
        website: 'https://diadata.org/',
        whitepaper: '',
        socials: [
          {
            text: 'github',
            url: 'https://github.com/diadata-org',
          },
          {
            text: 'twitter',
            url: 'https://twitter.com/DIAdata_org',
          },
          {
            text: 'telegram',
            url: 'https://t.me/DIAdata_org',
          },
          {
            text: 'linkedin',
            url: 'https://www.linkedin.com/company/diadata-org/',
          },
          {
            text: 'medium',
            url: 'https://medium.com/dia-insights',
          },
        ],
        rate: [],
        icoRate: '',
        ticker: 'DIA',
        tag: 'DeFi',
        total: '200,000,000',
        baseChain: 'ETH',
        address: '0x84ca8bc7997272c7cfb4d0cd3d55cd942b3c9419',
        id: '11955',
        markets: [
          {
            exchange: 'Uniswap (v2)',
            volume: 74.42,
          },
          {
            exchange: ' Gnosis Protocol',
            volume: 15.62,
          },
          {
            exchange: 'Hotbit',
            volume: 5.62,
          },
          {
            exchange: 'BiKi',
            volume: 4.35,
          },
          {
            exchange: 'Hoo.com',
            volume: 2.33,
          },
          {
            exchange: 'Bamboo Relay',
            volume: null,
          },
        ],
      },
      marketString: [],
    }
  },
  mounted() {
    window.scrollTo(0, 0)
    if (this.productInfo.markets.length) {
      this.productInfo.markets.filter((item, index) => {
        if (item.exchange) {
          this.marketString.push(item.exchange)
        }
      })
    }
    this.getListOne()
  },
  methods: {
    backHome() {
      this.$router.push({
        path: '/',
      })
    },
    returnRoute(item) {
      return `/img/${item}.png`
    },
    goItem(url) {
      if (url) {
        location.href = url
      } else {
      }
    },
    getInfo() {
      this.$axios
        .get(`${baseUrl}/projects/${this.$route.query.id}`)
        .then((res) => {
          if (res) {
            this.productInfo = res.data
          } else {
          }
        })
    },
    // 复制ID
    cliBoadId($event, id) {
      copyFunc($event, id)
    },
    getListOne() {
      this.showList = []
      this.$axios
        .get(`${baseUrl}/projects?_where[marketCategory]=1`)
        .then((res) => {
          if (res.data.length > 0) {
            for (let i = 0; i < res.data.length; i++) {
              if (res.data[i].id !== this.productInfo.id) {
                this.showList.push(res.data[i])
              }
              if (this.showList.length > 2) {
                // 取三个就行
                return
              }
            }
            // res.data.filter((item, index) => {
            //   if (item.id !== this.productInfo.id) {
            //     this.showList.push(item)
            //   }
            //   if (this.showList.length > 2) {
            //     // 取三个就行
            //     return
            //   }
            // })
          }
        })
    },
    // 去详情页
    goDetail(it) {
      // console.log('详情数据', it)
      // this.$router.push({
      //   path: '/detail',
      //   query: {
      //     id: it.id,
      //   },
      // })
      location.search = `id=${it.id}`
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
  },
}
</script>
<style scoped>
.detail-page {
  min-height: 100vh;
  background: #fafafa;
}
.detail-content {
  width: 1000px;
  margin: 0 auto;
  padding-top: 10px;
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
.tag-area {
  width: 356px;
  display: flex;
  flex-wrap: wrap; /* padding-left: 42px; */
  height: 34px;
  align-items: center;
}
.tag-style {
  margin: 0 0 10px 0; /* padding-right: 10px; */ /* border-right: 1px solid rgba(221, 221, 221, 1); */
}
.tag-style:last-child {
  border: none;
  padding-right: none;
  margin: 0 0 10px 0 !important;
}
.product-main {
  background: #fff;
  box-shadow: 0 0 10px 0 rgba(0, 0, 0, 0.04);
  border-radius: 2px;
  padding: 30px;
}
.product-info {
  display: flex;
  align-items: flex-start;
  margin-bottom: 40px;
}
.left-icon {
  width: 564px;
  height: 340px;
  margin-right: 20px;
}
.img-size {
  width: 564px;
  height: 340px;
}
.right-info {
  width: 356px;
  font-size: 16px;
}

.it-name {
  font-size: 24px;
  font-weight: bold;
}
.symbol-desc {
  font-size: 20px;
  margin-left: 5px;
}
.having-bottom {
  display: flex; /* margin-bottom: 16px; */
  align-items: flex-start;
  line-height: 32px;
}
.fixed-height {
  height: 268px;
}
.img-area {
  height: 32px;
  width: 32px;
  padding: 3.2px 3.2px 3.2px 0;
  margin-right: 10px;
}
.demo-icon {
  width: 25px;
  height: 25px;
  border: 1px solid rgba(248, 248, 248, 1);
}
.brief {
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 7; /* height: 148px; */
  -webkit-box-orient: vertical;
  overflow: hidden; /* margin-bottom: 24px; */
}
.icon-area {
  display: flex;
  margin-bottom: 10px;
}
.icon-size {
  width: 22px;
  height: 22px;
  margin-right: 5px;
  cursor: pointer;
}
.btn-right {
  margin-right: 16px;
}
.dosome-btn {
  color: #fff;
  background: rgb(2, 142, 233);
  border-radius: 2px;
  width: 170px;
  height: 36px;
  line-height: 36px;
  text-align: center;
  float: left;
  cursor: pointer;
}
.divi-line {
  width: 940px;
  height: 1px;
  background: rgb(239, 238, 238, 1);
  margin: 0 auto 40px auto;
}
.param-detail {
  display: flex;
  align-items: center;
  margin-bottom: 40px;
}
.left-param {
  margin-right: 124px;
}
.small-section {
  font-size: 18px;
  height: 18px;
  font-weight: 800;
  margin-bottom: 20px;
}
.keep-bottom {
  margin-bottom: 16px;
}
.keep-bottom:last-child {
  margin-bottom: 0;
}
.strong-desc {
  font-weight: bold;
  margin-left: 10px;
}
.having-flex {
  display: flex;
  align-items: center;
}
.having-float {
  float: left;
}
.right-param {
  display: flex;
  align-items: center;
}
.right-param div {
  text-align: center;
  margin-right: 40px;
}
.show-avatar {
  width: 68px;
  height: 68px;
  border: 1px solid rgba(215, 215, 215, 1);
  background: #d7d7d7;
  border-radius: 50%;
  margin-bottom: 16px;
}
.show-desc {
  font-weight: bold;
}
.right-param div:nth-child(3n) {
  margin-right: 0;
}
.rate-style {
  margin-bottom: 40px;
}
.rate-area {
  display: flex;
  align-items: flex-start;
}
.box-style {
  padding: 14px 0;
  width: 180px;
  line-height: 16px;
  text-align: center;
  background: #fff;
  border-radius: 2px;
  border: 1px solid rgba(238, 238, 238, 1);
  margin-right: 10px;
}
.box-style:hover {
  background: #eee;
}
.line-style {
  display: flex;
  align-items: center;
  line-height: 14px;
}
.line-style::before {
  content: '';
  width: 8px;
  height: 8px;
  background: rgba(2, 142, 233, 1) 100% 100%;
  margin-right: 14px;
  border-radius: 50%;
  display: block;
}
.vertical-line {
  width: 1px;
  height: 44px;
  background: rgb(221, 221, 221);
  margin: -4px 0 -4px 3.2px;
}
.other-product {
  display: flex;
  flex-wrap: wrap;
}
.detail {
  display: flex;
  align-items: flex-start;
  padding: 15px 15px 0 15px;
  text-align: left;
  width: 306px;
  background: #fafafa; /* box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04); */
  border: 1px solid rgba(238, 238, 238, 1);
  border-radius: 4px;
}
.detail:hover {
  background: #fff;
  cursor: pointer;
}
.product-style {
  margin-right: 10px;
}
.product-style:last-child {
  margin-right: 0;
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
.icorate-style {
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
}
.ticker-style {
  font-weight: normal;
}
.tag-detail {
  display: flex;
  align-items: center;
  height: 14px;
}

.product-id {
  font-size: 11px;
  font-weight: 300;
  height: 15px;
  margin: 10px 0 20px;
  display: flex;
  align-items: center;
}
.id-width {
  width: 188px;
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
  width: 205px;
  height: 32px;
  line-height: 16px;
  margin-bottom: 30px;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
}
.vp-center {
  align-items: flex-start !important;
}
.market-icon {
  width: 16px;
  height: 16px;
  margin: 0 0 10px 5px;
}
</style>
