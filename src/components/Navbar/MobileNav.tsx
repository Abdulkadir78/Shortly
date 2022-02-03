import { useState } from "react";
import { createPortal } from "react-dom";

import NavLinks from "./NavLinks";

function MobileNav() {
  const [open, setOpen] = useState(false);

  const handleToggleNav = () => {
    setOpen((prevValue) => !prevValue);
  };

  return (
    <>
      <button className="mr-2" onClick={handleToggleNav}>
        <div
          className={`h-1 w-7 bg-light-1 -mt-2 duration-300 ${
            open ? "rotate-45 translate-y-2" : "rotate-0"
          }`}
        ></div>
        <div
          className={`h-1 w-7 bg-light-1 mt-1 duration-300 ${
            open ? "opacity-0" : "opacity-100"
          }`}
        ></div>
        <div
          className={`h-1 w-7 bg-light-1 mt-1 duration-300 ${
            open ? "-rotate-45 -translate-y-2" : "rotate-0"
          }`}
        ></div>
      </button>

      {createPortal(
        <div
          className={`md:hidden w-full absolute top-14 duration-1000 ${
            open ? "translate-y-0" : "-translate-y-[150%]"
          }`}
        >
          <NavLinks />
        </div>,
        document.getElementById("portal")!
      )}
    </>
  );
}

export default MobileNav;
