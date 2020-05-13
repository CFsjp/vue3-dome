<template>
  <div class="layout full-height">
    <Header />
    <div class="flex full-height">
      <Navbar />
      <div class="flex-1 full-height">
        <h1>{{ $t('mb') }}</h1>
        <transition name="fade" mode="out-in">
          <keep-alive>
            <router-view />
          </keep-alive>
        </transition>
      </div>
    </div>
  </div>
</template>

<script>
import Header from './header.vue';
import Navbar from './navbar.vue';

export default {
  name: 'layout',
  components: {
    Header,
    Navbar
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/common-variables';

.layout {
  // 头部导航高度 = $header-height，padding-top 是让 layout-body 能够高度 100%
  padding-top: $header-height;
  .header {
    margin-top: -$header-height;
  }
  h1 {
    text-align: center;
    font-size: 2rem;
  }
}
</style>
