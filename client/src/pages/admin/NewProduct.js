import { yupResolver } from "@hookform/resolvers/yup";
import { imgbbAPI } from "assets/Const";
import axios from "axios";
import axiosClient from "axios/configAxios";
import Button from "components/button/Button";
import ImgUpLoad from "components/common/admin/ImgUpLoad";
import DropDown from "components/dropDown/DropDown";
import Field from "components/Field/Field";
import Input from "components/input/Input";
import Label from "components/label/Label";
import ImageUploader from "quill-image-uploader";
import { useEffect, useMemo, useState } from "react";
import { useForm } from "react-hook-form";
import ReactQuill, { Quill } from "react-quill";
import "react-quill/dist/quill.snow.css";
import { useSelector } from "react-redux";
import { toast } from "react-toastify";
import slugify from "slugify";
import { ImgToBase64 } from "utils/CoverImgToBase64";
import * as yup from "yup";
import "../../style/Content.scss";
Quill.register("modules/imageUploader", ImageUploader);
const NewProduct = () => {
  const [selectImageFile, setSelectImageFile] = useState();
  const [des, setDes] = useState("");
  const [loading, setLoading] = useState(false);
  const [imagesSlider, setImagesSlider] = useState([]);
  const { accessToken } = useSelector((state) => state.auth.curentUser);
  // const dispatch = useDispatch();
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
    reset,
  } = useForm({
    mode: "onSubmit",
    defaultValues: {
      title: "",
      price: "",
      category: "",
      img: false,
      describe: "",
      slug: "",
    },
    resolver: yupResolver(schema),
  });
  const SubmbitHandler = async (value) => {
    if (!des) {
      toast.error("Describe product is required");
    }
    setLoading(true);
    value.describe = des;
    value.slug = slugify(value.title, {
      lower: true,
      locale: "vi",
      remove: /[*+~.()'"!:@]/g,
    });
    const imgUpload = await ImgToBase64(selectImageFile);
    const data = {
      ...value,
      imgUpload,
      imagesSlider,
    };
    if (imgUpload) {
      try {
        await axiosClient.request({
          method: "post",
          url: "/v1/addproduct",
          headers: {
            Authorization: `Bearer ${accessToken}`,
          },
          data: { ...data },
        });
        reset({
          title: "",
          price: "",
          category: "",
          img: false,
          describe: "",
          slug: "",
        });
        setLoading(false);
        toast.success("Create new product success");
        setDes("");
      } catch (error) {
        console.log(error);
        setLoading(false);
        toast.error("Missing data");
      }
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
  const handleImageSlider = (e) => {
    setImagesSlider([]);
    const files = Array.from(e.target.files);
    if (files.length > 3) {
      toast.warning("Too many pictures");
    }
    files.forEach(async (file) => {
      const img = await ImgToBase64(file);
      setImagesSlider((pev) => [...pev, img]);
    });
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
        [{ align: [] }],
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
    <form
      onSubmit={handleSubmit(SubmbitHandler)}
      className="p-3 mt-2"
      encType="multipart/form-data"
    >
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
            <Label dark htmlFor="price">
              Image Slider (2 image)
            </Label>
            <input onChange={handleImageSlider} type="file" multiple />
          </Field>
          <Field>
            <Label dark htmlFor="category">
              Category
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
      <div className="mt-8 entry-content">
        <ReactQuill
          modules={modules}
          theme="snow"
          value={des}
          scrollingContainer="html"
          onChange={setDes}
        />
      </div>
      <div className="mt-8">
        <Button isLoading={loading} type="submit">
          Submit
        </Button>
      </div>
    </form>
  );
};

export default NewProduct;
