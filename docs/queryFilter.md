## 筛选表单

有些是时候表单要与别的组件组合使用，常见的有 Table ，List 等，这时候就需要一些特殊形态的表单。通过设置**showAdvancedButton** 为 true,开启一个筛选表单;
设置 **autoAdvancedLine** 属性超多多少行自动折叠, 默认是 3 行, 不小于 2 行

<script setup>
import { SchemaForm, useForm} from '../packages/schema-form'
const schemas = [
  {
      field: 'field11',
      component: 'Input',
      label: '字段11',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '自定义placeholder',
      },
    },
    {
      field: 'field12',
      component: 'Input',
      label: '字段12',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field13',
      component: 'Input',
      label: '字段13',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field1',
      component: 'Input',
      label: '字段1',
      colProps: {
        span: 8,
      },
      componentProps: {
        placeholder: '自定义placeholder',
      },
    },
    {
      field: 'field2',
      component: 'Input',
      label: '字段2',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field3',
      component: 'Input',
      label: '字段3',
      colProps: {
        span: 8,
      },
    },
    {
      field: 'field7',
      component: 'RadioGroup',
      label: '字段7',
      colProps: {
        span: 8,
      },
      componentProps: {
        options: [
          {
            label: '选项1',
            value: '1',
          },
          {
            label: '选项2',
            value: '2',
          },
        ],
      },
    },
  ];
const [register] = useForm({
    schemas: schemas,
    showAdvancedButton: true,
    textAlign: 'right',
    autoAdvancedLine: 3,
    labelWidth: "75px"
  })
</script>

<div class='md-component'>
  <div class='md-component-item'>
    <SchemaForm @register="register" />
  </div>
<details>
<summary>显示代码</summary>

```html
<template>
  <SchemaForm @register="register" />
</template>
<script>
  export default defineComponent({
    components: { SchemaForm },
    setup() {
      const [register] = useForm({
        schemas: [...getSchamas(), ...getAppendSchemas()],
        showAdvancedButton: true,
        textAlign: "right",
        labelWidth: "150px",
      });
      return { register };
    },
  });
</script>
```

</details>
</div>
