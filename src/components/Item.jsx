const Item = ({ title, description, liveCount, liveDesc, themeColor }) => {
  return (
    <div className="bg-black shadow-2xl rounded-xl px-4 lg:px-3 py-4">
      <h2
        className={`font-bold mb-4 border-l px-1 border-${themeColor}-400 text-xl`}
      >
        {title}
      </h2>
      <p className="mb-4 text-gray-200">{description}</p>
      <div className="flex items-center gap-2 mb-4">
        <span className="relative flex h-3 w-3">
          <span
            className={`animate-ping absolute inline-flex h-full w-full rounded-full bg-${themeColor}-400 opacity-75`}
          ></span>
          <span
            className={`relative inline-flex rounded-full h-3 w-3 bg-${themeColor}-500`}
          ></span>
        </span>
        <p className="text-xl uppercase">{liveCount}</p>
      </div>
      <p className="text-sm uppercase text-gray-300">{liveDesc}</p>
    </div>
  );
};
export default Item;
