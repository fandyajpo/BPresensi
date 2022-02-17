const BackHeader = ({ leftAction, leftTitle, rightAction, rightTitle }) => {
  return (
    <div>
      <div className="bg-custom-blue fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10">
        <div className="flex flex-row items-center justify-between w-full h-full p-4">
          <div className="flex flex-row items-center gap-2">
            <button onClick={leftAction}>
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-8 w-8"
                fill="none"
                viewBox="0 0 24 24"
                stroke="white"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth={2}
                  d="M11 17l-5-5m0 0l5-5m-5 5h12"
                />
              </svg>
            </button>
            <div>
              <p className="text-md font-bold text-white">{leftTitle}</p>
            </div>
          </div>
          <div>
            <button onClick={rightAction}>{rightTitle}</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BackHeader;
