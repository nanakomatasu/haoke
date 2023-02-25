<template>
    <div>
      <div>
        <img src="http://liufusong.top:8080/img/avatar.png
" alt="" >
<div class="userinfo">

  <div class="avatar">
    <img src="http://liufusong.top:8080/img/profile/avatar.png" alt="">
  </div>
  <van-button type="success">退出</van-button>
</div>
      </div>
 <div class="footericon">
  <van-grid :column-num="3">
  <van-grid-item v-for="(item,index) in list" :key="index" :icon="item.icon" :text="item.text" />
</van-grid></div>
   <img src="http://liufusong.top:8080/img/profile/join.png" alt="">
    </div>
</template>

<script>
export default {
  name: 'MyCenter',
  props: {

  },
  data () {
    return {
      list: [
        { icon: 'star-o', text: '我的收藏' },
        { icon: 'wap-home-o', text: '我的出租' },
        { icon: 'upgrade', text: '看房记录' },
        { icon: 'ecard-pay', text: '成为房主' },
        { icon: 'contact', text: '个人资料' },
        { icon: 'bullhorn-o', text: '联系我们' },
      ]
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

  },
  components: {

  },
};
</script>

<style  lang="less">
  img {
    width: 100%;
  }
  .userinfo{
       position: absolute;
       top: 30%;
       left: 50%;
       transform: translateX(-50%);
      width: 80%;
      height: 30%;
      background-color: #fff;
      box-shadow:0px 0px 6px #00000030;

      .avatar{
        position: absolute;
        left: 50%;
        top: -10%;
        transform: translateX(-50%);
        width: 80px;
        height: 80px;
        border-radius: 40px;
        background-color: pink;
      }

      .van-button {
        width: 60px;
        height: 30px;
        border: none;
        background-color: #07c160;
        color: #fff;
        position: absolute;
        transform: translateX(-50%);
        left: 50%;
      top: 30%;      }
  }
  .footericon {
    margin-top: 100px;
  }
</style>
