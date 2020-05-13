<template>
  <div class="header">
    <h1>{{ $t('hd') }}</h1>
    <el-dropdown class="xy" @command="changeLangEvent">
      <el-button type="primary">
        {{ $t('lang') }}<i class="el-icon-arrow-down el-icon--right"></i>
      </el-button>
      <el-dropdown-menu slot="dropdown">
        <el-dropdown-item command="1">{{ $t('CN') }}</el-dropdown-item>
        <el-dropdown-item command="2">{{ $t('EN') }}</el-dropdown-item>
      </el-dropdown-menu>
    </el-dropdown>
  </div>
</template>

<script>
export default {
  mounted() {
    console.log(process.env.NODE_ENV);
  },
  methods: {
    // 切换语言
    changeLangEvent(command) {
      if (command === '1') {
        this.$i18n.locale = 'zh-CN'; // 关键语句
      } else if (command === '2') {
        this.$i18n.locale = 'en-US'; // 关键语句
      }
    }
  }
};
</script>

<style lang="scss" scoped>
@import '~@/styles/common-variables.scss';
.header {
  position: relative;
  background: $color-info;
  color: white;
  height: $header-height;
  h1 {
    text-align: center;
    line-height: $header-height;
  }
  .xy {
    position: absolute;
    top: 18%;
    right: 5%;
  }
}
</style>
