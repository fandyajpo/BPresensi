import Header from "components/header";
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";
import Router from "next/router";
import NProgress from "nprogress";

const SortDetail = () => {
  const router = useRouter();
  const [openRekap, setOpenRekap] = useState(false);
  const [value, setValue] = useState("");
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const [search, setSearch] = useState(false);
  const styles = useSpring({
    to: { rotateZ: search ? 360 : 0 },
  });

  const [sort, setSort] = useState(false);
  const sortStyle = useSpring({
    to: {
      y: sort ? 0 : 1000,
    },
  });
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "October",
    "November",
    "Desember",
  ];

  const handleDate = new Date();
  let month = months[handleDate.getMonth()];

  NProgress.configure({ showSpinner: false });
  Router.events.on("routeChangeStart", () => NProgress.start());
  Router.events.on("routeChangeComplete", () => NProgress.done());
  Router.events.on("routeChangeError", () => NProgress.done());

  const sendToMobile = (file) => {
    window.ReactNativeWebView.postMessage(JSON.stringify(file));
  };

  useEffect(() => {
    console.log(sort);
    sort ? sendToMobile("BACK") : sendToMobile("NO_BACK");
  }, [sort]);

  const fromReactNative = (e) => {
    try {
      sendToMobile({ mode: "BACK" });
      const data = JSON.parse(e.data);
      if (data.method === "BACK") {
        // router.back();
      } else {
        setSort(false);
      }
    } catch (error) {
      alert(error);
    }
  };

  useEffect(() => {
    document.addEventListener("message", fromReactNative);
    return () => document.removeEventListener("message", fromReactNative);
  }, []);

  useEffect(() => {
    window.addEventListener("message", fromReactNative);
    return () => window.removeEventListener("message", fromReactNative);
  }, []);

  return (
    <>
      <Header
        search={search}
        middleContent={
          search ? (
            <div className='flex items-center w-full h-full gap-2'>
              <button onClick={() => setSearch(false)}>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-8 w-8'
                  fill='none'
                  viewBox='0 0 24 24'
                  stroke='black'
                >
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M11 17l-5-5m0 0l5-5m-5 5h12'
                  />
                </svg>
              </button>
              <input
                onChange={handleValue}
                value={value}
                autoFocus
                className='w-full px-4 py-2 outline-none  rounded-full'
                placeholder='Search. . . '
              />
            </div>
          ) : (
            ""
          )
        }
        leftAction={() => router.back()}
        leftTitle={"Rekap Bulan" + " " + month}
        leftIcon={
          <animated.svg
            style={styles}
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 17l-5-5m0 0l5-5m-5 5h12'
            />
          </animated.svg>
        }
        rightIcon={
          search ? (
            <svg
              xmlns='http://www.w3.org/2000/svg'
              className='h-6 w-6'
              viewBox='0 0 20 20'
              fill='currentColor'
            >
              <path
                fillRule='evenodd'
                d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                clipRule='evenodd'
              />
            </svg>
          ) : (
            <div className='flex flex-row items-center gap-4'>
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
                  d='M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z'
                />
              </svg>
            </div>
          )
        }
        rightAction={search ? () => setValue("") : () => setSearch(true)}
        rightAction_second={(e) => {
          setSort(true);
          router.push(router.pathname + "?=profileMenu");
        }}
        rightIcon_second={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 20 20'
            fill='white'
          >
            <path d='M5 4a1 1 0 00-2 0v7.268a2 2 0 000 3.464V16a1 1 0 102 0v-1.268a2 2 0 000-3.464V4zM11 4a1 1 0 10-2 0v1.268a2 2 0 000 3.464V16a1 1 0 102 0V8.732a2 2 0 000-3.464V4zM16 3a1 1 0 011 1v7.268a2 2 0 010 3.464V16a1 1 0 11-2 0v-1.268a2 2 0 010-3.464V4a1 1 0 011-1z' />
          </svg>
        }
      />
      <div
        onClick={() => setSort(false)}
        className={`${
          sort ? "" : "hidden"
        } w-full h-full z-30 fixed bg-black bg-opacity-50`}
      />
      <div
        onClick={() => setOpenRekap(false)}
        className={`${
          openRekap ? "" : "hidden"
        } fixed bg-opacity-50 bg-black  w-full h-full z-30`}
      >
        <div className='flex items-center justify-center w-full h-full p-4'>
          <div className='w-full'>
            <div className='bg-custom-blue rounded-t-md p-2 flex items-center justify-between'>
              <p className='text-white font-bold'>Detail Rekap</p>
              <svg
                xmlns='http://www.w3.org/2000/svg'
                className='h-5 w-5'
                viewBox='0 0 20 20'
                fill='white'
              >
                <path
                  fillRule='evenodd'
                  d='M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z'
                  clipRule='evenodd'
                />
              </svg>
            </div>
            <div className='bg-white w-full border p-2 rounded-b-md'>
              <div className='flex flex-row gap-2'>
                <div className='bg-black w-24 h-24' />
                <div>
                  <div>
                    <p className='text-s font-bold'>Status</p>
                    <p className='text-s'>Hadir</p>
                  </div>
                  <div>
                    <p className='text-s font-bold'>Keterangan</p>
                    <p className='text-s'>Presensi Datang</p>
                  </div>
                  <div>
                    <p className='text-s font-bold'>Tanggal</p>
                    <p className='text-s'>21 Februari 2022</p>
                  </div>
                  <div>
                    <p className='text-s font-bold'>Jam</p>
                    <p className='text-s '>08.11</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='py-14 px-4'>
        <div className='space-y-3 divide-y'>
          <button
            onClick={() => setOpenRekap(true)}
            className='text-left flex items-center gap-2 pt-3 w-full'
          >
            <div className='bg-custom-green w-10 h-10 rounded-full' />
            <div>
              <p className='text-sm'>Presensi Datang</p>
              <p className='text-sm'>Kamis, 24 Feb - 08.11</p>
            </div>
          </button>
          <button
            onClick={() => setOpenRekap(true)}
            className='text-left flex items-center gap-2 pt-3 w-full'
          >
            <div className='bg-custom-green w-10 h-10 rounded-full' />
            <div>
              <p className='text-sm'>Presensi Datang</p>
              <p className='text-sm'>Kamis, 24 Feb - 08.11</p>
            </div>
          </button>
          <button
            onClick={() => setOpenRekap(true)}
            className='text-left flex items-center gap-2 pt-3 w-full'
          >
            <div className='bg-custom-green w-10 h-10 rounded-full' />
            <div>
              <p className='text-sm'>Presensi Datang</p>
              <p className='text-sm'>Kamis, 24 Feb - 08.11</p>
            </div>
          </button>
          <button
            onClick={() => setOpenRekap(true)}
            className='text-left flex items-center gap-2 pt-3 w-full'
          >
            <div className='bg-custom-green w-10 h-10 rounded-full' />
            <div>
              <p className='text-sm'>Presensi Datang</p>
              <p className='text-sm'>Kamis, 24 Feb - 08.11</p>
            </div>
          </button>
          <button
            onClick={() => setOpenRekap(true)}
            className='text-left flex items-center gap-2 pt-3 w-full'
          >
            <div className='bg-custom-green w-10 h-10 rounded-full' />
            <div>
              <p className='text-sm'>Presensi Datang</p>
              <p className='text-sm'>Kamis, 24 Feb - 08.11</p>
            </div>
          </button>
          <button
            onClick={() => setOpenRekap(true)}
            className='text-left flex items-center gap-2 pt-3 w-full'
          >
            <div className='bg-custom-green w-10 h-10 rounded-full' />
            <div>
              <p className='text-sm'>Presensi Datang</p>
              <p className='text-sm'>Kamis, 24 Feb - 08.11</p>
            </div>
          </button>
          <button
            onClick={() => setOpenRekap(true)}
            className='text-left flex items-center gap-2 pt-3 w-full'
          >
            <div className='bg-custom-green w-10 h-10 rounded-full' />
            <div>
              <p className='text-sm'>Presensi Datang</p>
              <p className='text-sm'>Kamis, 24 Feb - 08.11</p>
            </div>
          </button>
          <button
            onClick={() => setOpenRekap(true)}
            className='text-left flex items-center gap-2 pt-3 w-full'
          >
            <div className='bg-custom-green w-10 h-10 rounded-full' />
            <div>
              <p className='text-sm'>Presensi Datang</p>
              <p className='text-sm'>Kamis, 24 Feb - 08.11</p>
            </div>
          </button>
          <button
            onClick={() => setOpenRekap(true)}
            className='text-left flex items-center gap-2 pt-3 w-full'
          >
            <div className='bg-custom-green w-10 h-10 rounded-full' />
            <div>
              <p className='text-sm'>Presensi Datang</p>
              <p className='text-sm'>Kamis, 24 Feb - 08.11</p>
            </div>
          </button>
        </div>
      </div>

      <animated.div style={sortStyle} className=' z-30 fixed bottom-0 w-full'>
        <SortDataBy setSort={setSort} />
      </animated.div>
    </>
  );
};

export default SortDetail;

const SortDataBy = ({ setSort }) => {
  return (
    <div>
      <p className='text-s text-gray-200 px-4 py-2'>FIlter Berdasarkan</p>
      <div className='bg-white w-full p-4'>
        <div className='flex flex-col gap-2 py-2'>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-s font-medium'>Hadir</p>
            </div>
            <input
              type='radio'
              value='Male'
              name='gender'
              onClick={() => setSort(false)}
            />
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-s font-medium'>Pulang</p>
            </div>
            <input
              type='radio'
              value='Male'
              name='gender'
              onClick={() => setSort(false)}
            />
          </div>
          <div className='flex items-center justify-between'>
            <div>
              <p className='text-s font-medium'>Terlambat</p>
            </div>
            <input
              type='radio'
              value='Male'
              name='gender'
              onClick={() => setSort(false)}
            />
          </div>
        </div>
      </div>
    </div>
  );
};
