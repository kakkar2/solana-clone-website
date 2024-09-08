import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const DigLearnCard = ({ title, desc }) => {
  return (
    <div className="p-10 bg-[#19161c] rounded-2xl digCard">
      <div className="text-purple-500 uppercase mb-3">tool / library</div>
      <h3 className="mb-3 text-xl">{title}</h3>
      <p className="text-gray-300 mb-5">{desc}</p>
      <button className="uppercase text-gray-300">
        learn more <FontAwesomeIcon icon={faArrowUpRightFromSquare} />
      </button>
    </div>
  );
};

export default DigLearnCard;
