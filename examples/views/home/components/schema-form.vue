<template>
  <el-container class="schema-container">
    <div class="schema-aside">
      <div class="schema-aside-opt">
        <el-switch class="mb-20" active-text="显示操作按钮" v-model="showActionButtonGroup" @change="onChange" />
        <el-switch class="mb-20" active-text="显示重置按钮" v-model="showResetButton" @change="onChange" />
        <el-switch class="mb-20" active-text="显示提交按钮" v-model="showSubmitButton" @change="onChange" />
        <el-button class="mb-20" @click="setProps({ submitButtonOptions: { loading: true, text: '加载中' }})">修改提交按钮</el-button>
        <el-button class="mb-20" @click="setProps({ resetButtonOptions: { text: '取消' }})">修改重置按钮</el-button>
        <el-button class="mb-20" @click="setProps({ textAlign: 'right' })">修改按钮位置</el-button>
        <el-button class="mb-20" @click="onGetFormModal">获取表单值</el-button>
        <el-button class="mb-20" @click="onDisplay">回显 字段1</el-button>
        <el-button class="mb-20" @click="onResetFields">重置表单</el-button>
        <!-- <el-button class="mb-20" @click="onValidateFields">校验自定义校验规则</el-button> -->
        <el-button class="mb-20" @click="validateForm">手动校验表单</el-button>
        <el-button class="mb-20" @click="resetValidate">清空校验信息</el-button>
        <el-button class="mb-20" @click="deleteField">删除 字段1</el-button>
        <el-button class="mb-20" @click="appendField"> 往字段1后面插入字段2 </el-button>
      </div>
    </div>
    <el-main class="schema-main">
      <SchemaForm
        label-position="right"
        label-width="150px"
        @register="register"
        @submit="handleSubmit"
        >
        <template #f3="{ model, field }">
          <el-autocomplete style="width: 100%" :fetch-suggestions="querySearchAsync" v-model="model[field]" placeholder="el-autocomplete" />
        </template>
        <template #add="{ field }">
          <el-button v-if="Number(field) === 0" @click="add">新增</el-button>
          <el-button v-if="field > 0" @click="del(field)">删除</el-button>
        </template>
    </SchemaForm>
    </el-main>
  </el-container>
</template>
<script>
import { defineComponent, h, reactive, ref, toRefs } from 'vue'
import { SchemaForm, useComponentRegister, useForm } from '../../../../packages/schema-form'
import { ElInput } from 'element-plus'

import demo from './demo.vue'
useComponentRegister('demo', demo)

const schemas = [
  {
    field: 'field1',
    component: 'Input',
    label: '字段1',
    helpMessage: '这是字段1',
    helpComponentProps: {
      placement: 'bottom',
      icon: 'el-icon-question'
      // ... el-tooltip 属性
    },
    colProps: {
      span: 8
    },
    componentProps: {
      placeholder: '自定义placeholder',
      maxlength: 4,
      clearable: true,
      onChange: (e) => {
        console.log(e)
      }
    },
    dynamicDisabled: ({ values }) => {
      return !!values.field7
    },
    dynamicRules: ({ values }) => {
      return values.field8 ? [{ required: true, message: '字段1必填' }] : []
    }
  },
  {
    field: 'field8',
    component: 'Switch',
    label: '字段1是否必填',
    colProps: {
      span: 8
    }
  },
  {
    field: 'field7',
    component: 'Switch',
    label: '是否禁用字段1',
    colProps: {
      span: 8
    }
  },
  {
    field: 'field2',
    component: 'Input',
    label: '默认值',
    colProps: {
      span: 8
    },
    defaultValue: 'defalut value',
    componentProps: {
      clearable: true
    }
  },
  {
    field: 'field18',
    component: 'Input',
    label: '自定义校验规则',
    colProps: {
      span: 8
    },
    show: ({ values }) => {
      return !!values.field25
    },
    componentProps: {
      size: 'mini',
      suffixIcon: 'el-icon-edit-outline'
    },
    rules: [
      {
        required: true,
        validator: async (rule, value) => {
          if (!value) {
            return Promise.reject('值不能为空')
          }
          if (value === '1') {
            return Promise.reject('值不能为1')
          }
          return Promise.resolve()
        },
        trigger: 'change'
      }
    ]
  },
  {
    field: 'field25',
    component: 'Switch',
    label: '显示自定义校验规则',
    defaultValue: true,
    colProps: {
      span: 8
    }
  },
  {
    field: 'field16',
    component: 'Input',
    label: '输入框前置内容',
    colProps: {
      span: 8
    },
    renderComponentContent: () =>{
      return {
        prepend: () => 'Http://'
      }
    }
  },
  {
    field: 'field17',
    component: 'Input',
    label: '输入框后置内容',
    colProps: {
      span: 8
    },
    renderComponentContent: () =>{
      return {
        append: () => '.com'
      }
    }
  },
  {
    field: 'field3',
    component: 'Input',
    label: '自定义渲染组的 slot',
    colProps: {
      span: 8
    },
    renderComponentContent: () => {
      return {
        suffix: () => '$'
      }
    }
  },
  {
    field: 'field6',
    label: '自定义Slot-远程搜索',
    slot: 'f3',
    colProps: {
      span: 12
    }
  },
  {
    field: 'field11',
    component: 'Input',
    label: 'render方式',
    colProps: {
      span: 12
    },
    render: ({ model, field }) => {
      return h(ElInput, {
        placeholder: '请输入',
        modelValue: model[field],
        onInput: (e) => {
          model[field] = e
        }
      })
    }
  },
  {
    field: 'field4',
    component: 'Select',
    label: '单选',
    colProps: {
      span: 8
    },
    componentProps: {
      clearable: true,
      filterable: true,
      options: [
        {
          value: '选项1',
          label: '黄金糕'
        }, {
          value: '选项2',
          label: '双皮奶'
        }, {
          value: '选项3',
          label: '蚵仔煎'
        }, {
          value: '选项4',
          disabled: true,
          label: '龙须面'
        }, {
          value: '选项5',
          label: '北京烤鸭'
        }
      ],
      onChange: () => {
        // 配置请求参数
        // schemas.filter(it => it.field === 'field30')[0].componentProps.params.query = '2'
      }
    }
  },
  {
    field: 'field30',
    component: 'Select',
    label: '远程下拉',
    componentProps: {
      filterable: true,
      // api: getUserInfo,
      clearable: true,
      immediate: false,
      params: {}, // 请求参数
      optionKey: {
        label: 'marketName',
        value: 'marketCode'
      }
    },
    colProps: {
      span: 8
    }
  },
  {
    field: 'field29',
    component: 'Cascader',
    label: '级联',
    colProps: {
      span: 8
    },
    componentProps: {
      clearable: true,
      options: [
        {
          value: 1,
          label: '东南',
          children: [
            {
              value: 2,
              label: '上海',
              children: [
                { value: 3, label: '普陀' },
                { value: 4, label: '黄埔' },
                { value: 5, label: '徐汇' }
              ]
            },
            {
              value: 7,
              label: '江苏',
              children: [
                { value: 8, label: '南京' },
                { value: 9, label: '苏州' },
                { value: 10, label: '无锡' }
              ]
            },
            {
              value: 12,
              label: '浙江',
              children: [
                { value: 13, label: '杭州' },
                { value: 14, label: '宁波' },
                { value: 15, label: '嘉兴' }
              ]
            }
          ]
        },
        {
          value: 17,
          label: '西北',
          children: [
            {
              value: 18,
              label: '陕西',
              children: [
                { value: 19, label: '西安' },
                { value: 20, label: '延安' }
              ]
            },
            {
              value: 21,
              label: '新疆维吾尔族自治区',
              children: [
                { value: 22, label: '乌鲁木齐' },
                { value: 23, label: '克拉玛依' }
              ]
            }
          ]
        }
      ]
    }
  },
  {
    field: 'field19',
    component: 'DatePicker',
    valueFormate: 'YYYY/MM/DD',
    label: '日期',
    colProps: {
      span: 8
    },
    componentProps: {
      type: 'date',
      shortcuts: [{
        text: 'Today',
        value: new Date()
      }, {
        text: 'Yesterday',
        value: (() => {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24)
          return date
        })()
      }, {
        text: 'A week ago',
        value: (() => {
          const date = new Date()
          date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
          return date
        })()
      }]
    }
  },
  {
    field: 'field20',
    component: 'RangePicker',
    label: '日期范围',
    valueFormate: 'YYYY-MM-DD',
    colProps: {
      span: 16
    },
    componentProps: {
      type: 'daterange',
      rangeSeparator: '至',
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期'
    },
    fieldMapToTime: ['startTime', 'endTime']
  },
  {
    field: 'field21',
    component: 'TimeSelect',
    label: 'TimeSelect 时间选择',
    colProps: {
      span: 8
    },
    componentProps: {
      start: '08:30',
      step: '00:15',
      end: '18:30'
    }
  },
  {
    field: 'field22',
    component: 'TimePicker',
    label: 'TimePicker 时间选择',
    colProps: {
      span: 16
    },
    componentProps: {
      isRange: true,
      rangeSeparator: '至',
      startPlaceholder: '开始日期',
      endPlaceholder: '结束日期'
    }
  },
  {
    field: 'f1',
    component: 'Input',
    label: 'F1',
    colProps: {
      span: 12
    },
    componentProps: ({ formModel }) => {
      return {
        placeholder: '同步f2的值为f1',
        onInput: (e) => {
          formModel.f2 = e
        }
      }
    }
  },
  {
    field: 'f2',
    component: 'Input',
    label: 'F2-自定义labelWidth',
    colProps: {
      span: 12
    },
    labelWidth: '300px',
    componentProps: {
      type: 'textarea',
      disabled: true
    }
  },
  {
    field: 'field5',
    component: 'RadioGroup',
    label: '单选框组',
    colProps: {
      span: 8
    },
    defaultValue: '选项1',
    componentProps: {
      options: ['选项1', '选项2']
      // type: 'button',
      // border: true,
      // size: 'mini',
    }
  },
  {
    field: 'field26',
    component: 'CheckboxGroup',
    label: '多选框组',
    colProps: {
      span: 8
    },
    componentProps: {
      options: [
        {
          label: '选项1',
          value: '3'
        },
        {
          label: '选项2',
          value: '4'
        }
      ]
    }
  },
  {
    field: 'field27',
    component: 'InputNumber',
    label: '计数器',
    colProps: {
      span: 8
    }
  },
  {
    field: 'field28',
    component: 'Slider',
    label: '滑块',
    colProps: {
      span: 8
    }
  },
  {
    field: 'field24',
    component: 'Rate',
    label: '评分',
    colProps: {
      span: 8
    }
  },
  {
    field: 'demo',
    component: 'demo',
    label: '自定义注册组件',
    colProps: {
      span: 8
    }
  },
  {
    field: 'field0a',
    component: 'Input',
    label: '字段0',
    colProps: {
      span: 12
    },
    required: true
  },
  {
    field: '0',
    component: 'Input',
    labelWidth: '20px',
    label: ' ',
    colProps: {
      span: 4
    },
    slot: 'add'
  }
]
export default defineComponent({
  components: { SchemaForm },
  setup () {
    const [register, {
      setProps,
      appendSchemaByField,
      removeSchemaByFiled,
      getFieldsValue,
      setFieldsValue,
      resetFields,
      validate,
      validateFields,
      clearValidate
    }] = useForm({ schemas: schemas })
    const opt = reactive({
      showActionButtonGroup: true,
      showResetButton: true,
      showSubmitButton: true
    })
    const formElRef = ref(null)
    const n = ref(1)
    function add () {
      appendSchemaByField(
        {
          field: `field${n.value}a`,
          component: 'Input',
          label: '字段' + n.value,
          colProps: {
            span: 12
          },
          required: true
        },
        ''
      )
      appendSchemaByField(
        {
          field: `${n.value}`,
          component: 'Input',
          label: ' ',
          labelWidth: '20px',
          colProps: {
            span: 4
          },
          slot: 'add'
        },
        ''
      )
      n.value++
    }
    function del (field) {
      removeSchemaByFiled([`field${field}a`, `field${field}b`, `${field}`])
      n.value--
    }
    const handleSubmit = (values) => {
      console.log(values)
    }
    function querySearchAsync (queryString, cb) {
      cb([{
        value: '南拳妈妈龙虾盖浇饭',
        address: '普陀区金沙江路1699号鑫乐惠美食广场A13'
      }])
    }
    function onChange () {
      setProps({ ...optVal })
    }
    const optVal = toRefs(opt)

    function onDisplay () {
      let defVal = { field1: '我是回显值' }
      setFieldsValue(defVal)
    }

    async function validateForm () {
      try {
        const res = await validate()
        console.log('passing', res)
      } catch (error) {
        console.log('not passing', error)
      }
    }
    async function onGetFormModal () {
      const res = await getFieldsValue()
      console.log(res)
    }
    async function resetValidate () {
      clearValidate()
    }

    function deleteField () {
      removeSchemaByFiled('field1')
    }
    function appendField () {
      appendSchemaByField(
        {
          field: 'field10',
          label: '字段2',
          component: 'Input',
          colProps: {
            span: 8
          }
        },
        'field1'
      )
    }

    async function onResetFields () {
      await resetFields()
    }

    async function onValidateFields () {
      await validateFields(['field18'])
    }

    return {
      schemas,
      formElRef,
      handleSubmit,
      querySearchAsync,
      setProps,
      deleteField,
      appendField,
      resetValidate,
      ...optVal,
      onDisplay,
      onChange,
      validateForm,
      add,
      del,
      onGetFormModal,
      register,
      onResetFields,
      onValidateFields
    }
  }
})
</script>
<style lang="less" scoped>
.schema-alert {
  margin: 10px 0 20px 0;
}
.schema-aside {
  position: fixed;
  left: 0;
  height: 100%;
  z-index: 1;
  background: #fff;
  width: 290px;
  border-right: 1px solid #eee;
  overflow: auto;
  padding-left: 35px;
  &-opt {
    padding-top: 100px;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
  }
  .el-button+.el-button {
    margin-left: 0px;
  }
}
.schema-main {
  margin: 80px 30px 20px 310px;
}
.mb-20 {
  margin-bottom: 25px;
}
</style>