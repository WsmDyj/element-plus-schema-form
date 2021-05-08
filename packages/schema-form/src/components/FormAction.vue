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
      <el-link
        href="javascript:void(0)"
        :underline="false"
        class="options-advance"
        v-if="showAdvancedButton && !hideAdvanceBtn"
        @click="toggleAdvanced"
      >
        {{ isAdvanced ? '收取' : '展开'}}
        <i :class="isAdvanced ? 'el-icon-arrow-up' : 'el-icon-arrow-down'"></i>
      </el-link>
    </el-form-item>
  </el-col>
</template>
<script>
import { computed, defineComponent, ref } from 'vue'
import { useFormContext } from '../hooks/useFormContext'
export default defineComponent({
  props: {
    actionColOptions: {
      type: Object,
      default: () => {}
    },
    isAdvanced: {
      type: Boolean,
      default: true
    },
    hideAdvanceBtn: {
      type: Boolean,
      default: true
    },
    showActionButtonGroup: {
      type: Boolean,
      default: true
    },
    textAlign: {
      type: String,
      default: 'left'
    },
    showAdvancedButton: {
      type: Boolean,
      default: true
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
  emits: ['toggle-advanced'],
  setup (props, {emit}) {
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

    function toggleAdvanced () {
      emit('toggle-advanced')
    }
    return {
      actionColOpt,
      getSubmitBtnOptions,
      getResetBtnOptions,
      toggleAdvanced,
      ...useFormContext()
    }
  }
})
</script>
<style lang="less" scoped>
.options-advance {
  padding-left: 10px;
  cursor: default;

}
</style>
