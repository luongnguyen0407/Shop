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
import { useDispatch, useSelector } from "react-redux";
import { userLogin } from "redux/auth/authSlide";
const LoginPage = () => {
  const dispatch = useDispatch();
  // const navigate = useNavigate();
  const { loading, authError } = useSelector((state) => state.auth);
  const schema = yup.object({
    username: yup.string().required("Bạn cần nhập username"),
    password: yup.string().required("Bạn cần nhập password"),
  });
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
    resolver: yupResolver(schema),
  });
  const formSubmitHandler = (value) => {
    dispatch(userLogin(value));
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
  console.log("login re-render");
  return (
    <AuthLayout>
      <div className="h-full p-4 px-12 bg-white">
        <Heading className="text-3xl text-grey_800">Welcome Back!</Heading>
        <Heading className="mb-12 text-sm text-grey_400">
          Let's build something great
        </Heading>
        <form onSubmit={handleSubmit(formSubmitHandler)}>
          <Field>
            <Label htmlFor="username">Username</Label>
            <Input control={control} name="username"></Input>
          </Field>
          <Field>
            <Label htmlFor="password">Password</Label>
            <Input control={control} name="password"></Input>
          </Field>
          <div className="mb-3 mt-7">
            <Button isLoading={loading} type="submit">
              Sign in
            </Button>
          </div>
        </form>
        <p className="text-center">
          Don't have an account?
          <Link to={"/register"} className="ml-1 text-blue-300">
            Register
          </Link>
        </p>
      </div>
    </AuthLayout>
  );
};

export default LoginPage;
