import { useRouter } from "next/router";
import { PresenceType } from "context/presenceType";
import { useContext, useEffect } from "react";
const Capture = () => {
  const Presence = useContext(PresenceType);

  const router = useRouter();
  return (
    <div>
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
      <div className="bg-white w-full h-screen flex flex-col py-20 px-4 space-y-4">
        <div className="w-full h-80 bg-black px-4 rounded-xl"></div>
        <div className="space-y-2">
          <div>
            <p className="text-custom-textGray text-s">Jam</p>
            <p className="text-custom-black text-md font-bold">10.55</p>
          </div>
          <div>
            <p className="text-custom-textGray text-s">Lokasi</p>
            <p className="text-custom-black text-md font-bold">
              Jl. Giri Agung I No.12
            </p>
            <p className="text-custom-textGray text-s">
              Jl. Giri Agung I No.12 bla csanfeakf jfhwia
            </p>
          </div>
          <div>
            <button
              className="border border-custom-blue rounded-full"
              onClick={() => router.push("location", "location")}
            >
              <p className="px-4 text-md">Sesuaikan Lokasi</p>
            </button>
          </div>
        </div>
      </div>
      <div className="bg-opacity-30 flex justify-center items-center fixed bottom-0 w-full h-24 z-10 px-4">
        <button
          onClick={() => {
            router.push("/auth/home", "/auth/home");
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
        </button>
      </div>
    </div>
  );
};

export default Capture;
