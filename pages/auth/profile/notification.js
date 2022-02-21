import { useRouter } from "next/router";
import Header from "components/header";
const PusatNotifikasi = () => {
  const router = useRouter();
  return (
    <>
      <Header
        leftAction={() => router.back()}
        leftTitle={"Pusat Notifikasi"}
        rightIcon={
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
              d="M12 6V4m0 2a2 2 0 100 4m0-4a2 2 0 110 4m-6 8a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4m6 6v10m6-2a2 2 0 100-4m0 4a2 2 0 110-4m0 4v2m0-6V4"
            />
          </svg>
        }
        rightAction={() => router.push("pengaturan", "pengaturan")}
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
      <div className="pt-20 px-4 bg-custom-pewter h-screen w-full"></div>
    </>
  );
};

export default PusatNotifikasi;
