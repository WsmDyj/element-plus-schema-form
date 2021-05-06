import{o as e,c as s,aU as a}from"./vendor.d8e567c9.js";const r={class:"markdown-body"},t=a('<h2>Methods</h2><blockquote><p>方法具体的案例可查看 <a href="http://localhost:3000/#/example">基本表单</a> <a href="https://github.com/WsmDyj/element-plus-schema-form/blob/main/examples/views/home/components/schema-form.vue">源码地址</a></p></blockquote><h4>1、getFieldsValue</h4><p>说明: 获取整个表单值，初始化为 <strong>{}</strong>，需要用户输入才能生成具体的 field 字段</p><pre><code>const [register, { getFieldsValue }] = useForm({ schemas })\nconst res = await getFieldsValue()\n</code></pre><h4>2、setFieldsValue</h4><p>说明: 设置表单字段值，常用于数据的回显</p><pre><code>const [register, { setFieldsValue }] = useForm({ schemas })\nlet defVal = { field1: &#39;我是回显值&#39; }\nsetFieldsValue(defVal)\n</code></pre><h4>3、resetFields</h4><p>说明: 重置表单值，默认的值不会被重置</p><pre><code>const [register, { resetFields }] = useForm({ schemas })\nsetFieldsValue(defVal)\n</code></pre><h4>4、validateFields</h4><p>说明: 校验指定表单项，传入 field 对应的字段，数组形式</p><pre><code>const [register, { validateFields }] = useForm({ schemas })\nvalidateFields([&#39;field18&#39;])\n</code></pre><h4>5、validate</h4><p>说明: 校验表单，返回表单项的表单值</p><pre><code>const [register, { validate }] = useForm({ schemas })\nawait validate()\n</code></pre><h4>6、submit</h4><p>说明: 提交表单</p><pre><code>const [register, { submit }] = useForm({ schemas })\nawait submit()\n</code></pre><h4>7、clearValidate</h4><p>说明: 清空表单校验规则</p><pre><code>const [register, { clearValidate }] = useForm({ schemas })\nawait clearValidate()\n</code></pre><h4>8、setProps</h4><p>说明: 设置表单的 props 可以直接在标签上传递，也可以使用 setProps，或者初始化直接写 useForm(props)</p><pre><code>const [register, { setProps }] = useForm({ schemas })\nawait setProps({ textAlign: &#39;right&#39; })\n</code></pre><h4>9、removeSchemaByFiled</h4><p>说明: 根据 field 删除 Schema</p><pre><code>const [register, { removeSchemaByFiled }] = useForm({ schemas })\nawait removeSchemaByFiled(&#39;field1&#39;)\n</code></pre><h4>10、appendSchemaByField</h4><p>说明: 插入到指定 filed 后面，如果没传指定 field，则插入到最后。当 first=true 时插入到第一个位置</p><pre><code>const [register, { appendSchemaByField }] = useForm({ schemas })\nawait appendSchemaByField({\n  field: &#39;field10&#39;,\n  label: &#39;字段2&#39;,\n  component: &#39;Input&#39;\n}, &#39;field1&#39;)\n</code></pre>',32),o={expose:[],setup:a=>(a,o)=>(e(),s("div",r,[t]))};export default o;
