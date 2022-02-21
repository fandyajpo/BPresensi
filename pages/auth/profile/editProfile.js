import Header from "components/header";
import { useRouter } from "next/router";
const EditProfile = () => {
  const router = useRouter();
  return (
    <>
      <Header
        leftAction={() => router.back()}
        leftTitle={"Edit Profile"}
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
      <div className="pt-20 bg-custom-pewter w-full h-screen">
        <div className="px-4 space-y-4">
          <div className="w-full h-full flex items-center justify-center border rounded-md p-4 bg-white">
            <div className="flex flex-col items-center justify-center gap-4">
              <div className="bg-custom-red w-24 h-24 rounded-3xl" />
              <div className="relative w-full h-full flex justify-center items-center">
                <div className="absolute bottom-4 bg-white w-24 h-8 flex items-center justify-center bg-opacity-30">
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
                      d="M3 9a2 2 0 012-2h.93a2 2 0 001.664-.89l.812-1.22A2 2 0 0110.07 4h3.86a2 2 0 011.664.89l.812 1.22A2 2 0 0018.07 7H19a2 2 0 012 2v9a2 2 0 01-2 2H5a2 2 0 01-2-2V9z"
                    />
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth={2}
                      d="M15 13a3 3 0 11-6 0 3 3 0 016 0z"
                    />
                  </svg>
                </div>
              </div>
              <div>
                <p className="text-md font-bold">Fandy Ahmad Januar Pratama</p>
              </div>
            </div>
          </div>
          <div className="border p-4 rounded-md bg-white">
            <div>
              <p className="text-custom-textGray text-xs">NIK</p>
              <p className="text-xs">26454358234791840124</p>
            </div>
            <div>
              <p className="text-custom-textGray text-xs">Nama</p>
              <p className="text-xs">Fandy Ahmad Januar Pratama</p>
            </div>
            <div>
              <p className="text-custom-textGray text-xs">Jabatan</p>
              <p className="text-xs">Ortulo</p>
            </div>
            <div>
              <p className="text-custom-textGray text-xs">No. Telepon</p>
              <p className="text-xs">-</p>
            </div>
            <div>
              <p className="text-custom-textGray text-xs">Email</p>
              <p className="text-xs">Fandysbakuc@gmail.cord</p>
            </div>
            <div>
              <p className="text-custom-textGray text-xs">Alamat</p>
              <p className="text-xs">Jalan Remojdiafjc No 0q29384</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default EditProfile;
