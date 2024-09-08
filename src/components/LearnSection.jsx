import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { LearnCard } from "./index";

const LearnSection = () => {
  const data = [
    { spanTitle: "14 Chapters", title: "BuildSpace" },
    { spanTitle: "12 Chapters", title: "Solana Bytes" },
    { spanTitle: "1 Chapters", title: "Scaffold Series" },
    { spanTitle: "3 Chapters", title: "FreeCodeCamp Solana Course" },
    { spanTitle: "167 Chapters", title: "Solana Development by knox" },
    { spanTitle: "8 Chapters", title: "Solana Bootcamp" },
  ];
  return (
    <div className="pt-10 mb-10 w-4/5 mx-auto py-20">
      <div className="mb-5">
        <h2 className="text-4xl font-semibold mb-1">Get Started.</h2>
        <p className="text-gray-400 text-xl">
          Use these Solana Foundation and community courses to begin your
          journey into Solana development.
        </p>
      </div>
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
        <div className="learnItem full-Span rounded-2xl shadow-2xl cursor-pointer">
          <div className="p-20">
            <div className="mb-5">
              <span className="bg-purple-500 px-4 py-1 rounded-full">
                17 Chapters
              </span>
            </div>
            <h2 className="text-2xl lg:text-4xl font-semibold mb-5">
              Solana Development Courses
            </h2>
            <p className="text-gray-300 text-xl mb-5 w-1/2 hidden lg:block">
              Quickstart your Solana development starting from nothing to
              complex programs.
            </p>
            <FontAwesomeIcon className="text-3xl" icon={faCircleArrowRight} />
          </div>
        </div>
        {data &&
          data.map((item, index) => (
            <LearnCard key={index} {...item} index={index} />
          ))}
      </div>
    </div>
  );
};

export default LearnSection;
