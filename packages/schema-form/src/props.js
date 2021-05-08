import VueTypes, {oneOf, arrayOf, object, objectOf} from 'vue-types'
export const basicProps = {
  // 表单配置规则
  schemas: {
    type: Array,
    default: () => [],
  },
  // 时间
  fieldMapToTime: {
    type: Array,
    default: () => []
  },
  rules: {
    type: Object,
    default: () => {},
  },
  // 显示重置按钮
  showResetButton: VueTypes.bool.def(true),
  // 重置按钮属性
  resetButtonOptions: objectOf(String),
  // 显示提交按钮
  showSubmitButton: VueTypes.bool.def(true),
  // 提交按钮属性
  submitButtonOptions: objectOf(String),
  // 是否显示操作按钮
  showActionButtonGroup: VueTypes.bool.def(true),
  // 是否显示展开收起按钮
  showAdvancedButton: VueTypes.bool.def(false),
  // 操作按钮位置
  textAlign: oneOf(['left', 'right']).def('left'),
  // 超过3行自动折叠
  autoAdvancedLine: VueTypes.number.def(3),
  // form自带的一些属性
  labelPosition: oneOf(['right', 'left', 'top']).def('right'),
  labelWidth: VueTypes.string,
  inline: VueTypes.bool.def(false),
  size: oneOf(['', 'medium', 'small', 'mini']).def('medium'),
}