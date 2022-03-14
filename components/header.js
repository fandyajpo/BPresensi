import { memo, useState, useEffect } from "react";

const Header = ({
  leftAction,
  leftIcon,
  leftTitle,
  rightAction,
  rightIcon,
  rightAction_second,
  rightIcon_second,
  middleContent,
  search,
}) => {
  const [navColor, setNavColor] = useState("bg-violet-600");

  useEffect(() => {
    search ? setNavColor("bg-white") : setNavColor("bg-violet-600");
  }, [search]);

  return (
    <div className='w-full overflow-hidden'>
      {middleContent ? (
        <div
          className={`bg-custom-bluebi duration-500 fixed top-0 w-full h-16 backdrop-filter backdrop-blur-2xl z-10 flex justify-between items-center`}
        >
          <div className='flex flex-row items-center w-full h-full p-4'>
            {middleContent}
            {rightIcon ? (
              <div>
                <button onClick={rightAction}>{rightIcon}</button>
              </div>
            ) : (
              <></>
            )}
          </div>
        </div>
      ) : (
        <div
          className={`bg-custom-bluebi duration-500 fixed top-0 w-full h-16 backdrop-filter backdrop-blur-2xl z-10 `}
        >
          <div className='flex flex-row items-center justify-between w-full h-full px-4 pt-2'>
            <div className='flex flex-row items-center gap-2 w-full'>
              {leftIcon ? (
                <>
                  <button onClick={leftAction}>{leftIcon}</button>
                </>
              ) : (
                <></>
              )}
              {leftTitle ? (
                <div>
                  <p className='text-md font-bold text-white'>{leftTitle}</p>
                </div>
              ) : (
                <></>
              )}
            </div>
            {rightIcon ? (
              <div className='flex items-center gap-x-4'>
                <div>
                  <button onClick={rightAction}>{rightIcon}</button>
                </div>
                {rightAction_second ? (
                  <div>
                    <button onClick={rightAction_second}>
                      {rightIcon_second}
                    </button>
                  </div>
                ) : (
                  <></>
                )}
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
