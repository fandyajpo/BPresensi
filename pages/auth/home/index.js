//dikerjakan tanggal 10 februari 2022
//last update 10 februari
import Layout from "components/layout";

//CONTEXT
import { PresenceType } from "context/presenceType";

//STATE
import { useRouter } from "next/router";
import { useState, useEffect, useContext } from "react";
import { useDrag } from "@use-gesture/react";
import { animated, useSpring, config } from "react-spring";

//USER_COMPONENTS
import UserProfile from "components/home/user_profile";
import UserCategory from "components/home/user_category";
import UserPresent from "components/home/user_present";
import UserActivity from "components/home/user_activity";
import UserStatistic from "components/home/user_statistic";

import Header from "components/header";

const Home = () => {
  // const Presence = useContext(PresenceType);
  const router = useRouter();
  const [click, setClick] = useState(false);
  const items = ["ITEMS", "ITEMS", "ITEMS", "ITEMS", "ITEMS", "ITEMS"];
  const height = items.length * 60 + 80;

  const [{ y }, api] = useSpring(() => ({ y: height }));

  const open = ({ canceled }) => {
    setClick(true);
    api.start({
      y: 0,
      immediate: false,
      config: canceled ? config.wobbly : config.stiff,
    });
  };
  const close = (velocity = 0) => {
    setClick(false);
    api.start({
      y: height,
      immediate: false,
      config: { ...config.stiff, velocity },
    });
  };

  useEffect(() => {
    console.log(click);
  }, [click]);

  const bind = useDrag(
    ({
      last,
      velocity: [, vy],
      direction: [, dy],
      movement: [, my],
      cancel,
      canceled,
    }) => {
      if (my < -70) cancel();
      if (last) {
        my > height * 0.5 || (vy > 0.5 && dy > 0)
          ? close(vy)
          : open({ canceled });
      } else api.start({ y: my, immediate: true });
    },
    {
      from: () => [0, y.get()],
      filterTaps: true,
      bounds: { top: 0 },
      rubberband: true,
    }
  );

  const display = y.to((py) => (py < height ? "block" : "none"));

  //
  const [scrolling, setScrolling] = useState(false);
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
  return (
    <div className="w-full h-full bg-custom-sky">
      <Header
        rightAction={() =>
          router.push("home/notification", "home/notification")
        }
        rightIcon={
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
        }
      />
      <div
        onClick={() => close()}
        className={`${
          !click ? "hidden" : ""
        } fixed bg-transparent backdrop-filter backdrop-blur-md w-full h-screen z-30`}
      />
      <div
        className={`fixed top-0 z-0 ${
          scrolling
            ? "bg-gradient-to-t from-custom-sky via-custom-blue to-custom-blue h-0"
            : "bg-gradient-to-b from-custom-blue via-custom-blue to-custom-sky h-64"
        } duration-1000 w-full min-h-fit outline-none`}
      />

      <div className="pt-20 pb-32 w-full h-full bg-custom-sky duration-500 outline-none">
        <div className="px-4 space-y-4">
          <UserProfile />
          <UserCategory open={open} />
          <UserPresent />
          <UserActivity />
          <UserStatistic />
        </div>
      </div>
      <div>
        <animated.div
          className="sheet"
          {...bind()}
          style={{ display, bottom: `calc(-100vh + ${height - 100}px)`, y }}
        >
          <div>
            <Lainnya />
          </div>
        </animated.div>
      </div>
    </div>
  );
};

Home.layout = Layout;
export default Home;

const Lainnya = () => {
  const router = useRouter();
  const Presence = useContext(PresenceType);
  return (
    <>
      <div className="relative flex justify-center items-center">
        {/* <div className="w-24 h-1 bg-custom-gray rounded-full" /> */}
        <div className="absolute bg-custom-red w-8 h-8 rounded-full flex justify-center items-center shadow-sm shadow-custom-red">
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
              d="M19 9l-7 7-7-7"
            />
          </svg>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <div className="w-full h-full bg-custom-bg py-8 rounded-md border-t border-custom-gray">
          <div>
            <p className="px-4 font-bold text-s">Menu Utama</p>
            <div className="w-full bg-custom-bg space-y-2 rounded-md py-2">
              <div className="grid grid-rows-2 grid-cols-4 gap-2">
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("presensi");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-custom-blue h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Presensi</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("mulai-lembur");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-custom-red h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Mulai Lembur</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("istirahat");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-custom-yellow h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Istirahat</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("izin-dan-cuti");
                      router.push("home/izin");
                    }}
                  >
                    <div className="bg-custom-green h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Izin & Cuti</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("pulang");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-rose-400 h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Pulang</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("selesai-lembur");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-purple-500 h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Selesai Lembur</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("kembali-kerja");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-teal-500 h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Kembali Kerja</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      router.push("riwayat/aktivitas");
                    }}
                  >
                    <div className="bg-custom-black h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Aktifitas Lain</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => alert("under dev")}
                  >
                    <div className="bg-custom-maroon h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Kendaraan Dinas</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className="px-4 font-bold text-s">Rekapitulasi</p>
            <div className="w-full bg-custom-bg space-y-2 rounded-md py-2">
              <div className="grid grid-rows-2 grid-cols-4 gap-2">
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("presensi");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-custom-blue h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Presensi</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("mulai-lembur");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-custom-red h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Lembur</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("istirahat");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-custom-yellow h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Aktifitas</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("izin-dan-cuti");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-custom-green h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Izin</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("pulang");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-rose-400 h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Cuti</p>
                  </button>
                </div>
                <div className="flex justify-center items-center">
                  <button
                    className="w-20 h-20 flex flex-col justify-center items-center"
                    onClick={() => {
                      Presence.setPresence("selesai-lembur");
                      router.push("home/camera");
                    }}
                  >
                    <div className="bg-purple-500 h-10 w-10 rounded-full"></div>
                    <p className="text-1xs">Semua</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
