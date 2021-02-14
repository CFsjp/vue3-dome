<template>
  <el-dialog title="提示" v-model="dialogVisible" width="30%">
    <span>这是一段信息</span>
  </el-dialog>
</template>

<script lang="ts">
import { defineComponent, onMounted, toRef } from 'vue'

export default defineComponent({
  name: 'Home',
  props: {
    visible: {
      type: Boolean,
      default: false
    }
  },
  setup(props) {
    const dialogVisible = toRef(props, 'visible')

    onMounted(() => {
      console.log('开始请求数据')
    })

    return { dialogVisible }
  }
})
</script>

<style lang="scss" scoped></style>
