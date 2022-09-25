import ErrorFallback from "components/common/ErrorFallback";
import Heading from "components/heading/Heading";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const Brand = () => {
  return (
    <div className="mt-20 container-fix">
      <Heading className="text-2xl text-center" bar>
        Brands for you
      </Heading>
      <div className="flex items-center justify-center gap-x-10 mt-9">
        {/* loop sau */}
        <img src="/brand1.png" alt="" className="w-14 h-1w-14" />
        <img src="/brand2.png" alt="" className="w-14 h-1w-14" />
        <img src="/brand3.png" alt="" className="w-14 h-1w-14" />
        <img src="/brand5.png" alt="" className="w-14 h-1w-14" />
        <img src="/brand6.png" alt="" className="w-14 h-1w-14" />
        <img src="/brand4.png" alt="" className="w-14 h-1w-14" />
      </div>
    </div>
  );
};
export default withErrorBoundary(Brand, {
  FallbackComponent: ErrorFallback,
});
