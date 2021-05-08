<script lang="tsx">
import { computed, defineComponent, unref } from 'vue'
import { componentMap } from '../componentMap'
import { isFunction, isBoolean, createPlaceholderMessage, getSlot } from '../helper'
import { upperFirst, cloneDeep } from 'lodash-es'
import BasicHelp from './BasicHelp.vue'
export default defineComponent({
  components: { BasicHelp },
  name: 'SchemaFormItem',
  inheritAttrs: false,
  props: {
    schema: {
      type: Object,
      default: () => {}
    },
    formProps: {
      type: Object ,
      default: () => {}
    },
    formModel: {
      type: Object,
      default: () => {}
    },
    setFormModel: {
      type: Function,
      default: null
    },
    allDefaultValues: {
      type: Object ,
      default: () => {}
    },
    formActionType: {
      type: Object
    },
    formElRef: {
      type: Object
    }
  },
  setup (props, { slots }) {
    const getValues = computed(() => {
      const { formModel, schema, allDefaultValues } = props
      return {
        field: schema.field,
        model: formModel,
        values: {
          ...allDefaultValues,
          ...formModel
        },
        schema: schema
      }
    })

    // 定义执行函数
    const getComponentsProps = computed(() => {
      const { schema, formModel, formActionType } = props
      const { componentProps = {} } = schema
      if (!isFunction(componentProps)) {
        return componentProps
      }
      return componentProps({ schema, formModel, formActionType }) // 渲染函数
    })

    const getDisable = computed(() => {
      const { disabled: globDisabled } = props.formProps
      const { dynamicDisabled } = props.schema
      const { disabled: itemDisabled = false } = unref(getComponentsProps)
      let disabled = !!globDisabled || !!itemDisabled

      if (isBoolean(dynamicDisabled)) {
        disabled = dynamicDisabled
      }
      if (isFunction(dynamicDisabled)) {
        disabled = dynamicDisabled(unref(getValues))
      }
      return disabled
    })

    // 渲染form-item内容
    function renderComponent () {
      const { component, changeEvent = 'change', renderComponentContent, valueField, field } = props.schema

      const isCheck = component && ['Switch', 'Checkbox', 'CheckboxGroup'].includes(component)
      const isInput = component && ['Input'].includes(component)

      const Comp = componentMap.get(component)
      const propsData = {
        ...unref(getComponentsProps),
        disabled: unref(getDisable)
      }
      let placeholder = unref(getComponentsProps).placeholder || createPlaceholderMessage(component)
      propsData.placeholder = placeholder

      // propsData.formValues = getValues.value // 在级联和日期组件Non-Prop Attributes警告
      if (isCheck) {
        propsData.formValues = getValues.value
      }

      const eventKey = isInput ? 'onInput' : `on${upperFirst(changeEvent)}` // 设置监听事件

      const on = {
        [eventKey]: (e) => {
          if (propsData[eventKey]) { // 执行自定义函数
            propsData[eventKey](e)
          }
          const target = e ? e.target : null
          const value = target ? (isCheck ? target.checked : target.value) : e
          props.setFormModel(field, value)
        }
      }
      // 单独添加，防止日期、级联等组件添加onClear警告 non-props attributes
      if (isInput) {
        Object.assign(on, {
          onClear: () => {
            props.setFormModel(field, '')
          }
        })
      }
      const bindValue = {
        [valueField || 'modelValue']: props.formModel[field]
      }
      const compAttr = {
        ...propsData,
        ...on,
        ...bindValue
      }

      if (!renderComponentContent) { // input后缀
        return (
          <Comp {...compAttr} />
        )
      }
      const compSlot = isFunction(renderComponentContent)
        ? { ...renderComponentContent(unref(getValues)) }
        : {
          default: () => renderComponentContent
        }

      return (
        <Comp {...compAttr}>{compSlot}</Comp>
      )
    }
    // 处理表单项显示
    function getShow () {
      const { ifShow, show } = props.schema
      let isShow = true, isIfShow = true
      const { showAdvancedButton } = props.formProps
      const itemIsAdvanced = showAdvancedButton ? isBoolean(props.schema.isAdvanced) ? props.schema.isAdvanced : true : true
      if (isBoolean(show)) {
        isShow = show
      }
      if (isBoolean(ifShow)) {
        isIfShow = ifShow
      }
      if (isFunction(show)) {
        isShow = show(unref(getValues))
      }
      isShow = isShow && itemIsAdvanced
      return { isShow, isIfShow }
    }
    function handleRules () {
      const {
        rules: defRules = [],
        dynamicRules,
        required,
        label
      } = props.schema

      // 自定义校验规则
      if (isFunction(dynamicRules)) {
        return dynamicRules(unref(getValues))
      }
      // 默认required校验规则
      let rules = cloneDeep(defRules)
      if ((!rules || rules.length === 0) && required) {
        rules = [{ required, message: `${label}不为空`, trigger: 'change' }]
      }
      // 移除不显示的校验规则
      const requiredRuleIndex = rules.findIndex(
        (rule) => Reflect.has(rule, 'required') || Reflect.has(rule, 'validator')
      )
      if (requiredRuleIndex !== -1) {
        const { isShow } = getShow()
        if (!isShow) {
          rules = []
        }
      }
      return rules
    }
    function renderLabelHelpMessage () {
      const { label, helpMessage, helpComponentProps } = props.schema
      if (!helpMessage) return label
      return (
        <>
          {label}
          <BasicHelp content={helpMessage} {...helpComponentProps} />
        </>
      )
    }
    // 渲染组件
    function renderItem () {
      const { slot, render, field, labelWidth } = props.schema
      const getContent = () => {
        return slot
          ? getSlot(slots, slot, unref(getValues)) // 渲染slot
          : render
            ? render(unref(getValues))
            : renderComponent()
      }
      return (
        <el-form-item
          prop={field}
          rules={handleRules()}
          labelWidth={labelWidth}
          v-slots={{ label: () => renderLabelHelpMessage() }}
        >
          {getContent()}
        </el-form-item>
      )
    }
    return () => {
      const { colProps = {}, colSlot, renderColContent } = props.schema
      const { isShow, isIfShow } = getShow()
      const getContent = () => {
        return colSlot
          ? ''
          : renderColContent
            ? renderColContent()
            : renderItem()
      }
      return (
        isIfShow && (
          <el-col {...colProps} v-show={isShow}>
            {getContent()}
          </el-col>
        )
      )
    }
  }
})
</script>
