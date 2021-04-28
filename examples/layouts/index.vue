<template>
  <el-container>
    <el-header>
      <PageHeader/>
    </el-header>
    <el-main>
      <PageMain />
    </el-main>
  </el-container>
</template>
<script>
import { defineComponent } from 'vue'
import PageMain from './components/main.vue'
import PageHeader from './components/header.vue'
export default defineComponent({
  components: {
    PageMain,
    PageHeader
  },
  setup () {

  }
})
</script>

<style lang="less">
html, body {
  padding: 0;margin: 0;
}
.el-header {
  line-height: 60px;
  padding: 0 5%;
  height: 60px;
  border-bottom: 1px solid #e9ebf5;
}
.el-tabs__nav-wrap::after {
  display: none;
}
.el-main {
  padding: 0;
}
</style>
