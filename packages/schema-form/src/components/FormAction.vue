<template>
  <el-col :style="{ textAlign: textAlign }" v-bind="actionColOpt" v-if="showActionButtonGroup">
    <el-form-item>
      <el-Button
        @click="resetAction"
        v-bind="getResetBtnOptions"
        v-if="showResetButton"
      >
        {{getResetBtnOptions.text}}
      </el-Button>
      <el-Button
        type="primary"
        v-bind="getSubmitBtnOptions"
        v-if="showSubmitButton"
        @click="submitAction"
      >
        {{getSubmitBtnOptions.text}}
      </el-Button>
    </el-form-item>
  </el-col>
</template>
<script>
import { computed, defineComponent } from 'vue'
import { useFormContext } from '../hooks/useFormContext'
export default defineComponent({
  props: {
    actionColOptions: {
      type: Object,
      default: () => {}
    },
    showActionButtonGroup: {
      type: Boolean,
      default: true
    },
    textAlign: {
      type: String,
      default: 'left'
    },
    showResetButton: {
      type: Boolean,
      default: true
    },
    resetButtonOptions: {
      type: Object,
      default: () => {}
    },
    showSubmitButton: {
      type: Boolean,
      default: true
    },
    submitButtonOptions: {
      type: Object,
      default: () => {}
    }
  },
  setup (props) {
    const actionColOpt = computed(() => {
      const { actionColOptions } = props
      const actionColOpt = {
        ...actionColOptions
      }
      return actionColOpt
    })
    const getSubmitBtnOptions = computed(() => {
      return Object.assign({ text: '提交' }, props.submitButtonOptions)
    })
    const getResetBtnOptions = computed(() => {
      return Object.assign({ text: '重置' }, props.resetButtonOptions)
    })
    return {
      actionColOpt,
      getSubmitBtnOptions,
      getResetBtnOptions,
      ...useFormContext()
    }
  }
})
</script>
