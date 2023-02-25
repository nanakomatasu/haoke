<template>
    <div>
        <router-view></router-view>
        <van-tabbar v-model="active">
  <van-tabbar-item icon="home-o" @click="tosy">首页</van-tabbar-item>
  <van-tabbar-item icon="search"  @click="tozf">找房</van-tabbar-item>
  <van-tabbar-item icon="friends-o"  @click="tozx">资讯</van-tabbar-item>
  <van-tabbar-item icon="setting-o"  @click="towd">我的</van-tabbar-item>
</van-tabbar>

    </div>
</template>

<script>
export default {
  name: 'MyHome',
  props: {

  },
  data () {
    return {
    };
  },
  computed: {

  },
  created () {

  },
  mounted () {

  },
  watch: {

  },
  methods: {
    tosy () {
      this.$router.push('main')
    },
    tozf () {
      this.$router.push('found')
    },
    towd () {
      this.$router.push('center')
    },
    tozx () {
      this.$router.push('news')
    }

  },
  components: {

  },
};
</script>

<style scoped lang="less">
.van-tabber{
    width: 100%;
    position: absolute;
    bottom: 0;
}

</style>
