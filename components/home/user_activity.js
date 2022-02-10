import { useState } from "react";

const User_activity = () => {
  const [activityType, setActivityType] = useState(false);
  return (
    <div>
      <div className="flex flex-col pt-2 pb-4">
        <div>
          <p className="font-black text-md">Aktivitas Bulanan</p>
        </div>
        <div className="py-2 space-x-2">
          <button
            onClick={() => setActivityType(!activityType)}
            className={`bg-white rounded-full ${
              !activityType
                ? "border-2 border-custom-blue"
                : "border-2 border-custom-textGray"
            }`}
          >
            <p className="text-sm py-1 px-4">Lembur</p>
          </button>
          <button
            onClick={() => setActivityType(!activityType)}
            className={`bg-white rounded-full ${
              activityType
                ? "border-2 border-custom-blue"
                : "border-2 border-custom-textGray"
            }`}
          >
            <p className="text-sm py-1 px-4">Izin dan Cuti</p>
          </button>
        </div>
      </div>
      <div className="relative w-full flex gap-6 snap-x overflow-x-auto">
        <div className="snap-start shrink-0  last:pr-4">
          <div className="w-64 h-28 bg-white rounded-md p-2 flex flex-row items-center justify-between pr-6">
            <div>
              <p className="text-md font-bold">Lembur Jam Kerja</p>
              <p className="text-xs w-32 text-custom-textGray">
                Jumlah Lembur Jam Kerja
              </p>
              <p className="text-xl font-bold">0</p>
            </div>
            <div className="bg-custom-blue h-12 w-12 rounded-full"></div>
          </div>
        </div>
        <div className="snap-start shrink-0 first:pl-4 last:pr-4">
          <div className="w-64 h-28 bg-white rounded-md p-2 flex flex-row items-center justify-between pr-6">
            <div>
              <p className="text-md font-bold">Lembur Jam Kerja</p>
              <p className="text-xs w-32 text-custom-textGray">
                Jumlah Lembur Jam Kerja
              </p>
              <p className="text-xl font-bold">0</p>
            </div>
            <div className="bg-custom-blue h-12 w-12 rounded-full"></div>
          </div>
        </div>
        <div className="snap-start shrink-0 first:pl-4">
          <div className="w-64 h-28 bg-white rounded-md p-2 flex flex-row items-center justify-between pr-6">
            <div>
              <p className="text-md font-bold">Lembur Jam Kerja</p>
              <p className="text-xs w-32 text-custom-textGray">
                Jumlah Lembur Jam Kerja
              </p>
              <p className="text-xl font-bold">0</p>
            </div>
            <div className="bg-custom-blue h-12 w-12 rounded-full"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_activity;