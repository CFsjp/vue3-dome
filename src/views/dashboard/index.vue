<template>
  <div>
    <h3>dashboard page</h3>
    <el-button type="primary" size="midel" @click.stop="getdata">
      getData
    </el-button>
  </div>
</template>

<script>
import { example } from '@/api/example';

export default {
  methods: {
    getdata() {
      //  let _this = this;
      example({}).then((res) => {
        console.log(res);
      });
    }
  },
  mounted() {}
};
</script>
<style lang="scss" scoped></style>
