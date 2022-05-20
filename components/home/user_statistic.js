import { useRouter } from "next/router";
import useSWR from "swr";
import { useState } from "react";
const User_statistic = ({}) => {
  const router = useRouter();

  return (
    <div>
      <div className='flex items-center justify-between pt-2 pb-4'>
        <div>
          <p className='font-black text-md'>Statistik</p>
          <p className='text-xs text-custom-blue'>Yok lihat statistik loe</p>
        </div>
        <div>
          <button onClick={() => router.push("home/detail", "home/detail")}>
            <p className='text-sm font-bold text-custom-blue'>Detail</p>
          </button>
        </div>
      </div>
      <div className='bg-white p-4 rounded-md'>
        <div className='flex flex-row items-center gap-x-2 px-2 pb-4'>
          <p className='text-custom-textGray'>Status</p>
          <p className='text-custom-textGray'>:</p>
          <p className='px-2 text-green-500'>Jelek</p>
        </div>
        <div className='space-y-2 divide-y'>
          <div className='flex flex-row divide-x w-full justify-between'>
            <div className='w-2/4 px-2 flex flex-row items-center justify-between'>
              <p className='text-xs'>Hadir</p>
              <p className='text-2xl font-bold'>{/* {jumlah_hadir} */}</p>
            </div>
            <div className='w-2/4 px-2 flex flex-row items-center justify-between'>
              <p className='text-xs'>Terlambat</p>
              <p className='text-2xl font-bold'>{/* {jumlah_tidak_hadir} */}</p>
            </div>
          </div>
          <div className='flex flex-row divide-x w-full justify-between pt-2'>
            <div className='w-2/4 px-2 flex flex-row items-center justify-between'>
              <p className='text-xs'>Sakit</p>
              <p className='text-2xl font-bold'>{/* {jumlah_terlambat} */}</p>
            </div>
            <div className='w-2/4 px-2 flex flex-row items-center justify-between'>
              <p className='text-xs'>Tanpa Keterangan</p>
              <p className='text-2xl font-bold'>{/* {jumlah_izin} */}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_statistic;
