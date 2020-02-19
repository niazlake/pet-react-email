import * as React from "react";
import { Link } from "react-router-dom";
import { PasswordForgetForm } from "./PasswordForgetForm";

export const PasswordForget = () => (
  <div>
    <h1>Забыл пароль</h1>
    <PasswordForgetForm />
  </div>
);

export const PasswordForgetLink = () => (
  <p>
    <Link to="/pw-forget">Забыли пароль?</Link>
  </p>
);
