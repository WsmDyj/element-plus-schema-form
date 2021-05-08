<template>
  <div class="docca">
    <div class="doc-nav">
    <ol>
      <li>{{docs.name}}</li>
      <ul>
        <li
          :class="{ active: isActive(item.name) }"
          v-for="item in docs.packages"
          :key="item"
          v-show="item.show"
        >
          <router-link v-if="!item.isLink" :to="item.name">{{ item.cName }}</router-link >
          <a v-else :href="item.name" target="_blank">{{item.cName}}</a>
        </li>
      </ul>
    </ol>
    <ol v-for="_nav in nav" :key="_nav">
      <li>{{ _nav.name }}</li>
      <ul>
        <li :class="{ active: isActive(_package.name) }" v-for="_package in _nav.packages" :key="_package">
          <router-link v-if="_package.show" :to="_package.name">{{ _package.cName }}</router-link>
        </li>
      </ul>
    </ol>
  </div>
  </div>
</template>
<script>
import { computed, defineComponent, reactive } from 'vue'
import { nav, docs } from '../config.json'
import { useRouter } from "vue-router"
export default defineComponent({
  setup() {
    const { currentRoute } = useRouter()
    const isActive = computed(() => {
      return function(name) {
        return currentRoute.value.path == `/${name}`
      };
    })
    return {
      isActive,
      nav: reactive(nav),
      docs: reactive(docs),
    }
  },
})
</script>

<style lang="less" scoped>
@doc-default-color: #409EFF;
.docca {
  border-right: 1px solid #eee;
  width: 290px;
  height: 100%;
  position: relative;
  position: fixed;
  .doc-nav {
    position: fixed;
    top: 88px;
    left: 0;
    z-index: 1;
    background: #fff;
    width: 290px;
    border-right: 1px solid #eee;
    overflow: auto;
    padding-left: 35px;
    ol {
      &.introduce {
        padding-left: 5px;
        li {
          cursor: pointer;
          &:hover {
            color: @doc-default-color;
          }
        }
      }
      li {
        width: 100%;
        height: 44px;
        line-height: 44px;
        font-size: 14px;
        color: #333;
        font-weight: bold;
        position: relative;

        &.active {
          &::before {
            position: absolute;
            content: '';
            left: 0;
            top: 50%;
            transform: translateY(-50%);
            height: 50%;
            width: 4px;
            background: @doc-default-color;
          }
        }
      }
      > ul {
        li {
          padding-left: 29px;
          cursor: pointer;
          &:hover {
            a {
              color: @doc-default-color;
            }
          }
          a {
            color: #444;
            font-weight: normal;
            width: 100%;
            display: inline-block;
            &.router-link-exact-active {
              color: @doc-default-color !important;
            }
            &:hover {
              color: @doc-default-color;
              &:visited {
                color: @doc-default-color;
              }
            }
            &:link,
            &:visited {
              color: #444;
            }

            height: 100%;
            b {
              font-weight: normal;
              font-size: 12px;
            }
          }
        }
      }
    }
  }
}
</style>
