<template>
  <SchemaForm />
</template>

<script>
import { defineComponent, ref } from 'vue'
import SchemaForm from './components/schema-form.vue'
export default defineComponent({
  components: {
    SchemaForm
  },
  setup () {
    const commponent = ref('SchemaForm')
    return {
      commponent
    }
  }
})
</script>

