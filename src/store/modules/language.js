/**
 * language store
 * @description
 * 主模块的状态存储
 */
export default {
  namespaced: true, // 解决不同模块命名冲突的问题
  state: {
    language: 'zh-CN'
  },
  mutations: {
    setLanguage(state, data) {
      state.language = data;
    }
  },
  actions: {
    setLanguage({ commit }, data) {
      commit('setLanguage', data);
    }
  }
};
// 模块下的映射及方法调用
// computed: {
//   ...mapState({
//     language: (state) => state.language.language
//   })
// },
// this.$store.dispatch('language/setLanguage', this.$i18n.locale);
