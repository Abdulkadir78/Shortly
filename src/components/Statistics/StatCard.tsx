interface CardProps {
  title: string;
  content: string;
  image: string;
  index: number;
}

const indexToMarginClass = {
  0: "lg:mt-0",
  1: "lg:mt-20",
  2: "lg:mt-40",
  3: "lg:mt-60",
};

const StatCard: React.FunctionComponent<CardProps> = ({
  title,
  content,
  image,
  index,
}) => {
  return (
    <div
      className={`w-full md:w-8/12 lg:w-4/12 bg-white px-2 py-10 relative flex flex-col items-center rounded-md mt-20 ${
        indexToMarginClass[index as keyof typeof indexToMarginClass]
      }`}
    >
      <div className="bg-primary2 rounded-full w-20 h-20 flex items-center justify-center -mt-20">
        <img src={image} alt="statistic" />
      </div>

      <div className="mt-7">
        <h3 className="font-bold text-xl">{title}</h3>
        <p className="text-light-2 text-sm leading-6 font-medium mt-4 px-3">
          {content}
        </p>
      </div>
    </div>
  );
};

export default StatCard;
