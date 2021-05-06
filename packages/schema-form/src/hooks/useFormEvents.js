import { unref, toRaw } from 'vue'
import { cloneDeep } from 'lodash-es'
import { dateItemType, handleInputNumberValue, isFunction, dateUtil, isString } from '../helper'
export function useFormEvents ({
  emit,
  getProps,
  formModel,
  getSchema,
  schemaRef,
  formElRef,
  defaultValueRef,
  handleFormValues
}) {
  /**
   * @description: 判断日期组件
   */
  function itemIsDateType (key) {
    return unref(getSchema).some((item) => {
      return item.field === key ? dateItemType.includes(item.component) : false
    })
  }

  /**
   * @description: 删除filed
   */
  async function removeSchemaByFiled (fields) {
    if (!fields) return
    const schemaList = cloneDeep(unref(getSchema))
    const fieldList = isString(fields) ? [fields] : fields
    for (const field of fieldList) {
      _removeSchemaByFiled(field, schemaList)
    }
    schemaRef.value = schemaList
  }

  function _removeSchemaByFiled (field, schemaList) {
    const index = schemaList.findIndex((schema) => schema.field === field)
    if (index !== -1) {
      delete formModel[field]
      schemaList.splice(index, 1)
    }
  }

  /**
   * @description: 新增filed
   */
  async function appendSchemaByField (schema, prefixField, first = false) {
    const schemaList = cloneDeep(unref(getSchema))
    const index = schemaList.findIndex((schema) => schema.field === prefixField)
    const hasInlist = schemaList.some(item => item.field === prefixField || schema.field)
    if (!hasInlist) return

    if (!prefixField || index === -1) {
      first ? schemaList.unshift(schema) : schemaList.push(schema)
      schemaRef.value = schemaList
      return
    }

    if (index !== -1) {
      schemaList.splice(index + 1, 0, schema)
    }
    schemaRef.value = schemaList
  }

  /**
   * @description: 获取表单值
   */
  function getFieldsValue () {
    const formEl = unref(formElRef)
    if (!formEl) return {}
    return handleFormValues(formModel)
  }

  // 校验表单
  async function validate () {
    const valid = await unref(formElRef).validate()
    return valid ? handleFormValues(formModel) : false
  }

  // 清理校验规则
  async function clearValidate (name) {
    await unref(formElRef).clearValidate(name)
  }
    // 校验部分表单
  async function validateFields (nameList) {
    console.log(nameList)
    return await unref(formElRef).validateField(nameList)
  }

  /**
   * @description: 重置表单
   */
  async function resetFields () {
    const { resetFunc } = unref(getProps) // 自定义重置按钮逻辑
    resetFunc && isFunction(resetFunc) && (await resetFunc())

    const formEl = unref(formElRef)
    if (!formEl) return
    unref(formElRef).resetFields()
    // 默认值不需要重置
    Object.keys(formModel).forEach((key) => {
      formModel[key] = defaultValueRef.value[key]
    })
    emit('reset', toRaw(formModel))
  }

  /**
   * @description: 表单提交
   */
  async function handleSubmit (e) {
    e && e.preventDefault()
    const { submitFunc } = unref(getProps)
    if (submitFunc && isFunction(submitFunc)) {
      await submitFunc()
      return
    }
    const formEl = unref(formElRef)
    if (!formEl) return
    try {
      const isAdopt = await validate()
      if (isAdopt) {
        const res = handleFormValues(formModel)
        emit('submit', res)
      }
    } catch (error) {
      console.error(error)
    }
  }

  /**
   * @description: 数据回显
   */
  async function setFieldsValue (values) {
    const fields = unref(getSchema).map((item) => item.field).filter(Boolean)
    const validKeys = []
    Object.keys(values).forEach((key) => {
      const schema = unref(getSchema).find((item) => item.field === key)
      let value = values[key]

      const hasKey = Reflect.has(values, key)

      value = handleInputNumberValue(schema?.component, value)
      // 0 | '' is allow
      if (hasKey && fields.includes(key)) {
        // 反显格式化时间范围
        if (itemIsDateType(key)) {
          if (Array.isArray(value)) {
            const arr = []
            for (const ele of value) {
              arr.push(dateUtil(ele))
            }
            formModel[key] = arr
          } else {
            formModel[key] = dateUtil(value)
          }
        } else {
          formModel[key] = value
        }
        validKeys.push(key)
      }
    })
    validateFields(validKeys)
  }
  return {
    removeSchemaByFiled,
    appendSchemaByField,
    validate,
    resetFields,
    clearValidate,
    validateFields,
    getFieldsValue,
    handleSubmit,
    setFieldsValue
  }
}