
<template>
<schema-form label-position="right"
        label-width="100px" @register="register" />
</template>

<script>
import { defineComponent } from 'vue'
import { SchemaForm, useForm } from '../../../../packages/schema-form/index'
import { step2Schemas } from '../data'
export default defineComponent({
  components: {
    SchemaForm
  },
  emits: ['next', 'prev'],
  setup(_, {emit}) {
    const [register, { validate, setProps }] = useForm({
      schemas: step2Schemas,
      resetButtonOptions: {
        text: '上一步',
      },
      submitButtonOptions: {
        text: '提交',
      },
      resetFunc: customResetFunc,
      submitFunc: customSubmitFunc,
    })
    async function customResetFunc() {
      emit('prev')
    }
    async function customSubmitFunc() {
      try {
          const values = await validate();
          setProps({
            submitButtonOptions: {
              loading: true,
            },
          })
          setTimeout(() => {
            setProps({
              submitButtonOptions: {
                loading: false,
              },
            })
            emit('next', values);
          }, 1500);
        } catch (error) {}
    }
    return {
      register
    }
  }
})
</script>

<style>

</style>
