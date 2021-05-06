<template>
  <el-form v-bind="{ ...$attrs, ...$props }" ref="formElRef" :model="formModel">
    <el-row v-bind="getRowWrapStyle">
      <template v-for="schema in getSchema" :key="schema.field">
        <SchemaFormItem
          :schema="schema"
          :formProps="getProps"
          :formElRef="formElRef"
          :formActionType="formActionType"
          :formModel="formModel"
          :allDefaultValues="defaultValueRef"
          :setFormModel="setFormModel"
        >
          <template #[item]="data" v-for="item in Object.keys($slots)">
            <slot :name="item" v-bind="data"></slot>
          </template>
        </SchemaFormItem>
      </template>
      <FormAction v-bind="{ ...getProps }">
      </FormAction>
    </el-row>
  </el-form>
</template>
<script>
import { defineComponent, reactive, computed, ref,unref, watch, onMounted } from 'vue'
import { basicProps } from './props'
import SchemaFormItem from './components/schemaFormItem.vue'
import { deepMerge } from './helper'
import { useFormValues } from './hooks/useFormValues'
import { useFormEvents } from './hooks/useFormEvents'
import { createFormContext } from './hooks/useFormContext'
import FormAction from './components/FormAction.vue'
export default defineComponent({
  components: { SchemaFormItem, FormAction },
  props: basicProps,
  emits: ['submit', 'reset', 'register'],
  setup (props, { emit }) {
    const formModel = reactive({})
    const schemaRef = ref(null) // 动态删除表单项
    const formElRef = ref(null)
    const propsRef = ref({}) // 外部定义表单属性
    const defaultValueRef = ref({})

    const getProps = computed(() => {
      return { ...props, ...unref(propsRef) }
    })

    const getRowWrapStyle = computed(() => {
      const { baseRowStyle = {} } = unref(getProps)
      return baseRowStyle
    })

    const getSchema = computed(() => {
      const schemas = unref(schemaRef) || unref(getProps).schemas
      return schemas
    })

    const {
      initDefault, handleFormValues
    } = useFormValues({
      defaultValueRef,
      getSchema,
      formModel
    })

    const {
      setFieldsValue,
      handleSubmit,
      validate,
      validateFields,
      clearValidate,
      removeSchemaByFiled,
      appendSchemaByField,
      resetFields,
      getFieldsValue
    } = useFormEvents({
      emit,
      formElRef,
      getProps,
      formModel,
      schemaRef,
      getSchema,
      defaultValueRef,
      handleFormValues
    })

    // 注册事件
    createFormContext({
      resetAction: resetFields,
      submitAction: handleSubmit
    })

    // 监听 formModel 属性用于数据回显
    watch(
      () => unref(getProps).model,
      () => {
        const { model } = unref(getProps)
        if (!model) return
        setFieldsValue(model)
      },
      {
        immediate: true
      }
    )

    // 监听 getSchema 属性 初始化
    watch(
      () => { getSchema.value },
      (schema) => {
        if (schema.length >= 0) {
          initDefault()
        }
      }
    )

    function setFormModel (key, value) {
      formModel[key] = value
    }

    // 通过外部函数设置表单参数
    async function setProps (formProps) {
      propsRef.value = deepMerge(unref(propsRef) || {}, formProps)
    }

    const formActionType = {
      getFieldsValue,
      setProps,
      validate,
      validateFields,
      clearValidate,
      setFieldsValue,
      resetFields,
      removeSchemaByFiled,
      appendSchemaByField,
      submit: handleSubmit
    }

    onMounted(() => {
      emit('register', formActionType)
      initDefault()
    })
    return {
      formElRef,
      formModel,
      formActionType,
      getSchema,
      getRowWrapStyle,
      getProps,
      defaultValueRef,
      setFormModel,
      ...formActionType
    }
  }
})
</script>
