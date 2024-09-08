const TextSection = () => {
  return (
    <div className="w- full h-[500px] mb-5 p-8 lg:p-16" id="endSection">
      <div className="flex justify-center flex-col items-center h-full p-5 lg:p-10 bg-gray-transparent rounded-2xl">
        <p className="max-w-screen-lg mx-auto text-3xl lg:text-5xl font-bold text-center mb-10">
          It's time to join the thousands of creators, artists, and developers
          using Solana.
        </p>
        <button className="rounded-full uppercase px-4 py-3 bg-gradient-to-r from-purple-800 to-gray-800 hover:from-white hover:to-gray-100 hover:text-black transition duration-300 ease-in-out">
          start building
        </button>
      </div>
    </div>
  );
};

export default TextSection;
