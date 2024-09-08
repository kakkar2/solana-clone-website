import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import tabImage from "../assets/tabContent.png";
import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import {
  faMailchimp,
  faSalesforce,
  faShopify,
  faWaze,
} from "@fortawesome/free-brands-svg-icons";

const TabContent = ({ activeTab }) => {
  //dummy data
  const data = {
    tab1: {
      title: "Anybodies",
      desc: " It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with NFTs.",
      linkText: "Learn more about NFTs on Solana",
    },

    tab2: {
      title: "Anybodies DeFi",
      desc: " It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with DeFi.",
      linkText: "Learn more about DeFi on Solana",
    },

    tab3: {
      title: "Anybodies Payments",
      desc: " It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with Payments.",
      linkText: "Learn more about Payments on Solana",
    },

    tab4: {
      title: "Anybodies Gaming",
      desc: " It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with Gaming.",
      linkText: "Learn more about Gaming on Solana",
    },

    tab5: {
      title: "Anybodies DAOs",
      desc: " It’s time to bridge the digital and physical. Anybodies helps established brands like Toys’R’Us connect real-life places and products with DAOs.",
      linkText: "Learn more about DAOs on Solana",
    },
  };
  const brandData = [faMailchimp, faShopify, faWaze, faSalesforce];

  return (
    <>
      <div className="flex flex-wrap flex-col-reverse lg:flex-row items-center mb-5">
        <div className="flex-1 md:w-full">
          <img
            src={tabImage}
            className="w-full h-full object-cover"
            alt="NFTs"
          />
        </div>
        <div className="p-10 flex-1 bg-[#1a1a1a] self-stretch">
          <div className="flex justify-center flex-col h-full">
            <h2 className="text-4xl font-bold uppercase mb-4">
              {data[activeTab] && data[activeTab]?.title}
            </h2>
            <p className="text-xl text-gray-300 mb-4">
              {data[activeTab] && data[activeTab]?.desc}
            </p>
            <p className="cursor-pointer hover:text-green-600 transition duration-300 ease-in">
              {data[activeTab] && data[activeTab]?.linkText}{" "}
              <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
            </p>
          </div>
        </div>
      </div>
      <div className="bg-[#1a1a1a] p-5 rounded-xl">
        <div className="flex items-center justify-around">
          {brandData &&
            brandData.map((brand) => (
              <div className="p-2 text-3xl lg:text-5xl" key={brand}>
                <FontAwesomeIcon icon={brand} />
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default TabContent;
