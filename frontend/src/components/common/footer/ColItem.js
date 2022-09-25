import Heading from "components/heading/Heading";
import Title from "components/Title/Title";
import PropTypes from "prop-types";

const ColItem = ({ data, title }) => {
  if (!data) return null;
  return (
    <div className="flex flex-col gap-y-3">
      <Heading className="uppercase">{title}</Heading>
      {data.map((item) => (
        <Title
          className="font-normal text-grey_500"
          to={item.to}
          key={item.title}
          title={item.title}
        />
      ))}
    </div>
  );
};

ColItem.propTypes = {
  title: PropTypes.string,
  data: PropTypes.array.isRequired,
};
export default ColItem;
