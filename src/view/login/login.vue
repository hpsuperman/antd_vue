<template>
<div>
  <div class="head-box">
    <div class="wrapper">
      <img class="logo" src="@/imgs/logo.png">
      <div style="padding-left:5px color:#1991ff">QQT SRM</div>
      <span >易学易用</span>
      <span >互联互通</span>
    </div>
  </div>
   <a-carousel autoplay>
      <template v-for="el in banners">
        <div :key="el.id">
          <img
            class="img"
            :src="el.src"
            :alt="el.name">
          </div>
        </template>
      </a-carousel>
 <a-form
    id="components-form-demo-normal-login"
    :form="form"
    class="login-form"
    @submit="handleSubmit"
  >
   <a-card :bordered="false" >
     <a-form-item>
       <div class="head-qqt">
        <span >QQT</span>
        <span style="padding-left:10px">SRM</span>
        <span style="padding-left:10px">系统</span>
       </div>
    </a-form-item>
      <a-form-item>
      <a-input
        v-decorator="[
          'userName',
          { rules: [{ required: true, message: 'Please input your username!' }] },
        ]"
        placeholder="请输入els账号"
      >
        <a-icon slot="prefix" type="user" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a-form-item>
      <a-input
        v-decorator="[
          'password',
          { rules: [{ required: true, message: 'Please input your Password!' }] },
        ]"
        type="password"
        placeholder="请输入密码"
      >
        <a-icon slot="prefix" type="lock" style="color: rgba(0,0,0,.25)" />
      </a-input>
    </a-form-item>
    <a href="#" style="color: #1890ff">忘记密码</a>
    <router-link to="/layout">
    <a-form-item>
      <a-button type="primary" html-type="submit" class="login-form-button">
        登录
      </a-button>
    </a-form-item>
    </router-link>
      </a-card>
  </a-form>
</div>
</template>

<script>
export default {
  data(){
    return{
      banners: [
                { src: require('@/imgs/banner_1.jpg'), name: 'banner_1', id: 'banner_1' },
                { src: require('@/imgs/banner_2.jpg'), name: 'banner_2', id: 'banner_2' },
            ],
    }
  },
  beforeCreate() {
    this.form = this.$form.createForm(this, { name: 'normal_login' });
  },
  methods: {
    handleSubmit(e) {
      e.preventDefault();
      this.form.validateFields((err, values) => {
        if (!err) {
          console.log('Received values of form: ', values);
        }
      });
    },
  },
};
</script>

<style lang="scss">
@import url("./login.scss");
</style>