<template>
  <div>
    <pageHeader />
    <SchemaForm />
  </div>
</template>

<script>
import { defineComponent, ref } from 'vue'
import pageHeader from '../../components/page-header.vue'
import SchemaForm from './components/schema-form.vue'
export default defineComponent({
  components: {
    SchemaForm,
    pageHeader
  },
  setup () {
    const commponent = ref('SchemaForm')
    return {
      commponent
    }
  }
})
</script>

