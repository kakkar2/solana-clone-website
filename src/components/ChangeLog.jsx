import BuildButton from "./BuildButton";
import ChangeLogImage from "../assets/Changelog.png";
import { library } from "@fortawesome/fontawesome-svg-core";
import { faYoutube } from "@fortawesome/free-brands-svg-icons";
import { faPodcast } from "@fortawesome/free-solid-svg-icons";
import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";

const ChangeLog = () => {
  // adding icon to library so that we can pass icon dynamically
  library.add(faYoutube, faPodcast, faCircleArrowRight);

  return (
    <div className="bg-gradient-to-b from-[#19161c] to-black">
      <div className="pt-10 mb-10 w-4/5 mx-auto py-20">
        <div className="mb-5">
          <h2 className="text-4xl font-semibold mb-1">Go to the source.</h2>
          <p className="text-gray-400 text-xl">
            Read the documentation for Solana and popular tools.
          </p>
        </div>
        <div className="flex items-center flex-wrap gap-10 justify-between mb-10">
          <div className="flex-1">
            <div className="p-5 flex justify-between items-center border-b border-gray-300 mb-5">
              <h2 className="font-semibold text-2xl">Solana Docs</h2>
              <BuildButton content={"View All"} />
            </div>
            <p className="text-gray-300 text-xl">
              Learn how Solana works and get a high-level understanding of
              Solana's architecture.
            </p>
          </div>
          <div className="flex-1">
            <div className="p-5 flex justify-between items-center border-b border-gray-300 mb-5">
              <h2 className="font-semibold text-2xl">Metaplex Docs</h2>
              <BuildButton content={"View All"} />
            </div>
            <p className="text-gray-300 text-xl">
              Learn what you build with Metaplex, make the process of creating
              and launching NFTs easier.
            </p>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-10 justify-between py-10 mb-10">
          <div className="flex-1">
            <h2 className="text-2xl font-bold mb-5">Solana Changelog</h2>
            <p className="text-gray-300 text-xl mb-10">
              Some more Solana changes from Jacob & John. Subscribe to the
              newsletter: https://solana.com/newsletter Join the Hackathon! -
              https://www.colosseum.org/radar Update your code in preparation
              for RPC 2.0 ...
            </p>
            <BuildButton content={"LATEST EPISODE"} icon={faCircleArrowRight} />
          </div>
          <div className="flex-1">
            <div className="w-[18rem] lg:w-[30rem] mx-auto">
              <img
                src={ChangeLogImage}
                className="w-full h-full"
                loading="lazy"
                alt="Solana_Changelog"
              />
            </div>
          </div>
        </div>
        <div className="flex items-center flex-wrap gap-10 justify-between py-10 mb-10">
          <div className="flex-1 bg-[#19161c] p-5 lg:p-10 rounded-2xl">
            <h2 className="font-bold text-2xl mb-5">Solana Developer Update</h2>
            <p className="text-gray-300 mb-10 text-xl">
              Sign up to the newsletter and learn about new resources, new
              commits, new proposals, and more.
            </p>
            <div className="relative rounded-full overflow-hidden bg-black shadow-xl w-full mb-5 lg:mb-0">
              <input
                type="text"
                name="text"
                placeholder="Enter Email Address"
                className="input bg-transparent outline-none border-none pl-6 pr-10 py-5 w-full font-sans text-lg font-semibold text-white"
              />
              <div className="absolute right-2 top-[0.4em]">
                <button className="hidden lg:block px-5 py-4 rounded-full bg-green-500 text-black shadow-xl flex items-center justify-center relative overflow-hidden uppercase hover:bg-green-300 transition duration-300 ease-in">
                  Sign up
                </button>
              </div>
            </div>
            <div className="flex items-center justify-center lg:hidden">
              <button className="px-5 py-4 rounded-full bg-green-500 text-black shadow-xl flex items-center justify-center overflow-hidden uppercase hover:bg-green-300 transition duration-300 ease-in">
                Sign up
              </button>
            </div>
          </div>
          <div className="flex-1 bg-[#19161c] p-5 lg:p-10 rounded-2xl">
            <h2 className="font-bold text-2xl mb-5">Even more resources</h2>
            <p className="text-gray-300 mb-10 text-xl">
              More videos, more episodes. Discussions between industry leaders
              in both blockchain and technology, our team, and community
              developers.
            </p>
            <div className="flex items-center flex-wrap gap-5 lg:gap-0 justify-around">
              <BuildButton content={"YOUTUBE"} icon={faYoutube} />
              <BuildButton content={"PODCAST"} icon={faPodcast} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ChangeLog;
