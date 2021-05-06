## Methods

> 方法具体的案例可查看 [基本表单](http://localhost:3000/#/example) [源码地址](https://github.com/WsmDyj/element-plus-schema-form/blob/main/examples/views/home/components/schema-form.vue)

#### 1、getFieldsValue

说明: 获取整个表单值，初始化为 **{}**，需要用户输入才能生成具体的 field 字段

```
const [register, { getFieldsValue }] = useForm({ schemas })
const res = await getFieldsValue()
```

#### 2、setFieldsValue

说明: 设置表单字段值，常用于数据的回显

```
const [register, { setFieldsValue }] = useForm({ schemas })
let defVal = { field1: '我是回显值' }
setFieldsValue(defVal)
```

#### 3、resetFields

说明: 重置表单值，默认的值不会被重置

```
const [register, { resetFields }] = useForm({ schemas })
setFieldsValue(defVal)
```

#### 4、validateFields

说明: 校验指定表单项，传入 field 对应的字段，数组形式

```
const [register, { validateFields }] = useForm({ schemas })
validateFields(['field18'])
```

#### 5、validate

说明: 校验表单，返回表单项的表单值

```
const [register, { validate }] = useForm({ schemas })
await validate()
```

#### 6、submit

说明: 提交表单

```
const [register, { submit }] = useForm({ schemas })
await submit()
```

#### 7、clearValidate

说明: 清空表单校验规则

```
const [register, { clearValidate }] = useForm({ schemas })
await clearValidate()
```

#### 8、setProps

说明: 设置表单的 props 可以直接在标签上传递，也可以使用 setProps，或者初始化直接写 useForm(props)

```
const [register, { setProps }] = useForm({ schemas })
await setProps({ textAlign: 'right' })
```

#### 9、removeSchemaByFiled

说明: 根据 field 删除 Schema

```
const [register, { removeSchemaByFiled }] = useForm({ schemas })
await removeSchemaByFiled('field1')
```

#### 10、appendSchemaByField

说明: 插入到指定 filed 后面，如果没传指定 field，则插入到最后。当 first=true 时插入到第一个位置

```
const [register, { appendSchemaByField }] = useForm({ schemas })
await appendSchemaByField({
  field: 'field10',
  label: '字段2',
  component: 'Input'
}, 'field1')
```
