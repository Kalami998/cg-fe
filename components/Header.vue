<template>
  <div class="header">
    <div class="header-class">
      <div class="having-flex">
        <img
          class="logo-style"
          src="~assets/img/logo.png"
          @click="backhome()"
        />
        <div class="search-area" @mouseleave="loseFocus">
          <input
            v-model="target"
            class="input-style"
            type="search"
            placeholder="Search"
            @focus="getFocus"
            @keyup.enter="searchSome(it)"
          />
          <div v-if="inputByBlur" class="searched-list">
            <div
              v-for="(item, index) in searchList"
              :key="index"
              class="list-data"
              @click="searchSome(it)"
            >
              {{ item.name }}
            </div>
          </div>
        </div>
        <div class="search-box" @click="searchSome()">
          <img class="search-icon" src="~assets/img/search.png" alt />
        </div>
      </div>
      <div class="hot-category">
        <span
          :class="{
            'category-span': true,
            'current-title': currentPath === 0,
          }"
          @click="goAll('unlisted', 0)"
          >Unlisted</span
        >
        <span
          :class="{
            'category-span': true,
            'current-title': currentPath === 1,
          }"
          @click="goAll('mainlylistedindex', 1)"
          >Mainly Listed in DEX</span
        >
        <span
          :class="{ 'category-span': true, 'current-title': currentPath === 2 }"
          @click="goAll('mainlylistedincex', 2)"
        >
          Mainly Listed in CEX</span
        >
      </div>
    </div>
  </div>
</template>

<script>
export default {
  // name: 'Header',
  data() {
    return {
      target: '', // 搜索目标
      searchList: [
        // {
        //   name:
        //     'PolkadotRepublic NoteRepublic NoteRepublic NoteRepublic NoteRepublic NoteRepublic NoteRepublic NoteRepublic NoteRepublic NoteRepublic NoteRepublic Note',
        // },
        // { name: 'Republic Note' },
        // { name: 'LUKSO' },
      ], // 搜索记录
      inputByBlur: false, // 搜索框是否获取了焦点
      currentPath: -1, // 当前路径
      currentTitle: '', // 当前标题
    }
  },
  computed: {
    routeFunction() {
      return this.$route.query
    },
  },
  watch: {
    '$route.query'(newV, oldV) {
      if (newV.title) {
        this.currentTitle = newV.title
        if (this.currentTitle === 'unlisted') {
          this.currentPath = 0
        } else if (this.currentTitle === 'mainlylistedindex') {
          this.currentPath = 1
        } else if (this.currentTitle === 'mainlylistedincex') {
          this.currentPath = 2
        }
      } else {
        this.currentPath = -1
      }
    },
  },
  mounted() {
    if (this.$route.query && this.$route.query.title) {
      this.currentTitle = this.$route.query.title
      if (this.currentTitle === 'unlisted') {
        this.currentPath = 0
      } else if (this.currentTitle === 'mainlylistedindex') {
        this.currentPath = 1
      } else if (this.currentTitle === 'mainlylistedincex') {
        this.currentPath = 2
      }
    } else {
      this.currentPath = -1
    }
  },
  methods: {
    // 去搜索二级页
    searchSome(it) {
      this.$router.push({
        path: '/search',
        query: {
          keyword: this.target,
        },
      })
    },
    getFocus() {
      this.inputByBlur = true
    },
    loseFocus() {
      this.inputByBlur = false
    },
    // 去更多页
    goAll(it, index) {
      if (location.pathname === '/all') {
        location.search = `title=${it}&number=${index}`
      } else {
        this.$router.push({
          path: '/all',
          query: {
            title: it,
            number: index,
          },
        })
      }
    },
    backhome() {
      this.$router.push({
        path: '/',
      })
    },
  },
}
</script>

<style>
.header {
  width: 100%;
  min-width: 1200px;
  height: 70px;
  line-height: 70px;
  border-bottom: 1px solid #ddd;
}
.header-class {
  width: 1200px;
  height: 70px;
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
  margin-top: 3.8px;
}
.input-style {
  width: 340px;
  height: 30px;
  border-radius: 1px;
  border: 1px solid #ddd;
  font-size: 12px;
  padding: 0 0 0 10px;
}
input {
  outline: none;
}
.input-style:hover,
.input-style:visited,
.input-style:active {
  outline: none;
  border: 1px solid #ddd;
}
.search-box {
  background: rgba(248, 248, 248, 1);
  border: 1px solid rgba(221, 221, 221, 1);
  border-left: none;
  cursor: pointer;
  height: 31px;
  line-height: 31px;
  margin-top: 5px;
}
.search-area {
  position: relative;
}
.search-box:hover {
  background: #f2f2f2; /* border: 1px solid #f2f2f2; */
}
.searched-list {
  position: absolute;
  left: 0;
  top: 52px;
  background: #fff;
  border-top: none;
  border-radius: 0 0 2px 2px;
  border: 1px solid rgba(248, 248, 248, 1);
  width: 340px;
  cursor: pointer;
}
.list-data {
  height: 32px;
  line-height: 32px;
  padding: 0 10px;
  font-size: 12px;
  white-space: nowrap;
  text-overflow: ellipsis;
  overflow: hidden;
}
.list-data:hover {
  background: rgba(248, 248, 248, 1);
  color: rgba(14, 147, 234, 1);
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
.category-span {
  width: 148px;
  text-align: center;
  display: inline-block;
}
.category-span:first-child {
  width: 60px;
}
.category-span:hover {
  font-weight: bold;
}
.current-title {
  font-weight: bold;
}
.right-distance {
  margin-right: 20px;
}
</style>
