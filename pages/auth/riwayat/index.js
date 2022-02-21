import Layout from "components/layout";
import FloatButton from "components/floatButton";
import { useEffect, useState } from "react";
import Header from "components/header";

const Riwayat = () => {
  const [floatButton, setFloatButton] = useState(false);
  useEffect(() => {
    console.log("FLOAT : ", floatButton);
  }, [floatButton]);
  return (
    <>
      <Header leftTitle={"Riwayat"} />
      <div
        onClick={() => setFloatButton(false)}
        className={`${
          floatButton ? "" : "hidden"
        } bg-custom-black bg-opacity-50 z-20 w-full h-full absolute`}
      ></div>
      <div className="w-full h-full py-24  px-4">
        <div className="fixed bottom-40 right-20 z-20">
          <FloatButton
            floatButton={floatButton}
            setFloatButton={setFloatButton}
          />
        </div>
        <div className="space-y-2">
          <div className="flex flex-row items-start gap-x-4">
            <div>
              <div className="bg-custom-green w-6 h-6 rounded-full" />
            </div>
            <div className="w-full border rounded-md p-2 space-y-2">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-x-2">
                  <div className="bg-custom-blue h-10 w-10 rounded-full" />
                  <div>
                    <p className="text-custom-blue text-xs font-bold">
                      Presensi Datang
                    </p>
                    <p className="text-custom-green text-1xs">Tepat Waktu</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold">08.02</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-custom-black">
                  Jl. Giri Agung I No. 12, Benoa, Kec. Kuta Sel, Kabupaten
                  Badung, Bali 80361, Indonesia
                </p>
              </div>
            </div>
          </div>

          <div className="flex flex-row items-start gap-x-4">
            <div>
              <div className="bg-custom-green w-6 h-6 rounded-full" />
            </div>
            <div className="w-full border rounded-md p-2 space-y-2">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center gap-x-2">
                  <div className="bg-custom-blue h-10 w-10 rounded-full" />
                  <div>
                    <p className="text-custom-blue text-xs font-bold">
                      Presensi Datang
                    </p>
                    <p className="text-custom-green text-1xs">Tepat Waktu</p>
                  </div>
                </div>
                <div>
                  <p className="text-xs font-bold">08.02</p>
                </div>
              </div>
              <div>
                <p className="text-xs text-custom-black">
                  Jl. Giri Agung I No. 12, Benoa, Kec. Kuta Sel, Kabupaten
                  Badung, Bali 80361, Indonesia
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Riwayat.layout = Layout;
export default Riwayat;
