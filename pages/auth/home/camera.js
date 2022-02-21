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
      <div className="bg-black w-full h-screen"></div>
      <div className="bg-opacity-30 bg-custom-bg backdrop-filter backdrop-blur-2xl fixed bottom-0 w-full h-24 z-10">
        <div className="w-full flex flex-row items-center justify-center p-4 h-full">
          <button
            onClick={() => router.push("capture", "capture")}
            className="bg-white w-14 h-14 rounded-full"
          />
        </div>
      </div>
    </div>
  );
};

export default Camera;
