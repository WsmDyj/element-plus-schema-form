import {
  provide,
  inject,
  reactive,
  readonly as defineReadonly
} from 'vue'

export function createContext (context, key = Symbol(), options = {}) {
  const { readonly = true, createProvider = false, native = false } = options

  const state = reactive(context)
  const provideData = readonly ? defineReadonly(state) : state
  !createProvider && provide(key, native ? context : provideData)

  return {
    state
  }
}

export function useContext (key = Symbol(), defaultValue) {
  return inject(key, defaultValue)
}