<template>
    <div>
        <van-search
  v-model="value"
  show-action
  :label=this.$route.query.id
  placeholder="请输入搜索关键词"
  @click="tocity"
>
  <template #action>
    <div>搜索</div>
  </template>
</van-search>
<van-swipe :autoplay="3000" lazy-render>
  <van-swipe-item v-for="image in images" :key="image.id">
    <img :src="'http://liufusong.top:8080'+image.imgSrc" />
  </van-swipe-item>
</van-swipe>
<van-row gutter="40">
  <van-col span="6"  ><van-icon name="wap-home-o" size="30" color="#00ae66"/>整租</van-col>
  <van-col span="6"><van-icon name="friends-o" size="30" color="#00ae66"/>合租</van-col>
  <van-col span="6" @click="tomap"><van-icon name="location-o" size="30" color="#00ae66" />地图找房</van-col>
  <van-col span="6"><van-icon name="wap-home-o" size="30" color="#00ae66"/>去出租</van-col>
</van-row>
<van-nav-bar
  title="租房小组"
  left-arrow
/>
<van-grid :border="false" :column-num="2">
  <van-grid-item v-for="item in group" :key="item.id">
    <van-image
      :src="'http://liufusong.top:8080'+item.imgSrc"
    />
        <p>{{ item.title }}</p>
        <span>{{ item.desc }}</span>
  </van-grid-item>
</van-grid>
    </div>
</template>

<script>
import request from '@/utils/request';
export default {
  name: 'MyMain',
  props: {

  },
  data () {
    return {
      value: '',
      images: [],
      group: []
    };
  },
  computed: {
  },
  created () {
    this.$nextTick(this.getpic)
  },
  mounted () {
    this.$nextTick(this.getgroup)
  },
  watch: {

  },
  methods: {
    tozf () {
      this.$router.push('/found')
    },
    async getpic () {
      const res = await request({
        method: 'get',
        url: '/home/swiper'
      })

      this.images = res.data.body
      console.log(this.images);
    },
    tocity () {
      this.$router.push('/city')
    },
    async getgroup () {
      const res = await request({
        method: 'get',
        url: '/home/groups',
        params: {
          area: 'AREA|98b03413-6f84-c263'
        }
      })
      console.log(res.data.body);
      this.group = res.data.body
    },
    tomap () {
      this.$router.push('/map')
    }
  },
  components: {

  },
};
</script>

<style scoped lang="less">
.van-search {
    position: absolute;
    top: 3%;
    width: 100%;
    z-index: 999;
    background-color: transparent;
}

  .van-coupon-cell {
    margin-top: 10%;
  }
  .van-swipe{
    img {
      width: 100%;
    }
  }

.van-row{
  margin-top: 10%;
  width: 100%;
  .van-col {
    flex-direction: column;

      .van-icon {
        display: block;
      }

  }
}

.van-nav-bar {
  margin-top: 15%;
}

.van-grid-item__content {
  font-size: 14px;
}

</style>
