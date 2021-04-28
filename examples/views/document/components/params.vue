
<template>
  <el-table
    :data="tableData"
    border
    stripe
    :show-header="false"
    style="width: 540px"
  >
    <el-table-column
      prop="date"
      label="属性"
      width="180"
    >
    </el-table-column>
    <el-table-column
      prop="name"
      label="说明"
      width="360"
    >
    </el-table-column>
  </el-table>
</template>

<script>
export default {
  data () {
    return {
      tableData: [{
        date: 'field',
        name: '字段名'
      }, {
        date: 'label',
        name: '标签名'
      }, {
        date: 'changeEvent',
        name: '表单更新事件名称'
      }, {
        date: 'helpComponentProps',
        name: 'Tootltip属性'
      }, {
        date: 'labelWidth',
        name: '覆盖统一设置的 labelWidth'
      }, {
        date: 'component',
        name: '组件类型'
      }, {
        date: 'componentProps',
        name: '所渲染的组件的 props'
      }, {
        date: 'rules',
        name: '校验规则,'
      }, {
        date: 'required',
        name: '必填项'
      }, {
        date: 'defaultValue',
        name: '默认值'
      },
      {
        date: 'render',
        name: '自定义渲染组件'
      }, {
        date: 'show',
        name: '动态判断当前组件是否显示,css 控制，不会删除 dom'
      }, {
        date: 'dynamicDisabled',
        name: '动态判断当前组件是否禁用,'
      }, {
        date: 'dynamicRules',
        name: '动态判返当前组件你校验规则'
      }]
    }
  }
}
</script>

<style>

</style>
