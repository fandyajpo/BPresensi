import { useRouter } from "next/router";
import { PresenceType } from "context/presenceType";
import { PresentContent } from "context/presentContent";

import { useSpring, animated } from "react-spring";
import { useState, useContext, useEffect } from "react";

import useSWR from "swr";

const Capture = () => {
  const PreContent = useContext(PresentContent);
  const Presence = useContext(PresenceType);
  const router = useRouter();

  useEffect(() => {
    console.log("CONTENT : ", JSON.stringify(PreContent.presentContent.url));
  }, [PreContent.presentContent]);

  const [shouldFetch, setShouldFetch] = useState(false);

  const {
    url,
    method,
    username,
    photo_absen,
    jam_datang,
    jam_pulang,
    tanggal_kehadiran,
    bulan_kehadiran,
    tahun_kehadiran,
    lokasi_presensi,
    type_kehadiran,
    type_presensi,
  } = PreContent.presentContent;
  const [err, setErr] = useState("");
  const { data, error } = useSWR(
    shouldFetch ? ["/api/closed", PreContent.presentContent] : null
  );
  const [valid, setValid] = useState(false);
  const ValidAnimate = useSpring({
    from: {
      y: -1000,
    },
    to: {
      y: valid ? 0 : -1000,
    },
  });

  const isAccept = () => {
    setErr(error ? error : "Kamu berhasil melakukan absensi hari ini");
    setValid(true);
    setTimeout(() => {
      router.push("/auth/home", "/auth/home");
    }, 3000);
  };

  return (
    <>
      <div
        className={`${
          valid ? "" : "hidden"
        } absolute flex items-center justify-center z-20 w-full h-full`}
      >
        <div className='bg-black flex items-center justify-center bg-opacity-20 w-full h-full'></div>
      </div>
      <animated.div
        style={ValidAnimate}
        className='absolute flex items-center justify-center z-30 p-4 w-full'
      >
        <div className='bg-white flex items-center justify-center w-full rounded-xl'>
          <p className='font-bold text-md p-4'>{err}</p>
        </div>
      </animated.div>
      <div className='w-full h-screen overflow-y-hidden'>
        {/* PRESENT MODAL */}

        <div
          className={` ${
            Presence.presence === "presensi"
              ? "bg-custom-blue"
              : Presence.presence === "mulai-lembur"
              ? "bg-custom-red"
              : Presence.presence === "istirahat"
              ? "bg-custom-yellow"
              : Presence.presence === "izin-dan-cuti"
              ? "bg-custom-green"
              : Presence.presence === "pulang"
              ? "bg-rose-400"
              : Presence.presence === "selesai-lembur"
              ? "bg-purple-500"
              : Presence.presence === "kembali-kerja" && "bg-teal-500"
          } fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10`}
        >
          <div className='flex flex-row items-center gap-2 w-full h-full p-4 overflow-hidden'>
            <button
              onClick={() => {
                PreContent.setPresentContent("");
                router.back();
              }}
            >
              <svg
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
              </svg>
            </button>
            <div>
              <p className='text-md font-bold text-white'>
                {Presence.presence === "presensi"
                  ? "Presensi"
                  : Presence.presence === "mulai-lembur"
                  ? "Mulai Lembur"
                  : Presence.presence === "istirahat"
                  ? "Istirahat"
                  : Presence.presence === "izin-dan-cuti"
                  ? "Izin dan Cuti"
                  : Presence.presence === "pulang"
                  ? "Pulang"
                  : Presence.presence === "selesai-lembur"
                  ? "Selesai Lembur"
                  : Presence.presence === "kembali-kerja" && "Kembali Kerja"}
              </p>
            </div>
          </div>
        </div>
        <div className='bg-white w-full h-screen flex flex-col py-20 px-4 space-y-4'>
          <div className='w-full h-80 bg-gray-300 rounded-xl'>
            <div className='relative'>
              <button
                onClick={() => {
                  router.back();
                  PreContent.setPresentContent("");
                }}
                className='absolute top-64 w-full bg-custom-red flex items-center justify-center h-16 bg-opacity-50 rounded-b-xl gap-2'
              >
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
                    d='M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z'
                  />
                  <path
                    strokeLinecap='round'
                    strokeLinejoin='round'
                    strokeWidth={2}
                    d='M15 13a3 3 0 11-6 0 3 3 0 016 0z'
                  />
                </svg>
                <p className='text-white'>Ulangi</p>
              </button>
            </div>
          </div>
          <div className='space-y-2'>
            <div>
              <p className='text-custom-textGray text-s'>Jam</p>
              <p className='text-custom-black text-md font-bold'>
                {jam_datang}
              </p>
            </div>
            <div>
              <p className='text-custom-textGray text-s'>Lokasi</p>
              <p className='text-custom-black text-md font-bold'>
                {lokasi_presensi}
              </p>
              <p className='text-custom-textGray text-s'>{lokasi_presensi}</p>
            </div>
            <div>
              <button
                className='border border-custom-blue rounded-full'
                onClick={() => router.push("location", "location")}
              >
                <p className='px-4 text-md'>Sesuaikan Lokasi</p>
              </button>
            </div>
          </div>
        </div>
        <div className='bg-opacity-30 flex justify-center items-center fixed bottom-0 w-full h-24 z-10 px-4'>
          <button
            onClick={(h) => {
              setShouldFetch(true);
              isAccept(h);
            }}
            className={`${
              Presence.presence === "presensi"
                ? "bg-custom-blue"
                : Presence.presence === "mulai-lembur"
                ? "bg-custom-red"
                : Presence.presence === "istirahat"
                ? "bg-custom-yellow"
                : Presence.presence === "izin-dan-cuti"
                ? "bg-custom-green"
                : Presence.presence === "pulang"
                ? "bg-rose-400"
                : Presence.presence === "selesai-lembur"
                ? "bg-purple-500"
                : Presence.presence === "kembali-kerja" && "bg-teal-500"
            } w-full p-4 h-12 rounded-full`}
          >
            <p className='text-md font-bold text-white'>
              {Presence.presence === "presensi"
                ? "Presensi"
                : Presence.presence === "mulai-lembur"
                ? "Mulai Lembur"
                : Presence.presence === "istirahat"
                ? "Istirahat"
                : Presence.presence === "izin-dan-cuti"
                ? "Izin dan Cuti"
                : Presence.presence === "pulang"
                ? "Pulang"
                : Presence.presence === "selesai-lembur"
                ? "Selesai Lembur"
                : Presence.presence === "kembali-kerja" && "Kembali Kerja"}
            </p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Capture;
