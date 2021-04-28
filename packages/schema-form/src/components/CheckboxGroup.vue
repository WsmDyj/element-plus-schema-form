
<template>
  <el-checkbox-group v-model="state" v-bind="attrs">
    <el-checkbox
      v-for="item in getOptions"
      :label="item.value"
      :key="item.value"
    >
      {{item.label}}
    </el-checkbox>
  </el-checkbox-group>
</template>
<script lang='tsx'>
import { computed, defineComponent, watch } from 'vue'
import { useAttrs } from '../hooks/useAttrs'
import { useRuleFormItem } from '../hooks/useFormItem'
import { isString } from '../helper'

export default defineComponent({
  props: {
    value: { // 自定义属性
      type: Array,
      default: () => []
    },
    field: {
      type: String,
      default: ''
    },
    options: {
      type: Array ,
      default: () => []
    },
    type: {
      type: String,
      default: ''
    },
    border: {
      type: Boolean,
      default: false
    },
    size: {
      type: String,
      default: ''
    },
    formValues: {
      type: Object,
      default: () => {}
    }
  },
  inheritAttrs: false,
  setup (props) {
    // eslint-disable-next-line vue/no-setup-props-destructure
    const { model, field } = props.formValues
    const attrs = useAttrs({ excludeKeys: ['modelValue'] })

    // 嵌入到表单中，只需使用钩子绑定来执行表单验证
    const [state, setState] = useRuleFormItem(props)

    // 排除初始化值不在选项组里
    const initState = computed(() => {
      const { formValues, options } = props
      if (!formValues.schema.defaultValue) return
      let opt = [], def = formValues.schema.defaultValue,
        isStringArr = options.some((item) => isString(item))

      if (isStringArr) opt = options
      else options.forEach(item => { opt.push(item.value)})

      for (let val of def) {
        if (!opt.includes(val)) return []
      }
      return def
    })
    watch(
      () => model[field],
      (val) => {
        setState(val || initState.value)
      }
    )
    if (initState.value && Array.isArray(initState.value)) {
      setState(initState.value)
    }

    const getOptions = computed(() => {
      const { options } = props
      if (!options || options?.length === 0) return []

      const isStringArr = options.some((item) => isString(item))
      if (!isStringArr) return options

      return options.map((item) => ({ label: item, value: item }))
    })
    return { state, attrs, getOptions }
  }
})
</script>

