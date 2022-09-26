import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./SliderProduct.scss";
import { FreeMode, Thumbs } from "swiper";
const DetailsProductSlider = ({ listImg }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (listImg.length <= 0) return;
  return (
    <div className="h-full slider_product">
      <Swiper
        loop={true}
        spaceBetween={10}
        thumbs={{ swiper: thumbsSwiper }}
        modules={[FreeMode, Thumbs]}
        className="mySwiper2"
      >
        {listImg.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
      <Swiper
        onSwiper={setThumbsSwiper}
        spaceBetween={20}
        slidesPerView={4}
        freeMode={true}
        watchSlidesProgress={true}
        modules={[FreeMode, Thumbs]}
        className="mySwiper"
      >
        {listImg.map((url, index) => (
          <SwiperSlide key={index}>
            <img src={url} alt="" />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default memo(DetailsProductSlider);
