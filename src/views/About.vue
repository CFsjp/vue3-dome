<template>
  <div class="about">
    <h1>This is an about page</h1>
    <h2>{{ name }}</h2>
    <h2>{{ str }}</h2>
    <h2>{{ love }}</h2>
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import { hook2 } from '../hook/hook2'
import { useMsg } from '../hook/tip-message'

export default defineComponent({
  setup() {
    const name = ref('王亚兰')

    const { love } = hook2()
    const { str } = useMsg()
    // honk中的同一生命周期按照顺序来，谁在上面谁先运行

    return {
      name,
      str,
      love
    }
  }
})
</script>
<style lang="scss" scoped></style>
