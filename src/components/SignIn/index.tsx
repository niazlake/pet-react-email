import * as React from "react";
import { withRouter } from "react-router-dom";
import { PasswordForgetLink } from "../PasswordForgot";
import { SignUpLink } from "../SignUp";
import { SignInForm } from "./SignInForm";

const SignInComponent = ({ history }: { [key: string]: any }) => (
  <div>
    <h1>Войти</h1>
    <SignInForm history={history} />
    <SignUpLink />
    <PasswordForgetLink />
  </div>
);

export const SignIn = withRouter(SignInComponent);
