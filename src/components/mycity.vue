<template>

<van-index-bar   :sticky="true" >
        <van-index-anchor    v-for="(item,index) in firstName" :key="index" :index="index">
          <span>{{index}}</span>
          <van-cell  v-for="(citem,cindex) in item" :key="cindex"  :title="citem" @click='tohomename(citem)'/>
        </van-index-anchor>
 </van-index-bar>
</template>
<script>
import request from '@/utils/request';
import pinyin from 'js-pinyin'
pinyin.setOptions({ checkPolyphone: false, charCase: 0 })
export default {
  name: 'MyCity',
  props: {
  },
  data () {
    return {
      citylist: [],
      FirstPin: ['A', "B", "C", "D", "E", "F", "G", "H", "J", "K", "L", "M", "N", "P", "Q", "R", "S", "T", "W", "X", "Y", "Z"],
      firstName: {
      },
      cityNameList: [],
    };
  },
  computed: {

  },
  created () {
    this.$nextTick(this.getlist)
  },
  mounted () {
    console.log(this, this.firstName);
  },
  watch: {

  },
  methods: {
    async getlist () {
      const res = await request({
        method: 'get',
        url: '/area/city',
        params: {
          level: 1
        }
      })
      console.log(res.data.body);
      this.citylist = res.data.body
      this.cityNameList = this.citylist.map(item => {
        return item.label
      })
      console.log(this.cityNameList);
      this.FirstPin.forEach((item) => {
        this.firstName[item] = [];
        this.cityNameList.forEach((el) => {
          const first = pinyin.getFullChars(el).substring(0, 1);
          if (first === item) {
            this.firstName[item].push(el)
          }
        })
      });
      this.$forceUpdate()
      console.log(this.firstName);
    },
    tohomename (index) {
      this.$router.push({
        path: '/home/main',
        query: {
          id: index,
        }
      })
    }
  },
  components: {

  }
}
</script>

<style scoped lang="less">
.van-cell {
  text-align: left;
}

.title {
    height: 40px;
    background-color: #07c160;
    text-align: center;
    line-height: 40px;
    color: #fff;
    font-size: 16px;
  }

  .van-icon-arrow-left {
    position: absolute;
    left: 0;
    top: 15px;
  }

</style>
