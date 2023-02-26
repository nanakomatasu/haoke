<template>
 <div>
        <img src="http://liufusong.top:8080/img/avatar.png
" alt="" >
<div class="userinfo">

  <div class="avatar">
    <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="">
  </div>
  <van-button type="success" @click="out">退出</van-button>
</div>
      </div>
</template>

<script>
export default {
  name: 'SuLo',
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
    out () {
      localStorage.removeItem('token')
      this.$parent.curritem = 'NoLo'
    }
  },
  components: {

  },
};
</script>

<style scoped lang="scss">

</style>
