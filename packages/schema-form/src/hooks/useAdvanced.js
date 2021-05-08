import { unref, watch } from "vue"
import { isBoolean, isFunction } from '../helper'
const BASIC_COL_LEN = 24
export function useAdvanced ({
  advanceState,
  emit,
  getProps,
  getSchema,
  formModel,
  defaultValueRef
}) {

  watch(
    [() => unref(getSchema), () => advanceState.isAdvanced],
    () => {
      const { showAdvancedButton } = unref(getProps)
      if (showAdvancedButton) {
        updateAdvanced()
      }
    },
    { immediate: true }
  )

  function updateAdvanced () {
    let itemColSum = 0
    let realItemColSum = 0

    for (const schema of unref(getSchema)) {
      const { show, colProps } = schema
      let isShow = true
      if (isBoolean(show)) {
        isShow = show
      }

      if (isFunction(show)) {
        isShow = show({
          schema: schema,
          model: formModel,
          field: schema.field,
          values: {
            ...unref(defaultValueRef),
            ...formModel,
          }
        })
      }
      if (isShow && colProps) {
        const { itemColSum: sum, isAdvanced } = getAdvanced({...colProps}, itemColSum)
        itemColSum = sum || 0
        if (isAdvanced) {
          realItemColSum = itemColSum
        }
        schema.isAdvanced = isAdvanced
      }
    }
    getAdvanced(BASIC_COL_LEN, itemColSum, true)

    emit('advanced-change')
  }

  function getAdvanced (itemCol, itemColSum = 0, isLastAction = false) {
    const mdWidth = itemCol.span || BASIC_COL_LEN
    itemColSum += mdWidth
    if (isLastAction) {
      if (itemColSum <= BASIC_COL_LEN * 2) {
        // 小于两行
        advanceState.hideAdvanceBtn = true
        advanceState.isAdvanced = true
      } else if (itemColSum >  BASIC_COL_LEN * 2 &&
        itemColSum <=  BASIC_COL_LEN * (unref(getProps).autoAdvancedLine || 3)
      ) {
        advanceState.hideAdvanceBtn = false
      } else if (!advanceState.isLoad) {
        advanceState.isLoad = true
        advanceState.isAdvanced = !advanceState.isAdvanced
      }
      return { isAdvanced: advanceState.isAdvanced, itemColSum }
    }
    if (itemColSum > BASIC_COL_LEN) {
      return { isAdvanced: advanceState.isAdvanced, itemColSum }
    } else {
      // The first line is always displayed
      return { isAdvanced: true, itemColSum }
    }
  }

  function handleToggleAdvanced () {
    advanceState.isAdvanced = !advanceState.isAdvanced
  }

  return {
    handleToggleAdvanced
  }
}