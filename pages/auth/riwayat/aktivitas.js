import Layout from "components/layout";
import FloatButton from "components/floatActivity";
import { useEffect, useState } from "react";
import Header from "components/header";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";

const RiwayatAktivitas = () => {
  const router = useRouter();
  const [floatButton, setFloatButton] = useState(false);
  useEffect(() => {
    console.log("FLOAT : ", floatButton);
  }, [floatButton]);
  const [value, setValue] = useState("");
  const handleValue = (e) => {
    setValue(e.target.value);
  };
  const [search, setSearch] = useState(false);
  const styles = useSpring({
    to: { rotateZ: search ? 360 : 0 },
  });
  return (
    <>
      <Header
        search={search}
        middleContent={
          search ? (
            <div className="flex items-center w-full h-full gap-2">
              <button onClick={() => setSearch(false)}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-8 w-8"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="black"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M11 17l-5-5m0 0l5-5m-5 5h12"
                  />
                </svg>
              </button>
              <input
                onChange={handleValue}
                value={value}
                autoFocus
                className="w-full px-4 py-2 outline-none  rounded-full"
                placeholder="Search. . . "
              />
            </div>
          ) : (
            ""
          )
        }
        leftAction={() => router.back()}
        leftTitle={"Riwayat Aktivitas"}
        leftIcon={
          <animated.svg
            style={styles}
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
          </animated.svg>
        }
        rightIcon={
          search ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
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
          )
        }
        rightAction={search ? () => setValue("") : () => setSearch(true)}
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
