import Heading from "components/heading/Heading";
import Title from "components/Title/Title";

const ColItem = ({ data, title }) => {
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

export default ColItem;
