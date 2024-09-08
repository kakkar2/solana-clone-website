import { DigLearnCard } from "./index";

const LearnCardSection = () => {
  const data = [
    {
      title: "Core Documentation",
      desc: "the offical solana documentation on developing, validators, SPL tokens, wallet & more.",
    },
    {
      title: "Solana Cookbook",
      desc: "the Solana Cookbook documentation on developing, validators, SPL tokens, wallet & more.",
    },
    {
      title: "Solana StackExchange",
      desc: "the Solana StackExchange documentation on developing, validators, SPL tokens, wallet & more.",
    },
    {
      title: "Core Documentation",
      desc: "the offical solana documentation on developing, validators, SPL tokens, wallet & more.",
    },
    {
      title: "Solana Cookbook",
      desc: "the Solana Cookbook documentation on developing, validators, SPL tokens, wallet & more.",
    },
    {
      title: "Solana StackExchange",
      desc: "the Solana StackExchange documentation on developing, validators, SPL tokens, wallet & more.",
    },
    {
      title: "Core Documentation",
      desc: "the offical solana documentation on developing, validators, SPL tokens, wallet & more.",
    },
    {
      title: "Solana Cookbook",
      desc: "the Solana Cookbook documentation on developing, validators, SPL tokens, wallet & more.",
    },
  ];
  return (
    <div className="pt-10 mb-10 w-4/5 mx-auto py-20">
      <div className="mb-5">
        <h2 className="text-4xl font-semibold mb-1">Dig Deeper.</h2>
        <p className="text-gray-400 text-xl">
          Learn from tutorials and guides from across the greater Solana
          ecosystem.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        {data &&
          data.map((item, index) => <DigLearnCard key={index} {...item} />)}
      </div>
    </div>
  );
};

export default LearnCardSection;
