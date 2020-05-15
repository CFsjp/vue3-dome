<template>
  <div class="header">
    <h1>{{ $t('hd') }}</h1>
  </div>
</template>

<script>
export default {
  mounted() {},
  methods: {}
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
