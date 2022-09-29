import React from "react";
import ButtonArrow from "components/button/ButtonIcon";
import HeadingXl from "components/heading/HeadingXl";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper";
import { BANNER_IMG } from "assets/Const";
import { withErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/common/ErrorFallback";
import IconArrow from "components/Icon/IconArrow";
const Banner = () => {
  return (
    <div className="relative h-[500px] 2xl:h-[600px] p-20 flex items-start md:items-end pb-7 justify-center">
      <div className="absolute inset-0 w-full h-full">
        <Swiper
          className="h-full"
          slidesPerView={1}
          modules={[Autoplay]}
          loop={true}
          lazy={true}
          autoplay={{
            delay: 4500,
            disableOnInteraction: false,
          }}
        >
          {BANNER_IMG.map((item) => (
            <SwiperSlide key={item.id}>
              <img src={item.url} alt="" />
            </SwiperSlide>
          ))}
        </Swiper>
      </div>

      <div className="select-none rounded-lg absolute right-1/4 lg:min-w-[400px] ml-4 z-10 bg-[#e8d1c3] max-w-[200px] max-h-[385px] p-3 flex flex-col gap-y-6">
        <HeadingXl className="!text-4xl text-grey_800">
          Get up to 30% off
        </HeadingXl>
        <HeadingXl className="text-secondary">New Arrivals</HeadingXl>
        <ButtonArrow
          className="float-right border border-white text-text3"
          icon={<IconArrow />}
        >
          Place your Order
        </ButtonArrow>
      </div>
    </div>
  );
};

export default withErrorBoundary(Banner, {
  FallbackComponent: ErrorFallback,
});
