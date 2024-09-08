import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import heroImage from "../assets/hero.png";
import { faStackExchange } from "@fortawesome/free-brands-svg-icons";

const BuildHeroSection = () => {
  return (
    <div className="pt-10 mb-5 flex items-center flex-wrap flex-col-reverse lg:flex-row justify-between max-w-screen-xl mx-auto py-10">
      <div className="flex-1">
        <div className="w-[360px] lg:w-[400px] mx-auto">
          <h1 className="text-6xl lg:text-8xl font-extrabold mb-2">
            Developer Resources
          </h1>
          <p className="text-gray-400 lg:text-xl mb-5">
            A manual for joining the Solana ecosystem. By builders for builders.
          </p>
          <div className="flex items-center gap-5">
            <button className="px-6 py-2 lg:px-8 lg:py-3 bg-green-500 text-black hover:bg-white rounded-full transition duration-300 ease-in-out uppercase hover:-translate-y-2">
              Build Now
            </button>
            <button className="px-6 py-2 lg:px-8 lg:py-3 rounded-full transition duration-300 ease-in-out border uppercase hover:bg-white hover:text-black hover:-translate-y-2">
              Stack Exchange <FontAwesomeIcon icon={faStackExchange} />
            </button>
          </div>
        </div>
      </div>
      <div className="flex-1">
        <div className="relative flex items-center justify-center h-full build_heroSection overflow-x-hidden lg:overflow-x-visible">
          <img src={heroImage} alt="Solana" />
        </div>
      </div>
    </div>
  );
};

export default BuildHeroSection;
