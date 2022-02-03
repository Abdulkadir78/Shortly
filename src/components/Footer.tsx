import {
  FaFacebookSquare,
  FaTwitter,
  FaPinterest,
  FaInstagram,
} from "react-icons/fa";

import { ReactComponent as Logo } from "../assets/images/logo.svg";

function Footer() {
  const outerClasses = "mt-10 lg:mt-0 text-center lg:text-left text-light-1";
  const innerClasses = "hover:text-primary cursor-pointer";

  return (
    <div className="bg-dark-2 pt-16 lg:pt-20 pb-10">
      <div className="container flex flex-col lg:flex-row lg:justify-between items-center lg:items-start">
        <Logo fill="#fff" />

        <div className={outerClasses}>
          <h4 className="text-white font-bold">Features</h4>
          <h5 className={`mt-5 ${innerClasses}`}>Link Shortening</h5>
          <h5 className={`mt-3 ${innerClasses}`}>Branded Links</h5>
          <h5 className={`mt-3 ${innerClasses}`}>Analytics</h5>
        </div>

        <div className={outerClasses}>
          <h4 className="text-white font-bold">Resources</h4>
          <h5 className={`mt-5 ${innerClasses}`}>Blog</h5>
          <h5 className={`mt-3 ${innerClasses}`}>Developers</h5>
          <h5 className={`mt-3 ${innerClasses}`}>Support</h5>
        </div>

        <div className={outerClasses}>
          <h4 className="text-white font-bold">Company</h4>
          <h5 className={`mt-5 ${innerClasses}`}>About</h5>
          <h5 className={`mt-3 ${innerClasses}`}>Our Team</h5>
          <h5 className={`mt-3 ${innerClasses}`}>Careers</h5>
          <h5 className={`mt-3 ${innerClasses}`}>Contact</h5>
        </div>

        <div
          className={`mt-10 lg:mt-0 text-center lg:text-left text-white flex gap-7`}
        >
          <FaFacebookSquare
            size={25}
            className={`duration-300 ${innerClasses}`}
          />
          <FaTwitter size={25} className={`duration-300 ${innerClasses}`} />
          <FaPinterest size={25} className={`duration-300 ${innerClasses}`} />
          <FaInstagram size={25} className={`duration-300 ${innerClasses}`} />
        </div>
      </div>
    </div>
  );
}

export default Footer;
