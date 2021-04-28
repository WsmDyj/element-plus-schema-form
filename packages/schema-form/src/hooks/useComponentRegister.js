/*
* 注册外部组件
*/
import { tryOnUnmounted } from '@vueuse/core'
import { add, del } from '../componentMap'

export function useComponentRegister (compName, comp) {
  add(compName, comp)
  tryOnUnmounted(() => {
    del(compName)
  })
}