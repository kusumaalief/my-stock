import React from "react";
import AuthLayout from "./layout";
import Register from "./register";

type Props = {};

function AuthPage({}: Props) {
  return (
    <AuthLayout>
      <Register />
    </AuthLayout>
  );
}

export default AuthPage;
