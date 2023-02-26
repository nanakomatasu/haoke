<template>
    <div>
      <div  class="main">
        <img src="http://liufusong.top:8080/img/profile/bg.png" alt="">
<div class="userinfo">

  <div class="avatar">
    <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="">
  </div>
  <van-button type="success" @click="tologin">去登录</van-button>
</div>
      </div>
    </div>
</template>

<script>
export default {
  name: 'NoLo',
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
    tologin () {
      this.$router.push('/login')
    }

  },
  components: {

  },
};
</script>

<style scoped lang="less">
.userinfo {
  top: 90px;
}
</style>
