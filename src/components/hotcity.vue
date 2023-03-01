<template>
    <div>
      <van-index-bar :index-list="indexList">
  <van-index-anchor index="1" ><van-icon name="fire" color="red"/>热门城市</van-index-anchor>
  <van-cell :title=v.label v-for="(v,i) in hotlist" :key="i" @click="tofound(v.value,v.label)"><van-icon name="fire" color="red"/></van-cell>

  <van-index-anchor index="2"><van-icon name="location" color="#07c160"/>城市列表</van-index-anchor>
  <van-cell :title=v.label v-for="(v,i) in citylist" :key="i" @click="tofound(v.value,v.label)"></van-cell>

  ...
</van-index-bar>
    </div>
</template>

<script>
import request from '@/utils/request';
export default {
  name: 'HotCity',
  props: {

  },
  data () {
    return {
      hotlist: [],
      citylist: []
    };
  },
  computed: {

  },
  created () {
    this.$nextTick(this.gethotlist)
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    async gethotlist () {
      const res = await request({
        method: 'get',
        url: '/area/hot'
      })
      console.log(res.data.body);
      this.hotlist = res.data.body
      const res1 = await request({
        method: 'get',
        url: '/area/city',
        params: {
          level: 1
        }
      })
      console.log(res1.data.body);
      this.citylist = res1.data.body
    },
    tofound (index, name) {
      this.$router.push({
        path: '/home/found',
        query: {
          id: index,
          name: name
        }
      })
    }
  },
  components: {

  },
};
</script>

<style scoped lang="less">
.van-index-bar {
  text-align: left;
}
.van-index-anchor {
  font-size: 14px;
}
</style>
