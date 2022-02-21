import Header from "components/header";
import { useState, useEffect } from "react";
import { useRouter } from "next/router";

const PengajuanIzin = () => {
  const router = useRouter();
  const [values, setValues] = useState(false);
  const handleCheckbox = (e) => {
    setValues(e.target.checked);
  };
  useEffect(() => {
    console.log("VALUES : ", values);
  }, [values]);
  return (
    <>
      <Header
        leftTitle={"Pengajuan Cuti"}
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
      />

      <div className="py-20 px-4">
        <div className="bg-white border rounded-md p-4">
          <div>
            <p className="text-s text-custom-textGray">Jenis Cuti</p>
            <div className="flex flex-col gap-2 py-2">
              <div className="flex items-center gap-2">
                <input type="radio" value="Male" name="gender" />
                <div>
                  <p className="text-s font-medium">Tahunan</p>
                </div>
              </div>

              <div className="flex items-center gap-2">
                <input type="radio" value="Male" name="gender" />
                <div>
                  <p className="text-s font-medium">Melahirkan</p>
                </div>
              </div>
            </div>
          </div>
          <div className="flex justify-between w-full h-full">
            <div className="space-y-2">
              <p className="text-s text-custom-textGray">Tanggal</p>
              <div>
                <input type={"date"} className="" />
              </div>
            </div>
            <div className="space-y-2">
              <p className="text-s text-custom-textGray">Lebih dari sehari?</p>
              <div className="">
                <label className="switch">
                  <input
                    type="checkbox"
                    onChange={handleCheckbox}
                    value={values}
                  />
                  <span className="slider round"></span>
                </label>
              </div>
            </div>
          </div>
          {values ? (
            <div className="flex justify-between w-full h-full pt-2">
              <div className="space-y-2">
                <p className="text-s text-custom-textGray">Sampai Tanggal</p>
                <div>
                  <input type={"date"} className="" />
                </div>
              </div>
            </div>
          ) : (
            <></>
          )}
          <div className="w-full space-y-2 py-2">
            <p className="text-s text-custom-textGray">
              Nomor yang dapat dihubungi
            </p>
            <div className="w-full flex items-center">
              <div className="border-b w-10">
                <input readOnly value={"+62"} className="outline-none" />
              </div>
              <div className="w-full border-b">
                <input
                  className="w-full outline-none placeholder-custom-textGray"
                  placeholder="....."
                  type={"number"}
                />
              </div>
            </div>
          </div>
          <div className="space-y-2">
            <p className="text-s text-custom-textGray">Keterangan</p>
            <textarea
              placeholder="...."
              className="w-full border-none p-0 py-2 outline-none"
            ></textarea>
          </div>
        </div>
      </div>
      <div className="fixed bottom-0 w-full p-4 ">
        <button
          className="bg-custom-blue w-full h-14 rounded-md"
          onClick={() => router.back()}
        >
          <p className="text-s font-bold text-white">Ajukan</p>
        </button>
      </div>
    </>
  );
};

export default PengajuanIzin;
