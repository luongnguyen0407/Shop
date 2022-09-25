import { FOOTER_LIST, LIST_ICON } from "assets/Const";
import Heading from "components/heading/Heading";

import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import ErrorFallback from "./ErrorFallback";
import ColItem from "./footer/ColItem";
import ColsIcon from "./footer/ColsIcon";

const Footer = () => {
  return (
    <footer className="px-2 py-16 mt-20 bg-grey_50">
      <div className="flex flex-col container-fix gap-y-16">
        <div className="flex justify-between gap-x-20">
          <div className="flex justify-between w-2/4">
            <ColItem data={FOOTER_LIST.Company} title="Company Info" />
            <ColItem data={FOOTER_LIST.Help} title="HElp & Support" />
            <ColItem data={FOOTER_LIST.Customer} title="Customer care" />
          </div>
          <div className="w-2/4">
            <div className="flex justify-between">
              <ColsIcon listIcon={LIST_ICON.Socials} title="Socials"></ColsIcon>
              <ColsIcon
                listIcon={LIST_ICON.Platforms}
                title="Platforms"
              ></ColsIcon>
            </div>
            <div className="mt-6 ">
              <Heading>SIGN UP FOR Laura's Closet STYLE NEWS</Heading>
              <div className="flex w-full h-10 gap-2 mt-2">
                <input
                  placeholder="Your Email"
                  type="text"
                  className="flex-1 h-full px-2 border outline-none border-grey_500"
                />
                <button className="px-2 text-white bg-text1">Subcribe</button>
              </div>
            </div>
          </div>
        </div>
        <div className="flex justify-between gap-x-20">
          <div className="w-2/4">
            <p>https://github.com/luongnguyen0407</p>
          </div>
          <div className="w-2/4">
            <ColsIcon
              pay
              listIcon={LIST_ICON.Payment}
              title="We accept"
            ></ColsIcon>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default withErrorBoundary(Footer, {
  FallbackComponent: ErrorFallback,
});
