<template>
    <div>
      <div class="title"><van-icon name="arrow-left" @click="tohome"/>城市列表</div>
            <van-pull-refresh v-model="refreshing" @refresh="onrefresh">
            <van-list
                v-model="loading"
                :finished="finished"
                :offset="10"
                :immediate-check="flase"
                finish-text="没有更多了"
                @load="onLoad"
            >
  <van-cell v-for="(item,index) in citylist" :key="index" :title="item.label" />
</van-list>
        </van-pull-refresh>
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
      citylist: [],
      loading: false,
      finished: false,
      refreshing: false,
      listQuery: {
        page: 1,
        limit: 10,
      }

    };
  },
  computed: {

  },
  created () {
    this.$nextTick(this.getlist)
  },
  mounted () {
    this.getList();
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
    },
    onLoad () {
      setTimeout(() => {
        this.getlist();
      }, 1000);
    },
    // 获取列表
    getList () {
    // 请求得到会议列表，并传参传递请求页码和单页列表数量limit
      this.getList(this.listQuery).then((res) => {
        // 如果是第一次进入页面page==1 直接赋值
        console.log(res.data.data);
        if (this.listQuery.page === 1) {
          this.citylist = res.data.data
        } else {
        // 如果不是则在后面追加数据,forEach()方法
          res.data.data.forEach(item => {
            this.citylist.push(item)
          });
          // 追加完成后关闭loading
          this.loading = false
        }
        // 当还有数据是page++
        if (res.data.data.length >= 92) {
          this.listQuery.page++;
          this.loading = false
        } else {
        // 如果没有数据加载完毕
          this.finished = true
        }
      });
    },
    // 下拉刷新
    onRefresh () {
      setTimeout(() => {
        this.listQuery.page = 1;
        this.getList();
        this.refreshing = false;
      }, 1000);
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
