<script lang="tsx">
import { computed, defineComponent } from 'vue'
import { useRuleFormItem } from '../hooks/useFormItem'
import { useAttrs } from '../hooks/useAttrs'
import { isString } from '../helper'
export default defineComponent({
  name: 'RadioGroup',
  props: {
    value: {
      type: String
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
    options: {
      type: Array ,
      default: () => []
    }
  },
  setup (props) {
    const attrs = useAttrs()
    const [state] = useRuleFormItem(props)
    const getOptions = computed(() => {
      const { options } = props
      if (!options || options?.length === 0) return []

      const isStringArr = options.some((item) => isString(item))
      if (!isStringArr) return options

      return options.map((item) => ({ label: item, value: item }))
    })
    const compAttr = {
      ...attrs,
      'modelValue': state
    }
    function getContent () {
      const { type, border, size } = props
      return (
        getOptions.value.map((item) => {
          return type === 'button'
            ?
            <el-radio-button size={size} label={item.value}>{item.label}</el-radio-button>
            :
            <el-radio border={border} size={size} label={item.value}>{item.label}</el-radio>
        })
      )
    }
    return () => {
      return (
        <el-radio-group {...compAttr}>
          {getContent()}
        </el-radio-group>
      )
    }
  }
})
</script>
