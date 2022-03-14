import { useRouter } from "next/router";
import { PresenceType } from "context/presenceType";
import { useContext, useEffect, useRef, useState } from "react";
import { PresentContent } from "context/presentContent";

import useSWR from "swr";

const Camera = () => {
  const Presence = useContext(PresenceType);
  const PreContent = useContext(PresentContent);
  const router = useRouter();
  useEffect(() => {
    console.log("PRESENCE TYPE : ", Presence.presence);
    console.log("", PreContent.presentContent);
  }, [Presence.presence, PreContent.presentContent]);

  const videoRef = useRef(null);

  const [media, setMedia] = useState("photo");

  const today = new Date();
  const minutes = addZero(today.getMinutes());
  const hours = addZero(today.getHours());
  const years = today.getFullYear();

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  const newLocal = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const date = new Date();
  const tanggal = date.getMonth();
  const month = newLocal;

  const [profile, setProfile] = useState({
    url: "userdetail",
  });
  const { url } = profile;
  const [shouldFetch, setShouldFetch] = useState(true);
  const [err, setErr] = useState("");
  const { data, error } = useSWR(shouldFetch ? ["/api/closed", profile] : null);

  console.log("NAMA", data.username);
  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: {},
  //     })
  //     .then((stream) => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play(false);
  //     })
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  return (
    <div>
      <div
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
            : Presence.presence === "kembali-kerja"
            ? "bg-teal-500"
            : Presence.presence === "aktivitas-lain" && "bg-custom-green"
        } fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10`}
      >
        <div className='flex flex-row items-center gap-2 w-full h-full p-4'>
          <button
            onClick={() => {
              router.back();
              Presence.setPresence("");
              PreContent.setPresentContent("");
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
                : Presence.presence === "kembali-kerja"
                ? "Kembali Kerja"
                : Presence.presence === "aktivitas-lain" && "Aktivitas Lain"}
            </p>
          </div>
        </div>
      </div>
      {/* <video className='w-full h-screen' ref={videoRef}></video> */}
      <div className='w-full h-screen bg-black'></div>
      <div
        className={`bg-opacity-30 bg-custom-bg backdrop-filter backdrop-blur-2xl fixed bottom-0 w-full ${
          Presence.presence === "aktivitas-lain" ? "h-32" : "h-24"
        } z-10`}
      >
        {Presence.presence === "aktivitas-lain" ? (
          <div className='w-full flex items-center justify-around'>
            <button
              onClick={() => setMedia("photo")}
              className={`w-full rounded-r-full text-s ${
                media === "photo" ? "bg-gray-300" : "text-white"
              }`}
            >
              <p>Photo</p>
            </button>
            <button
              onClick={() => setMedia("video")}
              className={`w-full rounded-l-full text-s ${
                media === "video" ? "bg-gray-300" : "text-white"
              }`}
            >
              <p>Video</p>
            </button>
          </div>
        ) : null}
        <div className='w-full flex flex-row items-center justify-center p-4 h-full'>
          <div className='w-4/12 flex items-center justify-center'>
            <div
              className={`duration-1000 ${
                media === "video" ? "opacity-100" : "opacity-0"
              }`}
            >
              {media === "video" ? <p className='text-white'>00.00</p> : null}
            </div>
          </div>
          <div className='w-4/12 flex items-center justify-center'>
            <button
              onClick={(e) => {
                PreContent.setPresentContent({
                  url: "kehadiran",
                  method: "add",
                  username: "kuntul",
                  photo_absen: "gila",
                  jam_datang: `${hours}.${minutes}`,
                  jam_pulang: "",
                  tanggal_kehadiran: tanggal,
                  bulan_kehadiran: `${month[tanggal]}`,
                  tahun_kehadiran: years,
                  lokasi_presensi: "jawa",
                  type_kehadiran:
                    hours > 8 && minutes > 30 ? "Terlambat" : "Tepat Waktu",
                  type_presensi: Presence.presence,
                });
                router.push("capture", "capture");
              }}
              className='bg-white w-14 h-14 rounded-full'
            />
          </div>
          <div className='w-4/12 flex justify-center items-center'>
            {Presence.presence === "aktivitas-lain" ? (
              <button>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='white'
                >
                  <path d='M8 5a1 1 0 100 2h5.586l-1.293 1.293a1 1 0 001.414 1.414l3-3a1 1 0 000-1.414l-3-3a1 1 0 10-1.414 1.414L13.586 5H8zM12 15a1 1 0 100-2H6.414l1.293-1.293a1 1 0 10-1.414-1.414l-3 3a1 1 0 000 1.414l3 3a1 1 0 001.414-1.414L6.414 15H12z' />
                </svg>
              </button>
            ) : null}
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
