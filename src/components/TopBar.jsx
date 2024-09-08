const TopBar = ({ message }) => {
  return (
    <div className="bg-gradient-to-r from-cyan-500 to-blue-600 w-full px-2 lg:px-0 py-2 cursor-pointer">
      <div className="text-center uppercase text-sm lg:text-md">{message}</div>
    </div>
  );
};

export default TopBar;
