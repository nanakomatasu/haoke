<template>
    <div>
      <div class="title">
        <p>上海</p>
      <input type="text" placeholder="快来选你心仪的房子吧">
      <van-icon name="location-o" />
    </div>
    <van-dropdown-menu>
  <van-dropdown-item v-model="value1" :options="option1" >
    <van-area  :area-list="areaList" confirm-button=""/>
</van-dropdown-item>
  <van-dropdown-item v-model="value2" :options="option2" />
  <van-dropdown-item v-model="value3" :options="option1" />
  <van-dropdown-item v-model="value4" :options="option1" />
</van-dropdown-menu>
<div>
    <div class="main" v-for="v in foundlist" :key="v.houseCode" @click="todetials(v.houseCode)">
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
import { ref } from 'vue';
import { areaList } from '@vant/area-data';
import request from '@/utils/request';
export default {
  setup () {
    const value1 = ref(0);
    const value2 = ref('a');
    const value3 = ref(1);
    const value4 = ref(2);
    const option1 = [
      { text: '区域', value: 0 },
      { text: '租金', value: 1 },
      { text: '筛选', value: 2 },
    ];
    const option2 = [
      { text: '方式', value: 'a' },
      { text: '', value: 'b' },
      { text: '销量排序', value: 'c' },
    ];

    return {
      value1,
      value2,
      value3,
      value4,
      option1,
      option2,
    };
  },
  name: "MyFound",
  props: {

  },
  data () {
    return {
      areaList,
      foundlist: []
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
    todetials (id) {
      this.$router.push({
        path: '/favdetails',
        query: {
          id: id
        }
      })
    },
    async getlist () {
      const res = await request({
        method: 'get',
        url: '/houses',
        data: {
          cityId:
          'AREA%7Ce4940177-c04c-383d&stat=1&end=20'
        }
      })
      console.log(res.data.body.list);
      this.foundlist = res.data.body.list
    }
  },
  components: {

  },
};
</script>

<style scoped lang="less">
.title {
  display: flex;
  align-items: center;
  height: 40px;
  background-color: #07c160;
  text-align: center;
  line-height: 40px;
  color: #fff;
  font-size: 16px;

  p {
    font-size: 14px;
    width: 40px;
    height: 20px;
    line-height: 20px;
  }

  input {
    flex: 1;
    height: 20px;
    border: none;
    padding: 0 10px;
    font-size: 12px;
    color: #ccc;
  }

  .van-icon {
    width: 40px;
    height: 20px;
    line-height: 20px;
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
