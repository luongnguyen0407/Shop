import Banner from "components/common/Banner";
import ErrorFallback from "components/common/ErrorFallback";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";

const HomePage = () => {
  return (
    <div>
      <Banner></Banner>
    </div>
  );
};

export default withErrorBoundary(HomePage, {
  FallbackComponent: ErrorFallback,
});
