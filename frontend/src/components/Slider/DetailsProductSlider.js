import React, { memo, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";

import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/thumbs";
import "./SliderProduct.scss";
import { FreeMode, Thumbs } from "swiper";
import { withErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/common/ErrorFallback";
const DetailsProductSlider = ({ listImg }) => {
  const [thumbsSwiper, setThumbsSwiper] = useState(null);
  if (listImg.length <= 0) return;
  console.log(listImg);
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

export default withErrorBoundary(memo(DetailsProductSlider), {
  FallbackComponent: ErrorFallback,
});
