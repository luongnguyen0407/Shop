import Heading from "components/heading/Heading";
import React from "react";
import PropTypes from "prop-types";

const ColsIcon = ({ listIcon, title, pay = false }) => {
  if (!listIcon) return null;
  return (
    <div>
      <Heading className="uppercase">{title}</Heading>
      <div className={`${pay ? "flex-wrap gap-y-2" : ""} flex mt-2 gap-x-3`}>
        {listIcon.map((item) => (
          <img
            src={item.src}
            key={item.id}
            className={`${pay ? "w-12" : "w-8"}  h-8`}
            alt=""
          />
        ))}
      </div>
    </div>
  );
};
ColsIcon.propTypes = {
  listIcon: PropTypes.array.isRequired,
  title: PropTypes.string,
  pay: PropTypes.bool,
};
export default ColsIcon;
