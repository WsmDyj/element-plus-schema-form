<template>
  <div class="step1">
    <div class="step1-form">
      <SchemaForm label-position="right"
        label-width="100px" @register="register"></SchemaForm>
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

    h3 {
      margin: 0 0 12px;
      font-size: 16px;
      line-height: 32px;
      color: #444;
    }

    h4 {
      margin: 0 0 4px;
      font-size: 14px;
      line-height: 22px;
      color: #444;
    }

    p {
      color: #444;
    }
  }

  .pay-select {
    width: 20%;
  }

  .pay-input {
    width: 70%;
  }
</style>
