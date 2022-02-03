import StatCard from "./StatCard";
import iconBrand from "../../assets/images/icon-brand-recognition.svg";
import iconRecords from "../../assets/images/icon-detailed-records.svg";
import iconCustomizable from "../../assets/images/icon-fully-customizable.svg";

const stats = [
  {
    title: "Brand Recognition",
    content:
      "Boost your brand recognition with each click. Generic links don't mean a thing. Branded links help instil confidence in your content.",
    image: iconBrand,
  },
  {
    title: "Detailed Records",
    content:
      "Gain insights into who is clicking your links. Knowing when and where people engage with your content helps inform better decisions.",
    image: iconRecords,
  },
  {
    title: "Fully Customizable",
    content:
      "Improve brand awareness and content discoverability through customizable links, supercharging audience engagement.",
    image: iconCustomizable,
  },
];

function Statistics() {
  return (
    <div className="container mt-20 pb-20 text-center">
      <h1 className="text-2xl font-bold mt-10">Advanced Statistics</h1>
      <p className="text-light-2 mt-3 font-medium text-sm leading-6 md:text-base lg:text-lg md:px-28 lg:px-40 xl:px-[21rem]">
        Track how your links are performing across the web with our advanced
        statistics dashboard.
      </p>

      <div className="relative">
        <div className="flex justify-center">
          <div className="w-2 bg-primary absolute top-20 bottom-0 lg:rotate-90 xl:h-screen xl:-top-32"></div>
        </div>

        <div className="flex flex-col lg:flex-row lg:gap-10 items-center lg:mt-5">
          {stats.map((stat, index) => (
            <StatCard
              key={index}
              title={stat.title}
              content={stat.content}
              image={stat.image}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Statistics;
