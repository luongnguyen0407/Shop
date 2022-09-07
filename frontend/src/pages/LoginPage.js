import React from "react";
import Heading from "components/heading/Heading";
import Label from "components/label/Label";
import AuthLayout from "components/Layouts/AuthLayout";
import Input from "components/input/Input";
import Field from "components/Field/Field";
const LoginPage = () => {
  return (
    <AuthLayout>
      <div className="h-full p-4 px-12 bg-white">
        <Heading className="text-3xl text-grey_800">Welcome Back!</Heading>
        <Heading className="text-sm text-grey_400 mb-12">
          Let's build something great
        </Heading>
        <form action="">
          <Field>
            <Label htmlFor="username">E-mail or phone number</Label>
            <Input name="username"></Input>
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input name="password"></Input>
          </Field>
        </form>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
