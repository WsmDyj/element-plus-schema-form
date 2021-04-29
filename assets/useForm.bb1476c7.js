import{o as e,c as n,aE as s}from"./vendor.ec2158cc.js";const r={class:"markdown-body"},t=s("h2",null,"useForm",-1),o=s("p",null,"form 组件还提供了 useForm，方便调用函数内部方法",-1),a=s("pre",null,[s("code",{class:"language-javascript"},"const [register, methods] = useForm(props);\n")],-1),l=s("h3",null,"register",-1),m=s("p",null,"register 用于注册 useForm，如果需要使用 useForm 提供的 api，必须将 register 传入组件的 onRegister",-1),i=s("pre",null,[s("code",{class:"language-javascript"},'<template>\n  <BasicForm @register="register" @submit="handleSubmit" />\n</template>\n')],-1),c=s("h3",null,"使用示例",-1),u=s("pre",null,[s("code",{class:"language-javascript"},"<template>\n  <BasicForm @register=\"register\" @submit=\"handleSubmit\" />\n</template>\n<script>\n  import { defineComponent } from 'vue'\n  import { BasicForm, useForm } from 'element-plus-schema-form'\n  const schemas = [\n    {\n      field: 'field1',\n      component: 'Input',\n      label: '字段1'\n    }\n  ];\n  export default defineComponent({\n    components: { BasicForm },\n    setup() {\n      const [register] = useForm({schemas})\n      return {\n        register,\n        schemas,\n        handleSubmit: (values) => {\n          console.log('click search,values:' + JSON.stringify(values))\n        }\n      }\n    }\n  })\n<\/script>\n")],-1),p={expose:[],setup:s=>(s,p)=>(e(),n("div",r,[t,o,a,l,m,i,c,u]))};export default p;
