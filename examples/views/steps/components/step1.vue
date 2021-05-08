<template>
  <div class="step1">
    <div class="step1-form">
      <SchemaForm @register="register" />
    </div>
  </div>
</template>
<script>
import { defineComponent } from 'vue'
import { SchemaForm, useForm } from '../../../../packages/schema-form/index'
import { step1Schemas } from '../data'
export default defineComponent({
  components: {
    SchemaForm
  },
  emits: ['next'],
  setup(_, { emit }) {
    const [register, { validate }] = useForm({
      schemas: step1Schemas,
      showResetButton: false,
      labelWidth: "100px",
      submitButtonOptions: {
        text: '下一步',
      },
      submitFunc: customSubmitFunc,
    });

    async function customSubmitFunc() {
      try {
        const values = await validate();
        emit('next', values);
      } catch (error) {}
    }

    return { register }
  }
})
</script>
<style lang="less" scoped>
  .step1 {
    &-form {
      width: 450px;
      margin: 0 auto;
    }
  }
</style>
