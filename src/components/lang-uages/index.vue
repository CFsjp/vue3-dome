<template>
  <div class="language">
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
// import { mapState, mapMutations, mapActions } from 'vuex';
import { mapState, mapActions } from 'vuex';
export default {
  computed: {
    ...mapState({
      language: (state) => state.language.language
    })
  },
  mounted() {
    console.log('**********************');
    console.log('当前环境的语言是：' + this.language);
    console.log('**********************');
  },
  methods: {
    // 切换语言
    changeLangEvent(command) {
      if (command === '1') {
        this.$i18n.locale = 'zh-CN'; // 关键语句
      } else if (command === '2') {
        this.$i18n.locale = 'en-US'; // 关键语句
      }
      this.changeLanguage(this.$i18n.locale);
      console.log('当前环境的语言是：' + this.language);
    },
    ...mapActions({
      changeLanguage: 'language/setLanguage' // modules文件夹下这样引入
    })
  }
};
</script>

<style lang="scss" scoped></style>
