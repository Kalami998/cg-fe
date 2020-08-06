<template>
  <div class="home-page">
    <div class="popularity">
      <img class="tiwtter-icon" src="~assets/img/tiwtter.png" alt />
      TWITTER [{{ fans }}K]
    </div>
    <div class="having-flex">
      <div v-for="(item, index) in dataList" :key="index" class="having-right">
        <div class="category-name">{{ item.categoryName }}</div>
        <div class="it-content">
          <div v-for="(it, sort) in item.list" :key="sort">
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
            <div class="divi-line"></div>
          </div>
          <div class="show-more">
            <span>VIEW ALL</span>
            <img class="more-icon" src="~assets/img/more.png" alt />
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
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
    }
  },
}
</script>

<style>
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
  margin-bottom: 30px;
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
