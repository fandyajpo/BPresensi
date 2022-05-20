//dikerjakan tanggal 10 februari 2022
//last update 10 februari
import Layout from "components/layout";

//CONTEXT
import { PresenceType } from "context/presenceType";
import withSession from "lib/session";
//STATE
import { useRouter } from "next/router";
import { useState, useContext } from "react";

//USER_COMPONENTS
import Header from "components/header";
import UserProfile from "components/home/user_profile";
import UserCategory from "components/home/user_category";
import UserPresent from "components/home/user_present";
import UserActivity from "components/home/user_activity";
import UserStatistic from "components/home/user_statistic";
import useSWR from "swr";

const Home = () => {
  // const Presence = useContext(PresenceType);
  const router = useRouter();
  const [click, setClick] = useState(false);

  //FETCHING TOD
  // const [shouldFetch, setShouldFetch] = useState(true);

  // // const [profile, setProfile] = useState({
  // //   url: "userdetail",
  // // });
  // // const { url } = profile;

  // // const [err, setErr] = useState("");
  // // const { data, error } = useSWR(shouldFetch ? ["/api/closed", profile] : null);

  // // useEffect(() => {
  // //   console.log("USER PROFILE", data);
  // // }, [data]);

  const [presentPic, setPresentPic] = useState(false);
  const handleOpenPresent = () => setPresentPic(true);
  const handleClosePresent = () => setPresentPic(false);

  // if (!data)
  //   return (
  //     <animated.div className='absolute bg-transparent bg-opacity-30 z-50 w-full h-full flex items-center justify-center backdrop-filter backdrop-blur-sm'>
  //       <animated.div className='border-r-4 border-blue-500 rounded-full'>
  //         <div className='w-20 h-20 border border-blue-400 rounded-full'></div>
  //         <animated.div className='w-24 h-24 flex items-center justify-center border-l-4 rounded-full border-custom-bluebi'>
  //           <div className='w-20 h-20 border-r border-violet-500 rounded-full p-4'></div>
  //         </animated.div>
  //       </animated.div>
  //     </animated.div>
  //   );

  return (
    <div className='w-full h-full bg-custom-skensaBlue'>
      {/* <Header /> */}
      {/* <div className='fixed bg-custom-bluebi w-full h-44'></div> */}
      <div className={`${presentPic ? "" : "hidden"} fixed z-40 top-4 right-4`}>
        <button onClick={handleClosePresent}>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 20 20'
            fill='white'
          >
            <path
              fillRule='evenodd'
              d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
              clipRule='evenodd'
            />
          </svg>
        </button>
      </div>
      <div className='w-full z-10'>
        <UserPresent
          handleOpenPresent={handleOpenPresent}
          presentPic={presentPic}
          setPresentPic={setPresentPic}
        />
      </div>
      <div className='pt-4 pb-32 w-full h-full bg-white rounded-3xl duration-500 outline-none'>
        <div className='px-4 space-y-4'>
          {/* <UserProfile
            // dataFetchFromHome={dataFetchFromHome}
            handleOpenPresent={handleOpenPresent}
            presentPic={presentPic}
            setPresentPic={setPresentPic}
          /> */}
          <UserCategory
            // dataFetchFromHome={dataFetchFromHome}
            // open={open}
            // close={close}
            click={click}
            setClick={setClick}
          />

          <UserActivity
          // dataFetchFromHome={dataFetchFromHome}
          />
          <UserStatistic
          // dataFetchFromHome={dataFetchFromHome}
          />
        </div>
      </div>
    </div>
  );
};

Home.layout = Layout;
export default Home;

// export const getServerSideProps = withSession(async function ({ req, res }) {
//   const user = req.session.get("user");

//   if (!user) {
//     return {
//       redirect: {
//         destination: "/login",
//         permanent: false,
//       },
//     };
//   }

//   return {
//     props: { login: user ? true : false },
//   };
// });

const Lainnya = () => {
  const router = useRouter();
  const Presence = useContext(PresenceType);
  return (
    <>
      <div className='relative flex justify-center items-center'>
        <div className='absolute bg-custom-red w-8 h-8 rounded-full flex justify-center items-center shadow-sm shadow-custom-red'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M19 9l-7 7-7-7'
            />
          </svg>
        </div>
      </div>
      <div className='flex items-center justify-center'>
        <div className='w-full h-full bg-custom-bg py-8 rounded-md border-t border-custom-gray'>
          <div>
            <p className='px-4 font-bold text-s'>Menu Utama</p>
            <div className='w-full bg-custom-bg space-y-2 rounded-md py-2'>
              <div className='grid grid-rows-2 grid-cols-4 gap-2'>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("presensi");
                      router.push("home/camera");
                    }}
                  >
                    <div className='bg-custom-blue h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Presensi</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("mulai-lembur");
                      router.push("home/camera");
                    }}
                  >
                    <div className='bg-custom-red h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Mulai Lembur</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("istirahat");
                      router.push("home/camera");
                    }}
                  >
                    <div className='bg-custom-yellow h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Istirahat</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("izin-dan-cuti");
                      router.push("home/izin");
                    }}
                  >
                    <div className='bg-custom-green h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Izin & Cuti</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("pulang");
                      router.push("home/camera");
                    }}
                  >
                    <div className='bg-rose-400 h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Pulang</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("selesai-lembur");
                      router.push("home/camera");
                    }}
                  >
                    <div className='bg-purple-500 h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Selesai Lembur</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("kembali-kerja");
                      router.push("home/camera");
                    }}
                  >
                    <div className='bg-teal-500 h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Kembali Kerja</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      router.push("riwayat/aktivitas");
                    }}
                  >
                    <div className='bg-custom-black h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Aktifitas Lain</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => alert("under dev")}
                  >
                    <div className='bg-custom-maroon h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Kendaraan Dinas</p>
                  </button>
                </div>
              </div>
            </div>
          </div>
          <div>
            <p className='px-4 font-bold text-s'>Rekapitulasi</p>
            <div className='w-full bg-custom-bg space-y-2 rounded-md py-2'>
              <div className='grid grid-rows-2 grid-cols-4 gap-2'>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("presensi");
                      router.push("home/rekapitulasi");
                    }}
                  >
                    <div className='bg-custom-blue h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Presensi</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("lembur");
                      router.push("home/rekapitulasi");
                    }}
                  >
                    <div className='bg-custom-red h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Lembur</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("aktivitas");
                      router.push("home/rekapitulasi");
                    }}
                  >
                    <div className='bg-custom-yellow h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Aktivitas</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("izin");
                      router.push("home/rekapitulasi");
                    }}
                  >
                    <div className='bg-custom-green h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Izin</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("cuti");
                      router.push("home/rekapitulasi");
                    }}
                  >
                    <div className='bg-rose-400 h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Cuti</p>
                  </button>
                </div>
                <div className='flex justify-center items-center'>
                  <button
                    className='w-20 h-20 flex flex-col justify-center items-center'
                    onClick={() => {
                      Presence.setPresence("semua");
                      router.push("home/rekapitulasi");
                    }}
                  >
                    <div className='bg-purple-500 h-10 w-10 rounded-full'></div>
                    <p className='text-1xs'>Semua</p>
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
