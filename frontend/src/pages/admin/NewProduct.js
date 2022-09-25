import Input from "components/input/Input";
import React, { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";
import Field from "components/Field/Field";
import Label from "components/label/Label";
import DropDown from "components/DropDown/DropDown";
import ImgUpLoad from "components/common/admin/ImgUpLoad";
import { toast } from "react-toastify";
import Button from "components/button/Button";
import { ImgToBase64 } from "utils/CoverImgToBase64";
import { useDispatch } from "react-redux";
import ImageUploader from "quill-image-uploader";
import { addProduct } from "redux/product/productSlide";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { imgbbAPI } from "assets/Const";
import axios from "axios";
Quill.register("modules/imageUploader", ImageUploader);
const NewProduct = () => {
  const [selectImageFile, setSelectImageFile] = useState();
  const [des, setDes] = useState("");
  const dispatch = useDispatch();
  const [previewUrl, setPreviewUrl] = useState("");
  const schema = yup.object({
    title: yup.string().required("Name product is required"),
    price: yup
      .number("Price format incorrect")
      .required("Price product is required"),
    category: yup.string().required("Category product is required"),
    img: yup.bool().isTrue("Missing image product"),
  });
  const {
    handleSubmit,
    control,
    formState: { errors },
    setValue,
  } = useForm({
    mode: "onChange",
    defaultValues: {
      title: "",
      price: "",
      category: "",
      img: false,
    },
    resolver: yupResolver(schema),
  });
  const SubmbitHandler = async (value) => {
    console.log(value);
    const imgUpload = await ImgToBase64(selectImageFile);
    const data = {
      ...value,
      imgUpload,
    };
    if (imgUpload) {
      dispatch(addProduct(data));
    }
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
    setValue("img", true);
    return () => URL.revokeObjectURL(objectUrl);
  }, [selectImageFile, setValue]);

  const handleDeleteImgPreview = () => {
    URL.revokeObjectURL(previewUrl);
    setPreviewUrl("");
    setSelectImageFile("");
    setValue("img", false);
  };
  useEffect(() => {
    if (errors) {
      const firstErr = Object.values(errors);
      toast.error(firstErr[0]?.message);
    }
  }, [errors]);

  const modules = useMemo(
    () => ({
      toolbar: [
        ["bold", "italic", "underline", "strike"],
        ["blockquote"],
        [{ header: 1 }, { header: 2 }], // custom button values
        [{ list: "ordered" }, { list: "bullet" }],
        [{ header: [1, 2, 3, 4, 5, 6, false] }],
        ["link", "image"],
      ],
      imageUploader: {
        // imgbbAPI
        upload: async (file) => {
          console.log("upload: ~ file", file);
          const bodyFormData = new FormData();
          console.log("upload: ~ bodyFormData", bodyFormData);
          bodyFormData.append("image", file);
          const response = await axios({
            method: "post",
            url: imgbbAPI,
            data: bodyFormData,
            headers: {
              "Content-Type": "multipart/form-data",
            },
          });
          return response.data.data.url;
        },
      },
    }),
    []
  );
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
          {/* <Field>
            <Label dark htmlFor="brand">
              Brand
            </Label>
            <DropDown setValue={setValue} control={control} name="brand" />
          </Field> */}
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
      <div className="block mt-8 min-h-[300px]">
        <ReactQuill
          modules={modules}
          theme="snow"
          value={des}
          onChange={setDes}
        />
      </div>
      <div className="mt-8">
        <Button type="submit">Submit</Button>
      </div>
    </form>
  );
};

export default NewProduct;
