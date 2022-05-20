import { useEffect, useState } from "react";

const User_profile = ({ handleOpenPresent }) => {
  const today = new Date();
  const hours = addZero(today.getHours());
  const minutes = addZero(today.getMinutes());

  function addZero(num) {
    return num < 10 ? `0${num}` : num;
  }

  const current_date = `${hours}.${minutes}`;

  const [time, setTime] = useState(current_date);

  return (
    <div className=''>
      <div className='py-6 relative flex flex-row items-center justify-between w-full'>
        <div className='relative w-full flex justify-start'>
          <div className='absolute'>
            <p className='text-md font-bold text-white'>{"test"}</p>
          </div>
        </div>
        <div className='relative w-full flex justify-end'>
          <div className='absolute'>
            <p className='text-md font-bold text-white'>{time}</p>
          </div>
        </div>
      </div>
      <div className='w-full h-20 bg-opacity-30 bg-custom-bg backdrop-filter backdrop-blur-2xl shadow-xl rounded-md border-l-4 border-r-4 border-custom-black '>
        <div className='flex items-center justify-start w-full h-full px-3'>
          <div className='flex flex-row items-center gap-x-3'>
            <button>
              <div className='w-14 h-14 bg-custom-black rounded-md' />
            </button>
            <div>
              <p className='text-sm font-bold'>{"test"}</p>
              <p className='text-1xs'>{"test"}</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default User_profile;
