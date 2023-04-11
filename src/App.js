import { Form } from './components/Form'
import { testBo } from "./utils/test"

export default function Test () {
  const formMap = testBo.getFormMap()
  const orders = ['name', 'job']
  const [form] = Form.useForm()

  return (<Form
    form={form}
    formMap={formMap}
    formOrder={orders}
    labelCol={{ span: 4 }}
    labelWrap
    layout='vertical'
    autoComplete='off'
  />)
}