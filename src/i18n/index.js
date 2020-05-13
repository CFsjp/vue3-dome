import Vue from 'vue';
import VueI18n from 'vue-i18n';
Vue.use(VueI18n);
// 语言插件
// 引入各个语言配置文件;
import zh from './languages/zh-CN';
import en from './languages/en-EN';

const i18n = new VueI18n({
  locale: 'zh', // 默认中文
  // 添加多语言
  messages: {
    zh,
    en
  },
  silentFallbackWarn: true
});
// 暴露出去
export default i18n;
/*
如果是element-ui 的，在要翻译的前面加上冒号
比如：label="用户姓名" 就改成 :label="$t('order.userName')"

如果是html 显示的，就改用以下写法：
直接写成 {{$t('order.userName')}},就会直接去往翻译脚本里面自动匹配。
*/
