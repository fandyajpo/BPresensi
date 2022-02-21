import { useState, useEffect, useContext } from "react";
import { PresenceType } from "context/presenceType";
import { useRouter } from "next/router";

const User_category = ({ open }) => {
  const Presence = useContext(PresenceType);

  const router = useRouter();

  useEffect(() => {
    console.log("PRESENCE TYPE : ", Presence.presence);
  }, [Presence.presence]);
  return (
    <div className="w-full bg-custom-bg backdrop-filter backdrop-blur-2xl shadow-xl space-y-2 rounded-md py-2">
      <div className="grid grid-rows-2 grid-cols-4 gap-2">
        <div className="flex justify-center items-center">
          <button
            className="w-20 h-20 flex flex-col justify-center items-center"
            onClick={() => {
              Presence.setPresence("presensi");
              router.push("home/camera");
            }}
          >
            <div className="bg-custom-blue h-10 w-10 rounded-full"></div>
            <p className="text-1xs">Presensi</p>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="w-20 h-20 flex flex-col justify-center items-center"
            onClick={() => {
              Presence.setPresence("mulai-lembur");
              router.push("home/camera");
            }}
          >
            <div className="bg-custom-red h-10 w-10 rounded-full"></div>
            <p className="text-1xs">Mulai Lembur</p>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="w-20 h-20 flex flex-col justify-center items-center"
            onClick={() => {
              Presence.setPresence("istirahat");
              router.push("home/camera");
            }}
          >
            <div className="bg-custom-yellow h-10 w-10 rounded-full"></div>
            <p className="text-1xs">Istirahat</p>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="w-20 h-20 flex flex-col justify-center items-center"
            onClick={() => {
              Presence.setPresence("izin-dan-cuti");
              router.push("home/izin");
            }}
          >
            <div className="bg-custom-green h-10 w-10 rounded-full"></div>
            <p className="text-1xs">Izin & Cuti</p>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="w-20 h-20 flex flex-col justify-center items-center"
            onClick={() => {
              Presence.setPresence("pulang");
              router.push("home/camera");
            }}
          >
            <div className="bg-rose-400 h-10 w-10 rounded-full"></div>
            <p className="text-1xs">Pulang</p>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="w-20 h-20 flex flex-col justify-center items-center"
            onClick={() => {
              Presence.setPresence("selesai-lembur");
              router.push("home/camera");
            }}
          >
            <div className="bg-purple-500 h-10 w-10 rounded-full"></div>
            <p className="text-1xs">Selesai Lembur</p>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="w-20 h-20 flex flex-col justify-center items-center"
            onClick={() => {
              Presence.setPresence("kembali-kerja");
              router.push("home/camera");
            }}
          >
            <div className="bg-teal-500 h-10 w-10 rounded-full"></div>
            <p className="text-1xs">Kembali Kerja</p>
          </button>
        </div>
        <div className="flex justify-center items-center">
          <button
            className="w-20 h-20 flex flex-col justify-center items-center"
            onClick={open}
          >
            <div className="bg-custom-blue h-10 w-10 rounded-full"></div>
            <p className="text-1xs">Lainnnya</p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default User_category;
