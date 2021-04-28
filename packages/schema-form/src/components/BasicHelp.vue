<script lang="tsx">
import { defineComponent } from 'vue'

export default defineComponent({
  name: 'BasicHelp',
  props: {
    content: {
      type: String,
      default: 'tooltip info'
    },
    icon: {
      type: String,
      default: 'el-icon-warning'
    }
  },
  setup (props) {
    return () => {
      return (
        <el-tooltip content={props.content}>
          <i class={[props.icon, 'schema-basic-help']}></i>
        </el-tooltip>
      )
    }

  }
})
</script>
<style lang="less" scoped>
  .schema-basic-help {
    padding-left: 4px;
  }
</style>
