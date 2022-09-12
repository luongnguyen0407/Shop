import Heading from "components/heading/Heading";
import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper";
import "swiper/css/navigation";
import CardSkeleton from "components/common/CardSkeleton";
import { toast } from "react-toastify";
import { useState } from "react";
import axiosClient from "axios/configAxios";
import ProductCardItem from "./ProductCardItem";
const Popular = () => {
  const [isLoading, setIsLoading] = useState();
  const [productList, setListProduct] = useState([]);

  useEffect(() => {
    const handleFetchProduct = async () => {
      setIsLoading(true);
      try {
        const { productList } = await axiosClient.request({
          method: "get",
          url: "/v1/getproduct",
          params: {
            limit: 10,
          },
        });
        setListProduct(productList);
        setIsLoading(false);
      } catch (error) {
        toast.error("Sever error");
      }
    };
    handleFetchProduct();
  }, []);
  return (
    <div className="px-3 mt-10 container-fix">
      <Heading className="text-2xl text-center" bar>
        Popular this week
      </Heading>
      <div className="mt-6 slider_popular">
        <Swiper
          className="h-full"
          slidesPerView={2}
          modules={[Navigation]}
          loop={true}
          navigation
          spaceBetween={30}
          breakpoints={{
            // when window width is >= 640px
            970: {
              slidesPerView: 4,
            },
            768: {
              // width: 576,
              slidesPerView: 3,
            },
          }}
        >
          {isLoading && (
            <div className="grid grid-cols-4 gap-4">
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
              <CardSkeleton />
            </div>
          )}
          {productList.length > 0 &&
            !isLoading &&
            productList.map((item) => (
              <SwiperSlide key={item._id}>
                <ProductCardItem data={item} />
              </SwiperSlide>
            ))}
        </Swiper>
      </div>
    </div>
  );
};

export default Popular;
