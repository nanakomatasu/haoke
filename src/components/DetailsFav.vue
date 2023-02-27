<template>
    <div>
      <div class="title"><span @click="toback"><van-icon name="arrow-left" /></span>{{ obj.community }}</div>
      <div class="top">
        <div class="pic">
          <img :src="'http://liufusong.top:8080' + obj.houseImg" alt="">
        </div>
        <div class="t-title">
            <div class="t-title-top">
                 <h3>{{ obj.community }}</h3>
                 <p>
                  <span v-for="(item,index) in obj.tags" :key="index">{{ item }}</span>
                 </p>
            </div>
            <div class="t-title-center">
            <div>
              <h4 class="top">{{ obj.price }}/月</h4>
              <p class="down">租金</p>
            </div>
            <div>
              <h4 class="top">{{ obj.roomType }}</h4>
              <p class="down">房型</p>
            </div>
            <div>
              <h4 class="top">{{ obj.size }}平米</h4>
              <p class="down">面积</p>
            </div>
            </div>
            <div class="t-title-down">
                <div>
                  <p><span>装修：</span><span>精装</span></p>
                  <p><span>朝向：</span><span>{{ obj.oriented[0] }}</span></p>
                </div>
                <div>
                  <p><span>楼层：</span><span>{{ obj.floor }}</span></p>
                  <p><span>类型：</span><span>普通住宅</span></p>
                </div>
            </div>
        </div>

      </div>
      <div class="map">
          <p>小区:<span>{{ obj.community }}</span></p>
          <div class="baidu"></div>
        </div>
        <div class="details">
            <div class="about">
               <p class="d-a-title" >房屋配套</p>
               <div class="d-a-about">
                <p v-for="(item,index) in obj.supporting" :key="index"><van-icon name="fire-o" size="2rem"/>{{ item }}</p>
            </div>
            </div>
        </div>
        <div class="overview">
          <p class="o-title">
             房屋概况
          </p>
          <div class="o-userinfo">
                <div class="o-u-username">
                  <div class="userpic">
                    <div class="pic">
                      <img :src="'http://liufusong.top:8080' + obj.houseImg" alt="">
                    </div>

                    <p class="o-name"><span>王女士</span>
                       <span class="renzheng">已经认证房主</span>
                    </p>
                  </div>
                  <button>发消息</button>
                </div>
                <div class="o-u-usermain">
                 {{ obj.description }}
                </div>
          </div>
        </div>
        <van-tabbar v-model="active">
  <van-tabbar-item name="home" icon="home-o">收藏</van-tabbar-item>
  <van-tabbar-item name="search" icon="search">在线咨询</van-tabbar-item>
  <van-tabbar-item name="friends" icon="friends-o">电话预约</van-tabbar-item>
</van-tabbar>
        </div>

</template>

<script>
import request from '@/utils/request';
import { ref } from 'vue';
export default {
  name: 'detailsFav',
  setup () {
    const active = ref('home');
    return { active };
  },
  props: {

  },
  data () {
    return {
      obj: {}
    };
  },
  computed: {

  },
  created () {
    this.$nextTick(this.passdetials(this.$route.query.id))
  },
  mounted () {

  },
  watch: {

  },
  methods: {
    toback () {
      this.$router.back()
    },
    async passdetials (id) {
      const res = await request({
        method: 'get',
        url: `/houses/${id}`,
      })
      console.log(res.data.body);
      this.obj = res.data.body
    },
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

  .top {
    background-color: #fff;
    font-size: 14px;
    .pic {
      width: 100%;
      height: 200px;
      img{
        width: 100%;
        height: 100%;
      }
    }

    .t-title-top {
      width: 80%;
      margin: 0 auto;
      height: 100px;
      padding: 3px;
      border-bottom: 1px solid #333;
      p {
        text-align: left;
        span {
          background-color: #e1f5f8;
          margin-right: 3px;
      text-align: center;
      color:#39becd ;
      font-size: 14px;
      padding: 0 2px;
        }
      }
      h3 {
        text-align: left;
      }
    }

    .t-title-center {
      display: flex;
      justify-content: space-around;
      width: 80%;
      margin: 0 auto;
      padding: 10px;
      border-bottom: 1px solid #333;
      div {
        p {
          font-size: 14px;
          margin: 4px;
        }
        h4{
          margin: 0;
          font-size: 16px;
          font-weight: 700;
          color: #fb8d5f;
        }
      }
    }

    .t-title-down {
      width: 80%;
      margin: 10px auto 0;
        div {
          display: flex;
          justify-content: space-between;
          p {
            margin: 0;
          }
        }
    }
  }

  .map {
    margin-top: 30px;
    font-size: 14px;
    p {
      width: 100%;
      height: 50px;
      line-height: 50px;
      color: #333;
      text-align: left;
      padding-left: 20px;
      margin: 0;
    }
    .baidu {
      width: 100%;
      height: 100px;
      background-color: pink;
    }
  }

  .details {
    width: 80%;
              margin: 0 auto;
    .about {
.d-a-title {
      height: 40px;
      line-height: 40px;
      border-bottom: 1px solid #333;
      text-align: left;
      font-weight: 700;
      font-size: 14px;
            }
          .d-a-about{
            display: flex;
            justify-content: space-around;
            p {
              font-size: 12px;
              display: flex;
              flex-direction: column;
            }
          }
    }
  }

  .overview {
    width: 80%;
   margin: 0 auto;
   margin-top: 20px;

     .o-title {
      height: 40px;
      line-height: 40px;
      width: 100%;
       font-size: 14px;
       font-weight: 700;
       text-align: left;
       border-bottom: 1px solid #333;
     }

     .o-userinfo {
            .o-u-username{
              width: 100%;
              display: flex;
              align-items: center;
              justify-content: space-between;
              .userpic{
                display: flex;
                align-items: center;
                .pic {
              width: 80px;
              height: 80px;
              background-color: pink;
              border-radius: 40px;
              overflow: hidden;
              img {
                width: 100%;
                height: 100%;

              }
            }
            .o-name {
              font-size: 14px;
              margin-left: 10px;
              text-align: left;
              span {
                display: block;
              }
            }
              }

              button {
                width: 80px;
                height: 40px;
                border: 1px solid #9cdfc3;
                color: #9cdfc3;
                background-color: #fff;
              }

            }

            .o-u-usermain {
              margin-top: 20px;
            }
     }
  }

</style>
