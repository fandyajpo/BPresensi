import { memo, useState, useEffect } from "react";

const Header = ({
  leftAction,
  leftIcon,
  leftTitle,
  rightAction,
  rightIcon,
  middleContent,
  search,
}) => {
  const [navColor, setNavColor] = useState("bg-custom-jetBlack");

  useEffect(() => {
    search ? setNavColor("bg-white") : setNavColor("bg-custom-jetBlack");
  }, [search]);

  return (
    <div className="w-full">
      {middleContent ? (
        <div
          className={`${navColor} duration-500 fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10`}
        >
          <div className="flex flex-row items-center w-full h-full p-4">
            {middleContent}
          </div>
        </div>
      ) : (
        <div
          className={`${navColor} duration-500 fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10`}
        >
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
      )}
    </div>
  );
};

export default memo(Header);
