<template>
  <div class="home">
    <h1>home页面</h1>
    <img alt="Vue logo" src="../assets/logo.png" />
    <el-button @click="dialogVisible = !dialogVisible">
      点击打开 Dialog
    </el-button>
    <el-table :data="tableData" border style="width: 70%">
      <el-table-column prop="date" label="日期" width="180"> </el-table-column>
      <el-table-column prop="name" label="姓名" width="180"> </el-table-column>
      <el-table-column prop="address" label="地址"> </el-table-column>
    </el-table>
    <el-button @click="changeData">
      changeData
    </el-button>
    <ul class="ul">
      <li v-for="item in list" :key="item.title">
        <p class="title">{{ item.title }}:</p>
        <span>{{ item.level }}</span>
      </li>
    </ul>
    <son-dialog v-if="dialogVisible" :visible="dialogVisible" />
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, ref } from 'vue'
import { useRouter, useRoute } from 'vue-router'
import { useStore } from 'vuex'
import SonDialog from '@/components/dialog.vue'
import '@/study/tsStudy.ts'

export default defineComponent({
  name: 'Home',
  components: { SonDialog },
  setup() {
    const router = useRouter() // 获取路由对象
    const route = useRoute() // 获取路由参数对象
    const store = useStore() // 获取vuex对象
    const dialogVisible = ref(false)
    const tableData = reactive([
      {
        date: '2016-05-02',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1518 弄'
      },
      {
        date: '2016-05-04',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1517 弄'
      },
      {
        date: '2016-05-01',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1519 弄'
      },
      {
        date: '2016-05-03',
        name: '王小虎',
        address: '上海市普陀区金沙江路 1516 弄'
      }
    ])
    const changeData = () => {
      tableData[1].name = '张三'
    }
    const list = reactive([
      { title: '张三丰', level: '凡人巅峰' },
      { title: '叶凡', level: '大帝之上' },
      { title: '石昊', level: '仙帝' }
    ])

    return { router, route, store, dialogVisible, tableData, changeData, list }
  }
})
</script>

<style lang="scss" scoped>
.ul {
  text-align: left;

  .title {
    display: inline-block;
    text-align: justify;
  }
}
</style>
