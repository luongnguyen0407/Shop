import axiosClient from "axios/configAxios";
import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useLocation, useParams } from "react-router-dom";
import HeadingXl from "../components/heading/HeadingXl";
const DetailProduct = () => {
  const { slug } = useParams();
  const [product, setProduct] = useState({});
  const location = useLocation();
  useEffect(() => {
    if (!slug) return;
    const fechData = async () => {
      try {
        const { product } = await axiosClient.request({
          method: "get",
          url: "/v1/product",
          params: {
            slug,
          },
        });
        setProduct(product);
      } catch (error) {
        console.log(error);
      }
    };
    fechData();
  }, [slug]);
  useEffect(() => {
    if (!location.hash) {
      window.scrollTo(0, 0);
    }
  }, [location]);
  return (
    <div className="container-fix min-h-[500px] my-10">
      <div className="grid w-full grid-cols-2 p-3 bg-white gap-x-10">
        <div className="h-[600px] overflow-hidden group cursor-pointer">
          <img
            className="object-cover w-full h-full transition-all group-hover:scale-110"
            src="https://res.cloudinary.com/dd2uzafhq/image/upload/v1664178857/shop_dev/qkysiaotkce3qosdhir8.webp"
            alt=""
          />
        </div>
        <div>
          <HeadingXl className="text-2xl">ÁO THUN TAY NGẮN IN LOVE</HeadingXl>
          <p>SKU: HNATH024</p>
          <div className="flex mt-5 gap-x-2">
            <p className="w-6 h-6 bg-red-300 rounded-full cursor-pointer outline-offset-1 outline-1 outline outline-gray-400"></p>
            <p className="w-6 h-6 bg-black rounded-full cursor-pointer"></p>
            <p className="w-6 h-6 bg-yellow-300 rounded-full cursor-pointer"></p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default DetailProduct;
