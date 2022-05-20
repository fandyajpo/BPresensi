import Layout from "components/layout";
import Header from "components/header";
import { useState, useEffect, useCallback } from "react";
import { useRouter } from "next/router";

const Profile = () => {
  const [openMenu, setOpenMenu] = useState("closed");
  const router = useRouter();

  // const sendToMobile = (file) => {
  //   window.ReactNativeWebView.postMessage(JSON.stringify(file));
  // };

  // useEffect(() => {
  //   console.log(openMenu);
  // }, [openMenu]);
  // openMenu ? sendToMobile("NO_BACK") : sendToMobile("BACK");

  // const fromReactNative = useCallback(
  //   (e) => {
  //     try {
  //       sendToMobile(openMenu);
  //       const data = JSON.parse(e.data);
  //       if (data.method === "BACK") {
  //         sendToMobile({ mode: "EXITAPP" });
  //       } else {
  //         sendToMobile("NO_BACK");
  //         setOpenMenu(false);
  //         return;
  //       }
  //     } catch (error) {
  //       alert(error);
  //     }
  //   },
  //   [openMenu]
  // );

  // useEffect(() => {
  //   document.addEventListener("message", fromReactNative);
  //   return () => document.removeEventListener("message", fromReactNative);
  // }, [fromReactNative]);

  // useEffect(() => {
  //   window.addEventListener("message", fromReactNative);
  //   return () => window.removeEventListener("message", fromReactNative);
  // }, [fromReactNative]);

  const [shouldFetch, setShouldFetch] = useState(true);

  const [profile, setProfile] = useState({
    url: "userdetail",
  });
  const { url } = profile;

  // const [err, setErr] = useState("");
  // const { data, error } = useSWR(shouldFetch ? ["/api/closed", profile] : null);
  // useEffect(() => {
  //   console.log(data);
  // }, [data]);
  // if (!data) return <div>loading</div>;

  // const {
  //   fullname,
  //   jabatan,
  //   perusahaan,
  //   nik,
  //   email,
  //   nomor_hp,
  //   alamat,
  //   tempat_presensi,
  // } = data;

  return (
    <>
      {/* <button onClick={() => setOpenMenu("open")}>OPEN</button> */}
      <Header
        rightAction={(e) => {
          setOpenMenu("open");
        }}
        rightIcon={
          <svg
            width='32'
            height='32'
            viewBox='0 0 32 32'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <rect opacity='0.5' width='32' height='32' rx='8' fill='white' />
            <path
              d='M9.00003 22H23'
              stroke='white'
              strokeWidth='2.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M9.00003 10H23'
              stroke='white'
              strokeWidth='2.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
            <path
              d='M9 16.1211L23.2424 16.1211'
              stroke='white'
              strokeWidth='2.8'
              strokeLinecap='round'
              strokeLinejoin='round'
            />
          </svg>
        }
      />

      {/* <div
        onClick={() => {
          setOpenMenu("closed");
        }}
        className={`${
          openMenu === "open" ? "" : "hidden"
        } backdrop-filter backdrop-blur-sm fixed w-full h-screen bg-transparent  z-10`}
      /> */}
      <div
        className={`${
          openMenu === "open" ? "translate-x-0" : "translate-x-full"
        } ease-in-out duration-300 fixed z-20 right-0`}
      >
        <div>
          <div
            className={`bg-custom-skensaBlue duration-300 ${
              openMenu === "open"
                ? "w-screen h-screen rounded-none opacity-100"
                : "w-screen h-4 rounded-bl-full opacity-0"
            }`}
          >
            <div className='p-4 flex items-center w-full justify-end'>
              <button onClick={() => setOpenMenu("closed")}>
                <svg
                  width='32'
                  height='32'
                  viewBox='0 0 32 32'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'
                >
                  <rect
                    opacity='0.5'
                    width='32'
                    height='32'
                    rx='8'
                    fill='white'
                  />
                  <path
                    d='M9.00003 22H23'
                    stroke='white'
                    strokeWidth='2.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9.00003 10H23'
                    stroke='white'
                    strokeWidth='2.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                  <path
                    d='M9 16.1211L23.2424 16.1211'
                    stroke='white'
                    strokeWidth='2.8'
                    strokeLinecap='round'
                    strokeLinejoin='round'
                  />
                </svg>
              </button>
            </div>
            <div className='flex flex-col w-full space-y-4 p-4'>
              <button
                className='w-full flex justify-between items-center'
                onClick={(e) => {
                  router.push("profile/akun", "profile/akun");
                }}
              >
                <div className='flex flex-row items-center gap-2'>
                  <div>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.5'
                        width='48'
                        height='48'
                        rx='16'
                        fill='white'
                      />
                      <path
                        opacity='0.5'
                        d='M35.92 37.3334H12.08C11.8928 37.3334 11.7076 37.2939 11.5367 37.2176C11.3657 37.1413 11.2127 37.0298 11.0877 36.8904C10.9627 36.7511 10.8684 36.587 10.811 36.4087C10.7536 36.2305 10.7344 36.0422 10.7547 35.8561C11.1165 32.5962 12.6677 29.5842 15.1116 27.3966C17.5554 25.2091 20.7201 23.9995 24 23.9995C27.2799 23.9995 30.4446 25.2091 32.8884 27.3966C35.3322 29.5842 36.8835 32.5962 37.2453 35.8561C37.2655 36.0422 37.2463 36.2305 37.189 36.4087C37.1316 36.587 37.0373 36.7511 36.9123 36.8904C36.7872 37.0298 36.6343 37.1413 36.4633 37.2176C36.2923 37.2939 36.1072 37.3334 35.92 37.3334Z'
                        fill='white'
                      />
                      <path
                        d='M23.9933 26.6665C22.4111 26.6665 20.8644 26.1973 19.5488 25.3183C18.2332 24.4392 17.2078 23.1898 16.6023 21.728C15.9968 20.2662 15.8384 18.6576 16.147 17.1058C16.4557 15.5539 17.2176 14.1285 18.3365 13.0097C19.4553 11.8908 20.8808 11.1289 22.4326 10.8202C23.9844 10.5115 25.593 10.67 27.0548 11.2755C28.5166 11.881 29.766 12.9064 30.6451 14.2219C31.5241 15.5375 31.9933 17.0843 31.9933 18.6665C31.9909 20.7875 31.1472 22.8209 29.6474 24.3206C28.1477 25.8204 26.1143 26.664 23.9933 26.6665Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <div className='text-white font-bold'>Akun</div>
                </div>
              </button>
              <button
                className='w-full flex justify-between items-center'
                onClick={() =>
                  router.push("profile/keamanan", "profile/keamanan")
                }
              >
                <div className='flex flex-row items-center gap-2'>
                  <div>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.5'
                        width='48'
                        height='48'
                        rx='16'
                        fill='white'
                      />
                      <path
                        d='M24 10.6665C20.3333 10.6665 17.3333 13.6665 17.3333 17.3332V19.9998H20V17.3332C20 15.1332 21.8 13.3332 24 13.3332C26.2 13.3332 28 15.1332 28 17.3332V19.9998H30.6667V17.3332C30.6667 13.6665 27.6667 10.6665 24 10.6665Z'
                        fill='white'
                      />
                      <path
                        d='M32 37.3333H16C14.5333 37.3333 13.3333 36.1333 13.3333 34.6667V22.6667C13.3333 21.2 14.5333 20 16 20H32C33.4667 20 34.6667 21.2 34.6667 22.6667V34.6667C34.6667 36.1333 33.4667 37.3333 32 37.3333Z'
                        fill='#CDEEF2'
                      />
                      <path
                        d='M24 30.6665C25.1046 30.6665 26 29.7711 26 28.6665C26 27.5619 25.1046 26.6665 24 26.6665C22.8954 26.6665 22 27.5619 22 28.6665C22 29.7711 22.8954 30.6665 24 30.6665Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <div className='text-white font-bold'>Keamanan</div>
                </div>
              </button>
              <button
                className='flex w-full justify-between items-center'
                onClick={() =>
                  router.push("profile/offlineMode", "profile/offlineMode")
                }
              >
                <div className='flex flex-row items-center gap-2'>
                  <div>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.5'
                        width='48'
                        height='48'
                        rx='16'
                        fill='white'
                      />
                      <path
                        d='M13.9312 11.6689C13.6294 11.3774 13.2253 11.2161 12.8058 11.2198C12.3862 11.2234 11.9849 11.3917 11.6883 11.6884C11.3916 11.985 11.2234 12.3863 11.2197 12.8058C11.2161 13.2253 11.3773 13.6295 11.6688 13.9313L22.7424 25.0065C22.8224 25.1057 22.9104 25.1953 23.0112 25.2737L34.0672 36.3313C34.2157 36.4799 34.3921 36.5979 34.5863 36.6784C34.7804 36.7588 34.9885 36.8003 35.1986 36.8004C35.4088 36.8005 35.6169 36.7591 35.8111 36.6788C36.0053 36.5984 36.1817 36.4806 36.3304 36.3321C36.4791 36.1835 36.597 36.0071 36.6775 35.813C36.758 35.6189 36.7994 35.4108 36.7995 35.2006C36.7996 34.9905 36.7583 34.7824 36.6779 34.5882C36.5976 34.394 36.4797 34.2175 36.3312 34.0689L35.2512 32.9889C37.4619 30.2212 38.575 26.7359 38.3779 23.1992C38.1807 19.6625 36.687 16.3225 34.1824 13.8177C34.0348 13.6648 33.8582 13.543 33.663 13.4591C33.4678 13.3752 33.2579 13.3311 33.0454 13.3293C32.833 13.3274 32.6223 13.3679 32.4257 13.4484C32.229 13.5288 32.0504 13.6476 31.9002 13.7978C31.7499 13.9481 31.6311 14.1267 31.5507 14.3233C31.4702 14.52 31.4298 14.7307 31.4316 14.9431C31.4334 15.1556 31.4776 15.3655 31.5614 15.5607C31.6453 15.7559 31.7672 15.9325 31.92 16.0801C33.8245 17.9848 34.9791 20.5119 35.1721 23.1985C35.3652 25.8852 34.5838 28.5514 32.9712 30.7089L30.6752 28.4129C31.6919 26.8741 32.146 25.0314 31.9605 23.1964C31.7751 21.3614 30.9616 19.6467 29.6576 18.3425C29.3572 18.042 28.9497 17.8732 28.5248 17.8732C28.0999 17.8732 27.6924 18.042 27.392 18.3425C27.0916 18.6429 26.9228 19.0504 26.9228 19.4753C26.9228 19.9001 27.0916 20.3076 27.392 20.6081C28.0945 21.3098 28.562 22.2122 28.7302 23.1908C28.8984 24.1693 28.759 25.176 28.3312 26.0721L25.144 22.8849C25.1345 22.8751 25.1249 22.8655 25.1152 22.8561L13.9312 11.6705V11.6689ZM13.1808 21.0993C13.2903 20.6891 13.2324 20.2523 13.0198 19.8849C12.8072 19.5175 12.4573 19.2495 12.0472 19.1401C11.6371 19.0306 11.2002 19.0885 10.8328 19.3011C10.4654 19.5137 10.1975 19.8635 10.088 20.2737C9.4342 22.7154 9.43467 25.2862 10.0893 27.7277C10.744 30.1693 12.0299 32.3954 13.8176 34.1825C13.9663 34.331 14.1427 34.4488 14.3369 34.5292C14.5311 34.6095 14.7392 34.6509 14.9494 34.6508C15.1595 34.6507 15.3676 34.6092 15.5617 34.5288C15.7559 34.4483 15.9322 34.3303 16.0808 34.1817C16.2293 34.033 16.3472 33.8566 16.4275 33.6624C16.5079 33.4682 16.5492 33.2601 16.5491 33.0499C16.549 32.8397 16.5076 32.6317 16.4271 32.4375C16.3466 32.2434 16.2287 32.067 16.08 31.9185C14.6892 30.5285 13.689 28.7968 13.18 26.8975C12.6711 24.9982 12.6714 22.9984 13.1808 21.0993ZM19.84 26.4001C19.74 26.2089 19.6023 26.0399 19.4353 25.9032C19.2682 25.7666 19.0753 25.6652 18.8681 25.6051C18.6608 25.5449 18.4435 25.5274 18.2293 25.5534C18.0151 25.5794 17.8084 25.6485 17.6216 25.7565C17.4347 25.8645 17.2717 26.0091 17.1422 26.1818C17.0127 26.3544 16.9195 26.5515 16.8682 26.761C16.8169 26.9706 16.8085 27.1885 16.8435 27.4014C16.8785 27.6143 16.9562 27.818 17.072 28.0001C17.4144 28.5937 17.84 29.1521 18.344 29.6561C18.6458 29.9475 19.0499 30.1088 19.4694 30.1051C19.889 30.1015 20.2903 29.9332 20.5869 29.6366C20.8836 29.3399 21.0518 28.9386 21.0555 28.5191C21.0591 28.0996 20.8979 27.6954 20.6064 27.3937C20.3008 27.0881 20.0464 26.7537 19.8416 26.3985L19.84 26.4001Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <div className='text-white font-bold'>Mode Offline</div>
                </div>
              </button>
              <button
                className='w-full flex items-center justify-between'
                onClick={() =>
                  router.push("profile/pengaturan", "profile/pengaturan")
                }
              >
                <div className='flex flex-row items-center gap-2'>
                  <div>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.5'
                        width='48'
                        height='48'
                        rx='16'
                        fill='white'
                      />
                      <path
                        d='M34.8531 25.8031L34.8594 25.8062C34.9562 25.2156 35.0031 24.6125 35.0031 24.0156C35.0031 23.4812 34.9625 22.9437 34.8875 22.4187C34.9625 22.9406 35 23.4688 35 23.9969C35 24.6031 34.95 25.2094 34.8531 25.8031ZM11.0937 20.4406C11.0781 20.4281 11.0656 20.4156 11.05 20.4C11.0719 20.4219 11.0937 20.4437 11.1187 20.4656L13.1656 22.2125V22.2094L11.0937 20.4406ZM27.8625 13.6906H27.8656L27.3812 11.0719C27.375 11.0406 27.3687 11.0125 27.3594 10.9844C27.3625 11 27.3687 11.0187 27.3719 11.0344L27.8625 13.6906ZM29.55 30.7687L30.5312 29.9625L33.4312 30.9906C33.9625 30.275 34.4094 29.5062 34.7625 28.6906L32.4281 26.6938L32.6344 25.4406C32.7125 24.9687 32.7531 24.4844 32.7531 24C32.7531 23.5156 32.7125 23.0312 32.6344 22.5594L32.4312 21.3125L34.7656 19.3156C34.4094 18.5031 33.9656 17.7312 33.4344 17.0156L30.5344 18.0437L29.5531 17.2375C28.8062 16.625 27.9719 16.1438 27.075 15.8063L25.8844 15.3594L25.325 12.3281C24.4424 12.2281 23.5513 12.2281 22.6687 12.3281L22.1094 15.3656L20.925 15.8125C20.0344 16.15 19.2062 16.6313 18.4656 17.2406L17.4844 18.05L14.5656 17.0125C14.0344 17.7281 13.5875 18.4969 13.2344 19.3125L15.5937 21.3281L15.3906 22.5781C15.3125 23.0437 15.275 23.5219 15.275 24C15.275 24.475 15.3156 24.9563 15.3906 25.4219L15.5937 26.6719L13.2344 28.6875C13.5906 29.5 14.0344 30.2719 14.5656 30.9875L17.4844 29.95L18.4656 30.7594C19.2062 31.3687 20.0344 31.85 20.925 32.1875L22.1062 32.6406L22.6656 35.6781C23.5469 35.7781 24.4437 35.7781 25.3219 35.6781L25.8812 32.6469L27.0719 32.2C27.9719 31.8625 28.8031 31.3812 29.55 30.7687ZM24.0156 29.1969C23.0625 29.1969 22.1656 28.9531 21.3812 28.525C19.6656 27.5938 18.5 25.7781 18.5 23.6875C18.5 20.65 20.9625 18.1875 24 18.1875C26.0906 18.1875 27.9062 19.3531 28.8375 21.0688C29.2656 21.85 29.5094 22.7469 29.5094 23.7031C29.5094 26.7375 27.05 29.1969 24.0156 29.1969ZM14.475 33.4C14.3031 33.4594 14.125 33.4719 13.9562 33.4375C14.1344 33.475 14.3219 33.4688 14.5031 33.4062L17.0469 32.5C17.0437 32.4969 17.0375 32.4937 17.0344 32.4906L14.475 33.4ZM36.9 20.4406L34.8531 22.1906C34.8531 22.1969 34.8562 22.2062 34.8562 22.2125L36.9 20.4656C37.1219 20.275 37.2469 20 37.25 19.7156C37.2406 19.9906 37.1156 20.2563 36.9 20.4406Z'
                        fill='#CDEEF2'
                      />
                      <path
                        d='M37.2438 28.2061C37.2594 28.3529 37.2438 28.5029 37.1906 28.6467L37.1625 28.7279C36.5976 30.3022 35.7539 31.7619 34.6719 33.0373L34.6156 33.1029C34.4845 33.2579 34.3094 33.3693 34.1135 33.4223C33.9175 33.4753 33.7101 33.4675 33.5188 33.3998L30.9781 32.4967C30.0461 33.2646 28.9933 33.8728 27.8625 34.2967L27.3719 36.9529C27.3349 37.1528 27.2379 37.3367 27.0939 37.4801C26.9499 37.6236 26.7656 37.7198 26.5656 37.7561L26.4813 37.7717C25.6645 37.9193 24.8362 37.9936 24.0063 37.9936H24.0156C24.85 37.9936 25.6844 37.9186 26.4969 37.7717L26.5813 37.7561C26.7813 37.7198 26.9655 37.6236 27.1095 37.4801C27.2535 37.3367 27.3505 37.1528 27.3875 36.9529L27.8781 34.2998C29.0094 33.8748 30.0531 33.2717 30.9906 32.5029L33.5281 33.4061C33.7195 33.4737 33.9269 33.4816 34.1228 33.4286C34.3188 33.3755 34.4939 33.2641 34.625 33.1092L34.6813 33.0436C35.7688 31.7592 36.6031 30.3123 37.1688 28.7404L37.1969 28.6592C37.2469 28.5123 37.2625 28.3561 37.2438 28.2061Z'
                        fill='#545454'
                        fillOpacity='0.15'
                      />
                      <path
                        d='M29.5 23.6875C29.5 22.7406 29.2594 21.8469 28.8375 21.0688C27.9062 19.3531 26.0906 18.1875 24 18.1875C20.9625 18.1875 18.5 20.65 18.5 23.6875C18.5 25.7781 19.6656 27.5938 21.3813 28.525C22.1594 28.9469 23.05 29.1875 24 29.1875C27.0375 29.1875 29.5 26.725 29.5 23.6875ZM20.5 23.6875C20.5 22.7531 20.8656 21.875 21.525 21.2125C22.1875 20.55 23.0656 20.1875 24 20.1875C24.9344 20.1875 25.8125 20.55 26.475 21.2125C26.8006 21.5371 27.0587 21.9229 27.2346 22.3477C27.4105 22.7724 27.5007 23.2278 27.5 23.6875C27.5 24.6219 27.1344 25.5 26.475 26.1625C26.1504 26.4881 25.7646 26.7462 25.3398 26.9221C24.9151 27.098 24.4597 27.1882 24 27.1875C23.0656 27.1875 22.1875 26.8219 21.525 26.1625C21.1994 25.8379 20.9413 25.4521 20.7654 25.0273C20.5895 24.6026 20.4993 24.1472 20.5 23.6875Z'
                        fill='white'
                      />
                      <path
                        d='M26.5656 37.7561C26.7656 37.7198 26.9499 37.6236 27.0939 37.4801C27.2379 37.3367 27.3349 37.1528 27.3719 36.9529L27.8625 34.2967C28.9933 33.8728 30.0461 33.2646 30.9781 32.4967L33.5187 33.3998C33.7101 33.4675 33.9175 33.4753 34.1135 33.4223C34.3094 33.3693 34.4845 33.2579 34.6156 33.1029L34.6719 33.0373C35.7594 31.7529 36.5969 30.3029 37.1625 28.7279L37.1906 28.6467C37.2437 28.5029 37.2594 28.3529 37.2437 28.2061C37.2156 27.9592 37.0969 27.7248 36.9 27.5529L34.8594 25.8061L34.8531 25.8029C34.95 25.2092 35 24.6029 35 23.9967C35 23.4686 34.9625 22.9373 34.8875 22.4186C34.8781 22.3498 34.8656 22.2811 34.8563 22.2123C34.8563 22.2061 34.8531 22.1967 34.8531 22.1904L36.9 20.4404C37.1156 20.2561 37.2406 19.9904 37.25 19.7154C37.2531 19.5904 37.2344 19.4623 37.1906 19.3404L37.1625 19.2592C36.599 17.6843 35.7552 16.2243 34.6719 14.9498L34.6156 14.8842C34.4842 14.7297 34.309 14.6186 34.1132 14.5656C33.9174 14.5126 33.7102 14.5202 33.5187 14.5873L30.9781 15.4904C30.0406 14.7217 28.9969 14.1154 27.8656 13.6904H27.8625L27.3719 11.0342C27.3688 11.0186 27.3656 10.9998 27.3594 10.9842C27.3143 10.7952 27.2152 10.6235 27.0743 10.4898C26.9334 10.3561 26.7567 10.2662 26.5656 10.2311L26.4813 10.2154C24.8531 9.92168 23.1406 9.92168 21.5125 10.2154L21.4281 10.2311C21.2281 10.2673 21.0439 10.3635 20.8999 10.507C20.7558 10.6504 20.6589 10.8343 20.6219 11.0342L20.1281 13.7029C19.0059 14.128 17.9608 14.7339 17.0344 15.4967L14.475 14.5873C14.2836 14.5196 14.0762 14.5118 13.8803 14.5648C13.6844 14.6178 13.5092 14.7292 13.3781 14.8842L13.3219 14.9498C12.2398 16.2252 11.3962 17.6849 10.8313 19.2592L10.8031 19.3404C10.738 19.522 10.7267 19.7186 10.7704 19.9065C10.8142 20.0944 10.9113 20.2657 11.05 20.3998C11.0656 20.4123 11.0781 20.4279 11.0938 20.4404L13.1656 22.2092V22.2123C13.0688 22.7998 13.0219 23.3967 13.0219 23.9936C13.0219 24.5936 13.0688 25.1936 13.1656 25.7779L11.0938 27.5467C10.9394 27.6788 10.8289 27.8549 10.777 28.0514C10.725 28.2479 10.7342 28.4555 10.8031 28.6467L10.8313 28.7279C11.3969 30.3029 12.2344 31.7561 13.3219 33.0373L13.3781 33.1029C13.5313 33.2811 13.7344 33.3967 13.9563 33.4373C14.125 33.4686 14.3031 33.4592 14.475 33.3998L17.0344 32.4904C17.0375 32.4936 17.0438 32.4967 17.0469 32.4998C17.975 33.2592 19.0094 33.8623 20.1281 34.2842L20.6219 36.9529C20.6589 37.1528 20.7558 37.3367 20.8999 37.4801C21.0439 37.6236 21.2281 37.7198 21.4281 37.7561L21.5125 37.7717C22.3281 37.9186 23.1625 37.9936 23.9969 37.9936H24.0063C24.8375 37.9936 25.6719 37.9186 26.4813 37.7717L26.5656 37.7561ZM25.3219 35.6779C24.4393 35.7779 23.5482 35.7779 22.6656 35.6779L22.1062 32.6404L20.925 32.1873C20.0344 31.8498 19.2063 31.3686 18.4656 30.7592L17.4844 29.9498L14.5656 30.9873C14.0344 30.2717 13.5906 29.4998 13.2344 28.6873L15.5938 26.6717L15.3906 25.4217C15.3156 24.9561 15.275 24.4748 15.275 23.9998C15.275 23.5217 15.3125 23.0436 15.3906 22.5779L15.5938 21.3279L13.2344 19.3123C13.5875 18.4967 14.0344 17.7279 14.5656 17.0123L17.4844 18.0498L18.4656 17.2404C19.2063 16.6311 20.0344 16.1498 20.925 15.8123L22.1094 15.3654L22.6687 12.3279C23.5469 12.2279 24.4438 12.2279 25.325 12.3279L25.8844 15.3592L27.075 15.8061C27.9719 16.1436 28.8062 16.6248 29.5531 17.2373L30.5344 18.0436L33.4344 17.0154C33.9656 17.7311 34.4094 18.5029 34.7656 19.3154L32.4312 21.3123L32.6344 22.5592C32.7125 23.0311 32.7531 23.5154 32.7531 23.9998C32.7531 24.4842 32.7125 24.9686 32.6344 25.4404L32.4281 26.6936L34.7625 28.6904C34.4086 29.5057 33.9619 30.2775 33.4312 30.9904L30.5312 29.9623L29.55 30.7686C28.8031 31.3811 27.9719 31.8623 27.0719 32.1998L25.8813 32.6467L25.3219 35.6779Z'
                        fill='white'
                      />
                    </svg>
                  </div>

                  <div className='text-white font-bold'>Pengaturan</div>
                </div>
              </button>
              <button
                className='flex items-center justify-between w-full'
                onClick={() =>
                  router.push("profile/notification", "profile/notification")
                }
              >
                <div className='flex flex-row items-center gap-2'>
                  <div>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.5'
                        width='48'
                        height='48'
                        rx='16'
                        fill='white'
                      />
                      <path
                        d='M15.175 29.1905C15.0594 29.553 15 29.9374 15 30.328C15 29.9374 15.0625 29.553 15.1781 29.1905H15.175ZM17.5594 21.0593H13.75V26.9405H17.5594L17.9625 27.103L34.25 33.6468V14.353L17.9625 20.8968L17.5594 21.0593Z'
                        fill='#CDEEF2'
                      />
                      <path
                        d='M35.5 11.5C35.3813 11.5 35.2594 11.5219 35.1375 11.5719L17.125 18.8094H12C11.725 18.8094 11.5 19.0406 11.5 19.3281V28.6719C11.5 28.9594 11.725 29.1906 12 29.1906H15.1781C15.0625 29.5531 15 29.9375 15 30.3281C15 32.3875 16.6813 34.0625 18.75 34.0625C20.4812 34.0625 21.9406 32.8875 22.3719 31.3L35.1406 36.4312C35.2625 36.4781 35.3844 36.5031 35.5031 36.5031C36.0312 36.5031 36.5031 36.0594 36.5031 35.4656V12.5375C36.5 11.9437 36.0312 11.5 35.5 11.5ZM18.75 31.8219C17.9219 31.8219 17.25 31.1531 17.25 30.3281C17.25 29.9781 17.3719 29.6437 17.5938 29.3781L20.2469 30.4438C20.1844 31.2125 19.5375 31.8219 18.75 31.8219ZM34.25 33.6469L17.9625 27.1031L17.5594 26.9406H13.75V21.0594H17.5594L17.9625 20.8969L34.25 14.3531V33.6469Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <div className='text-white font-bold'>Notifikasi</div>
                </div>
              </button>
              <button
                className='flex items-center justify-between w-full'
                onClick={() =>
                  router.push("profile/bantuan", "profile/bantuan")
                }
              >
                <div className='flex flex-row items-center gap-2'>
                  <div>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.5'
                        width='48'
                        height='48'
                        rx='16'
                        fill='white'
                      />
                      <path
                        d='M24 13.3335C18.12 13.3335 13.3333 18.1202 13.3333 24.0002C13.3333 29.8802 18.12 34.6668 24 34.6668C29.88 34.6668 34.6667 29.8802 34.6667 24.0002C34.6667 18.1202 29.88 13.3335 24 13.3335ZM25.3333 32.0002H22.6667V29.3335H25.3333V32.0002ZM25.3333 28.0002H22.6667C22.6667 23.6668 26.6667 24.0002 26.6667 21.3335C26.6667 19.8668 25.4667 18.6668 24 18.6668C22.5333 18.6668 21.3333 19.8668 21.3333 21.3335H18.6667C18.6667 18.3868 21.0533 16.0002 24 16.0002C26.9467 16.0002 29.3333 18.3868 29.3333 21.3335C29.3333 24.6668 25.3333 25.0002 25.3333 28.0002Z'
                        fill='#CDEEF2'
                      />
                      <path
                        d='M22.6667 29.3332H25.3333V31.9998H22.6667V29.3332ZM24 10.6665C16.64 10.6665 10.6667 16.6398 10.6667 23.9998C10.6667 31.3598 16.64 37.3332 24 37.3332C31.36 37.3332 37.3333 31.3598 37.3333 23.9998C37.3333 16.6398 31.36 10.6665 24 10.6665ZM24 34.6665C18.12 34.6665 13.3333 29.8798 13.3333 23.9998C13.3333 18.1198 18.12 13.3332 24 13.3332C29.88 13.3332 34.6667 18.1198 34.6667 23.9998C34.6667 29.8798 29.88 34.6665 24 34.6665ZM24 15.9998C21.0533 15.9998 18.6667 18.3865 18.6667 21.3332H21.3333C21.3333 19.8665 22.5333 18.6665 24 18.6665C25.4667 18.6665 26.6667 19.8665 26.6667 21.3332C26.6667 23.9998 22.6667 23.6665 22.6667 27.9998H25.3333C25.3333 24.9998 29.3333 24.6665 29.3333 21.3332C29.3333 18.3865 26.9467 15.9998 24 15.9998Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <div className='text-white font-bold'>Bantuan</div>
                </div>
              </button>
              <button
                className='flex items-center justify-between w-full'
                onClick={() =>
                  router.push("profile/tentang", "profile/tentang")
                }
              >
                <div className='flex flex-row items-center justify-between gap-2'>
                  <div>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <rect
                        opacity='0.5'
                        width='48'
                        height='48'
                        rx='16'
                        fill='white'
                      />
                      <circle
                        cx='24'
                        cy='24'
                        r='12.5'
                        fill='#CDEEF2'
                        stroke='white'
                        strokeWidth='3'
                      />
                      <path
                        d='M22.532 26.4272H25.3892L25.7833 16H22.1379L22.532 26.4272ZM26 29.9973C26 28.8435 25.1921 27.951 24.0099 27.951C22.8079 27.951 22 28.8435 22 29.9973C22 31.1075 22.8079 32 24.0099 32C25.1921 32 26 31.1075 26 29.9973Z'
                        fill='white'
                      />
                    </svg>
                  </div>
                  <div className='text-white font-bold'>Tentang</div>
                </div>
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className='pt-20 pb-32 px-4'>
        <div className='space-y-4'>
          <button
            // onClick={() => sendToMobile(openMenu)}
            className='bg-custom-blue w-14 h-14 rounded-full'
          />
          <div>
            <p className='font-bold text-sm'>{"fullname"}</p>
            <p className='text-xs'>{"jabatan"}</p>
            <p className='text-xs'>{"perusahaan"}</p>
          </div>
          <div className='space-y-4'>
            <div className='border rounded-md p-2'>
              <p className='text-custom-textGray text-xs'>NIK</p>
              <p className='text-xs'>{"nik"}</p>
              <p className='text-custom-textGray text-xs'>Email</p>
              <p className='text-xs'>{"email"}</p>
              <p className='text-custom-textGray text-xs'>No. Telepon</p>
              <p className='text-xs'>{"nomor_hp"}</p>
              <p className='text-custom-textGray text-xs'>Alamat</p>
              <p className='text-xs'>{"alamat"}</p>
            </div>
            <div className='border rounded-md p-2'>
              <p className='text-gray-500 font-bold text-md py-3'>
                Tempat Presensi
              </p>
              <div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <div>
                    <p className='text-black text-xs font-bold'>
                      RedWhite Coffee
                    </p>
                    <p className='text-xs'>
                      JL csu aiw duw No 2942 ucsak Kec, null
                    </p>
                  </div>
                  <p className='text-black text-xs font-bold'>
                    Jl. Giri Agung I No. 12
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    Jl. Giri Agung I No. 12
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    RedWhite Coffee
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
                <div>
                  <p className='text-black text-xs font-bold'>
                    Jl. Giri Agung I No. 12
                  </p>
                  <p className='text-xs'>
                    JL csu aiw duw No 2942 ucsak Kec, null
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Profile.layout = Layout;
export default Profile;
