const Navbar = () => {
  return (
    <div className="fixed bottom-0 w-full h-20 bg-opacity-30 bg-custom-bg backdrop-filter backdrop-blur-2xl">
      <div className="w-full flex flex-row items-center justify-around h-full">
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <p className="text-1xs">Home</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <p className="text-1xs">Jadwal</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <p className="text-1xs">Riwayat</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <p className="text-1xs">Rekap</p>
        </div>
        <div className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <p className="text-1xs">Profile</p>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
