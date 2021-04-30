## useForm

组件还提供了 useForm 方法，方便调用函数内部方法

```javascript
const [register, methods] = useForm(props);
```

### register

register 用于注册 useForm，如果需要使用 useForm 提供的 api，必须将 register 传入组件的 onRegister 获取表单实例

```javascript
<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
```

### 使用示例

```javascript
<template>
  <BasicForm @register="register" @submit="handleSubmit" />
</template>
<script>
  import { defineComponent } from 'vue'
  import { BasicForm, useForm } from 'element-plus-schema-form'
  const schemas = [
    {
      field: 'field1',
      component: 'Input',
      label: '字段1'
    }
  ];
  export default defineComponent({
    components: { BasicForm },
    setup() {
      const [register, { setProps }] = useForm({schemas})
      return {
        register,
        schemas,
        handleSubmit: (values) => {
          console.log('click search,values:' + JSON.stringify(values))
        }
      }
    }
  })
</script>
```
