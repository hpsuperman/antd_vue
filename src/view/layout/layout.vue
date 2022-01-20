<template>
  <a-layout  id="components-layout-demo-custom-trigger" 
    style="min-height: 100vh"
    >
    <a-layout-sider 
      theme="light"
      v-model="collapsed" 
      :trigger="null" 
      collapsible
      >
      <div class="div-logo" style="height:45px;">
        <img  src="@/imgs/logo2.png" alt="">
        <span class="srm-div">SRM</span>
      </div>
      <a-menu  mode="inline" :default-selected-keys="['1']">
        <a-menu-item key="1">
          <a-icon type="github" />
          <span>首页</span>
        </a-menu-item>
        <a-sub-menu key="sub1">
          <span slot="title"><a-icon type="gitlab" /><span>User</span></span>
          <a-menu-item key="3">
            Tom
          </a-menu-item>
          <a-menu-item key="4">
            Bill
          </a-menu-item>
          <a-menu-item key="5">
            Alex
          </a-menu-item>
        </a-sub-menu>
      </a-menu>
    </a-layout-sider>
    <a-layout>
      <a-layout-header class="layout-header">
        <a-icon
          class="trigger"
          style="color:#fff"
          :type="collapsed ? 'menu-unfold' : 'menu-fold'"
          @click="() => (collapsed = !collapsed)"
        />
      </a-layout-header>
      <a-layout-content
        :style="{ margin: '24px 16px', padding: '24px', background: '#fff', minHeight: '280px' }"
      >
        Content
        <Home/>
      </a-layout-content>
    </a-layout>
  </a-layout>
</template>
<script>
import home from '@/page/home/home';
export default {
  data() {
    return {
      collapsed: false,
    };
  },
  components:{
    home,
    }
};
</script>
<style lang="scss">
@import url("./layout.scss");
</style>
