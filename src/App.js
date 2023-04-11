import React, { useEffect } from "react"
import { Form } from './components/Form'
import { testBo } from "./utils/test"
import { Button } from "antd"

export default function Test () {
  const formMap = testBo.getFormMap()
  const orders = ['name', 'job']
  const [form] = Form.useForm()

  useEffect(() => {
    form.setFieldsValue({
      name: '孟枭程',
      job: "teacher"
    })
  }, [form])

  const getFormData = () => {
    console.log(form)
    console.log(form.getFieldValue())
  }

  return (<div>
    <Form
      form={form}
      formMap={formMap}
      formOrder={orders}
      labelCol={{ span: 4 }}
      disabledForms={['job']}
      labelWrap
      layout='vertical'
      autoComplete='off'
    />

    <Button onClick={getFormData}>点我</Button>
  </div>)
}