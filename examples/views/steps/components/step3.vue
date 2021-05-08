
<template>
  <div>付款账户：{{info.account}}</div>
  <div>收款人姓名：{{info.payeeName}}</div>
  <div>转账金额：{{info.money}}</div>
  <div>支付方式：{{info.pay}}</div>
</template>

<script>
import { defineComponent } from 'vue'
 export default defineComponent({
   props: ['info'],
   setup() {}
 })

</script>

<style>

</style>
