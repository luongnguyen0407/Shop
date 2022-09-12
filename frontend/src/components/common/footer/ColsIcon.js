import Heading from "components/heading/Heading";
import React from "react";

const ColsIcon = ({ listIcon, title, pay = false }) => {
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

export default ColsIcon;
