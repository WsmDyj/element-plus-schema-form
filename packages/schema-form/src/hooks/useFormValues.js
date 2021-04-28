import { isNullOrUnDef, isString, isObject } from '../helper'
import { unref, toRaw } from 'vue'
import { dateUtil } from '../helper'
export function useFormValues ({
  getSchema,
  defaultValueRef,
  formModel
}) {
  // 处理表单值
  function handleFormValues (values) {
    if (!isObject(values)) return {}
    const res = {}
    for (const item of Object.entries(values)) {
      let [, value] = item
      const [key] = item
      if (value instanceof Date) { // 处理单个时间格式
        const schema = unref(getSchema).find((item) => item.field === key)
        value = dateUtil(value, schema.valueFormate)
      }
      if (isString(value)) value = value.trim()
      res[key] = toRaw(value)
    }
    return handleRangeTimeValue(res)
  }
  // 处理时间段格式
  function handleRangeTimeValue (values) {
    const rangeSchema = unref(getSchema).find((item) => item.component === 'RangePicker')
    if (!rangeSchema || isNullOrUnDef(values[rangeSchema.field])) {
      return values
    }
    const { field, fieldMapToTime, valueFormate } = rangeSchema
    const value = toRaw(values[field])

    if (Array.isArray(value)) {
      const arr = []
      for (const ele of value) {
        arr.push(dateUtil(ele, valueFormate))
      }
      values[field] = arr
    }
    if (fieldMapToTime && Array.isArray(fieldMapToTime)) {
      const [startTimeKey, endTimeKey] = fieldMapToTime
      const [startTime, endTime] = value
      values[startTimeKey] = dateUtil(startTime, valueFormate)
      values[endTimeKey] = dateUtil(endTime, valueFormate)
    }
    return values
  }

  function initDefault () {
    const schemas = unref(getSchema)
    const obj = {}
    schemas.forEach((item) => {
      const { defaultValue } = item
      if (!isNullOrUnDef(defaultValue)) {
        obj[item.field] = defaultValue
        formModel[item.field] = defaultValue
      }
    })
    defaultValueRef.value = obj
  }

  return { handleFormValues, initDefault }
}