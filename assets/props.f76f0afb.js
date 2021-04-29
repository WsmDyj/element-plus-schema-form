import{o as t,c as d,aU as o}from"./vendor.ec2158cc.js";const e={class:"markdown-body"},r=o('<h2>FormSchema</h2><blockquote><p>除以下参数外，官方文档内的 props 也都支持，具体可以参考 <a href="https://element-plus.org/#/zh-CN/component/form">element form</a></p></blockquote><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>showResetButton</td><td><code>boolean</code></td><td>是否显示重置按钮</td></tr><tr><td>resetButtonOptions</td><td><code>object</code></td><td>重置按钮配置见下方 ActionButtonOption</td></tr><tr><td>showSubmitButton</td><td><code>boolean</code></td><td>是否显示提交按钮</td></tr><tr><td>submitButtonOptions</td><td><code>object</code></td><td>确认按钮配置见下方 ActionButtonOption</td></tr><tr><td>resetFunc</td><td><code>() =&gt; Promise&lt;void&gt;</code></td><td>自定义重置按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td></tr><tr><td>submitFunc</td><td><code>() =&gt; Promise&lt;void&gt;</code></td><td>自定义提交按钮逻辑<code>() =&gt; Promise&lt;void&gt;;</code></td></tr></tbody></table><h2>FormSchemaItem</h2><table><thead><tr><th>属性</th><th>类型</th><th>说明</th></tr></thead><tbody><tr><td>field</td><td><code>string</code></td><td>字段名</td></tr><tr><td>label</td><td><code>string</code></td><td>标签名</td></tr><tr><td>changeEvent</td><td><code>string</code></td><td>表单更新事件名称</td></tr><tr><td>helpMessage</td><td><code>string</code></td><td>标签名右侧温馨提示</td></tr><tr><td>helpComponentProps</td><td><code>HelpComponentProps</code></td><td>标签名右侧温馨提示组件 props, 继承 el-tootip 属性</td></tr><tr><td>labelWidth</td><td><code>string</code></td><td>el-form 设置 labelWidth</td></tr><tr><td>component</td><td><code>string</code></td><td>组件类型，见下方 ComponentType</td></tr><tr><td>componentProps</td><td><code>any｜()=&gt;{}</code></td><td>所渲染的组件的 props</td></tr><tr><td>rules</td><td><code>ValidationRule[]</code></td><td>校验规则,见下方 ValidationRule</td></tr><tr><td>required</td><td><code>boolean</code></td><td>简化 rules 配置，为 true 则转化成 [{required:true}]</td></tr><tr><td>itemProps</td><td><code>any</code></td><td>参考下方 FormItem</td></tr><tr><td>colProps</td><td><code>ColEx</code></td><td>参考上方 actionColOptions</td></tr><tr><td>defaultValue</td><td><code>object</code></td><td>所渲渲染组件的初始值</td></tr><tr><td>render</td><td><code>Function</code></td><td>自定义渲染组件</td></tr><tr><td>renderColContent</td><td><code>Function</code></td><td>自定义渲染组件（需要自行包含 formItem）</td></tr><tr><td>renderComponentContent</td><td><code>Function</code></td><td>自定义渲染组内部的 slot</td></tr><tr><td>slot</td><td><code>string</code></td><td>自定义 slot，渲染组件</td></tr><tr><td>show</td><td><code>boolean</code></td><td>动态判断当前组件是否显示,css 控制，不会删除 dom</td></tr><tr><td>ifShow</td><td><code>boolean</code></td><td>动态判断当前组件是否显示,js 控制，会删除 dom</td></tr><tr><td>dynamicDisabled</td><td><code>Function</code></td><td>动态判断当前组件是否禁用</td></tr><tr><td>dynamicRules</td><td><code>Function</code></td><td>动态判返当前组件你校验规则</td></tr></tbody></table>',5),c={expose:[],setup:o=>(o,c)=>(t(),d("div",e,[r]))};export default c;
