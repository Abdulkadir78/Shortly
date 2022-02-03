import illustration from "../assets/images/illustration-working.svg";
import Button from "./UI/Button";

function Hero() {
  return (
    <div className="overflow-hidden mt-10 md:mt-20 md:flex md:items-center lg:items-start xl:container">
      <img
        src={illustration}
        alt="man working"
        className="h-full w-full ml-10 md:ml-0 lg:-mr-20 md:order-2 md:w-96 lg:w-[55%]"
      />

      <div className="container xl:px-0 xl:pr-10">
        <div className="text-center md:text-left xl:pr-24">
          <h1 className="text-4xl lg:text-5xl xl:text-6xl font-bold mt-10 lg:leading-tight xl:leading-tight">
            More than just shorter links
          </h1>
          <p className="text-light-2 font-medium mt-4 lg:text-lg">
            Build your brand's recognition and get detailed insights on how your
            links are performing.
          </p>

          <Button
            className="mt-6 px-7 md:px-9"
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
      </div>
    </div>
  );
}

export default Hero;
