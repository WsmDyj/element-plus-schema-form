import {
  ElInput,
  ElSwitch,
  ElCascader,
  ElCheckbox,
  ElDatePicker,
  ElTimeSelect,
  ElTimePicker,
  ElRadio,
  ElInputNumber,
  ElRate
} from 'element-plus'

import ApiSelect from './components/ApiSelect.vue'
import RadioGroup from './components/RadioGroup.vue'
import CheckboxGroup from './components/CheckboxGroup.vue'
import Slider from './components/Slider.vue'

const componentMap = new Map()

componentMap.set('Input', ElInput)
componentMap.set('InputNumber', ElInputNumber)
componentMap.set('Select', ApiSelect)
componentMap.set('Switch', ElSwitch)
componentMap.set('Cascader', ElCascader)
componentMap.set('Slider', Slider)
componentMap.set('Rate', ElRate)

componentMap.set('DatePicker', ElDatePicker)
componentMap.set('TimeSelect', ElTimeSelect)
componentMap.set('TimePicker', ElTimePicker)
componentMap.set('RangePicker', ElDatePicker)

componentMap.set('Checkbox', ElCheckbox)
componentMap.set('CheckboxGroup', CheckboxGroup)

componentMap.set('Radio', ElRadio)
componentMap.set('RadioGroup', RadioGroup)

export function add (compName, component) {
  componentMap.set(compName, component)
}

export function del (compName) {
  componentMap.delete(compName)
}

export { componentMap }