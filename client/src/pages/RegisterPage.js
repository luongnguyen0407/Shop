import React, { useEffect } from "react";
import Heading from "components/heading/Heading";
import Label from "components/label/Label";
import AuthLayout from "components/layouts/AuthLayout";
import Input from "components/input/Input";
import Field from "components/Field/Field";
import Button from "components/button/Button";
import { Link } from "react-router-dom";
import { useForm } from "react-hook-form";
import { toast } from "react-toastify";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "redux/auth/authSlide";
const RegisterPage = () => {
  const dispatch = useDispatch();
  const { loading, authError } = useSelector((state) => state.auth);
  const schema = yup.object({
    username: yup.string().required("Bạn cần nhập username"),
    password: yup
      .string()
      .min(8, "Password cần lớn hơn 8 kí tự")
      .required("Bạn cần nhập password"),
    rfpassword: yup
      .string()
      .oneOf([yup.ref("password"), null], "Passwords không khớp"),
  });
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    mode: "onSubmit",
    resolver: yupResolver(schema),
    defaultValues: {
      username: "",
      password: "",
      rfpassword: "",
    },
  });
  const RegisterHandler = (value) => {
    console.log(value);
    dispatch(userLogin(value, "heloo"));
  };
  useEffect(() => {
    if (errors) {
      const firstErr = Object.values(errors);
      toast.error(firstErr[0]?.message);
    }
  }, [errors]);
  useEffect(() => {
    if (authError) toast.error(authError);
  }, [authError]);
  console.log("register re-render");
  return (
    <AuthLayout>
      <div className="h-full p-4 px-12 bg-white">
        <Heading className="text-3xl text-grey_800">Woah! We met again</Heading>
        <Heading className="mb-8 text-sm text-grey_400">
          Let's fastly get registered
        </Heading>
        <form onSubmit={handleSubmit(RegisterHandler)}>
          <Field>
            <Label htmlFor="username">Username</Label>
            <Input control={control} name="username"></Input>
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input icon control={control} name="password"></Input>
          </Field>
          <Field>
            <Label htmlFor="rfpassword">Confirm Password</Label>
            <Input icon control={control} name="rfpassword"></Input>
          </Field>
          <div className="mt-5 mb-2">
            <Button isLoading={loading} type="submit">
              Sign in
            </Button>
          </div>
        </form>
        <p className="text-center">
          Have an account?
          <Link to={"/login"} className="ml-1 text-blue-300">
            Login
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default RegisterPage;
