import Header from "components/header";
import { useRouter } from "next/router";
import { useState } from "react";
const Notifikasi = () => {
  const router = useRouter();
  const [search, setSearch] = useState(false);
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
        leftTitle={"Notifikasi"}
        leftIcon={
          search ? (
            <></>
          ) : (
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
          )
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
        rightAction={() => setSearch(true)}
      />
      <div></div>
    </>
  );
};

export default Notifikasi;
