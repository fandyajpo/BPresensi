import { animated, useSpring, config } from "react-spring";
import { useContext, useEffect } from "react";
import { useRouter } from "next/router";
import { PresenceType } from "context/presenceType";
const Activity = ({ floatButton, setFloatButton }) => {
  const router = useRouter();
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

  const Presence = useContext(PresenceType);

  useEffect(() => {
    console.log("PRESENCE TYPE : ", Presence.presence);
  }, [Presence.presence]);

  return (
    <>
      <animated.div style={first_button} className="fixed ml-2">
        <button
          className="bg-custom-blue rounded-full w-10 h-10 flex items-center justify-center"
          onClick={() => {
            alert("Tada");
            setFloatButton(false);
          }}
        >
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
        <button
          className="bg-custom-blue rounded-full w-10 h-10 flex items-center justify-center"
          onClick={() => setFloatButton(false)}
        >
          <div>
            <label>
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
              <input
                type={"date"}
                className="absolute -z-10 w-0 h-0 bg-transparent border-none border-transparent "
              />
            </label>
          </div>
        </button>
      </animated.div>
      <animated.div style={third_button} className="fixed ml-2">
        <button
          className="bg-custom-blue rounded-full w-10 h-10 flex items-center justify-center"
          onClick={() => {
            Presence.setPresence("aktivitas-lain");
            router.push("/auth/home/camera", "/auth/home/camera");
          }}
        >
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="white"
            >
              <path
                fillRule="evenodd"
                d="M10 3a1 1 0 011 1v5h5a1 1 0 110 2h-5v5a1 1 0 11-2 0v-5H4a1 1 0 110-2h5V4a1 1 0 011-1z"
                clipRule="evenodd"
              />
            </svg>
          </div>
        </button>
      </animated.div>
      <div className="relative">
        <button
          className="fixed bg-custom-blue rounded-full w-14 h-14 flex items-center justify-center"
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

export default Activity;
