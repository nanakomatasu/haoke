<template>
    <div>
      <div class="title"><van-icon name="arrow-left" @click="tohome"/>城市列表</div>
      <van-list
  :finished="finished"
  finished-text="没有更多了"
  @load="onLoad"
>
  <van-cell v-for="(item,index) in citylist" :key="index" :title="item.label" />
</van-list>
    </div>
</template>
<script>
import request from '../utils/request.js'
export default {
  name: 'MyCity',
  props: {

  },
  data () {
    return {
      citylist: []
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
        url: '/area/city',
        params: {
          level: 1
        }
      })
      console.log(res.data.body);
      this.citylist = res.data.body
    },
    tohome () {
      this.$router.push('/home/main')
    }

  },
  components: {

  },
};
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
  }

  .van-icon-arrow-left {
    position: absolute;
    left: 0;
    top: 15px;
  }

</style>
