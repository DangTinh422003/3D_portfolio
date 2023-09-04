import { Link, useLocation } from "react-router-dom";
import { useState, useEffect } from "react";

import { styles } from "../styles";
import { navLinks } from "../constants";
import { logo, menu, close } from "../assets";

const Navbar = () => {
  const [active, setActive] = useState("");
  const [isOpenMobileMenu, setIsOpenMobileMenu] = useState(false);
  const location = useLocation();

  // scroll to top
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-5 fixed top-0 z-20 bg-primary`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to={"/"}
          className="flex items-center gap-2"
          onClick={() => setActive("")}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain" />
          <p className="text-white flex text-[18px] font-bold cursor-pointer leading-[1.2]">
            Cao Dang Tinh &nbsp;
            <span className="sm:block hidden">| JS Mastery</span>
          </p>
        </Link>
        <ul className="list-none hidden sm:flex flex-row gap-10">
          {navLinks.map((link) => (
            <li
              key={Link.id}
              className={`${
                active === link.title ? "text-white" : "text-secondary"
              } hover:text-white text-[18px] font-medium cursor-pointer`}
              onClick={() => setActive(link.title)}
            >
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>

        {/* mobile menu */}
        <div className="sm:hidden flex flex-1 justify-end items-center ">
          <img
            src={!isOpenMobileMenu ? menu : close}
            alt="mene"
            className="w-[28px] h-[28px] object-contain cursor-pointer"
            onClick={() => setIsOpenMobileMenu(!isOpenMobileMenu)}
          />

          {/* sub menu */}
          <div
            className={`${
              isOpenMobileMenu ? "flex" : "hidden"
            } p-6 black-gradient absolute top-20 right-0 mx-4 my-2 min-w-[140px] z-10 rounded-xl`}
          >
            <ul className="list-none flex justify-end items-start flex-col gap-4">
              {navLinks.map((link) => (
                <li
                  key={Link.id}
                  className={`${
                    active === link.title ? "text-whit e" : "text-secondary"
                  } font-poppins font-medium cursor-pointer text-[16px] `}
                  onClick={() => {
                    setIsOpenMobileMenu(!isOpenMobileMenu);
                    setActive(link.title);
                  }}
                >
                  <a href={`#${link.id}`}>{link.title}</a>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
