import { faArrowUpRightFromSquare } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BuildButton = ({ content, icon = faArrowUpRightFromSquare }) => {
  return (
    <button className="px-4 py-2 rounded-full border hover:bg-white hover:text-black transition duration-300 ease-in-out hover hover:-translate-y-2">
      {content} <FontAwesomeIcon className="ml-1 text-xl" icon={icon} />
    </button>
  );
};

export default BuildButton;
