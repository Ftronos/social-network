import c from "./FormControls.module.css";
import cn from "classnames";

const FormControl = ({ input, meta, child, ...props }) => {
  const isError = meta.touched && meta.error;

  return (
    <div
      className={cn(c.formControl, {
        [c.error]: isError,
      })}
    >
      {props.children}
      {isError && <span>{meta.error}</span>}
    </div>
  );
};

export const Textarea = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <textarea {...input} {...restProps} />
    </FormControl>
  );
};

export const Input = (props) => {
  const { input, meta, child, ...restProps } = props;

  return (
    <FormControl {...props}>
      <input {...input} {...restProps} />
    </FormControl>
  );
};
