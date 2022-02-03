import logo from "../../assets/images/logo.svg";
import MobileNav from "./MobileNav";
import NavLinks from "./NavLinks";

function Navbar() {
  return (
    <div className="container pt-8 flex items-center justify-between md:justify-start">
      <img src={logo} alt="brand logo" />
      <div className="md:hidden">
        <MobileNav />
      </div>

      <div className="hidden md:flex md:flex-1">
        <NavLinks />
      </div>
    </div>
  );
}

export default Navbar;
