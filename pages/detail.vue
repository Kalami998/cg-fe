<template>
  <div class="detail-page">
    <div class="detail-content">
      <div class="popularity">
        <img class="tiwtter-icon" src="~assets/img/tiwtter.png" alt />
        TWITTER [{{ fans }}K]
      </div>
      <div class="keep-line" @click="backHome()">
        <img class="back-icon" src="~assets/img/back.png" alt />
        <span>index</span>
      </div>

      <div class="product-main">
        <div class="product-info">
          <div class="left-icon">
            <!-- <img src="~assets/img/demo.png" alt /> -->
            <video
              :src="productInfo.main"
              controls="controls"
              class="video-size"
            ></video>
          </div>

          <div class="right-info">
            <div class="having-bottom">
              <div class="img-area">
                <img class="demo-icon" src="~assets/img/demo.png" alt />
              </div>
              <span class="it-name">{{ productInfo.title }}</span>
              <span class="symbol-desc">({{ productInfo.category }})</span>
            </div>

            <div class="tag-area">
              <!-- <span
                v-for="(tag, index) in productInfo.category"
                :key="index"
                class="tag-style"
                >{{ tag }}</span
              >-->
              <span class="tag-style">{{ productInfo.tag }}</span>
            </div>

            <div class="brief">{{ productInfo.description }}</div>

            <div class="icon-area">
              <img
                v-for="(item, index) in productInfo.socials"
                :key="index"
                :src="returnRoute(item.text)"
                alt
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
            <div class="small-section">TOKEN</div>
            <div>
              symbol:
              <span class="strong-desc">{{ productInfo.ticker }}</span>
            </div>
            <div>
              total:
              <span class="strong-desc">{{ productInfo.total }}</span>
            </div>
            <div>
              base:
              <span class="strong-desc">{{ productInfo.baseChain }}</span>
            </div>
            <div class="having-flex">
              <span>contract address:</span>
              <span class="strong-desc">{{ productInfo.address }}</span>
              <img
                class="copy-icon"
                src="~assets/img/copy.png"
                @click="cliBoadId(productInfo.address)"
                alt=""
              />
            </div>
            <!-- <div>
              24h Volume:
              <span class="strong-desc">$2,358,053</span>
            </div>
            <div>
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

        <div class="rate-style">
          <div class="small-section">RATING</div>
          <div
            v-for="(item, index) in productInfo.rate"
            :key="index"
            class="box-style"
          >
            <p>
              {{ item ? item : 'Hype rate' }}
            </p>
            <p class="show-desc">
              {{ productInfo.icoRate ? productInfo.icoRate : 'very high' }}
            </p>
          </div>
        </div>

        <div class="divi-line"></div>

        <div class="rate-style">
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

        <div class="divi-line"></div>

        <div>
          <div class="small-section">SCREENSHOTS</div>
          <div class="other-product">
            <div v-for="(it, sort) in list" :key="sort">
              <div class="detail">
                <div class="left-content">
                  <!-- {{ it.img ? it.img : '' }} -->
                  <div class="product-img">
                    <img src="~assets/img/search.png" alt />
                  </div>
                  <span>{{ it.pop }}</span>
                </div>

                <div class="right-content">
                  <div class="product-name">{{ it.name }}</div>
                  <div>{{ it.type }}</div>
                  <div class="product-id">{{ it.id }}</div>
                  <div class="product-price">GOAL:${{ it.price }}</div>
                  <div class="product-desc">{{ it.desc ? it.desc : '' }}</div>
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
  data() {
    return {
      fans: 33.3,
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
    }
  },
  // asyncData({ $axios, app, query }) {
  //   return $axios.get(`${baseUrl}/projects/${query.id}`).then((res) => {
  //     return {
  //       productInfo: res,
  //     }
  //   })
  // },
  mounted() {
    console.log('數據', this.productInfo)
    this.getInfo()
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
      console.log('跳转路径', url)
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
            this.productInfo = res
          } else {
            console.log('got error')
          }
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
.detail-page {
  min-height: 100vh;
  background: #fafafa;
}
.detail-content {
  width: 1000px;
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
.tag-area {
  width: 356px;
  display: flex;
  flex-wrap: wrap;
  padding-left: 42px;
}
.tag-style {
  margin: 0 10px 10px 0;
  padding-right: 10px;
  border-right: 1px solid rgba(221, 221, 221, 1);
}
.tag-style:last-child {
  border-right: none;
  padding-right: none;
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
.video-size {
  width: 564px;
  height: 340px;
}
.right-info {
  width: 356px;
  font-size: 16px;
}
.demo-icon {
  width: 25px;
  height: 25px;
}
.it-name {
  font-size: 24px;
  font-weight: bold;
}
.symbol-desc {
  font-size: 20px;
}
.having-bottom {
  margin-bottom: 16px;
  display: flex;
  align-items: flex-start;
  line-height: 32px;
}
.img-area {
  height: 32px;
  width: 32px;
  padding: 3.2px;
  margin-right: 10px;
}
.brief {
  line-height: 20px;
  display: -webkit-box;
  -webkit-line-clamp: 8;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 30px;
}
.icon-area {
  display: flex;
  margin-bottom: 10px;
}
.icon-size {
  width: 22px;
  height: 22px;
  margin-right: 5px;
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
  font-weight: 800;
  margin-bottom: 20px;
}
.left-param div {
  margin-bottom: 16px;
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
.copy-icon {
  width: 12px;
  height: 12px;
  margin-left: 4px;
  cursor: pointer;
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
.box-style {
  padding: 14px 0;
  width: 180px;
  line-height: 16px;
  text-align: center;
  background: #eee;
  border-radius: 2px;
  border: 1px solid rgba(238, 238, 238, 1);
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
  padding: 30px 0 0 24px;
  text-align: left;
  width: 306px;
  background: #fff;
  box-shadow: 0 0 15px 0 rgba(0, 0, 0, 0.04);
  border-radius: 4px;
  margin-left: 10px;
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
.product-id::after {
  content: '';
  width: 8.2px;
  height: 8.2px;
  background: url('~assets/img/copy.png') no-repeat;
  background-size: 100% 100%;
  display: block;
  margin-left: 5px;
}
.product-price {
  font-weight: bold;
  margin-bottom: 10px;
}
.product-desc {
  font-weight: 500;
  height: 30px;
  margin-bottom: 14px;
}
</style>
