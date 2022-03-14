import Layout from "components/layout";
import Header from "components/header";
import { useEffect } from "react";
const Jadwal = () => {
  const newLocal = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];
  const month = newLocal;
  const date = new Date();
  const tanggal = date.getMonth();

  useEffect(() => {
    console.log(month[tanggal]);
  }, [month, tanggal]);
  return (
    <>
      <Header
        leftTitle={"Februari 2022"}
        rightIcon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z'
            />
          </svg>
        }
      />
      <div>
        <div className='pt-20'>
          <div className='flex items-center justify-center'>
            <div>
              <input type={"date"} className='' />
              <p>INI SUMPAH AKU BELUM PAHAM, SEBENTAR...</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Jadwal.layout = Layout;
export default Jadwal;
