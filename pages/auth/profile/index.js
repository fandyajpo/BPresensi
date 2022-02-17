import Layout from "components/layout";
import Header from "components/header";
import { animated, useSpring } from "react-spring";
import { useState } from "react";
const Profile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const MENU_STYLE = useSpring({
    to: {
      x: openMenu ? 0 : 1000,
    },
  });
  return (
    <>
      <Header
        rightAction={() => setOpenMenu(true)}
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
              d="M4 6h16M4 12h16m-7 6h7"
            />
          </svg>
        }
      />
      <div
        onTouchStart={() => setOpenMenu(false)}
        onClick={() => setOpenMenu(false)}
        className={`${
          openMenu ? "" : "hidden"
        } fixed w-full h-screen bg-transparent backdrop-filter backdrop-blur-md z-10`}
      />
      <animated.div style={MENU_STYLE} className="fixed z-20 right-0">
        <Menu />
      </animated.div>
      <div className="pt-20 pb-32 px-4">
        <div className="space-y-4">
          <div className="bg-custom-blue w-14 h-14 rounded-full" />
          <div>
            <p className="font-bold text-sm">Fandy Ahmad Januar Pratama</p>
            <p className="text-xs">Fullstack Developer</p>
            <p className="text-xs">PT BAKAR API</p>
          </div>
          <div className="space-y-4">
            <div className="border rounded-md p-2">
              <p className="text-custom-textGray text-xs">NIK</p>
              <p className="text-xs">82593221421214</p>
              <p className="text-custom-textGray text-xs">Email</p>
              <p className="text-xs">fandybufafb@gmail.com</p>
              <p className="text-custom-textGray text-xs">No. Telepon</p>
              <p className="text-xs">-</p>
              <p className="text-custom-textGray text-xs">Alamat</p>
              <p className="text-xs">Jalan Muding Sari Kav. XX No 8</p>
            </div>
            <div className="border rounded-md p-2">
              <p className="text-gray-500 font-bold text-md py-3">
                Tempat Presensi
              </p>
              <div>
                <div>
                  <p className="text-black text-xs font-bold">
                    RedWhite Coffee
                  </p>
                  <p className="text-xs">
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className="text-black text-xs font-bold">
                    Jl. Giri Agung I No. 12
                  </p>
                  <p className="text-xs">
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className="text-black text-xs font-bold">
                    RedWhite Coffee
                  </p>
                  <p className="text-xs">
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className="text-black text-xs font-bold">
                    Jl. Giri Agung I No. 12
                  </p>
                  <p className="text-xs">
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className="text-black text-xs font-bold">
                    RedWhite Coffee
                  </p>
                  <p className="text-xs">
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className="text-black text-xs font-bold">
                    Jl. Giri Agung I No. 12
                  </p>
                  <p className="text-xs">
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profile.layout = Layout;
export default Profile;

const Menu = () => {
  return (
    <div>
      <div className="bg-white w-full h-screen">
        <p className="p-4 text-custom-black font-bold">Absensi</p>
        <div className="flex flex-col w-full space-y-4 p-4 pr-32">
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
      </div>
    </div>
  );
};
