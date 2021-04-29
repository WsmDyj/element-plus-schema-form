## 快速上手

## 安装

#### NPM 安装

> npm install element-plus-schema-form

## 基本使用

下面是一个使用简单表单的示例，只有一个输入框

```javascript
<template>
  <SchemaForm :schemas="schemas" />
</template>
<script>
import { defineComponent } from 'vue'
import { SchemaForm } from 'element-plus-schema-form'
const schemas = [
  {
    field: 'field1',
    component: 'Input',
    label: '字段1'
  }
]
export default defineComponent({
  components: { SchemaForm },
  setup () {
    return { schemas }
  }
})
</script>
```
