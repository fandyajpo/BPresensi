import { animated, useSpring, config } from "react-spring";
import { useState } from "react";
const FloatButton = ({ floatButton, setFloatButton }) => {
  const first_button = useSpring({
    to: {
      y: floatButton ? -50 : 0,
      scale: floatButton ? 1 : 0,
    },
  });
  const second_button = useSpring({
    to: {
      y: floatButton ? -100 : 0,
      scale: floatButton ? 1 : 0,
    },
  });
  const third_button = useSpring({
    to: {
      y: floatButton ? -150 : 0,
      scale: floatButton ? 1 : 0,
    },
  });

  setFloatButton(floatButton);

  return (
    <>
      <animated.div style={first_button} className="fixed ml-2">
        <button className="bg-custom-green rounded-full w-10 h-10 flex items-center justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"
              />
            </svg>
          </div>
        </button>
      </animated.div>
      <animated.div style={second_button} className="fixed ml-2">
        <button className="bg-custom-green rounded-full w-10 h-10 flex items-center justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
              />
            </svg>
          </div>
        </button>
      </animated.div>
      <animated.div style={third_button} className="fixed ml-2">
        <button className="bg-custom-green rounded-full w-10 h-10 flex items-center justify-center">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="white"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M8.684 13.342C8.886 12.938 9 12.482 9 12c0-.482-.114-.938-.316-1.342m0 2.684a3 3 0 110-2.684m0 2.684l6.632 3.316m-6.632-6l6.632-3.316m0 0a3 3 0 105.367-2.684 3 3 0 00-5.367 2.684zm0 9.316a3 3 0 105.368 2.684 3 3 0 00-5.368-2.684z"
              />
            </svg>
          </div>
        </button>
      </animated.div>
      <div className="relative">
        <button
          className="fixed bg-custom-green rounded-full w-14 h-14 flex items-center justify-center"
          onClick={() => setFloatButton(!floatButton)}
        >
          <div>
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
                d="M4 6h16M4 12h16M4 18h16"
              />
            </svg>
          </div>
        </button>
      </div>
    </>
  );
};

export default FloatButton;
