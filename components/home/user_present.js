import { useRouter } from "next/router";
import useSWR from "swr";
import { useState, useEffect } from "react";
const User_present = ({ handleOpenPresent }) => {
  const router = useRouter();
  const [scrolling, setScrolling] = useState(false);
  const Scrolled = (event) => {
    if (window.scrollY > 80) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", Scrolled);
  }, []);
  const [shouldFetch, setShouldFetch] = useState(true);
  return (
    <div className='bg-custom-skensaBlue p-4 rounded-b-3xl'>
      <div className='flex items-center justify-between pt-2 pb-4'>
        <div className='space-y-2'>
          <p className='font-black text-md text-white'>Hari Ini</p>
          <p className='text-xs text-white'>Senin, 21 Februari 2022</p>
        </div>
        <div>
          <img src='/image/sidebar.svg' />
        </div>
      </div>
      <div>
        <p className='text-white'>Nama Perusahaan</p>
      </div>
      <div className='flex flex-row items-center w-full py-2 rounded-md'>
        <div className='flex flex-col gap-2 items-center w-full'>
          <div className='w-full flex flex-row items-center'>
            <div className='flex flex-row items-center gap-x-2 w-full'>
              <div className='bg-yellow-500 h-14 w-14 rounded-xl'></div>
              <div>
                <p className='text-white'>Absen Datang</p>
                <p className='text-white'>Redwhite Coffee</p>
              </div>
            </div>
            <div>
              <p className='text-white'>08.22</p>
            </div>
          </div>
          <div className='w-full flex flex-row items-center'>
            <div className='flex flex-row items-center gap-x-2 w-full'>
              <div className='bg-yellow-500 h-14 w-14 rounded-xl'></div>
              <div>
                <p className='text-white'>Absen Pulang</p>
                <p className='text-white'>Kamu belum absen</p>
              </div>
            </div>
            <div>
              <button className='bg-white rounded-full'>
                <p className='text-custom-skensaBlue font-bold shadow-md px-4 py-1 text-sm'>
                  Absen
                </p>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_present;
