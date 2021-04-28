/*
* 过滤掉一些属性
*/
import { getCurrentInstance, reactive, shallowRef, watchEffect } from 'vue'

const DEFAULT_EXCLUDE_KEYS = ['class', 'style']
const LISTENER_PREFIX = /^on[A-Z]/

export function entries (obj) {
  return Object.keys(obj).map(key => [key, obj[key]])
}

export function useAttrs (params = {}) {
  const instance = getCurrentInstance() // getCurrentInstance 支持访问内部组件实例
  if (!instance) return {}
  const { excludeListeners = false, excludeKeys = [] } = params
  const attrs = shallowRef({}) // 创建一个 ref，它跟踪自己的 .value 更改，但不会使其值成为响应式的。
  const allExcludeKeys = excludeKeys.concat(DEFAULT_EXCLUDE_KEYS)

  // 监听attrs
  instance.attrs = reactive(instance.attrs)
  watchEffect(() => {
    const res = entries(instance.attrs).reduce((acm, [key, val]) => {
      if (!allExcludeKeys.includes(key) && !(excludeListeners && LISTENER_PREFIX.test(key))) {
        acm[key] = val
      }
      return acm
    }, {})
    attrs.value = res
  })
  return attrs
}