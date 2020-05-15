<template>
  <div>
    <h3>dashboard page</h3>
    <el-button type="primary" size="midel" @click="getdata">
      getData
    </el-button>
  </div>
</template>

<script>
import { get } from 'api/index';
export default {
  methods: {
    async getdata() {
      const url = '1.json';
      const params = { code: 200, name: 'chengfeng' };
      const res = await get(url, params);
      console.log(res);
    }
  },
  mounted() {
    this.getdata();
  }
};
</script>
<style lang="scss" scoped></style>
