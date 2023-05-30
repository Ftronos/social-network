import c from "./FormControls.module.css";
import cn from "classnames";
import { ReactNode } from "react";
import { Field, WrappedFieldMetaProps, WrappedFieldProps } from "redux-form";
import { FieldValidator_type } from "utils/validators/validators";

type FormControlProps_type = {
  meta: WrappedFieldMetaProps;
  children: ReactNode;
};

const FormControl: React.FC<FormControlProps_type> = ({
  meta: { touched, error },
  children,
}) => {
  const isError = touched && error;

  return (
    <div
      className={cn(c.formControl, {
        [c.error]: isError,
      })}
    >
      {children}
      {isError && <span>{error}</span>}
    </div>
  );
};

export const Textarea: React.FC<WrappedFieldProps> = (props) => {
  const {
    input: { value, ...restInput },
    meta,
    ...restProps
  } = props;

  return (
    <FormControl meta={meta}>
      <textarea {...restInput} {...restProps} />
    </FormControl>
  );
};

export const Input: React.FC<WrappedFieldProps> = (props) => {
  const { input, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};

export function createField<FormKeys_type extends string>(
  placeholder: string | undefined,
  name: FormKeys_type,
  validators: Array<FieldValidator_type>,
  component: React.FC<WrappedFieldProps>,
  props = {},
  text = ""
) {
  return (
    <div>
      <Field
        placeholder={placeholder}
        name={name}
        validate={validators}
        component={component}
        {...props}
      />{" "}
      {text}
    </div>
  );
}
