import Input from "components/input/Input";
import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Field from "components/Field/Field";
import Label from "components/label/Label";
import DropDown from "components/DropDown/DropDown";
import ImgUpLoad from "components/common/admin/ImgUpLoad";
import { toast } from "react-toastify";
const NewProduct = () => {
  const [selectImageFile, setSelectImageFile] = useState();
  const [previewUrl, setPreviewUrl] = useState("");
  const schema = yup.object({});
  const { handleSubmit, control, setValue } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      price: "",
      category: "",
    },
    resolver: yupResolver(schema),
  });
  const SubmbitHandler = (value) => {
    console.log(value);
  };
  const handleSelectImg = (e) => {
    if (!e.target.files || e.target.files.length === 0) return;
    //check img type
    const imgFile = e.target.files[0];
    if (imgFile.type.split("/")[0] !== "image") {
      toast.warning("Sai định dạng ảnh");
      return;
    }
    setSelectImageFile(imgFile);
  };
  //create Img Preview
  useEffect(() => {
    if (!selectImageFile) return;
    const objectUrl = URL.createObjectURL(selectImageFile);
    setPreviewUrl(objectUrl);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectImageFile]);

  const handleDeleteImgPreview = () => {
    URL.revokeObjectURL(previewUrl);
    setPreviewUrl("");
    setSelectImageFile("");
  };

  return (
    <form onSubmit={handleSubmit(SubmbitHandler)} className="p-3 mt-2">
      <div className="flex gap-4">
        <div className="flex-1">
          <Field>
            <Label dark htmlFor="title">
              Name Product
            </Label>
            <Input name="title" control={control}></Input>
          </Field>
          <Field>
            <Label dark htmlFor="price">
              Price
            </Label>
            <Input name="price" control={control}></Input>
          </Field>
          <Field>
            <Label dark htmlFor="category">
              Name Product
            </Label>
            <DropDown setValue={setValue} control={control} name="category" />
          </Field>
        </div>
        <div className="h-[350px] mt-2 w-2/5">
          <Label dark htmlFor="Img">
            Product Image
          </Label>
          <ImgUpLoad
            onClick={handleDeleteImgPreview}
            ImgPreview={previewUrl}
            onChange={handleSelectImg}
          />
        </div>
      </div>
      <button type="submit">Submit</button>
    </form>
  );
};

export default NewProduct;
