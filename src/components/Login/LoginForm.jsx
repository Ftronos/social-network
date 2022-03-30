import { Field } from "redux-form";

const LoginForm = (props) => {
  return (
    <form onSubmit={props.handleSubmit}>
      <div>
        <Field placeholder="Login" name="email" component={"input"} />
      </div>
      <div>
        <Field placeholder="Password" name="password" component={"input"} />
      </div>
      <div>
        <Field component={"input"} name="rememberMe" type="checkbox" /> remember
        me
      </div>
      <div>
        <button>Login</button>
      </div>
    </form>
  );
};

export default LoginForm;