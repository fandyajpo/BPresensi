import { useRouter } from "next/router";
import { PresenceType } from "context/presenceType";
import { useContext, useEffect, useRef, useState } from "react";
const Camera = () => {
  const Presence = useContext(PresenceType);

  const router = useRouter();
  useEffect(() => {
    console.log("PRESENCE TYPE : ", Presence.presence);
  }, [Presence.presence]);

  const videoRef = useRef(null);

  const [media, setMedia] = useState("photo");

  // const getVideo = () => {
  //   navigator.mediaDevices
  //     .getUserMedia({
  //       video: {},
  //     })
  //     .then((stream) => {
  //       let video = videoRef.current;
  //       video.srcObject = stream;
  //       video.play();
  //     })
  //     .catch((err) => console.error(err));
  // };

  // useEffect(() => {
  //   getVideo();
  // }, [videoRef]);

  return (
    <div>
      <div
        className={`bg-custom-green fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10`}
      >
        <div className="flex flex-row items-center gap-2 w-full h-full p-4">
          <button
            onClick={() => {
              router.back();
              Presence.setPresence("");
            }}
          >
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
                d="M11 17l-5-5m0 0l5-5m-5 5h12"
              />
            </svg>
          </button>
          <div>
            <p className="text-md font-bold text-white">
              {Presence.presence === "presensi"
                ? "Laporan Presensi"
                : Presence.presence === "lembur"
                ? "Laporan Lembur"
                : Presence.presence === "aktivitas"
                ? "Laporan Aktivitas"
                : Presence.presence === "izin"
                ? "Laporan Izin"
                : Presence.presence === "cuti"
                ? "Laporan Cuti"
                : Presence.presence === "semua" && "Semua Laporan"}
            </p>
          </div>
        </div>
      </div>
      <div className="py-20 px-4">
        <div className="bg-white border rounded-md p-4">
          <div className="w-full h-full">
            <div className="space-y-2">
              <p className="text-s text-custom-textGray">Dari Tanggal</p>
              <div>
                <input type={"date"} className="" />
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full h-full pt-2">
            <div className="space-y-2">
              <p className="text-s text-custom-textGray">Sampai Tanggal</p>
              <div>
                <input type={"date"} className="" />
              </div>
            </div>
          </div>

          <div className="pt-2">
            <p className="text-s text-custom-textGray">Jenis File</p>
            <div className="flex flex-col gap-2 py-2">
              <div className="flex items-center gap-2">
                <input type="radio" value="Male" name="gender" />
                <div>
                  <p className="text-s font-medium">Unduh sebagai PDF</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" value="Male" name="gender" />
                <div>
                  <p className="text-s font-medium">Unduh sebagai Excel</p>
                </div>
              </div>
              <div className="flex items-center gap-2">
                <input type="radio" value="Male" name="gender" />
                <div>
                  <p className="text-s font-medium">Lihat Langsung</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="bg-opacity-30 flex justify-center items-center fixed bottom-0 w-full h-24 z-10 px-4">
        <button
          onClick={() => {
            router.back();
          }}
          className={`bg-custom-green w-full h-12 rounded-full`}
        >
          <p className="text-md font-bold text-white">Terapkan</p>
        </button>
      </div>
    </div>
  );
};

export default Camera;
