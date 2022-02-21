import { useRouter } from "next/router";
import { useState } from "react";

import Header from "components/header";
import LoggedOut from "components/modal/loggedOut";
const Akun = () => {
  const router = useRouter();

  const [logModal, setLogModal] = useState(false);
  const handleOpenLogModal = () => setLogModal(true);
  const handleCloseLogModal = () => setLogModal(false);
  return (
    <>
      <LoggedOut
        logModal={logModal}
        handleCloseLogModal={handleCloseLogModal}
      />
      <Header
        leftAction={() => router.back()}
        leftTitle={"Akun"}
        leftIcon={
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
        }
      />
      <div className="pt-20 px-4 bg-custom-pewter h-screen w-full">
        <div className="space-y-2">
          <button
            className="flex items-center gap-2"
            onClick={() => router.push("editProfile")}
          >
            <div className="bg-custom-blue w-6 h-6 rounded-full" />
            <p className="text-sm text-custom-jetBlack font-bold">Edit Akun</p>
          </button>
          <button
            className="flex items-center gap-2"
            onClick={() => router.push("emailPresensi", "emailPresensi")}
          >
            <div className="bg-custom-blue w-6 h-6 rounded-full" />
            <p className="text-sm text-custom-jetBlack font-bold">
              Email dari Presensiku
            </p>
          </button>
          <button
            className="flex items-center gap-2"
            onClick={handleOpenLogModal}
          >
            <div className="bg-custom-blue w-6 h-6 rounded-full" />
            <p className="text-sm text-custom-red font-bold">Log out</p>
          </button>
        </div>
      </div>
    </>
  );
};

export default Akun;
