import Layout from "components/layout";
import FloatButton from "components/floatButton";
import { useEffect, useState } from "react";
import Header from "components/header";
import { useRouter } from "next/router";

const RiwayatAktivitas = () => {
  const router = useRouter();
  const [floatButton, setFloatButton] = useState(false);
  useEffect(() => {
    console.log("FLOAT : ", floatButton);
  }, [floatButton]);
  return (
    <>
      <Header
        leftTitle={"Riwayat Aktivitas"}
        leftAction={() => router.back()}
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
        rightIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        }
      />
      <div
        onClick={() => setFloatButton(false)}
        className={`${
          floatButton ? "" : "hidden"
        } bg-custom-black bg-opacity-50 z-20 w-full h-full absolute`}
      ></div>
      <div className="w-full h-full py-24  px-4">
        <div className="fixed bottom-20 right-20 z-20">
          <FloatButton
            floatButton={floatButton}
            setFloatButton={setFloatButton}
          />
        </div>
      </div>
    </>
  );
};

export default RiwayatAktivitas;
