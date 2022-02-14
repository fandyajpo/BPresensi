import { useRouter } from "next/router";

const Navbar = () => {
  const router = useRouter();
  return (
    <div className="fixed bottom-0 w-full h-20 bg-opacity-30 bg-custom-bg backdrop-filter backdrop-blur-2xl">
      <div className="w-full flex flex-row items-center justify-around h-full">
        <button
          className="flex flex-col items-center"
          onClick={() => router.push("/auth/home")}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <p className="text-1xs">Home</p>
        </button>
        <button
          className="flex flex-col items-center"
          onClick={() => router.push("/auth/jadwal")}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <p className="text-1xs">Jadwal</p>
        </button>
        <button
          className="flex flex-col items-center"
          onClick={() => router.push("/auth/riwayat")}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <p className="text-1xs">Riwayat</p>
        </button>
        <button className="flex flex-col items-center">
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <p className="text-1xs">Rekap</p>
        </button>
        <button
          className="flex flex-col items-center"
          onClick={() => router.push("/auth/profile")}
        >
          <div className="w-8 h-8 bg-blue-500 rounded-md"></div>
          <p className="text-1xs">Profile</p>
        </button>
      </div>
    </div>
  );
};

export default Navbar;
