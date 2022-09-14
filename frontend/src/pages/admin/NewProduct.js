import Input from "components/input/Input";
import React from "react";
import { useForm } from "react-hook-form";

const NewProduct = () => {
  const {
    handleSubmit,
    formState: { errors },
    control,
  } = useForm({
    defaultValues: {
      username: "",
      password: "",
    },
  });
  return (
    <div className="mt-2">
      <Input name="title" control={control}></Input>
    </div>
  );
};

export default NewProduct;
