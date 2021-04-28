<template>
  <section class="page-header">
    <div class="page-header-logo">
      <img
        src="data:image/svg+xml;base64,PHN2ZyBpZD0i5Zu+5bGCXzEiIGRhdGEtbmFtZT0i5Zu+5bGCIDEiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyIgdmlld0JveD0iMCAwIDQ0IDQ0Ij48ZGVmcz48c3R5bGU+LmNscy0xe2ZpbGw6IzQwOWVmZjtmaWxsLXJ1bGU6ZXZlbm9kZDt9PC9zdHlsZT48L2RlZnM+PHRpdGxlPmVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIOWJr+acrDwvdGl0bGU+PHBhdGggaWQ9ImVsZW1lbnRfcGx1cy1sb2dvLXNtYWxsIiBkYXRhLW5hbWU9ImVsZW1lbnQgcGx1cy1sb2dvLXNtYWxsIiBjbGFzcz0iY2xzLTEiIGQ9Ik0zNy40MSwzMi4zN2MwLDEuNTctLjgzLDEuOTMtLjgzLDEuOTNMMjEuNTEsNDNBMS42OSwxLjY5LDAsMCwxLDIwLDQzUzUuMiwzNC40LDQuNjYsMzRhMS4yOSwxLjI5LDAsMCwxLS41NS0xVjE1LjI0YzAtLjc4LDEtMS4zMywxLTEuMzNMMTkuODYsNS4zNmEyLDIsMCwwLDEsMS43OSwwbDE0LjQ2LDguNDFhMi4wNiwyLjA2LDAsMCwxLDEuMjUsMi4wNlYzMi4zN1ptLTUuOS0xN0wyMS4zNSw5LjVhMS41OSwxLjU5LDAsMCwwLTEuNDEsMEw4LjMzLDE2LjE1cy0uNzcuNDYtLjc2LDEuMDgsMCwxMy45MiwwLDEzLjkyQTEsMSwwLDAsMCw4LDMxLjljLjQzLjMsMTIsNywxMiw3YTEuMzEsMS4zMSwwLDAsMCwxLjE5LDBDMjEuOTEsMzguNSwzMywzMi4xMSwzMywzMi4xMXMuNjUtLjI4LjY1LTEuNTFWMjcuMTNsLTEzLDcuOVYzMmEzLjA1LDMuMDUsMCwwLDEsMS0yLjA3TDMzLjIsMjNhMi40NCwyLjQ0LDAsMCwwLC41NS0xLjQ2VjE4LjQzTDIwLjY0LDI2LjM1di0zLjJhMi4yMiwyLjIyLDAsMCwxLC44My0xLjc5Wk00MS4wNyw0LjIyYS4zOS4zOSwwLDAsMC0uMzctLjQySDM4VjEuMDZjMC0uMTYtLjI2LS4yMi0uNTMtLjIyTDM2LDEuMDhjLS4xOCwwLS4zMS4xMi0uMzEuMjNWMy44SDMzYS40LjQsMCwwLDAtLjM2LjM3djJoM1Y5YzAsLjE2LjI2LjI3LjU0LjIzbDEuNTEtLjI1Yy4xOCwwLC4yOS0uMTMuMjktLjIzVjYuMTRoM1oiLz48L3N2Zz4="
        alt="element-logo"
        class="nav-logo"
      />
     <span class="nav-text">Schema-Form</span>
    </div>
    <div class="header-opt">
      <el-tabs v-model="curRoute" @tab-click="onChange">
        <el-tab-pane label="示例" name="/"></el-tab-pane>
        <el-tab-pane label="文档" name="/document"></el-tab-pane>
      </el-tabs>
      <a href="https://github.com/WsmDyj/element-plus-schema-form" target="view_window" class="title-img">
        <img class="github" src="https://img12.360buyimg.com/imagetools/jfs/t1/177478/17/1372/1301/60890360E47187698/649386c10eef86f4.png" alt="" srcset="">
      </a>
    </div>
  </section>
</template>
<script>
import { defineComponent, ref, unref } from 'vue'
import { useRouter } from 'vue-router'
export default defineComponent({
  setup () {
    const router = useRouter()
    const curRoute = ref('/')
    function onChange (e) {
      router.push(`.${unref(curRoute)}`)
    }
    return { curRoute, onChange }
  }
})
</script>
<style lang="less" scoped>
.title-img {
  width: 60px;
  height: 65px;
  margin-left: 35px;
  vertical-align: sub
}
.github {
  width: 20px;
  height: 20px;
}
.header-opt {
  display: flex;
  align-items: center;
}
.page-header {
  display: flex;
  justify-content: space-between;
  &-logo {
    height: 60px;
    font-size: 18px;
    font-weight: bold;
    color: #39f;
  }
}
.nav-logo {
  height: 30px;
  display: inline-block;
  padding-right: 6px;
  vertical-align: sub;
}
</style>