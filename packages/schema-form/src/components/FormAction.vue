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
      <el-button
        type="text"
        :underline="false"
        class="options-advance"
        v-if="showAdvancedButton && !hideAdvanceBtn"
        @click="toggleAdvanced"
      >
        {{ isAdvanced ? '收取' : '展开'}}
        <span :class="getClass">
          <i class="el-icon-arrow-down"></i>
        </span>
      </el-button>
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
      const { actionColOptions, showAdvancedButton } = props
      const actionColOpt = {
        ...actionColOptions
      }
      return actionColOpt
    })
    const getClass = computed(() => {
      return ['basic-arrow',
        {
          'basic-arrow--active': props.isAdvanced
        }
      ]
    })
    const getSubmitBtnOptions = computed(() => {
      return Object.assign({ text: props.showAdvancedButton ? '查询' : '提交' }, props.submitButtonOptions)
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
      getClass,
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
.basic-arrow {
  display: inline-block;
  transform: rotate(0deg);
  transition: all 0.3s ease 0.1s;
  transform-origin: center center;

  &--active {
    transform: rotate(180deg);
  }
}
</style>
