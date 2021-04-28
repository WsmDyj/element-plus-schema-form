<template>
  <el-select :loading="loading" @visible-change="visibleChange" v-model:value="state" v-bind="attrs">
     <el-option
      v-for="(item, idx) in getOptions"
      :key="item[optionKey.value] + idx"
      :label="item[optionKey.label]"
      :value="item[optionKey.value]"
      :disabled="!!item[optionKey.disabled]"
    >
    <span>{{ item[optionKey.label] }}</span>
    </el-option>
  </el-select>
</template>
<script>
import { computed, defineComponent, watchEffect, ref, unref } from 'vue'
import { isFunction } from '../helper'
import { useAttrs } from '../hooks/useAttrs'
import { useRuleFormItem } from '../hooks/useFormItem'
export default defineComponent({
  name: 'ApiSelect',
  props: {
    value: {
      type: String
    },
    options: {
      type: Array ,
      default: () => []
    },
    api: {
      type: Function,
      default: null
    },
    // api params
    params: {
      type: Object ,
      default: () => {}
    },
    optionKey: {
      type: Object,
      default: function () {
        return {
          label: 'label',
          value: 'value',
          disabled: 'disabled'
        }
      }
    },
    immediate: {
      type: Boolean,
      default: true
    }
  },
  setup (props) {
    const loading = ref(false)
    const apiOptions = ref([])
    const attrs = useAttrs()
    const isFirstLoad = ref(true)
    // 嵌入到表单中，只需使用钩子绑定来执行表单验证
    const [state] = useRuleFormItem(props)
    const getOptions = computed(() => {
      const { options } = props
      if (!options || options?.length === 0) return unref(apiOptions)
      return options
    })
    watchEffect(() => {
      props.immediate && fetch()
    })
    async function fetch () {
      const api = props.api
      if (!api || !isFunction(api)) return
      try {
        loading.value = true
        const res = await api(props.params)
        apiOptions.value = res
      } catch (error) {
        console.log(error)
      } finally {
        loading.value = false
      }
    }
    async function visibleChange () {
      if (!props.immediate && unref(isFirstLoad)) {
        await fetch()
        isFirstLoad.value = false
      }
    }
    return { loading, state, getOptions, attrs, visibleChange }
  }
})
</script>
