# element-plus-schema-form

[![npm][npm-img]][npm-url] [![node][node-img]][node-url]

一个简单的 Vue3 组件，能够使用 JSON 模式以声明方式构建和定制 web 表单。基于 Vue3、Vite、Element-plus 构建

## 安装

**node version:** >=12.0.0

**vite version:** >=2.0.0

```
npm i element-plus-schema-form
```

## 基本使用

```ts
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
    label: '字段1',
  }
]
export default defineComponent({
  components: { SchemaForm },
  setup () {
    return {
      schemas
    }
  }
})
</script>
```

## useForm 方式

- `需要使用 register 注册组件才能拿到内部的方法`
- `或者直接通过组件的 ref 也可拿到内部的方法`

```ts
<template>
  <SchemaForm @register=register />
</template>
<script>
import { defineComponent } from 'vue'
import { SchemaForm, useForm } from 'element-plus-schema-form'

const schemas = [
  {
    field: 'field1',
    component: 'Input',
    label: '字段1',
  }
]
export default defineComponent({
  components: { SchemaForm },
  setup () {
    const { register } = useForm(schemas)
    return {
      schemas
    }
  }
})
</script>
```

## 组件示例

> packages/schema-form

**运行示例**

```bash

npm install

npm run dev

```

## 示例项目

[可视化示例](https://wsmdyj.github.io/element-plus-schema-form)

[代码运用示例](https://github.com/WsmDyj/element-plus-schema-form/blob/main/examples/views/home/components/schema-form.vue)

## License

MIT

[npm-img]: https://img.shields.io/npm/v/vite-plugin-style-import.svg
[npm-url]: https://npmjs.com/package/vite-plugin-style-import
[node-img]: https://img.shields.io/node/v/vite-plugin-style-import.svg
[node-url]: https://nodejs.org/en/about/releases/
