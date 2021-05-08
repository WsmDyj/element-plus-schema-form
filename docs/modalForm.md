## 弹窗表单

<script setup>
import { SchemaForm, useForm } from '../packages/schema-form'
import { ref } from 'vue'
const schemas = [
  {
    field: 'field1',
    component: 'Input',
    label: '字段1',
    required: true
  }
]

const resetFunc = async () => {
  await resetFields()
}

const onSubmit = async () => {
  const res = await validate()
  alert(JSON.stringify(res))
  dialogFormVisible.value = false
  await resetFields()
}

const [register, {resetFields, validate}] = useForm({
  schemas,
  labelWidth: "70px",
  showActionButtonGroup: false,
})
let dialogFormVisible = ref(false)

</script>

<div class='md-component'>
  <div class='md-component-item'>
    <el-button @click="dialogFormVisible = true">打开 Dialog</el-button>
    <el-dialog title="弹窗表单" v-model="dialogFormVisible" @close="resetFunc">
      <SchemaForm @register="register" />
      <template #footer>
        <span class="dialog-footer">
          <el-button @click="resetFunc">重 置</el-button>
          <el-button type="primary" @click="onSubmit">确 定</el-button>
        </span>
      </template>
    </el-dialog>
  </div>
<details>
<summary>显示代码</summary>

```html
<template>
  <el-button @click="dialogFormVisible = true">打开嵌套表单的 Dialog</el-button>
  <el-dialog title="收货地址" v-model="dialogFormVisible">
    <SchemaForm @register="register" />
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="resetFunc">重 置</el-button>
        <el-button type="primary" @click="onSubmit">确 定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script>
  import { defineComponent } from "vue";
  import { SchemaForm, useForm } from "element-plus-schema-form";
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
      let dialogFormVisible = ref(false);
      const resetFunc = async () => {
        await resetFields();
      };

      const onSubmit = async () => {
        const res = await validate();
        console.log(res);
        dialogFormVisible.value = false;
      };

      const [register, { resetFields, validate }] = useForm({
        schemas,
        labelWidth: "70px",
        showActionButtonGroup: false,
      });
      return { dialogFormVisible, register };
    },
  });
</script>
```

</details>
</div>
