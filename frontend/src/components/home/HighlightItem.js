import LazyLoad from "components/common/LazyLoad";
import Heading from "components/heading/Heading";
import PropTypes from "prop-types";

export const HighlightItem = ({ colGrid = "", url, card }) => {
  return (
    <div
      className={`relative ${colGrid} max-h-[400px] cursor-pointer group overflow-hidden highlight_group`}
    >
      <div className="absolute z-10 text-5xl font-semibold text-center text-white top-2/4 left-2/4 -translate-y-2/4 -translate-x-2/4">
        Exclusive Shoes
      </div>
      <div className="absolute z-10 p-2 text-white bg-highlight backdrop-blur-2xl left-3 bottom-3">
        <Heading className="text-lg">{card.title}</Heading>
        <p className="text-xs font-normal">{card.des}</p>
        <p className="text-sm font-normal">{card.voucher}</p>
      </div>
      <LazyLoad
        className="object-cover w-full h-full !transition-all group-hover:scale-110"
        url={url}
        alt=""
      />
    </div>
  );
};
HighlightItem.propTypes = {
  // value: PropTypes.string
  colGrid: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  card: PropTypes.object.isRequired,
};
