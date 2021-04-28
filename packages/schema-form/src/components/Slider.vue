<template>
  <el-slider v-bind="attrs" v-model="state" />
</template>
<script>
import { defineComponent } from 'vue'
import { useAttrs } from '../hooks/useAttrs'
import { useRuleFormItem } from '../hooks/useFormItem'
export default defineComponent({
  setup (props) {
    const attrs = useAttrs({ excludeKeys: ['modelValue'] })
    const [state] = useRuleFormItem(props)
    return { attrs, state }
  }
})
</script>
