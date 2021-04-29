<template>
  <div>
    <pageHeader />
    <pageNav />
    <div class="doc-content">
    <div class="doc-content-document" v-highlight>
      <router-view />
    </div>
  </div>
  </div>
</template>

<script>
import { defineComponent } from 'vue'
import pageHeader from '../../components/page-header.vue'
import pageNav from '../../components/page-nav.vue'
export default defineComponent({
  components: {
    pageHeader,
    pageNav
  },
  setup () {
  }
})
</script>
<style lang="less" scoped>
.doc {
  &-content {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;

    &-document {
      margin-top: 60px;
      min-height: 800px;

    }
  }
}
</style>

