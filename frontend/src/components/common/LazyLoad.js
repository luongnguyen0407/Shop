import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import PropTypes from "prop-types";

const LazyLoad = ({ url, className }) => {
  return (
    <LazyLoadImage
      className={className}
      src={url} // use normal <img> attributes as props
      effect="blur"
    />
  );
};
LazyLoad.propTypes = {
  url: PropTypes.string.isRequired,
};
export default LazyLoad;
