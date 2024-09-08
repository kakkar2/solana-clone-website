import { faBrave, faDiscord, faMeta } from "@fortawesome/free-brands-svg-icons";
import { faCircleHalfStroke } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const HeroSection = () => {
  return (
    <div className="relative pt-10 mb-10" id="heroSection">
      <div className="flex items-center flex-col justify-center max-w-screen-xl mx-auto px-2 lg:px-0 py-20">
        <h1 className="text-3xl lg:text-6xl font-bold text-center mb-5">
          Powerfull for developers.
          <span className="block mt-3">Fast for everyone.</span>
        </h1>
        <p className="text-md mb-5 w-[70%] lg:w-[30%] text-center">
          Bring blockchain to the people. Solana supports experiences for power
          users, new consumers, and everyone in between.
        </p>
        {/* buttons code start here  */}
        <div className="flex items-center text-center gap-5 mb-10">
          <button className="rounded-full uppercase px-4 py-3 bg-gradient-to-r from-purple-800 to-gray-800 hover:from-white hover:to-gray-100 hover:text-black transition duration-300 ease-in-out">
            start building
          </button>
          <button className="border rounded-full uppercase px-4 py-3 hover:bg-white hover:text-black transition duration-300 ease-in-out">
            read docs
          </button>
        </div>
        {/* buttons code end here  */}
        <p className="text-center uppercase text-blue-700 mb-5 text-sm mb-5">
          powering tools and intgrations from companies all around the world
        </p>
        {/* brands icon start here  */}
        <div className="flex items-center flex-wrap justify-center gap-10 max-auto">
          <div className="cursor-pointer font-bold text-xl">
            <FontAwesomeIcon className="mr-1 text-2xl" icon={faBrave} />
            brave
          </div>
          <div className="cursor-pointer font-bold text-xl">
            <FontAwesomeIcon
              className="mr-1 text-2xl"
              icon={faCircleHalfStroke}
            />
            CIRCLE
          </div>
          <div className="cursor-pointer font-bold text-xl">
            <FontAwesomeIcon className="mr-1 text-2xl" icon={faDiscord} />
            Discord
          </div>
          <div className="cursor-pointer font-bold text-xl">Google</div>
          <div className="cursor-pointer font-bold text-xl">jump_</div>
          <div className="cursor-pointer font-bold text-xl">
            <FontAwesomeIcon className="mr-1 text-2xl" icon={faMeta} />
            Meta
          </div>
        </div>
        {/* brands icon end here  */}
      </div>
    </div>
  );
};

export default HeroSection;
