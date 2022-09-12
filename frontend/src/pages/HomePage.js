import Banner from "components/home/Banner";
import ErrorFallback from "components/common/ErrorFallback";
import Highlights from "components/home/Highlights";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import Popular from "components/home/Popular";

const HomePage = () => {
  return (
    <div>
      <Banner />
      <Highlights />
      <Popular />
    </div>
  );
};

export default withErrorBoundary(HomePage, {
  FallbackComponent: ErrorFallback,
});
