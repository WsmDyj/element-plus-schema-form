## FormSchema

> 除以下参数外，官方文档内的 props 也都支持，具体可以参考 [element form](https://element-plus.org/#/zh-CN/component/form)

| 属性                | 类型                  | 说明                                     |
| ------------------- | --------------------- | ---------------------------------------- |
| showResetButton     | `boolean`             | 是否显示重置按钮                         |
| resetButtonOptions  | `object`              | 重置按钮配置见下方 ActionButtonOption    |
| showSubmitButton    | `boolean`             | 是否显示提交按钮                         |
| submitButtonOptions | `object`              | 确认按钮配置见下方 ActionButtonOption    |
| resetFunc           | `() => Promise<void>` | 自定义重置按钮逻辑`() => Promise<void>;` |
| submitFunc          | `() => Promise<void>` | 自定义提交按钮逻辑`() => Promise<void>;` |

## FormSchemaItem

| 属性                   | 类型                 | 说明                                                |
| ---------------------- | -------------------- | --------------------------------------------------- |
| field                  | `string`             | 字段名                                              |
| label                  | `string`             | 标签名                                              |
| changeEvent            | `string`             | 表单更新事件名称                                    |
| helpMessage            | `string`             | 标签名右侧温馨提示                                  |
| helpComponentProps     | `HelpComponentProps` | 标签名右侧温馨提示组件 props, 继承 el-tootip 属性   |
| labelWidth             | `string`             | el-form 设置 labelWidth                             |
| component              | `string`             | 组件类型，见下方 ComponentType                      |
| componentProps         | `any｜()=>{}`        | 所渲染的组件的 props                                |
| rules                  | `ValidationRule[]`   | 校验规则,见下方 ValidationRule                      |
| required               | `boolean`            | 简化 rules 配置，为 true 则转化成 [{required:true}] |
| itemProps              | `any`                | 参考下方 FormItem                                   |
| colProps               | `ColEx`              | 参考上方 actionColOptions                           |
| defaultValue           | `object`             | 所渲渲染组件的初始值                                |
| render                 | `Function`           | 自定义渲染组件                                      |
| renderColContent       | `Function`           | 自定义渲染组件（需要自行包含 formItem）             |
| renderComponentContent | `Function`           | 自定义渲染组内部的 slot                             |
| slot                   | `string`             | 自定义 slot，渲染组件                               |
| show                   | `boolean`            | 动态判断当前组件是否显示,css 控制，不会删除 dom     |
| ifShow                 | `boolean`            | 动态判断当前组件是否显示,js 控制，会删除 dom        |
| dynamicDisabled        | `Function`           | 动态判断当前组件是否禁用                            |
| dynamicRules           | `Function`           | 动态判返当前组件你校验规则                          |
