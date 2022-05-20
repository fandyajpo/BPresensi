import Header from "components/header";
import { useRouter } from "next/router";
import ActivityStatistic from "components/activityStatistic";
const Detail = () => {
  const router = useRouter();
  const months = [
    "Januari",
    "Februari",
    "Maret",
    "April",
    "Mei",
    "Juni",
    "Juli",
    "Agustus",
    "September",
    "October",
    "November",
    "Desember",
  ];

  const handleDate = new Date();
  let year = handleDate.getFullYear();
  let month = months[handleDate.getMonth()];

  return (
    <>
      <Header
        leftAction={() => router.back()}
        leftTitle={month + " " + year}
        leftIcon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-8 w-8'
            fill='none'
            viewBox='0 0 24 24'
            stroke='white'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              strokeWidth={2}
              d='M11 17l-5-5m0 0l5-5m-5 5h12'
            />
          </svg>
        }
        rightAction={() => alert("COPY LINK")}
        rightIcon={
          <svg
            xmlns='http://www.w3.org/2000/svg'
            className='h-6 w-6'
            viewBox='0 0 20 20'
            fill='white'
          >
            <path d='M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z' />
          </svg>
        }
      />
      <div className='py-20 px-4 bg-gray-200 space-y-4 w-full h-full'>
        <div className='flex flex-row justify-between items-center'>
          <div>
            <p className='text-md font-bold'>Aktivitas Terakhir</p>
          </div>
          <div>
            <button
              onClick={() =>
                router.push("detail/sortDetail", "detail/sortDetail")
              }
            >
              <p className='text-s text-custom-green'>Lihat Semua</p>
            </button>
          </div>
        </div>
        <div className='bg-white rounded-md py-3 px-4'>
          <div className='flex flex-row justify-between'>
            <div className='flex flex-row items-center gap-2'>
              <div className='bg-custom-blue w-16 h-16 rounded-full'>
                <div className='relative'>
                  <div className='absolute right-1 top-0'>
                    <div className='bg-custom-green w-4 h-4 rounded-full border-2 border-white ' />
                  </div>
                </div>
              </div>
              <div>
                <p className='text-sm font-bold'>Presensi Datang</p>
                <p className='text-s text-custom-textGray'>08.11 24 Februari</p>
                <p className='text-s text-custom-textGray'>RedWhite Coffee</p>
              </div>
            </div>
            <div>
              <p className='text-custom-green text-s font-bold'>Online</p>
            </div>
          </div>
        </div>
        <div>
          <p className='text-md font-bold'>Statistik Aktivitas</p>
          <p className='text-s text-custom-textGray'>
            Jumlah per-aktivitas bulan ini
          </p>
        </div>
        <div>
          <ActivityStatistic />
        </div>
        <div>
          <p className='text-md font-bold'>Aktivitas Presensi</p>
        </div>
        <div className='bg-white rounded-md py-3 px-4'>
          <div className='flex flex-row justify-between '>
            <div>
              <p className='text-sm font-bold'>Masuk</p>
              <p className='font-bold'>93</p>
            </div>
            <div className='border-l flex items-center justify-center' />
            <div>
              <p className='text-sm font-bold'>Tidak Masuk</p>
              <p className='font-bold'>6374</p>
            </div>
            <div className='border-l flex items-center justify-center' />
            <div>
              <p className='text-sm font-bold'>Tanpa Keterangan</p>
              <p className='font-bold'>38</p>
            </div>
            <div>
              <p className='text-sm font-bold'>Izin</p>
              <p className='font-bold'>38</p>
            </div>
          </div>
        </div>
        <div>
          <p className='text-md font-bold'>Aktivitas Lembur</p>
        </div>
        <div className='space-y-2'>
          <div className='flex bg-white items-center justify-between p-4 border border-custom-gray rounded-md'>
            <div className='flex flex-row items-center gap-2'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                </svg>
              </div>
              <div>
                <p className='text-sm'>Lembur Jam Kerja</p>
                <p className='text-sm'>Periode 1 - 25 Februari</p>
              </div>
            </div>
            <div>
              <p className='text-xl font-bold'>24</p>
            </div>
          </div>
          <div className='flex bg-white items-center justify-between p-4 border border-custom-gray rounded-md'>
            <div className='flex flex-row items-center gap-2'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                </svg>
              </div>
              <div>
                <p className='text-sm'>Lembur Jam Kerja</p>
                <p className='text-sm'>Periode 1 - 25 Februari</p>
              </div>
            </div>
            <div>
              <p className='text-xl font-bold'>24</p>
            </div>
          </div>
          <div className='flex bg-white items-center justify-between p-4 border border-custom-gray rounded-md'>
            <div className='flex flex-row items-center gap-2'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path d='M5 3a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2V5a2 2 0 00-2-2H5zM5 11a2 2 0 00-2 2v2a2 2 0 002 2h2a2 2 0 002-2v-2a2 2 0 00-2-2H5zM11 5a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2V5zM11 13a2 2 0 012-2h2a2 2 0 012 2v2a2 2 0 01-2 2h-2a2 2 0 01-2-2v-2z' />
                </svg>
              </div>
              <div>
                <p className='text-sm'>Lembur Jam Kerja</p>
                <p className='text-sm'>Periode 1 - 25 Februari</p>
              </div>
            </div>
            <div>
              <p className='text-xl font-bold'>24</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Detail;
