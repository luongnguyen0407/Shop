import React, { useEffect } from "react";
import Heading from "components/heading/Heading";
import Label from "components/label/Label";
import AuthLayout from "components/Layouts/AuthLayout";
import Input from "components/input/Input";
import Field from "components/Field/Field";
import Button from "components/button/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
const RegisterPage = () => {
  const schema = yup.object({
    username: yup.string().required("Bạn cần nhập username"),
    password: yup.string().required("Bạn cần nhập password"),
    rfpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords không khớp"),
  });
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    resolver: yupResolver(schema),
  });
  const RegisterHandler = (value) => {
    console.log(value);
  };
  useEffect(() => {
    if (errors) {
      const firstErr = Object.values(errors);
      toast.error(firstErr[0]?.message);
    }
  }, [errors]);
  return (
    <AuthLayout>
      <div className="h-full p-4 px-12 bg-white">
        <Heading className="text-3xl text-grey_800">Welcome Back!</Heading>
        <Heading className="text-sm text-grey_400 mb-8">
          Let's build something great
        </Heading>
        <form onSubmit={handleSubmit(RegisterHandler)}>
          <Field>
            <Label htmlFor="username">Username</Label>
            <Input control={control} name="username"></Input>
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input control={control} name="password"></Input>
          </Field>
          <Field>
            <Label htmlFor="rfpassword">Confirm Password</Label>
            <Input control={control} name="rfpassword"></Input>
          </Field>
          <div className="mt-5 mb-2">
            <Button type="submit">Sign in</Button>
          </div>
        </form>
        <p className="text-center">
          Don't have an account?
          <Link to={"/login"} className="text-blue-300 ml-1">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
