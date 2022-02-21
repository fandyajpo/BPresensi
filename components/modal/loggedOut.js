import { animated, useSpring, config } from "react-spring";

const LoggedOut = ({ logModal, handleCloseLogModal }) => {
  const ModalAnimate = useSpring({
    to: {
      y: logModal ? 0 : 1000,
    },
  });
  return (
    <>
      <div
        className={`${
          logModal ? "" : "hidden"
        } w-full h-full fixed z-20 bg-transparent backdrop-filter backdrop-blur-sm`}
        onTouchEnd={handleCloseLogModal}
        onClick={handleCloseLogModal}
      />
      <animated.div
        style={ModalAnimate}
        className="w-full h-auto fixed bottom-0 bg-white z-30"
      >
        <div className="pt-4 pb-12 px-4 space-y-8">
          <div>
            <p>Apakah kamu yakin mau keluar?</p>
          </div>
          <div className="flex items-center justify-between">
            <button
              className="flex items-center justify-center w-full"
              onClick={handleCloseLogModal}
            >
              <p>Batal</p>
            </button>
            <div className="w-0.5 h-4 bg-black"></div>
            <button
              className="flex items-center justify-center w-full"
              onClick={handleCloseLogModal}
            >
              <p className="text-custom-red">Keluar</p>
            </button>
          </div>
        </div>
      </animated.div>
    </>
  );
};

export default LoggedOut;
