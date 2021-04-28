
/*
* 重置扩展组件的state
* CheckboxGroup：一定需要初始化为一个数组否则会报错
*/
import { reactive, readonly, computed, getCurrentInstance, watchEffect } from 'vue'
import { isEqual } from 'lodash-es'

export function useRuleFormItem (props, key = 'value', changeEvent = 'change') {
  const instance = getCurrentInstance()
  const emit = instance.emit


  const innerState = reactive({
    value: props[key]
  })

  const defaultState = readonly(innerState)

  const setState = (val) => {
    innerState.value = val
  }

  watchEffect(() => {
    innerState.value = props[key]
  })
  const state = computed({
    get () {
      return innerState.value
    },
    set (value) {
      if (isEqual(value, defaultState.value)) return
      innerState.value = value
      emit(changeEvent, value)
    }
  })
  return [state, setState, defaultState]
}