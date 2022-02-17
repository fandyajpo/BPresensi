const BackHeader = ({
  leftAction,
  leftIcon,
  leftTitle,
  rightAction,
  rightIcon,
}) => {
  return (
    <div className="w-full">
      <div className="bg-custom-blue fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10">
        <div className="flex flex-row items-center justify-between w-full h-full p-4">
          <div className="flex flex-row items-center gap-2 w-full">
            {leftIcon ? (
              <>
                <button onClick={leftAction}>{leftIcon}</button>
              </>
            ) : (
              <></>
            )}
            {leftTitle ? (
              <div>
                <p className="text-md font-bold text-white">{leftTitle}</p>
              </div>
            ) : (
              <></>
            )}
          </div>
          {rightIcon ? (
            <div>
              <button onClick={rightAction}>{rightIcon}</button>
            </div>
          ) : (
            <></>
          )}
        </div>
      </div>
    </div>
  );
};

export default BackHeader;
