import { SchemaForm, useComponentRegister, useForm} from '../packages/schema-form/index'
import { version } from '../package.json'
const components = [SchemaForm]

const install = function(Vue) {
  components.forEach((component) => {
    if (component.install) {
      Vue.use(component);
    } else if (component.name) {
      Vue.component(component.name, component);
    }
  })
}

export { SchemaForm, useComponentRegister, useForm }
export default { version, install }
