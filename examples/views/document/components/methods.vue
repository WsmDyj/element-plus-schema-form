
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
      label="方法名"
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
        date: 'getFieldsValue',
        name: '获取表单值'
      }, {
        date: 'setFieldsValue',
        name: '设置表单字段值'
      }, {
        date: 'resetFields',
        name: '重置表单值'
      }, {
        date: 'validateFields',
        name: '校验指定表单项'
      }, {
        date: 'validate',
        name: '校验表单'
      }, {
        date: 'submit',
        name: '提交表单'
      }, {
        date: 'clearValidate',
        name: '清空校验'
      }, {
        date: 'setProps',
        name: '设置表单 Props'
      }, {
        date: 'removeSchemaByFiled',
        name: '根据 field 删除 Schema'
      }, {
        date: 'appendSchemaByField',
        name: '插入到指定 filed 后面，如果没传指定 field，则插入到最后.当 first=true 时插入到第一个位置'
      }]
    }
  }
}
</script>

<style>

</style>
