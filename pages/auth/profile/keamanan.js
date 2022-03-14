import { useRouter } from "next/router";
import { useState, useEffect } from "react";
import Header from "components/header";
import useSWR from "swr";
const Akun = () => {
  const router = useRouter();
  const [err, setErr] = useState("");
  const [shouldFetch, setShouldFetch] = useState(false);
  // const { data, error } = useSWR(shouldFetch ? ["/api/closed", profile] : null);

  const [currentPass, setCurrentPass] = useState("");
  const [newPass, setNewPass] = useState("");
  const [confirmPass, setConfirmPass] = useState("");

  const [changePass, setChangePass] = useState({
    url: "changepassword",
    password: "",
    new_password: "",
  });

  const { url, password, new_password } = changePass;

  const { data, error } = useSWR(
    shouldFetch ? ["/api/closed", changePass] : null
  );

  const handleCurrentPassword = (event) => {
    setCurrentPass(event.target.value);
  };
  const handleNewPassword = (event) => {
    setNewPass(event.target.value);
  };
  const handleConfirmPassword = (event) => {
    setConfirmPass(event.target.value);
  };

  const [first, setFirst] = useState(false);
  const [second, setSecond] = useState(false);
  const [third, setThird] = useState(false);

  return (
    <>
      <Header
        leftAction={() => router.back()}
        leftTitle={"Ganti Password"}
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
      />
      <div className='pt-20 px-4 bg-custom-pewter h-screen w-full'>
        <div className='space-y-4'>
          <div className='space-y-6 w-full'>
            <div className='flex flex-row items-center w-full bg-white gap-2 px-4 py-2 rounded-xl'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='w-full'>
                <input
                  placeholder='Current password'
                  className='w-full outline-none border-none focus:border-none'
                  onChange={handleCurrentPassword}
                  value={currentPass}
                  type={first ? "text" : "password"}
                />
              </div>
              <div>
                {first ? (
                  <button onClick={() => setFirst(!first)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                      <path
                        fillRule='evenodd'
                        d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                ) : (
                  <button onClick={() => setFirst(!first)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z'
                        clipRule='evenodd'
                      />
                      <path d='M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z' />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className='flex flex-row items-center w-full bg-white gap-2 px-4 py-2 rounded-xl'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='w-full'>
                <input
                  readOnly={!currentPass}
                  placeholder='New password'
                  className='w-full outline-none border-none'
                  onChange={handleNewPassword}
                  value={newPass}
                  type={second ? "text" : "password"}
                />
              </div>
              <div>
                {second ? (
                  <button onClick={() => setSecond(!second)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                      <path
                        fillRule='evenodd'
                        d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                ) : (
                  <button onClick={() => setSecond(!second)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z'
                        clipRule='evenodd'
                      />
                      <path d='M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z' />
                    </svg>
                  </button>
                )}
              </div>
            </div>
            <div className='flex flex-row items-center w-full bg-white gap-2 px-4 py-2 rounded-xl'>
              <div>
                <svg
                  xmlns='http://www.w3.org/2000/svg'
                  className='h-5 w-5'
                  viewBox='0 0 20 20'
                  fill='currentColor'
                >
                  <path
                    fillRule='evenodd'
                    d='M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z'
                    clipRule='evenodd'
                  />
                </svg>
              </div>
              <div className='w-full'>
                <input
                  readOnly={!currentPass}
                  placeholder='Confirm new password'
                  className='w-full outline-none border-none'
                  onChange={handleConfirmPassword}
                  value={confirmPass}
                  type={third ? "text" : "password"}
                />
              </div>
              <div>
                {third ? (
                  <button onClick={() => setThird(!third)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path d='M10 12a2 2 0 100-4 2 2 0 000 4z' />
                      <path
                        fillRule='evenodd'
                        d='M.458 10C1.732 5.943 5.522 3 10 3s8.268 2.943 9.542 7c-1.274 4.057-5.064 7-9.542 7S1.732 14.057.458 10zM14 10a4 4 0 11-8 0 4 4 0 018 0z'
                        clipRule='evenodd'
                      />
                    </svg>
                  </button>
                ) : (
                  <button onClick={() => setThird(!third)}>
                    <svg
                      xmlns='http://www.w3.org/2000/svg'
                      className='h-5 w-5'
                      viewBox='0 0 20 20'
                      fill='currentColor'
                    >
                      <path
                        fillRule='evenodd'
                        d='M3.707 2.293a1 1 0 00-1.414 1.414l14 14a1 1 0 001.414-1.414l-1.473-1.473A10.014 10.014 0 0019.542 10C18.268 5.943 14.478 3 10 3a9.958 9.958 0 00-4.512 1.074l-1.78-1.781zm4.261 4.26l1.514 1.515a2.003 2.003 0 012.45 2.45l1.514 1.514a4 4 0 00-5.478-5.478z'
                        clipRule='evenodd'
                      />
                      <path d='M12.454 16.697L9.75 13.992a4 4 0 01-3.742-3.741L2.335 6.578A9.98 9.98 0 00.458 10c1.274 4.057 5.065 7 9.542 7 .847 0 1.669-.105 2.454-.303z' />
                    </svg>
                  </button>
                )}
              </div>
            </div>
          </div>
          <div className='space-y-4'>
            <div>
              <button
                disabled={shouldFetch ? "disabled" : ""}
                onClick={() => setShouldFetch(true)}
                className={`${
                  shouldFetch ? "bg-gray-500" : "bg-custom-green"
                } shadow-custom-green shadow-md rounded-full w-36`}
              >
                <p className='font-bold text-white p-2'>Change!</p>
              </button>
            </div>
            <div>
              <p className='underline text-s'>Forgot Password?</p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Akun;
