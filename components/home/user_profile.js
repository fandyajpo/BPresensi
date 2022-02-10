const User_profile = () => {
  return (
    <div className="">
      <div className="py-6 relative flex flex-row items-center justify-between w-full">
        <div className="relative w-full flex justify-start">
          <div className="absolute">
            <p className="text-md font-bold text-white">PT BAKAR API</p>
          </div>
        </div>
        <div className="relative w-full flex justify-end">
          <div className="absolute">
            <p className="text-md font-bold text-white">17.34</p>
          </div>
        </div>
      </div>
      <div className="w-full h-20 bg-opacity-30 bg-custom-bg backdrop-filter backdrop-blur-2xl shadow-xl rounded-md border-l-4 border-r-4 border-custom-blue ">
        <div className="flex items-center justify-start w-full h-full px-3">
          <div className="flex flex-row items-center gap-x-3">
            <div className="w-14 h-14 bg-custom-blue rounded-md" />
            <div>
              <p className="text-sm font-bold">Fandy Ahmad Januar Pratama</p>
              <p className="text-1xs">Fullstack Developer</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_profile;
