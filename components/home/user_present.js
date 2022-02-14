const User_present = () => {
  return (
    <div>
      <div className="flex items-center justify-between pt-2 pb-4">
        <div>
          <p className="font-black text-md">Absensi</p>
          <p className="text-xs text-custom-blue">Aktivitasmu hari ini</p>
        </div>
        <div>
          <p className="text-sm font-bold text-custom-blue">
            Kamis, 10 Februari
          </p>
        </div>
      </div>
      <div className="flex flex-row items-center w-full bg-custom-bg backdrop-filter backdrop-blur-2xl p-2 rounded-md">
        <div className="w-9/12">
          <div className="flex flex-row gap-2 items-center">
            <div className="w-10 h-10 rounded-md bg-custom-yellowDark" />
            <p className="text-md font-bold">Presensi Datang</p>
          </div>
          <div className="py-1">
            <p className="text-xs font-bold">Jl. Giri Agung I No.11</p>
          </div>
          <div>
            <p className="text-xs font-bold">Datang : </p>
            <p className="text-xs font-bold">Pulang :</p>
          </div>
        </div>
        <div className="w-3/12 flex items-center justify-center">
          <div className="bg-black w-14 h-14 rounded-md" />
        </div>
      </div>
    </div>
  );
};

export default User_present;
