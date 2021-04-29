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