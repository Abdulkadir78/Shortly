import backgroundImage from "../assets/images/bg-shorten.svg";
import Button from "./UI/Button";

function BoostLinks() {
  return (
    <div
      className="w-full bg-cover bg-primary2 p-5 lg:p-8 pt-10 pb-20 text-center"
      style={{
        backgroundImage: `url(${backgroundImage})`,
      }}
    >
      <h1 className="text-2xl text-white font-bold mt-10">
        Boost your links today
      </h1>

      <Button
        className="mt-5 px-8"
        rounded
        onClick={() => {
          window.scrollTo({
            top: 600,
            behavior: "smooth",
          });
        }}
      >
        Get Started
      </Button>
    </div>
  );
}

export default BoostLinks;
