import { useRouter } from "next/router";
import useSWR from "swr";
import {
  useState,
  useEffect,
  useRef,
  forwardRef,
  useImperativeHandle,
} from "react";

const FormLogin = (props, ref) => {
  const router = useRouter();

  const [loginField, setLoginField] = useState({
    url: "login",
    username: "",
    password: "",
  });
  const { url, method, username, password } = loginField;

  const [p, setP] = useState(false);

  const [swrKey, setSwrKey] = useState("/api/open");
  const [shouldFetch, setShouldFetch] = useState(false);
  const [err, setErr] = useState("");

  const { data, error } = useSWR(shouldFetch ? [swrKey, loginField] : null);

  useEffect(() => {
    if (data || error) {
      setShouldFetch(false);
      if (error) {
        setErr(error.info);
      }
      if (data) {
        return router.push("/auth/home");
      }
    }
  }, [shouldFetch, data, error, router]);

  useEffect(() => {
    if (url && method === "logout" && swrKey === "/api/closed") {
      setShouldFetch(true);
    }
  }, [swrKey]);

  return (
    <div className='w-full h-full'>
      <div className='w-full h-16 flex justify-center items-center mb-6 text-2xl font-semibold border-b '>
        <h2 className='text-white'>Login</h2>
      </div>
      {!props.isLogin.login ? (
        <>
          <div className='mb-4'>
            <label
              className='block uppercase text-white text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Username
            </label>
            <input
              type='text'
              className='border-0 px-3 py-3 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150 '
              value={username}
              placeholder='Username'
              onChange={(e) =>
                setLoginField({ ...loginField, username: e.target.value })
              }
              disabled={shouldFetch ? "disabled" : ""}
            />
          </div>

          <div className=''>
            <label
              className='block uppercase text-white text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              Password
            </label>
            <div>
              <input
                type={p ? "text" : "password"}
                className='border-0 px-3 py-3 pr-10 placeholder-blueGray-300 text-gray-600 bg-white rounded text-sm shadow focus:outline-none focus:ring w-full ease-linear transition-all duration-150'
                value={password}
                placeholder='Password'
                // onPasteCapture={() =>
                //   setLoginField({
                //     password: "",
                //   })
                // }
                onChange={(e) =>
                  setLoginField({ ...loginField, password: e.target.value })
                }
                disabled={shouldFetch ? "disabled" : ""}
              />
              <div className='relative'>
                <button
                  onClick={() => setP(!p)}
                  className='absolute right-4 bottom-3.5'
                >
                  {p ? (
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
                  ) : (
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
                  )}
                </button>
              </div>
            </div>
          </div>

          <div className='w-full h-12 flex items-center animate-pulse text-red-500 text-sm py-6'>
            {err}
          </div>

          <div className='w-full h-auto flex rounded overflow-hidden bg-green-400'>
            <div className='w-2/12 h-auto flex justify-center items-center'>
              {shouldFetch && (
                <svg
                  className='animate-spin h-5 w-5 text-white'
                  xmlns='http://www.w3.org/2000/svg'
                  fill='none'
                  viewBox='0 0 24 24'
                >
                  <circle
                    className='opacity-25'
                    cx='12'
                    cy='12'
                    r='10'
                    stroke='currentColor'
                    strokeWidth='4'
                  ></circle>
                  <path
                    className='opacity-75'
                    fill='currentColor'
                    d='M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z'
                  ></path>
                </svg>
              )}
            </div>
            <button
              disabled={shouldFetch ? "disabled" : ""}
              onClick={(e) => setShouldFetch(true)}
              className='w-full h-auto text-white font-semibold flex justify-center items-center py-2'
            >
              Login
            </button>
            <div className='w-2/12 h-auto' />
          </div>
        </>
      ) : (
        <>
          <div className='mb-4 flex justify-center items-center'>
            <label
              className='block uppercase text-white-700 text-xs font-bold mb-2'
              htmlFor='grid-password'
            >
              You Already login
            </label>
          </div>
          <div className='w-full h-auto flex flex-wrap md:flex-nowrap gap-3'>
            <div className='w-full h-auto flex rounded overflow-hidden bg-white'>
              <button
                onClick={(e) => router.push("/auth/home")}
                className='w-full h-auto text-custom-bluebi font-semibold flex justify-center items-center py-2'
              >
                Home
              </button>
            </div>
            <div className='w-full h-auto flex rounded overflow-hidden bg-gray-700'>
              <button
                disabled={shouldFetch ? "disabled" : ""}
                onClick={(e) => [
                  setLoginField({
                    ...loginField,
                    url: "logout",
                    method: "logout",
                  }),
                  router.push("/login", "/login"),
                  setSwrKey("/api/closed"),
                ]}
                className='w-full h-auto text-white font-semibold flex justify-center items-center py-2'
              >
                Log out
              </button>
            </div>
          </div>
        </>
      )}
    </div>
  );
};

export default forwardRef(FormLogin);
