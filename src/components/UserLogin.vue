<template>
    <div>

      <div class="title"> <span> <van-icon name="arrow-left" /></span>登录</div>
      <van-form @submit="onSubmit">
  <van-cell-group inset>
    <van-field
      v-model="username"
      name="用户名"
      label="用户名"
      placeholder="用户名"
      :rules="[{ required: true, message: '请填写用户名' }]"
    />
    <van-field
      v-model="password"
      type="password"
      name="密码"
      label="密码"
      placeholder="密码"
      :rules="[{ required: true, message: '请填写密码' }]"
    />
  </van-cell-group>
  <div style="margin: 16px;">
    <van-button round block type="primary" native-type="submit" @click="submitlogin">
      提交
    </van-button>
  </div>
</van-form>

    </div>
</template>

<script>
import request from '@/utils/request';
export default {
  props: {

  },
  data () {
    return {
      username: '',
      password: ''
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
    async submitlogin () {
      try {
        const res = await request({
          method: 'post',
          url: '/user/login',
          data: {
            username: this.username,
            password: this.password
          }
        })
        localStorage.setItem('token', res.data.body.token)
        this.$router.push('/home/main')
      } catch (err) {
        alert('登录失败')
      }
    },
    toback () { this.$router.back() }

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
</style>
