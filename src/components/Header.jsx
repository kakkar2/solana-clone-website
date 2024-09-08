import webLogo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faAngleDown,
  faBars,
  faClose,
} from "@fortawesome/free-solid-svg-icons";
import { TopBar } from "./index";
import { Link, NavLink, useLocation } from "react-router-dom";
import { useEffect, useState } from "react";

const Header = () => {
  const [menuList, setMenuList] = useState(true);
  const location = useLocation();

  useEffect(() => {
    if (menuList) return;
    setMenuList(!menuList);
  }, [location]);

  return (
    <>
      <TopBar
        message={"breakpoint 2024 - new city. new vibes.- get early access->"}
      />
      <header className="bg-black bg-opacity-95 shadow-2xl sticky top-0 z-10 relative">
        <div className="flex items-center justify-between py-6 w-4/5 lg:w-9/12 mx-auto">
          <Link to={"/"}>
            <div className="w-32 lg:w-36 cursor-pointer">
              <img src={webLogo} className="w-full h-full" alt="Solana" />
            </div>
          </Link>
          <button
            className="lg:hidden p-2 text-xl"
            onClick={() => setMenuList(!menuList)}
          >
            <FontAwesomeIcon icon={menuList ? faBars : faClose} />
          </button>
          <ul
            className={`lg:flex items-center ${
              menuList ? "hidden" : ""
            } gap-5 menu-list text-md absolute w-full lg:w-auto flex-col lg:flex-row lg:relative`}
          >
            <Link to={"/"}>
              <li className="text-gray-400 hover:text-white transition duration-300 ease-in cursor-pointer">
                Learn
                <span className="mx-1">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </li>
            </Link>
            <NavLink
              to={"/build"}
              className="text-gray-400 hover:text-white transition duration-300 ease-in cursor-pointer"
            >
              <li>
                Build
                <span className="mx-1">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </li>
            </NavLink>
            <Link to={"/"}>
              <li className="text-gray-400 hover:text-white transition duration-300 ease-in cursor-pointer">
                Network
                <span className="mx-1">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </li>
            </Link>
            <Link to={"/"}>
              <li className="text-gray-400 hover:text-white transition duration-300 ease-in cursor-pointer">
                Community
                <span className="mx-1">
                  <FontAwesomeIcon icon={faAngleDown} />
                </span>
              </li>
            </Link>
          </ul>
        </div>
      </header>
    </>
  );
};

export default Header;
