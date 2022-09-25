import { HIGHLIGHT } from "assets/Const";
import ErrorFallback from "components/common/ErrorFallback";
import Heading from "components/heading/Heading";
import React from "react";
import { withErrorBoundary } from "react-error-boundary";
import { HighlightItem } from "./HighlightItem";

const Highlights = () => {
  console.log("re-render");
  return (
    <div className="mt-10 container-fix">
      <Heading className="text-2xl text-center" bar>
        This Weeks Highlights
      </Heading>
      <div className="grid grid-cols-3 grid-rows-2 gap-5 mt-6">
        {HIGHLIGHT.map((item) => (
          <HighlightItem
            key={item.id}
            url={item.url}
            card={item.card}
            colGrid={item.colGrid}
          />
        ))}
      </div>
    </div>
  );
};

export default withErrorBoundary(Highlights, {
  FallbackComponent: ErrorFallback,
});
