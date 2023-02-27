<template>
       <div>
  <div class="title" >
    <span><van-icon name="arrow-left" @click="toback"/></span>出租列表
  </div>
  <div>
    <div class="main" v-for="v in rentlist" :key="v.houseCode" @click="todetials (v.houseCode)">
      <div class="pic">
        <img :src="'http://liufusong.top:8080'+v.houseImg" alt="">
      </div>
       <div class="right">
      <h4>{{ v.title }}</h4>
      <p class="adress">{{ v.desc }}</p>
      <span class="tag" v-for="(item,ind) in v.tags" :key="ind">{{ item }}</span>
      <p class="price"><span>{{ v.price }}</span>元/月</p>
     </div>
    </div>
  </div>
    </div>
</template>

<script>
import request from '@/utils/request';
export default {
  name: 'MyRent',
  props: {

  },
  data () {
    return {
      rentlist: []
    };
  },
  computed: {

  },
  created () {
    this.$nextTick(this.getlist)
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    async getlist () {
      const res = await request({
        method: 'get',
        url: '/user/houses',
        headers: {
          authorization: localStorage.getItem('token')
        }
      })
      this.rentlist = res.data.body
      console.log(this.rentlist);
    },
    toback () { this.$router.back() },

    todetials (id) {
      this.$router.push({
        path: '/rentdetails',
        query: {
          id: id
        }
      })
    }

  },
  components: {

  },
};
</script>

<style scoped lang="less">
.title {
    height: 40px;
    background-color: #07c160;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 16px;

    span {
      position: absolute;
      left: 0;
      top: 2px;
    }
  }

  .main {
    display: flex;
    padding: 10px;
    height: 100px;
    border-bottom: 1px solid #ccc;
    .pic {
      width: 80px;
      height: 80px;
      margin-top: 10px;
      img {
        width: 100%;
        height: 100%;
      }
    }
    .right {
      margin-top: 15px;
      margin-left: 20px;
      text-align: left;
      overflow: hidden;
     p {
      margin: 0;
      font-size: 12px;
      margin-bottom: 2px;
     }
    }

    h4 {
      font-size: 14px;
      margin: 0;
    }

    .adress {
      color: #ccc;
    }

    .tag {
      background-color: #e1f5f8;
      text-align: center;
      color:#39becd ;
      font-size: 14px;
      padding: 0 2px;
    }

    .price {
      color: #fa5791;
      span {
        font-size: 14px;
        margin-right: 2px;
      }
    }
  }

</style>
