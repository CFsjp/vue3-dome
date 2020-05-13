<template>
  <div class="navbar">
    <h1>{{ $t('nb') }}</h1>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped>
@import '~@/styles/common-variables.scss';
.navbar {
  width: $aside-width;
  background: $color-danger;
}
h1 {
  text-align: center;
  font-size: 2rem;
}
</style>
