import { Input, Select } from "antd"
class TestDemo {
  getFormMap () {
    const formMap = new Map();
    formMap.set('name', {
      props: {
        name: 'name',
        label: '姓名'
      },
      Component: Input,
      componentProps: {
        maxLength: 20
      },
    });
    formMap.set('job', {
      props: {
        name: 'job',
        label: '职业'
      },
      Component: Select,
      componentProps: {
        placeholder: '请选择'
      },
      componentChildren: <>
        <Select.Option key={'teacher'} value={'teacher'}>
          教师
        </Select.Option>
        <Select.Option key={'worker'} value={'worker'}>
          工人
        </Select.Option>
      </>
    });

    return formMap
  }
}

export const testBo = new TestDemo()