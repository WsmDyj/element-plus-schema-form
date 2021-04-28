<template>
  <el-container class="schema-container">
    <el-aside class="schema-aside" width="200px">
      <el-menu
        default-active="Params"
        class="schema-aside"
        @select="onSelect"
      >
      <el-menu-item index="Params">
        <template #title>参数名</template>
      </el-menu-item>
      <el-menu-item index="Methods">
        <template #title>方法名</template>
      </el-menu-item>
    </el-menu>
    </el-aside>
    <el-main class="schema-main">
      <component :is="curTab"></component>
    </el-main>
  </el-container>
</template>
<script>
import { defineComponent, ref } from 'vue'
import Methods from './components/methods.vue'
import Params from './components/params.vue'
export default defineComponent({
  components: { Methods, Params },
  setup () {
    const curTab = ref('Params')
    function onSelect (e) {
      curTab.value = e
    }
    return { curTab, onSelect }
  }
})
</script>
<style lang="less" scoped>
.schema-container {
  height: calc(100vh - 60px);
  padding: 0px 5%;
}
.el-menu-item {
  font-size: 18px;
}
.schema-alert {
  margin: 10px 0 20px 0;
}
.schema-aside {
  font-size: 20px;
  height: 100%;
  height: calc(100vh - 60px);
}
.schema-main {
  margin: 30px 40px;
}
.mb-20 {
  margin-bottom: 20px;
}
</style>

