import Button from "../UI/Button";

function NavLinks() {
  const linkClasses = "mt-7 md:mt-0 md:ml-7 duration-300 hover:text-dark-2";

  return (
    <div className="flex flex-1 flex-col md:flex-row justify-between items-center font-semibold bg-primary2 md:bg-white rounded-xl mt-5 md:mt-0 py-5 md:py-0 text-lg md:text-base text-white md:text-light-1">
      <div className="md:ml-7 flex flex-col md:flex-row items-center">
        <a href="/" className={linkClasses}>
          Features
        </a>
        <a href="/" className={linkClasses}>
          Pricing
        </a>
        <a href="/" className={linkClasses}>
          Resources
        </a>
      </div>

      <div className="h-0.5 bg-light-1 bg-opacity-30 w-10/12 mt-7 md:hidden"></div>

      <div className="flex flex-col md:flex-row items-center">
        <a href="/" className={`md:mr-7 ${linkClasses}`}>
          Login
        </a>
        <Button className="font-semibold my-7 md:my-0" rounded>
          Sign Up
        </Button>
      </div>
    </div>
  );
}

export default NavLinks;
