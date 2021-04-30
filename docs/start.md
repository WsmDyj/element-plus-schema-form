## 快速上手

## 安装

#### NPM 安装

> npm install element-plus-schema-form

#### ESM 方式导入组件

```
import { SchemaForm, SchemaFormItem } from 'element-plus-form-schema'
```

## 基本使用

下面是一个使用简单表单的示例，只有一个输入框

<script setup>
import {SchemaForm, useForm} from '../packages/schema-form'
const schemas = [
  {
    field: 'field1',
    component: 'Input',
    label: '字段1',
    required: true
  }
]
</script>

<div class='md-component'>
  <div class='md-component-item'>
    <SchemaForm :schemas=schemas label-position="right" label-width="70px" />
  </div>

<details>
<summary>显示代码</summary>

```html
<template>
  <SchemaForm :schemas="schemas" label-position="right" label-width="70px" />
</template>
<script>
  import { defineComponent } from "vue";
  import { SchemaForm } from "element-plus-schema-form";
  const schemas = [
    {
      field: "field1",
      component: "Input",
      label: "字段1",
      required: true,
    },
  ];
  export default defineComponent({
    components: { SchemaForm },
    setup() {
      return { schemas };
    },
  });
</script>
```

</details>
</div>
