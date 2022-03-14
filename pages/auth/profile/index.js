import Layout from "components/layout";
import Header from "components/header";
import { animated, useSpring } from "react-spring";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";
import useSWR from "swr";
import Router from "next/router";
import NProgress from "nprogress";

const Profile = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const router = useRouter();
  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  // const sendToMobile = (file) => {
  //   window.ReactNativeWebView.postMessage(JSON.stringify(file));
  // };

  // useEffect(() => {
  //   console.log(openMenu);
  // }, [openMenu]);
  // openMenu ? sendToMobile("NO_BACK") : sendToMobile("BACK");

  // const fromReactNative = useCallback(
  //   (e) => {
  //     try {
  //       sendToMobile(openMenu);
  //       const data = JSON.parse(e.data);
  //       if (data.method === "BACK") {
  //         sendToMobile({ mode: "EXITAPP" });
  //       } else {
  //         sendToMobile("NO_BACK");
  //         setOpenMenu(false);
  //         return;
  //       }
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },
  //   [openMenu]
  // );

  // useEffect(() => {
  //   document.addEventListener("message", fromReactNative);
  //   return () => document.removeEventListener("message", fromReactNative);
  // }, [fromReactNative]);

  // useEffect(() => {
  //   window.addEventListener("message", fromReactNative);
  //   return () => window.removeEventListener("message", fromReactNative);
  // }, [fromReactNative]);

  const MENU_STYLE = useSpring({
    to: {
      x: openMenu ? 0 : 1000,
    },
  });

  const [shouldFetch, setShouldFetch] = useState(true);

  const [profile, setProfile] = useState({
    url: "userdetail",
  });
  const { url } = profile;

  const [err, setErr] = useState("");
  const { data, error } = useSWR(shouldFetch ? ["/api/closed", profile] : null);
  if (!data) return <div>loading</div>;

  console.table(data);

  console.log(JSON.stringify(data.tempat_presensi));
  const {
    fullname,
    jabatan,
    perusahaan,
    nik,
    email,
    nomor_hp,
    alamat,
    tempat_presensi,
  } = data;

  return (
    <>
      <Header
        rightAction={(e) => {
          setOpenMenu(true);
        }}
        rightIcon={
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect opacity='0.5' width='32' height='32' rx='8' fill='white' />
            <path
              d='M9.00003 22H23'
              stroke='white'
              strokeWidth='2.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M9.00003 10H23'
              stroke='white'
              strokeWidth='2.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M9 16.1211L23.2424 16.1211'
              stroke='white'
              strokeWidth='2.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        }
      />
      <div
        onClick={() => {
          setOpenMenu(false);
        }}
        className={`${
          openMenu ? "" : "hidden"
        } backdrop-filter backdrop-blur-sm fixed w-full h-screen bg-transparent  z-10`}
      />
      <animated.div style={MENU_STYLE} className='fixed z-20 right-0'>
        <Menu />
      </animated.div>
      <div className='pt-20 pb-32 px-4'>
        <div className='space-y-4'>
          <button
            onClick={() => sendToMobile(openMenu)}
            className='bg-custom-blue w-14 h-14 rounded-full'
          />
          <div>
            <p className='font-bold text-sm'>{fullname}</p>
            <p className='text-xs'>{jabatan}</p>
            <p className='text-xs'>{perusahaan}</p>
          </div>
          <div className='space-y-4'>
            <div className='border rounded-md p-2'>
              <p className='text-custom-textGray text-xs'>NIK</p>
              <p className='text-xs'>{nik}</p>
              <p className='text-custom-textGray text-xs'>Email</p>
              <p className='text-xs'>{email}</p>
              <p className='text-custom-textGray text-xs'>No. Telepon</p>
              <p className='text-xs'>{nomor_hp}</p>
              <p className='text-custom-textGray text-xs'>Alamat</p>
              <p className='text-xs'>{alamat}</p>
            </div>
            <div className='border rounded-md p-2'>
              <p className='text-gray-500 font-bold text-md py-3'>
                Tempat Presensi
              </p>
              <div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <div>
                    <p className='text-black text-xs font-bold'>
                      RedWhite Coffee
                    </p>
                    <p className='text-xs'>
                      JL csu aiw duw No 2942 ucsak Kec, null
                    </p>
                  </div>
                  <p className='text-black text-xs font-bold'>
                    Jl. Giri Agung I No. 12
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    Jl. Giri Agung I No. 12
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    Jl. Giri Agung I No. 12
                  </p>
                  <p className='text-xs'>
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
  const router = useRouter();
  return (
    <div>
      <div className='bg-white w-64 h-screen'>
        <p className='p-4 text-custom-black font-bold'>Absensi</p>
        <div className='flex flex-col w-full space-y-4 p-4'>
          <button
            className='w-full flex justify-between items-center'
            onClick={(e) => {
              router.push("profile/akun", "profile/akun");
              // sendOpenMenuToReactNative(e);
            }}
          >
            <div className='flex flex-row items-center gap-2'>
              <div className='bg-custom-blue w-6 h-6 rounded-full' />
              <div>Akun</div>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </button>
          <button
            className='w-full flex justify-between items-center'
            onClick={() => router.push("profile/keamanan", "profile/keamanan")}
          >
            <div className='flex flex-row items-center gap-2'>
              <div className='bg-custom-blue w-6 h-6 rounded-full' />
              <div>Keamanan</div>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </button>
          <button
            className='flex w-full justify-between items-center'
            onClick={() =>
              router.push("profile/offlineMode", "profile/offlineMode")
            }
          >
            <div className='flex flex-row items-center gap-2'>
              <div className='bg-custom-blue w-6 h-6 rounded-full' />
              <div>Mode Offline</div>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </button>
          <button
            className='w-full flex items-center justify-between'
            onClick={() =>
              router.push("profile/pengaturan", "profile/pengaturan")
            }
          >
            <div className='flex flex-row items-center gap-2'>
              <div className='bg-custom-blue w-6 h-6 rounded-full' />
              <div>Pengaturan</div>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </button>
          <button
            className='flex items-center justify-between w-full'
            onClick={() =>
              router.push("profile/notification", "profile/notification")
            }
          >
            <div className='flex flex-row items-center gap-2'>
              <div className='bg-custom-blue w-6 h-6 rounded-full' />
              <div>Notifikasi</div>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </button>
          <button
            className='flex items-center justify-between w-full'
            onClick={() => router.push("profile/bantuan", "profile/bantuan")}
          >
            <div className='flex flex-row items-center gap-2'>
              <div className='bg-custom-blue w-6 h-6 rounded-full' />
              <div>Bantuan</div>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </button>
          <button
            className='flex items-center justify-between w-full'
            onClick={() => router.push("profile/tentang", "profile/tentang")}
          >
            <div className='flex flex-row items-center justify-between gap-2'>
              <div className='bg-custom-blue w-6 h-6 rounded-full' />
              <div>Tentang</div>
            </div>
            <div>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='currentColor'
              >
                <path
                  fillRule='evenodd'
                  d='M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
          </button>
        </div>
      </div>
    </div>
  );
};
