import ButtonArrow from "components/button/ButtonArrow";
import Heading from "components/heading/Heading";
import HeadingXl from "components/heading/HeadingXl";
import React from "react";

const Banner = () => {
  return (
    <div className="relative h-[600px] p-20">
      <img className="absolute inset-0 -z-10" src="/Group 11.png" alt="" />
      <div className="z-10 bg-grey_800 max-w-[500px] max-h-[385] p-3 flex flex-col gap-y-6">
        <HeadingXl>Get up to 30% off</HeadingXl>
        <HeadingXl className="!text-primary">New Arrivals</HeadingXl>
        <Heading className="font-normal text-grey_100">
          Introducing our latest collection of products
        </Heading>
        <ButtonArrow className="border border-white text-text3">
          Place your Order
        </ButtonArrow>
      </div>
    </div>
  );
};

export default Banner;
