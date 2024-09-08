import Marquee from "react-fast-marquee";

const GallerySection = () => {
  return (
    <>
      <div className="max-w-screen-xl mx-auto mb-10">
        <div className="px-2 lg:px-0 mb-5">
          <h2 className="text-3xl">Join a thriving community.</h2>
        </div>
      </div>
      {/* gallery start here  */}
      <Marquee pauseOnHover={true}>
        <div className="grid grid-cols-2 grid-flow-col-dense gap-5 mx-2">
          {/* large item  */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt=""
              className="w-full h-[32rem] object-cover"
            />
          </div>
          {/* small item  */}
          <div className="relative overflow-hidden rounded-2xl h-60 shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
          {/* small item  */}
          <div className="relative overflow-hidden rounded-2xl h-60 bg-[#19161c] shadow-lg group">
            <div className="flex items-center flex-col justify-center h-full">
              <h2 className="text-3xl lg:text-4xl mb-3 text-yellow-500">
                3,600
              </h2>
              <p className="text-sm lg:text-md uppercase">
                total solana breakpoint attendence
              </p>
            </div>
          </div>
        </div>
        <div className="grid grid-cols-2 grid-flow-col-dense gap-5 mx-2">
          {/* large item  */}
          <div className="md:col-span-2 md:row-span-2 relative overflow-hidden rounded-2xl shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1528605248644-14dd04022da1?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt=""
              className="w-full h-[32rem] object-cover"
            />
          </div>
          {/* small item  */}
          <div className="relative overflow-hidden rounded-2xl h-60 bg-[#19161c] shadow-lg group">
            <div className="flex items-center flex-col justify-center h-full">
              <h2 className="text-3xl lg:text-4xl mb-3 text-cyan-500">
                45,000
              </h2>
              <p className="text-sm lg:text-md uppercase">
                total solana transaction
              </p>
            </div>
          </div>
          {/* small item  */}
          <div className="relative overflow-hidden rounded-2xl h-60 shadow-lg group">
            <img
              src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
              loading="lazy"
              alt=""
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </Marquee>
      {/* gallery end here  */}
    </>
  );
};

export default GallerySection;
