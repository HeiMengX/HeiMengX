import { forwardRef, ReactNode } from 'react';
import {
  Form as CForm,
} from 'antd';


function getItem (
  form,
  key,
  disabledForms
) {
  if (!form) {
    return null;
  }
  return (
    <CForm.Item key={key} {...form.props}>
      {form.Component && (
        <form.Component
          key={form.props?.name}
          {...form.componentProps}
          disabled={disabledForms.includes(form.props?.name || '')}
        >
          {typeof form.componentChildren === 'function'
            ? form.componentChildren(form.watcher)
            : form.componentChildren}
        </form.Component>
      )}
    </CForm.Item>
  );
}

const CusTomForm = forwardRef((props, ref) => {
  const { form, formOrder = [], formMap = new Map(), disabledForms = [], ...other } = props;

  return (
    <CForm ref={ref} {...other} form={form}>
      <>
        {formOrder.map(name => {
          return getItem(formMap.get(name), name, disabledForms);
        })}
        {props.children}
      </>
    </CForm>
  );
});

CusTomForm.useForm = CForm.useForm;
CusTomForm.useWatch = CForm.useWatch;
CusTomForm.useFormInstance = CForm.useFormInstance;
CusTomForm.Item = CForm.Item;
CusTomForm.List = CForm.List;
CusTomForm.ErrorList = CForm.ErrorList;
CusTomForm.Provider = CForm.Provider;

const Form = CusTomForm;

export { Form, };