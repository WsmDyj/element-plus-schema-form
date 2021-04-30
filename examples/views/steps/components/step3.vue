
<template>
<el-row>
    <el-result icon="success" title="付款成功">
      <template #extra>
        <el-descriptions border :column="1" title="付款信息">
    <el-descriptions-item label="付款账户">{{info.account}}</el-descriptions-item>
    <el-descriptions-item label="收款人姓名">{{info.payeeName}}</el-descriptions-item>
    <el-descriptions-item label="转账金额">{{info.money}}</el-descriptions-item>
    <el-descriptions-item label="支付方式">
      <el-tag size="small">{{info.pay}}</el-tag>
    </el-descriptions-item>
</el-descriptions>
      </template>
    </el-result>
</el-row>
</template>

<script>
import { ElResult, ElDescriptions, ElDescriptionsItem } from 'element-plus'
  import { defineComponent } from 'vue'
 export default defineComponent({
   props: ['info'],
   components: {
     ElResult,
      ElDescriptions,
    ElDescriptionsItem
   },
   setup() {}
 })

</script>

<style>

</style>
