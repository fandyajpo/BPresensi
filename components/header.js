import { useState, useEffect } from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const [navProfile, setNavProfile] = useState(false);
  const NavbarAnimation = (event) => {
    if (window.scrollY > 70) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", NavbarAnimation);
  }, []);
  const router = useRouter();

  const AnimateNav = useSpring({
    to: {
      x: navProfile ? 0 : 1000,
    },
  });
  return (
    <div className="flex flex-row justify-between w-full overflow-hidden">
      <div className="bg-custom-blue fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10">
        <div className="w-full flex flex-row items-center justify-between p-4 h-full">
          <div>
            <p
              className={`${
                scrolling ? "opacity-100" : "opacity-0"
              } duration-1000 text-xl font-bold text-white`}
            >
              Absensiku
            </p>
          </div>
          <div>
            {router.asPath === "/auth/profile" ? (
              <button onClick={() => setNavProfile(!navProfile)}>
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
                    d="M4 6h16M4 12h16m-7 6h7"
                  />
                </svg>
              </button>
            ) : (
              <button>
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
                    d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
                  />
                </svg>
              </button>
            )}
          </div>
        </div>
      </div>
      {router.asPath === "/auth/profile" && (
        <div className="absolute right-0 flex justify-end items-center overflow-hidden w-full">
          <div
            className={`${
              !navProfile ? "hidden" : ""
            } bg-transparent z-10 w-screen h-screen`}
            onClick={() => setNavProfile(!navProfile)}
          />
          <animated.div
            style={AnimateNav}
            className="bg-white  w-auto h-screen z-20"
          >
            <div className="flex flex-col w-full space-y-4 p-4 w-full">
              <button className="flex items-center gap-2">
                <div className="bg-custom-blue w-6 h-6 rounded-full" />
                <div>Akun</div>
              </button>
              <button className="flex items-center gap-2">
                <div className="bg-custom-blue w-6 h-6 rounded-full" />
                <div>Keamanan</div>
              </button>
              <button className="flex w-full items-center gap-2 ">
                <div className="bg-custom-blue w-6 h-6 rounded-full" />
                <div>Moda Offline</div>
              </button>
              <button className="flex items-center gap-2">
                <div className="bg-custom-blue w-6 h-6 rounded-full" />
                <div>Pengaturan</div>
              </button>
              <button className="flex items-center gap-2">
                <div className="bg-custom-blue w-6 h-6 rounded-full" />
                <div>Tema</div>
              </button>
              <button className="flex items-center gap-2">
                <div className="bg-custom-blue w-6 h-6 rounded-full" />
                <div>Notifikasi</div>
              </button>
              <button className="flex items-center gap-2">
                <div className="bg-custom-blue w-6 h-6 rounded-full" />
                <div>Bantuan</div>
              </button>
              <button className="flex items-center gap-2">
                <div className="bg-custom-blue w-6 h-6 rounded-full" />
                <div>Tentang</div>
              </button>
            </div>
          </animated.div>
        </div>
      )}
    </div>
  );
};
export default Header;

// <div className="bg-custom-blue fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10">
// <div className="w-full flex flex-row items-center justify-between p-4 h-full">
//   <div>
//     <p
//       className={`${
//         scrolling ? "opacity-100" : "opacity-0"
//       } duration-1000 text-xl font-bold text-white`}
//     >
//       Absensiku
//     </p>
//   </div>
//   <div>
//     <svg
//       xmlns="http://www.w3.org/2000/svg"
//       className="h-8 w-8"
//       fill="none"
//       viewBox="0 0 24 24"
//       stroke="white"
//     >
//       <path
//         strokeLinecap="round"
//         strokeLinejoin="round"
//         strokeWidth={2}
//         d="M15 17h5l-1.405-1.405A2.032 2.032 0 0118 14.158V11a6.002 6.002 0 00-4-5.659V5a2 2 0 10-4 0v.341C7.67 6.165 6 8.388 6 11v3.159c0 .538-.214 1.055-.595 1.436L4 17h5m6 0v1a3 3 0 11-6 0v-1m6 0H9"
//       />
//     </svg>
//   </div>
// </div>
// </div>
