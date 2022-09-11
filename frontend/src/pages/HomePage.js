import Banner from "components/home/Banner";
import ErrorFallback from "components/common/ErrorFallback";
import Highlights from "components/home/Highlights";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
      <Highlights></Highlights>
    </div>
  );
};

export default withErrorBoundary(HomePage, {
  FallbackComponent: ErrorFallback,
});
