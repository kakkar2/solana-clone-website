import { useState } from "react";
import { TabContent } from "./index";

const TabSection = () => {
  const [activeTab, setActiveTab] = useState("tab1");
  return (
    <div className="max-w-screen-xl mx-auto mb-10">
      <div className="flex items-center flex-wrap px-2 lg:px-0 gap-5 lg:gap-0 justify-between mb-5">
        <h2 className="text-3xl">Build for growth.</h2>
        <div className="flex items-center gap-3">
          <button
            className={`bg-[#1a1a1a] rounded-xl p-2 ${
              activeTab == "tab1" && "border border-purple-600"
            }`}
            onClick={() => setActiveTab("tab1")}
          >
            NFTs
          </button>
          <button
            className={`bg-[#1a1a1a] rounded-xl p-2 ${
              activeTab == "tab2" && "border border-purple-600"
            }`}
            onClick={() => setActiveTab("tab2")}
          >
            DeFi
          </button>
          <button
            className={`bg-[#1a1a1a] rounded-xl p-2 ${
              activeTab == "tab3" && "border border-purple-600"
            }`}
            onClick={() => setActiveTab("tab3")}
          >
            Payments
          </button>
          <button
            className={`bg-[#1a1a1a] rounded-xl p-2 ${
              activeTab == "tab4" && "border border-purple-600"
            }`}
            onClick={() => setActiveTab("tab4")}
          >
            Gaming
          </button>
          <button
            className={`bg-[#1a1a1a] rounded-xl p-2 ${
              activeTab == "tab5" && "border border-purple-600"
            }`}
            onClick={() => setActiveTab("tab5")}
          >
            DAOs
          </button>
        </div>
      </div>
      {/* tab content start here  */}
      <div className="mb-5">
        <TabContent activeTab={activeTab} />
      </div>
      {/* tab content end here  */}
    </div>
  );
};
export default TabSection;
