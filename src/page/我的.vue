<template>
    <div>
     <component :is="curritem"></component>
 <div class="footericon">
  <van-grid :column-num="3">
  <van-grid-item icon="star-o" text="我的收藏" @click="tofav" />
  <van-grid-item icon="wap-home-o" text="我的出租" @click="torent"/>
  <van-grid-item icon="upgrade" text="看房记录" />
  <van-grid-item icon="ecard-pay" text="成为房主" />
  <van-grid-item icon="contact" text="个人资料" />
  <van-grid-item icon="bullhorn-o" text="联系我们" />
</van-grid></div>
   <img src="http://liufusong.top:8080/img/profile/join.png" alt="">
    </div>
</template>

<script>
import SuLo from '../dynamic/seccesslogin.vue'
import NoLo from '../dynamic/nonelogin.vue'
export default {
  name: 'MyCenter',
  props: {

  },
  data () {
    return {
      list: [
        { icon: 'star-o', text: '我的收藏', click: 'tofav' },
        { icon: 'wap-home-o', text: '我的出租' },
        { icon: 'upgrade', text: '看房记录' },
        { icon: 'ecard-pay', text: '成为房主' },
        { icon: 'contact', text: '个人资料' },
        { icon: 'bullhorn-o', text: '联系我们' },
      ],
      curritem: 'SuLo'
    };
  },
  computed: {

  },
  created () {
    this.$nextTick(this.changecom)
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    changecom () {
      if (localStorage.getItem('token')) {
        this.curritem = 'SuLo'
      } else {
        this.$toast('未登录')
        this.curritem = 'NoLo'
      }
    },
    tofav () {
      this.$router.push('/fav')
    },
    torent () {
      this.$router.push('/rent')
    }
  },
  components: {
    SuLo, NoLo
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
      width: 300px;
      height: 200px;
      background-color: #fff;
      box-shadow:0px 0px 6px #00000030;
      z-index: 9999;

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
        width: 80px;
        height: 30px;
        border: none;
        font-size: 16px;
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
  .van-grid-item__content {
    display: flex;
    flex-direction: row;
  }
</style>
