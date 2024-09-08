import { Item } from "./index";

const CommunitySection = () => {
  //   live count data
  const data = [
    {
      title: "Fast",
      description:
        "Don’t keep your users waiting. Solana has block times of 400 milliseconds — and as hardware gets faster, so will the network.",
      liveCount: "3,412",
      liveDesc: "Transactions per Second",
      themeColor: "sky",
    },
    {
      title: "Decentralized",
      description:
        "The Solana network is validated by thousands of nodes that operate independently of each other, ensuring your data remains secure and censorship resistant.",
      liveCount: "1,379",
      liveDesc: "Validator Nodes",
      themeColor: "orange",
    },
    {
      title: "Scalable",
      description:
        "Get big, quick. Solana is made to handle thousands of transactions per second, and fees for both developers and users remain less than $0.01.",
      liveCount: "163,077,581,394",
      liveDesc: "Total Transactions",
      themeColor: "purple",
    },
    {
      title: "Energy Efficient",
      description:
        "Solana’s proof of stake network and other innovations minimize its impact on the environment. Each Solana transaction uses about the same energy as a few Google searches.",
      liveCount: "0%",
      liveDesc: "Net Carbon Impact",
      themeColor: "green",
    },
  ];

  return (
    <>
      {/* community section start here  */}
      <div className="flex justify-between flex-wrap max-w-screen-xl mx-auto gap-5 mb-10">
        <div className="flex-1 text-center">
          <h2 className="text-4xl self-start">
            Join a community <span className="block">of millions.</span>
          </h2>
        </div>
        <div className="flex-1 text-center lg:text-left">
          <div className="mb-10">
            <h2 className="text-6xl mb-2 font-extrabold from-purple-600 via-blue-700 to-indigo-800 bg-gradient-to-r bg-clip-text text-transparent">
              11.5 M+
            </h2>
            <p className="text-sm uppercase text-gray-400">Active Accounts</p>
          </div>
          <div className="mb-10">
            <h2 className="text-6xl mb-2 font-extrabold from-indigo-600 via-blue-700 to-purple-800 bg-gradient-to-r bg-clip-text text-transparent">
              21.9 M
            </h2>
            <p className="text-sm uppercase text-gray-400">NFTS Minted</p>
          </div>
          <div className="mb-10">
            <h2 className="text-6xl mb-2 font-extrabold from-purple-600 via-blue-700 to-indigo-800 bg-gradient-to-r bg-clip-text text-transparent">
              $0.00025
            </h2>
            <p className="text-sm uppercase text-gray-400">
              Average cost per transaction
            </p>
          </div>
        </div>
      </div>
      {/* community section end here  */}
      {/* live data section start here  */}
      <div className="mb-10" id="live">
        <div className="lg:flex md:flex justify-between flex-wrap max-w-screen-xl py-32 mx-auto gap-5">
          <div className="flex-1 text-center">
            <h2 className="text-3xl lg:text-4xl self-start mb-2">
              Made for <span className="block">mass adoption.</span>
            </h2>
            <div className="flex items-center gap-2 justify-center">
              <span className="relative flex h-3 w-3">
                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-sky-400 opacity-75"></span>
                <span className="relative inline-flex rounded-full h-3 w-3 bg-sky-500"></span>
              </span>
              <p className="text-sm uppercase">live data</p>
            </div>
          </div>
          <div className="flex-1">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 col-span-8">
              {data &&
                data.map((item, index) => <Item key={index} {...item} />)}
            </div>
          </div>
        </div>
      </div>
      {/* live data section end here */}
    </>
  );
};

export default CommunitySection;
