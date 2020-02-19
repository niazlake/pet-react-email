import * as React from "react";
import { Link, withRouter } from "react-router-dom";
import * as routes from "../../constants/routes";
import { SignUpForm } from "./SingUpForm";

const SignUpComponent = () => (
  <div>
    <h1>Зарегаться</h1>
    <SignUpForm />
  </div>
);

export const SignUpLink = () => (
  <p>
    У тебя еще нет аккаунта? <Link to={routes.SIGN_UP}>Зарегаться</Link>
  </p>
);

export const SignUp = withRouter(SignUpComponent);
