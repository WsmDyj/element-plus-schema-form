export const step1Schemas = [
  {
    field: 'account',
    component: 'Select',
    label: '付款账户',
    required: true,
    defaultValue: '涡轮增压',
    componentProps: {
      options: [
        {
          label: '涡轮增压',
          value: '涡轮增压',
        },
      ],
    },
  },
  {
    field: 'pay',
    component: 'Select',
    label: '支付方式',
    defaultValue: 'zfb',
    componentProps: {
      options: [
        {
          label: 'zfb',
          value: 'zfb',
        },
        {
          label: 'wx',
          value: 'wx',
        },
      ],
    },
  },
  {
    field: 'payeeName',
    component: 'Input',
    label: '收款人姓名',
    defaultValue: 'vc',
    required: true,
  },
  {
    field: 'money',
    component: 'Input',
    label: '转账金额',
    defaultValue: '500',
    required: true,
    renderComponentContent: () => {
      return {
        prefix: () => '￥',
      };
    },
  },
];

export const step2Schemas = [
  {
    field: 'pwd',
    component: 'Input',
    label: '支付密码',
    required: true,
    componentProps: {
      placeholder: '请输入支付密码'
    }
  },
]