
import dayjs from 'dayjs'
import { unref } from 'vue'
export const isFunction = (val) => {
  return typeof val === 'function'
}

export const isNumber = (val) => {
  return typeof val === 'number'
}
export const isObject = (val) => {
  return typeof val == 'object'
}
export const isString = (val) => {
  return typeof val == 'string'
}
export const isNullOrUnDef = (val) => {
  return val === null || typeof val === 'undefined'
}

export const isBoolean = (val) => {
  return typeof val === 'boolean'
}

export function handleInputNumberValue (component, val) {
  if (!component) return val
  if (['Input', 'InputPassword', 'InputSearch', 'InputTextArea'].includes(component)) {
    return val && isNumber(val) ? `${val}` : val
  }
  return val
}

export const genType = () => {
  return ['DatePicker', 'TimeSelect', 'RangePicker', 'TimePicker']
}

export function createPlaceholderMessage (component) {
  if (component.includes('Input')) {
    return '请输入'
  }
  if (component.includes('DatePicker')) {
    return '请选择时间'
  }
}

/**
 * 格式化时间
 */
const DATE_FORMAT = 'YYYY-MM-DD '

export const dateUtil = (date = null, formate = DATE_FORMAT) => {
  return dayjs(new Date(date)).format(formate)
}

/**
 * @description:  获取插槽以防止空错误
 */
export function getSlot (slots, slot = 'default', data) {
  if (!slots || !Reflect.has(slots, slot)) {
    return null
  }
  if (!isFunction(slots[slot])) {
    console.log(`${slot} is not a function!`)
    return null
  }
  const slotFn = slots[slot]

  if (!slotFn) return null
  return slotFn(data)
}

export function deepMerge (src = {}, target = {}) {
  let key = ''
  for (key in target) {
    src[key] = isObject(src[key]) ? deepMerge(src[key], target[key]) : (src[key] = target[key])
  }
  return src
}

export function getDynamicProps (props) {
  const ret = {}
  Object.keys(props).map(key => {
    ret[key] = unref(props)[key]
  })
  return ret
}
/**
 * 时间字段
 */
export const dateItemType = genType()