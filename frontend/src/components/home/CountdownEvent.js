import HeadingXl from "components/heading/HeadingXl";
import React from "react";
import ButtonArrow from "components/button/ButtonArrow";
import CountDownShow from "./CountDownShow";
import { withErrorBoundary } from "react-error-boundary";
import ErrorFallback from "components/common/ErrorFallback";
const CountdownEvent = () => {
  const TimeCountDow = 30 * 24 * 60 * 60 * 1000;
  const NOW_IN_MS = new Date().getTime();
  const dateTimeAfter = NOW_IN_MS + TimeCountDow;
  return (
    <div className="mt-20">
      <div className="relative container-fix h-[500px]">
        <img
          src="/image 6.png"
          alt=""
          className="absolute object-cover w-full h-full select-none indent-0"
        />
        <div className="absolute bottom-6 left-6">
          <div>
            <HeadingXl>
              SUMMER <p className="inline text-secondary">COLLECTIONS</p>
            </HeadingXl>
            <ButtonArrow className="my-3 bg-text3 text-secondary">
              SHOP NOW
            </ButtonArrow>
          </div>
          <div className="mt-20 mb-8">
            <CountDownShow time={dateTimeAfter} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default withErrorBoundary(CountdownEvent, {
  FallbackComponent: ErrorFallback,
});
