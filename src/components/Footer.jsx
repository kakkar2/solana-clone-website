import {
  faDiscord,
  faGithub,
  faReddit,
  faTelegram,
  faTwitter,
  faYoutube,
} from "@fortawesome/free-brands-svg-icons";
import footerLogo from "../assets/logo.svg";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGlobe } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-black border-t">
      <div className="flex items-center flex-wrap justify-center lg:justify-between w-9/12 mx-auto pb-14 mt-14">
        <div className="webInfo">
          <Link to={"/"}>
            <img
              src={footerLogo}
              className="w-40 h-auto mb-5 mx-auto lg:mx-0"
              alt="Solana"
            />
          </Link>
          <p className="capitalize mb-5 text-gray-100 text-center lg:text-left">
            managed by solana foundation
          </p>
          <ul className="flex items-center justify-center lg:justify-start gap-3 mb-5">
            <Link
              to={"https://www.youtube.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon
                  className="bg-white p-1 brightness-50 hover:brightness-100 transition duration-300 ease-in-out text-black"
                  icon={faYoutube}
                />
              </li>
            </Link>
            <Link
              to={"https://x.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon
                  className="bg-white p-1 brightness-50 hover:brightness-100 transition duration-300 ease-in-out text-black"
                  icon={faTwitter}
                />
              </li>
            </Link>
            <Link
              to={"https://discord.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon
                  className="bg-white p-1 brightness-50 hover:brightness-100 transition duration-300 ease-in-out text-black"
                  icon={faDiscord}
                />
              </li>
            </Link>
            <Link
              to={"https://www.reddit.com/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon
                  className="bg-white p-1 brightness-50 hover:brightness-100 transition duration-300 ease-in-out text-black"
                  icon={faReddit}
                />
              </li>
            </Link>
            <Link
              to={"https://github.com"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon
                  className="bg-white p-1 brightness-50 hover:brightness-100 transition duration-300 ease-in-out text-black"
                  icon={faGithub}
                />
              </li>
            </Link>
            <Link
              to={"https://telegram.org/"}
              target="_blank"
              rel="noopener noreferrer"
            >
              <li>
                <FontAwesomeIcon
                  className="bg-white p-1 brightness-50 hover:brightness-100 transition duration-300 ease-in-out text-black"
                  icon={faTelegram}
                />
              </li>
            </Link>
          </ul>
          <p className="hidden lg:block capitalize text-gray-500 mb-5">
            &copy;{new Date().getFullYear()} solana foundation. all rights
            reserved.
          </p>
        </div>
        <div className="flex gap-10">
          <div>
            <p className="text-md uppercase mb-2">solana</p>
            <ul className="leading-9 text-gray-500">
              <Link>
                <li>Grants</li>
              </Link>
              <Link>
                <li>Break Solana</li>
              </Link>
              <Link>
                <li>Media Kit</li>
              </Link>
              <Link>
                <li>Careers</li>
              </Link>
              <Link>
                <li>Disclaimer</li>
              </Link>
            </ul>
          </div>
          <div>
            <p className="text-md uppercase mb-2">get connected</p>
            <ul className="leading-9 text-gray-500">
              <Link>
                <li>EcoSystem</li>
              </Link>
              <Link>
                <li>Blog</li>
              </Link>
              <Link>
                <li>Newsletter</li>
              </Link>
            </ul>
          </div>
          <div className="text-gray-500">
            <FontAwesomeIcon className="mr-1" icon={faGlobe} />
            EN
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
