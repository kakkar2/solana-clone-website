import { faCircleArrowRight } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const LearnCard = ({ index, spanTitle, title }) => {
  return (
    <div
      className={`learnItem learnItem${
        index + 1
      } rounded-2xl shadow-2xl cursor-pointer relative p-10`}
    >
      <div className="absolute bottom-0 w-4/5">
        <div className="mb-5">
          <span className="bg-purple-500 px-4 py-1 rounded-full">
            {spanTitle}
          </span>
        </div>
        <div className="flex items-center justify-between w-full">
          <h2 className="text-2xl font-semibold mb-5">{title}</h2>
          <FontAwesomeIcon className="text-xl" icon={faCircleArrowRight} />
        </div>
      </div>
    </div>
  );
};

export default LearnCard;
