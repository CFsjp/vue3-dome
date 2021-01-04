<template>
  <div class="home">
    <h1>home页面</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'

export default defineComponent({
  name: 'Home',
  setup(props, context) {
    const router = useRouter() // 获取路由对象
    const route = useRoute() // 获取路由参数对象
    const store = useStore() // 获取vuex对象

    onMounted(() => {
      console.log(router)
      console.log(route)
      console.log(store.state.count)
    })

    return { router, route, store }
  }
})
</script>
