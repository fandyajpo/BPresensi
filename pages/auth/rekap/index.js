//17 februari 2022
import Header from "components/header";
import Layout from "components/layout";
import RekapStatis from "components/rekapStatistic";
import { useState, useEffect } from "react";
const Rekap = () => {
  const [currentDate, setCurrentDate] = useState("jan");
  useEffect(() => {
    console.log(currentDate);
  }, [currentDate]);
  return (
    <>
      <Header leftTitle={"Rekap Satu Semester"} />
      <div className="w-full h-full bg-custom-sky px-4 space-y-4 pt-20 pb-28">
        <div className="bg-white rounded-md">
          <RekapStatis />
        </div>
        <div>
          <div className="flex flex-row items-center bg-white shadow-md justify-center rounded-md p-1">
            <button
              className={`${
                currentDate === "jan"
                  ? "text-white bg-custom-green"
                  : "text-custom-textGray"
              } rounded-md`}
              onClick={() => setCurrentDate("jan")}
            >
              <p className="px-4 text-sm">Jan</p>
            </button>
            <button
              className={`${
                currentDate === "feb"
                  ? "text-white bg-custom-green"
                  : "text-custom-textGray"
              } rounded-md`}
              onClick={() => setCurrentDate("feb")}
            >
              <p className="px-4 text-sm">Feb</p>
            </button>
            <button
              className={`${
                currentDate === "mar"
                  ? "text-white bg-custom-green"
                  : "text-custom-textGray"
              } rounded-md`}
              onClick={() => setCurrentDate("mar")}
            >
              <p className="px-4 text-sm">Mar</p>
            </button>
            <button
              className={`${
                currentDate === "apr"
                  ? "text-white bg-custom-green"
                  : "text-custom-textGray"
              } rounded-md`}
              onClick={() => setCurrentDate("apr")}
            >
              <p className="px-4 text-sm">Apr</p>
            </button>
            <button
              className={`${
                currentDate === "mei"
                  ? "text-white bg-custom-green"
                  : "text-custom-textGray"
              } rounded-md`}
              onClick={() => setCurrentDate("mei")}
            >
              <p className="px-4 text-sm">Mei</p>
            </button>
            <button
              className={`${
                currentDate === "jun"
                  ? "text-white bg-custom-green"
                  : "text-custom-textGray"
              } rounded-md`}
              onClick={() => setCurrentDate("jun")}
            >
              <p className="px-4 text-sm">Jun</p>
            </button>
          </div>
        </div>
        <div className="flex flex-row items-center gap-x-4">
          <div>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-6 w-6"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M12 8v13m0-13V6a2 2 0 112 2h-2zm0 0V5.5A2.5 2.5 0 109.5 8H12zm-7 4h14M5 12a2 2 0 110-4h14a2 2 0 110 4M5 12v7a2 2 0 002 2h10a2 2 0 002-2v-7"
              />
            </svg>
          </div>
          <p className="font-bold text-s">Belum ada reward</p>
        </div>
        <div className="space-y-4">
          <p className="font-bold text-s">Data Statistik</p>
          <div className="grid grid-rows-2 grid-cols-2 gap-4">
            <div className="border border-custom-bg rounded-xl h-28 bg-white">
              <div className="relative">
                <div className="absolute top-2">
                  <div className="flex flex-row gap-x-2">
                    <div className="bg-custom-green h-14 w-2 rounded-r-full" />
                    <div className="flex flex-col pt-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p>20</p>
                        <p>Hadir</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-custom-bg rounded-xl h-28 bg-white">
              <div className="relative">
                <div className="absolute top-2">
                  <div className="flex flex-row gap-x-2">
                    <div className="bg-orange-500 h-14 w-2 rounded-r-full" />
                    <div className="flex flex-col pt-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p>20</p>
                        <p>Hadir</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-custom-bg rounded-xl h-28 bg-white">
              <div className="relative">
                <div className="absolute top-2">
                  <div className="flex flex-row gap-x-2">
                    <div className="bg-custom-red h-14 w-2 rounded-r-full" />
                    <div className="flex flex-col pt-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p>20</p>
                        <p>Hadir</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
            <div className="border border-custom-bg rounded-xl h-28 bg-white">
              <div className="relative">
                <div className="absolute top-2">
                  <div className="flex flex-row gap-x-2">
                    <div className="bg-custom-blue h-14 w-2 rounded-r-full" />
                    <div className="flex flex-col pt-4">
                      <div>
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-6 w-6"
                          fill="none"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z"
                          />
                        </svg>
                      </div>
                      <div>
                        <p>20</p>
                        <p>Hadir</p>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Rekap.layout = Layout;
export default Rekap;
