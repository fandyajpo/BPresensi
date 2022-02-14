import { useRouter } from "next/router";
import { PresenceType } from "context/presenceType";
import { useContext, useEffect } from "react";
const Camera = () => {
  const Presence = useContext(PresenceType);

  const router = useRouter();
  useEffect(() => {
    console.log("PRESENCE TYPE : ", Presence.presence);
  }, [Presence.presence]);

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
            : Presence.presence === "kembali-kerja" && "bg-teal-500"
        } fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10`}
      >
        <div className="flex flex-row items-center gap-2 w-full h-full p-4">
          <button onClick={() => router.back()}>
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
            <p className="text-md font-bold text-white">Lokasi</p>
          </div>
        </div>
      </div>
      <div className="bg-gray-300 w-full h-screen"></div>
      <div className="fixed bottom-8 w-full h-24 z-10 p-4">
        <div className="w-full h-24 bg-white shadow-md flex flex-row gap-2 p-2 rounded-lg">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="gray"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
          </div>
          <div className="">
            <p>
              Kebonaaaaaaaaaaaaaa aaaaaaaaaaaaaa
              aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Camera;
