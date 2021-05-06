/*
* 通过useForm注册schema-form组件获取组件的实例
*/
import { nextTick, ref, unref, onUnmounted, watch } from 'vue'
import { getDynamicProps } from '../helper'

export function useForm (props) {
  const formRef = ref(null)
  const loadedRef = ref(null)

  async function getForm () {
    const form = unref(formRef)
    // 这里获取DOM的value是旧值
    await nextTick()
    // nextTick 后获取DOM的value是更新后的值
    return form
  }

  function register (instance) {
    onUnmounted(() => {
      formRef.value = null
      loadedRef.value = null
    })
    if (unref(loadedRef) && instance === unref(formRef)) return
    formRef.value = instance
    loadedRef.value = true
    watch(
      () => props,
      () => {
        props && instance.setProps(getDynamicProps(props))
      },
      {
        immediate: true,
        deep: true
      }
    )
  }
  const methods = {
    setProps: async (formProps) => {
      const form = await getForm()
      form.setProps(formProps)
    },
    getFieldsValue: () => {
      return unref(formRef).getFieldsValue()
    },
    resetFields: () => {
      return unref(formRef).resetFields()
    },
    validateFields: (fields) => {
      return unref(formRef).validateFields(fields)
    },
    validate: async () => {
      const form = await getForm()
      return form.validate()
    },
    clearValidate: async (name) => {
      const form = await getForm()
      form.clearValidate(name)
    },
    setFieldsValue: async (values) => {
      const form = await getForm()
      form.setFieldsValue(values)
    },
    removeSchemaByFiled: async (field) => {
      unref(formRef).removeSchemaByFiled(field)
    },
    appendSchemaByField: async (schema, prefixField, first) => {
      const form = await getForm()
      form.appendSchemaByField(schema, prefixField, first)
    },
    submit: async () => {
      const form = await getForm()
      return form.submit()
    }
  }
  return [register, methods]
}