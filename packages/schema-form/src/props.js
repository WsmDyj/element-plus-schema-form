export const basicProps = {
  // 表单配置规则
  schemas: {
    type: Array,
    default: () => []
  },
  size: {
    type: String,
    default: '',
    validator: function (value) {
      return ['', 'medium', 'small', 'mini'].includes(value)
    }
  },
  fieldMapToTime: {
    type: Array,
    default: () => []
  },
  baseRowStyle: {
    type: Object,
    default: () => {}
  },
  // 显示重置按钮
  showResetButton: {
    type: Boolean,
    default: true
  },
  // 重置按钮属性
  resetButtonOptions: {
    type: Object,
    default: () => {}
  },
  // 显示提交按钮
  showSubmitButton: {
    type: Boolean,
    default: true
  },
  // 提交按钮属性
  submitButtonOptions: {
    type: Object,
    default: () => {}
  },
  // 是否显示操作按钮
  showActionButtonGroup: {
    type: Boolean,
    default: true
  },
  // 操作按钮位置
  textAlign: {
    type: String,
    default: 'left',
    validator: function (value) {
      return ['left', 'right'].includes(value)
    }
  }
}