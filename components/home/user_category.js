import { PresenceType } from "context/presenceType";
import { useRouter } from "next/router";
import { useState, useEffect, useCallback, useContext } from "react";
import useEmblaCarousel from "embla-carousel-react";
import { PresentContent } from "context/presentContent";

const EmblaCarousel = ({ slides, dataFetchFromHome }) => {
  const PreContent = useContext(PresentContent);
  const { username } = dataFetchFromHome;
  const router = useRouter();
  const Presence = useContext(PresenceType);
  const [viewportRef, embla] = useEmblaCarousel({ skipSnaps: false });
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);

  const scrollPrev = useCallback(() => embla && embla.scrollPrev(), [embla]);
  const scrollNext = useCallback(() => embla && embla.scrollNext(), [embla]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex]);

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect]);

  return (
    <>
      <div className='embla'>
        <div className='embla__viewport' ref={viewportRef}>
          <div className='embla__container'>
            <div className='embla__slide'>
              <div className='embla__slide__inner flex flex-col gap-y-8'>
                <div className='flex flex-row items-center justify-around'>
                  <button
                    className='flex flex-col items-center gap-y-2'
                    onClick={() => {
                      Presence.setPresence("presensi");
                      router.push("home/camera");
                    }}
                  >
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_58_479)'>
                        <rect width='48' height='48' rx='16' fill='#A7D100' />
                        <circle cx='24' cy='15' r='12' fill='white' />
                        <path
                          d='M51 57.5C51 50.4718 48.1554 43.7314 43.0919 38.7617C38.0284 33.792 31.1608 31 24 31C16.8392 31 9.9716 33.792 4.90812 38.7617C-0.155363 43.7314 -3 50.4718 -3 57.5L24 57.5H51Z'
                          fill='#F5FFCC'
                          stroke='white'
                          strokeWidth='2.82353'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M19.0588 39.8235L22.5882 43.3529L28.5882 37.3529'
                          stroke='#A7D100'
                          strokeWidth='2.82353'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_58_479'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className='text-1xs'>Datang</p>
                  </button>
                  <button
                    className='flex flex-col items-center gap-y-2'
                    onClick={() => {
                      Presence.setPresence("mulai-lembur");
                      router.push("home/camera");
                    }}
                  >
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_58_484)'>
                        <rect width='48' height='48' rx='16' fill='#F07834' />
                        <circle cx='14.5' cy='32.5' r='23.5' fill='#FFB388' />
                        <path
                          d='M37.6894 28.692C38.5137 33.7117 37.687 38.8633 35.3333 43.373C32.9797 47.8827 29.2263 51.5069 24.637 53.7012C20.0476 55.8955 14.8702 56.5414 9.88243 55.5419C4.89466 54.5423 0.365898 51.9513 -3.02354 48.1581C-6.41297 44.3648 -8.48004 39.5742 -8.91424 34.5058C-9.34843 29.4375 -8.1263 24.365 -5.43143 20.0506C-2.73657 15.7361 1.28551 12.4126 6.0306 10.5793C10.7757 8.74592 15.9875 8.50179 20.8832 9.88353'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                        />
                        <path
                          d='M13.7879 17.5455V33.2121L22.3334 41.7576'
                          stroke='#F07834'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M23.7576 16.1212H38'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M30.8788 23.2424L30.8788 9.00001'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_58_484'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className='text-1xs'>Mulai Lembur</p>
                  </button>
                  <button
                    className='flex flex-col items-center gap-y-2'
                    onClick={() => {
                      Presence.setPresence("istirahat");
                      router.push("home/camera");
                    }}
                  >
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_58_491)'>
                        <rect width='48' height='48' rx='16' fill='#34ADF0' />
                        <ellipse
                          cx='13'
                          cy='23'
                          rx='20'
                          ry='5'
                          fill='#9AD9FD'
                        />
                        <path
                          d='M14.5263 18.5789C24.7575 18.5789 33.0526 20.6516 33.0526 23.2105C33.0526 25.7695 24.7575 27.8421 14.5263 27.8421C4.29516 27.8421 -4 25.7695 -4 23.2105C-4 22.3838 -3.13158 21.6057 -1.60779 20.9318'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M-4 23.2105V44.847C-4 47.304 -2.98105 49.6638 -0.737053 50.6665C2.07663 51.924 6.90968 53.3158 14.5263 53.3158C22.1453 53.3158 26.9783 51.924 29.7897 50.6665C32.0314 49.6638 33.0526 47.304 33.0526 44.847V23.2105M5.26316 9.31579V18.5789M14.5263 7V11.6316M23.7895 11.6316V18.5789M33.0526 25.5263C34.8952 25.5263 36.6623 26.2583 37.9652 27.5612C39.268 28.864 40 30.6311 40 32.4737C40 34.3162 39.268 36.0833 37.9652 37.3862C36.6623 38.6891 34.8952 39.4211 33.0526 39.4211V25.5263Z'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_58_491'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className='text-1xs'>Istirahat</p>
                  </button>
                  <button
                    className='flex flex-col items-center gap-y-2'
                    onClick={() => {
                      Presence.setPresence("izin-dan-cuti");
                      router.push("home/izin");
                    }}
                  >
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_58_497)'>
                        <rect width='48' height='48' rx='16' fill='#4334F0' />
                        <path
                          d='M26.5858 11H22C21.4477 11 21 11.4477 21 12V17.8377C21 17.9452 21.0173 18.052 21.0513 18.154L21.9253 20.776C21.9744 20.9233 22.0572 21.0571 22.1669 21.1669L23.93 22.93C23.9765 22.9765 24.0276 23.0184 24.0824 23.0549L26.7481 24.8321C26.9123 24.9416 27.1054 25 27.3028 25H36C36.5523 25 37 24.5523 37 24V21.4142C37 21.149 36.8946 20.8946 36.7071 20.7071L27.2929 11.2929C27.1054 11.1054 26.851 11 26.5858 11Z'
                          fill='#C4BFFF'
                        />
                        <path
                          d='M19.6 10.4V16.5C19.6 22.2438 24.2562 26.9 30 26.9H37.6V32V46C37.6 50.1974 34.1974 53.6 30 53.6H0C-4.19736 53.6 -7.6 50.1974 -7.6 46V18C-7.6 13.8026 -4.19736 10.4 0 10.4H15H19.6ZM22.4 10.4H23.4991C25.4006 10.4 27.233 11.1128 28.6347 12.3976L35.1355 18.3567C36.7059 19.7963 37.6 21.8288 37.6 23.9591V24.1H30C25.8026 24.1 22.4 20.6974 22.4 16.5V10.4Z'
                          stroke='white'
                          strokeWidth='2.8'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_58_497'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className='text-1xs'>Izin/Cuti</p>
                  </button>
                </div>
                <div className='flex flex-row items-center justify-around'>
                  <button
                    className='flex flex-col items-center gap-y-2'
                    onClick={() => {
                      Presence.setPresence("pulang");
                      router.push("home/camera");
                    }}
                  >
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_61_762)'>
                        <rect width='48' height='48' rx='16' fill='#E364F8' />
                        <g clipPath='url(#clip1_61_762)'>
                          <rect
                            x='-15'
                            y='18'
                            width='52'
                            height='40'
                            rx='6'
                            fill='#F1D3FA'
                          />
                          <path
                            d='M-6.25 27.25H34.25V23.875C34.25 22.9799 33.8944 22.1215 33.2615 21.4885C32.6285 20.8556 31.7701 20.5 30.875 20.5H-2.875C-3.77011 20.5 -4.62855 20.8556 -5.26149 21.4885C-5.89442 22.1215 -6.25 22.9799 -6.25 23.875V27.25ZM-6.25 30.625V47.5C-6.25 48.3951 -5.89442 49.2535 -5.26149 49.8865C-4.62855 50.5194 -3.77011 50.875 -2.875 50.875H30.875C31.7701 50.875 32.6285 50.5194 33.2615 49.8865C33.8944 49.2535 34.25 48.3951 34.25 47.5V30.625H-6.25ZM-2.875 17.125H30.875C32.6652 17.125 34.3821 17.8362 35.648 19.102C36.9138 20.3679 37.625 22.0848 37.625 23.875V47.5C37.625 49.2902 36.9138 51.0071 35.648 52.273C34.3821 53.5388 32.6652 54.25 30.875 54.25H-2.875C-4.66521 54.25 -6.3821 53.5388 -7.64797 52.273C-8.91384 51.0071 -9.625 49.2902 -9.625 47.5V23.875C-9.625 22.0848 -8.91384 20.3679 -7.64797 19.102C-6.3821 17.8362 -4.66521 17.125 -2.875 17.125V17.125Z'
                            fill='white'
                          />
                          <path
                            d='M7.25 13.75V17.125H20.75V13.75H7.25ZM7.25 10.375H20.75C21.6451 10.375 22.5035 10.7306 23.1365 11.3635C23.7694 11.9964 24.125 12.8549 24.125 13.75V17.125C24.125 18.0201 23.7694 18.8786 23.1365 19.5115C22.5035 20.1444 21.6451 20.5 20.75 20.5H7.25C6.35489 20.5 5.49645 20.1444 4.86352 19.5115C4.23058 18.8786 3.875 18.0201 3.875 17.125V13.75C3.875 12.8549 4.23058 11.9964 4.86352 11.3635C5.49645 10.7306 6.35489 10.375 7.25 10.375Z'
                            fill='white'
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id='clip0_61_762'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                        <clipPath id='clip1_61_762'>
                          <rect
                            width='54'
                            height='54'
                            fill='white'
                            transform='translate(-13 7)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className='text-1xs'>Pulang</p>
                  </button>
                  <button
                    className='flex flex-col items-center gap-y-2'
                    onClick={() => {
                      Presence.setPresence("selesai-lembur");
                      router.push("home/camera");
                    }}
                  >
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_61_775)'>
                        <rect width='48' height='48' rx='16' fill='#6C3212' />
                        <circle cx='14.5' cy='32.5' r='23.5' fill='#AB5C30' />
                        <path
                          d='M25 16.0964L28.9352 20L37 12'
                          stroke='white'
                          strokeWidth='3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M37.6894 28.692C38.5137 33.7117 37.687 38.8633 35.3333 43.373C32.9797 47.8827 29.2263 51.5069 24.637 53.7012C20.0476 55.8955 14.8702 56.5414 9.88243 55.5419C4.89466 54.5423 0.365898 51.9513 -3.02354 48.1581C-6.41297 44.3648 -8.48004 39.5742 -8.91424 34.5058C-9.34843 29.4375 -8.1263 24.365 -5.43143 20.0506C-2.73657 15.7361 1.28551 12.4126 6.0306 10.5793C10.7757 8.74592 15.9875 8.50179 20.8832 9.88353'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                        />
                        <path
                          d='M13.7879 17.5455V33.2121L22.3334 41.7576'
                          stroke='#6C3212'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_61_775'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className='text-1xs'>Selesai Lembur</p>
                  </button>
                  <button
                    className='flex flex-col items-center gap-y-2'
                    onClick={() => {
                      Presence.setPresence("kembali-kerja");
                      router.push("home/camera");
                    }}
                  >
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_61_787)'>
                        <rect width='48' height='48' rx='16' fill='#17A80B' />
                        <path
                          d='M16.5 19.5L5 20L-1 27.5L6.5 29.5L12.5 30.5L-1 42.5L4.5 49L18.5 35L19.5 47L21 50L28 45L28.5 31.5L38.5 19.5L39.5 10L38.5 9L28 10L16.5 19.5Z'
                          fill='#B9D4BA'
                        />
                        <path
                          d='M4.61523 41.1216L17.3605 28.3764L19.614 30.63L6.8688 43.3752L4.61523 41.1216Z'
                          fill='white'
                        />
                        <path
                          d='M20.0938 51.8125C19.8919 51.813 19.6918 51.7751 19.5041 51.7009C19.243 51.5969 19.014 51.4256 18.8405 51.2044C18.667 50.9833 18.555 50.7202 18.516 50.4419L16.9222 39.2856L20.1097 38.8394L21.305 47.2384L26.4688 43.0788V31.0938C26.4676 30.884 26.5078 30.6761 26.5871 30.4819C26.6664 30.2877 26.7832 30.1111 26.931 29.9622L33.4175 23.4756C34.7541 22.1481 35.8142 20.5687 36.5364 18.8289C37.2586 17.089 37.6286 15.2232 37.625 13.3394V10.375H34.6606C32.7768 10.3714 30.911 10.7414 29.1712 11.4637C27.4313 12.1859 25.8519 13.2459 24.5244 14.5825L18.0378 21.0691C17.8889 21.2168 17.7123 21.3336 17.5181 21.413C17.3239 21.4923 17.116 21.5325 16.9063 21.5313H4.92127L0.761582 26.7269L9.16064 27.9222L8.71439 31.1097L-2.44186 29.5159C-2.72022 29.4769 -2.9833 29.3649 -3.20442 29.1914C-3.42554 29.0179 -3.59683 28.7889 -3.70092 28.5278C-3.8063 28.2649 -3.83969 27.9786 -3.79767 27.6985C-3.75566 27.4184 -3.63974 27.1545 -3.46186 26.9341L2.91314 18.9653C3.05996 18.7746 3.24808 18.6195 3.46338 18.5119C3.67868 18.4042 3.91557 18.3468 4.15627 18.3438H16.2528L22.2613 12.3194C23.8856 10.686 25.818 9.39124 27.9464 8.5103C30.0749 7.62937 32.3571 7.17975 34.6606 7.18751H37.625C38.4704 7.18751 39.2811 7.52333 39.8789 8.1211C40.4767 8.71888 40.8125 9.52963 40.8125 10.375V13.3394C40.8203 15.6429 40.3707 17.9251 39.4897 20.0536C38.6088 22.1821 37.3141 24.1145 35.6806 25.7388L29.6563 31.7472V43.8438C29.6552 44.0831 29.6001 44.3192 29.4953 44.5344C29.3905 44.7496 29.2385 44.9385 29.0506 45.0869L21.0819 51.4619C20.8015 51.6869 20.4533 51.8104 20.0938 51.8125Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_61_787'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className='text-1xs'>Kembali Kerja</p>
                  </button>
                  <button className='flex flex-col items-center gap-y-2'>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_61_802)'>
                        <rect width='48' height='48' rx='16' fill='#970788' />
                        <rect
                          x='-2.19354'
                          y='12.5484'
                          width='31.6129'
                          height='40.6452'
                          rx='2'
                          fill='#DCB9DC'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6.79168 10.6667H0.958344C-0.201979 10.6667 -1.31478 11.1276 -2.13525 11.9481C-2.95572 12.7685 -3.41666 13.8813 -3.41666 15.0417V50.0417C-3.41666 51.202 -2.95572 52.3148 -2.13525 53.1352C-1.31478 53.9557 -0.201979 54.4167 0.958344 54.4167H25.75C26.9103 54.4167 28.0231 53.9557 28.8436 53.1352C29.6641 52.3148 30.125 51.202 30.125 50.0417V15.0417C30.125 13.8813 29.6641 12.7685 28.8436 11.9481C28.0231 11.1276 26.9103 10.6667 25.75 10.6667H24.2917V13.5833H25.75C26.1368 13.5833 26.5077 13.737 26.7812 14.0105C27.0547 14.284 27.2083 14.6549 27.2083 15.0417V50.0417C27.2083 50.4284 27.0547 50.7994 26.7812 51.0729C26.5077 51.3463 26.1368 51.5 25.75 51.5H0.958344C0.57157 51.5 0.200637 51.3463 -0.0728535 51.0729C-0.346344 50.7994 -0.49999 50.4284 -0.49999 50.0417V15.0417C-0.49999 14.6549 -0.346344 14.284 -0.0728535 14.0105C0.200637 13.737 0.57157 13.5833 0.958344 13.5833H6.79168V10.6667ZM9.70834 13.5833H21.375V10.6667H9.70834V13.5833Z'
                          fill='white'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M2.41669 26.7083C2.41669 26.3216 2.57033 25.9506 2.84382 25.6771C3.11731 25.4036 3.48825 25.25 3.87502 25.25H22.8334C23.2201 25.25 23.5911 25.4036 23.8646 25.6771C24.138 25.9506 24.2917 26.3216 24.2917 26.7083C24.2917 27.0951 24.138 27.466 23.8646 27.7395C23.5911 28.013 23.2201 28.1667 22.8334 28.1667H3.87502C3.48825 28.1667 3.11731 28.013 2.84382 27.7395C2.57033 27.466 2.41669 27.0951 2.41669 26.7083ZM2.41669 34C2.41669 33.6132 2.57033 33.2423 2.84382 32.9688C3.11731 32.6953 3.48825 32.5417 3.87502 32.5417H14.0834C14.4701 32.5417 14.8411 32.6953 15.1146 32.9688C15.388 33.2423 15.5417 33.6132 15.5417 34C15.5417 34.3868 15.388 34.7577 15.1146 35.0312C14.8411 35.3047 14.4701 35.4583 14.0834 35.4583H3.87502C3.48825 35.4583 3.11731 35.3047 2.84382 35.0312C2.57033 34.7577 2.41669 34.3868 2.41669 34ZM2.41669 41.2917C2.41669 40.9049 2.57033 40.534 2.84382 40.2605C3.11731 39.987 3.48825 39.8333 3.87502 39.8333H19.9167C20.3035 39.8333 20.6744 39.987 20.9479 40.2605C21.2214 40.534 21.375 40.9049 21.375 41.2917C21.375 41.6784 21.2214 42.0494 20.9479 42.3229C20.6744 42.5964 20.3035 42.75 19.9167 42.75H3.87502C3.48825 42.75 3.11731 42.5964 2.84382 42.3229C2.57033 42.0494 2.41669 41.6784 2.41669 41.2917Z'
                          fill='white'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M19.9167 7.75C20.3034 7.75 20.6744 7.90365 20.9479 8.17714C21.2214 8.45063 21.375 8.82156 21.375 9.20833V15.0417C21.375 15.4284 21.2214 15.7994 20.9479 16.0729C20.6744 16.3464 20.3034 16.5 19.9167 16.5C19.5299 16.5 19.159 16.3464 18.8855 16.0729C18.612 15.7994 18.4583 15.4284 18.4583 15.0417V9.20833C18.4583 8.82156 18.612 8.45063 18.8855 8.17714C19.159 7.90365 19.5299 7.75 19.9167 7.75ZM5.33333 7.75C5.72011 7.75 6.09104 7.90365 6.36453 8.17714C6.63802 8.45063 6.79167 8.82156 6.79167 9.20833V15.0417C6.79167 15.4284 6.63802 15.7994 6.36453 16.0729C6.09104 16.3464 5.72011 16.5 5.33333 16.5C4.94656 16.5 4.57563 16.3464 4.30214 16.0729C4.02865 15.7994 3.875 15.4284 3.875 15.0417V9.20833C3.875 8.82156 4.02865 8.45063 4.30214 8.17714C4.57563 7.90365 4.94656 7.75 5.33333 7.75Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_61_802'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                    <p className='text-1xs'>Aktivitas</p>
                  </button>
                </div>
              </div>
            </div>
            <div className='embla__slide'>
              <div className='embla__slide__inner flex flex-col gap-y-8'>
                <div className='flex flex-row items-center justify-around'>
                  <button>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_58_479)'>
                        <rect width='48' height='48' rx='16' fill='#A7D100' />
                        <circle cx='24' cy='15' r='12' fill='white' />
                        <path
                          d='M51 57.5C51 50.4718 48.1554 43.7314 43.0919 38.7617C38.0284 33.792 31.1608 31 24 31C16.8392 31 9.9716 33.792 4.90812 38.7617C-0.155363 43.7314 -3 50.4718 -3 57.5L24 57.5H51Z'
                          fill='#F5FFCC'
                          stroke='white'
                          strokeWidth='2.82353'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M19.0588 39.8235L22.5882 43.3529L28.5882 37.3529'
                          stroke='#A7D100'
                          strokeWidth='2.82353'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_58_479'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_58_484)'>
                        <rect width='48' height='48' rx='16' fill='#F07834' />
                        <circle cx='14.5' cy='32.5' r='23.5' fill='#FFB388' />
                        <path
                          d='M37.6894 28.692C38.5137 33.7117 37.687 38.8633 35.3333 43.373C32.9797 47.8827 29.2263 51.5069 24.637 53.7012C20.0476 55.8955 14.8702 56.5414 9.88243 55.5419C4.89466 54.5423 0.365898 51.9513 -3.02354 48.1581C-6.41297 44.3648 -8.48004 39.5742 -8.91424 34.5058C-9.34843 29.4375 -8.1263 24.365 -5.43143 20.0506C-2.73657 15.7361 1.28551 12.4126 6.0306 10.5793C10.7757 8.74592 15.9875 8.50179 20.8832 9.88353'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                        />
                        <path
                          d='M13.7879 17.5455V33.2121L22.3334 41.7576'
                          stroke='#F07834'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M23.7576 16.1212H38'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M30.8788 23.2424L30.8788 9.00001'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_58_484'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_58_491)'>
                        <rect width='48' height='48' rx='16' fill='#34ADF0' />
                        <ellipse
                          cx='13'
                          cy='23'
                          rx='20'
                          ry='5'
                          fill='#9AD9FD'
                        />
                        <path
                          d='M14.5263 18.5789C24.7575 18.5789 33.0526 20.6516 33.0526 23.2105C33.0526 25.7695 24.7575 27.8421 14.5263 27.8421C4.29516 27.8421 -4 25.7695 -4 23.2105C-4 22.3838 -3.13158 21.6057 -1.60779 20.9318'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M-4 23.2105V44.847C-4 47.304 -2.98105 49.6638 -0.737053 50.6665C2.07663 51.924 6.90968 53.3158 14.5263 53.3158C22.1453 53.3158 26.9783 51.924 29.7897 50.6665C32.0314 49.6638 33.0526 47.304 33.0526 44.847V23.2105M5.26316 9.31579V18.5789M14.5263 7V11.6316M23.7895 11.6316V18.5789M33.0526 25.5263C34.8952 25.5263 36.6623 26.2583 37.9652 27.5612C39.268 28.864 40 30.6311 40 32.4737C40 34.3162 39.268 36.0833 37.9652 37.3862C36.6623 38.6891 34.8952 39.4211 33.0526 39.4211V25.5263Z'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_58_491'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_58_497)'>
                        <rect width='48' height='48' rx='16' fill='#4334F0' />
                        <path
                          d='M26.5858 11H22C21.4477 11 21 11.4477 21 12V17.8377C21 17.9452 21.0173 18.052 21.0513 18.154L21.9253 20.776C21.9744 20.9233 22.0572 21.0571 22.1669 21.1669L23.93 22.93C23.9765 22.9765 24.0276 23.0184 24.0824 23.0549L26.7481 24.8321C26.9123 24.9416 27.1054 25 27.3028 25H36C36.5523 25 37 24.5523 37 24V21.4142C37 21.149 36.8946 20.8946 36.7071 20.7071L27.2929 11.2929C27.1054 11.1054 26.851 11 26.5858 11Z'
                          fill='#C4BFFF'
                        />
                        <path
                          d='M19.6 10.4V16.5C19.6 22.2438 24.2562 26.9 30 26.9H37.6V32V46C37.6 50.1974 34.1974 53.6 30 53.6H0C-4.19736 53.6 -7.6 50.1974 -7.6 46V18C-7.6 13.8026 -4.19736 10.4 0 10.4H15H19.6ZM22.4 10.4H23.4991C25.4006 10.4 27.233 11.1128 28.6347 12.3976L35.1355 18.3567C36.7059 19.7963 37.6 21.8288 37.6 23.9591V24.1H30C25.8026 24.1 22.4 20.6974 22.4 16.5V10.4Z'
                          stroke='white'
                          strokeWidth='2.8'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_58_497'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
                <div className='flex flex-row items-center justify-around'>
                  <button>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_61_762)'>
                        <rect width='48' height='48' rx='16' fill='#E364F8' />
                        <g clipPath='url(#clip1_61_762)'>
                          <rect
                            x='-15'
                            y='18'
                            width='52'
                            height='40'
                            rx='6'
                            fill='#F1D3FA'
                          />
                          <path
                            d='M-6.25 27.25H34.25V23.875C34.25 22.9799 33.8944 22.1215 33.2615 21.4885C32.6285 20.8556 31.7701 20.5 30.875 20.5H-2.875C-3.77011 20.5 -4.62855 20.8556 -5.26149 21.4885C-5.89442 22.1215 -6.25 22.9799 -6.25 23.875V27.25ZM-6.25 30.625V47.5C-6.25 48.3951 -5.89442 49.2535 -5.26149 49.8865C-4.62855 50.5194 -3.77011 50.875 -2.875 50.875H30.875C31.7701 50.875 32.6285 50.5194 33.2615 49.8865C33.8944 49.2535 34.25 48.3951 34.25 47.5V30.625H-6.25ZM-2.875 17.125H30.875C32.6652 17.125 34.3821 17.8362 35.648 19.102C36.9138 20.3679 37.625 22.0848 37.625 23.875V47.5C37.625 49.2902 36.9138 51.0071 35.648 52.273C34.3821 53.5388 32.6652 54.25 30.875 54.25H-2.875C-4.66521 54.25 -6.3821 53.5388 -7.64797 52.273C-8.91384 51.0071 -9.625 49.2902 -9.625 47.5V23.875C-9.625 22.0848 -8.91384 20.3679 -7.64797 19.102C-6.3821 17.8362 -4.66521 17.125 -2.875 17.125V17.125Z'
                            fill='white'
                          />
                          <path
                            d='M7.25 13.75V17.125H20.75V13.75H7.25ZM7.25 10.375H20.75C21.6451 10.375 22.5035 10.7306 23.1365 11.3635C23.7694 11.9964 24.125 12.8549 24.125 13.75V17.125C24.125 18.0201 23.7694 18.8786 23.1365 19.5115C22.5035 20.1444 21.6451 20.5 20.75 20.5H7.25C6.35489 20.5 5.49645 20.1444 4.86352 19.5115C4.23058 18.8786 3.875 18.0201 3.875 17.125V13.75C3.875 12.8549 4.23058 11.9964 4.86352 11.3635C5.49645 10.7306 6.35489 10.375 7.25 10.375Z'
                            fill='white'
                          />
                        </g>
                      </g>
                      <defs>
                        <clipPath id='clip0_61_762'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                        <clipPath id='clip1_61_762'>
                          <rect
                            width='54'
                            height='54'
                            fill='white'
                            transform='translate(-13 7)'
                          />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_61_775)'>
                        <rect width='48' height='48' rx='16' fill='#6C3212' />
                        <circle cx='14.5' cy='32.5' r='23.5' fill='#AB5C30' />
                        <path
                          d='M25 16.0964L28.9352 20L37 12'
                          stroke='white'
                          strokeWidth='3'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                        <path
                          d='M37.6894 28.692C38.5137 33.7117 37.687 38.8633 35.3333 43.373C32.9797 47.8827 29.2263 51.5069 24.637 53.7012C20.0476 55.8955 14.8702 56.5414 9.88243 55.5419C4.89466 54.5423 0.365898 51.9513 -3.02354 48.1581C-6.41297 44.3648 -8.48004 39.5742 -8.91424 34.5058C-9.34843 29.4375 -8.1263 24.365 -5.43143 20.0506C-2.73657 15.7361 1.28551 12.4126 6.0306 10.5793C10.7757 8.74592 15.9875 8.50179 20.8832 9.88353'
                          stroke='white'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                        />
                        <path
                          d='M13.7879 17.5455V33.2121L22.3334 41.7576'
                          stroke='#6C3212'
                          strokeWidth='2.8'
                          strokeLinecap='round'
                          strokeLinejoin='round'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_61_775'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_61_787)'>
                        <rect width='48' height='48' rx='16' fill='#17A80B' />
                        <path
                          d='M16.5 19.5L5 20L-1 27.5L6.5 29.5L12.5 30.5L-1 42.5L4.5 49L18.5 35L19.5 47L21 50L28 45L28.5 31.5L38.5 19.5L39.5 10L38.5 9L28 10L16.5 19.5Z'
                          fill='#B9D4BA'
                        />
                        <path
                          d='M4.61523 41.1216L17.3605 28.3764L19.614 30.63L6.8688 43.3752L4.61523 41.1216Z'
                          fill='white'
                        />
                        <path
                          d='M20.0938 51.8125C19.8919 51.813 19.6918 51.7751 19.5041 51.7009C19.243 51.5969 19.014 51.4256 18.8405 51.2044C18.667 50.9833 18.555 50.7202 18.516 50.4419L16.9222 39.2856L20.1097 38.8394L21.305 47.2384L26.4688 43.0788V31.0938C26.4676 30.884 26.5078 30.6761 26.5871 30.4819C26.6664 30.2877 26.7832 30.1111 26.931 29.9622L33.4175 23.4756C34.7541 22.1481 35.8142 20.5687 36.5364 18.8289C37.2586 17.089 37.6286 15.2232 37.625 13.3394V10.375H34.6606C32.7768 10.3714 30.911 10.7414 29.1712 11.4637C27.4313 12.1859 25.8519 13.2459 24.5244 14.5825L18.0378 21.0691C17.8889 21.2168 17.7123 21.3336 17.5181 21.413C17.3239 21.4923 17.116 21.5325 16.9063 21.5313H4.92127L0.761582 26.7269L9.16064 27.9222L8.71439 31.1097L-2.44186 29.5159C-2.72022 29.4769 -2.9833 29.3649 -3.20442 29.1914C-3.42554 29.0179 -3.59683 28.7889 -3.70092 28.5278C-3.8063 28.2649 -3.83969 27.9786 -3.79767 27.6985C-3.75566 27.4184 -3.63974 27.1545 -3.46186 26.9341L2.91314 18.9653C3.05996 18.7746 3.24808 18.6195 3.46338 18.5119C3.67868 18.4042 3.91557 18.3468 4.15627 18.3438H16.2528L22.2613 12.3194C23.8856 10.686 25.818 9.39124 27.9464 8.5103C30.0749 7.62937 32.3571 7.17975 34.6606 7.18751H37.625C38.4704 7.18751 39.2811 7.52333 39.8789 8.1211C40.4767 8.71888 40.8125 9.52963 40.8125 10.375V13.3394C40.8203 15.6429 40.3707 17.9251 39.4897 20.0536C38.6088 22.1821 37.3141 24.1145 35.6806 25.7388L29.6563 31.7472V43.8438C29.6552 44.0831 29.6001 44.3192 29.4953 44.5344C29.3905 44.7496 29.2385 44.9385 29.0506 45.0869L21.0819 51.4619C20.8015 51.6869 20.4533 51.8104 20.0938 51.8125Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_61_787'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                  <button>
                    <svg
                      width='48'
                      height='48'
                      viewBox='0 0 48 48'
                      fill='none'
                      xmlns='http://www.w3.org/2000/svg'
                    >
                      <g clipPath='url(#clip0_61_802)'>
                        <rect width='48' height='48' rx='16' fill='#970788' />
                        <rect
                          x='-2.19354'
                          y='12.5484'
                          width='31.6129'
                          height='40.6452'
                          rx='2'
                          fill='#DCB9DC'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M6.79168 10.6667H0.958344C-0.201979 10.6667 -1.31478 11.1276 -2.13525 11.9481C-2.95572 12.7685 -3.41666 13.8813 -3.41666 15.0417V50.0417C-3.41666 51.202 -2.95572 52.3148 -2.13525 53.1352C-1.31478 53.9557 -0.201979 54.4167 0.958344 54.4167H25.75C26.9103 54.4167 28.0231 53.9557 28.8436 53.1352C29.6641 52.3148 30.125 51.202 30.125 50.0417V15.0417C30.125 13.8813 29.6641 12.7685 28.8436 11.9481C28.0231 11.1276 26.9103 10.6667 25.75 10.6667H24.2917V13.5833H25.75C26.1368 13.5833 26.5077 13.737 26.7812 14.0105C27.0547 14.284 27.2083 14.6549 27.2083 15.0417V50.0417C27.2083 50.4284 27.0547 50.7994 26.7812 51.0729C26.5077 51.3463 26.1368 51.5 25.75 51.5H0.958344C0.57157 51.5 0.200637 51.3463 -0.0728535 51.0729C-0.346344 50.7994 -0.49999 50.4284 -0.49999 50.0417V15.0417C-0.49999 14.6549 -0.346344 14.284 -0.0728535 14.0105C0.200637 13.737 0.57157 13.5833 0.958344 13.5833H6.79168V10.6667ZM9.70834 13.5833H21.375V10.6667H9.70834V13.5833Z'
                          fill='white'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M2.41669 26.7083C2.41669 26.3216 2.57033 25.9506 2.84382 25.6771C3.11731 25.4036 3.48825 25.25 3.87502 25.25H22.8334C23.2201 25.25 23.5911 25.4036 23.8646 25.6771C24.138 25.9506 24.2917 26.3216 24.2917 26.7083C24.2917 27.0951 24.138 27.466 23.8646 27.7395C23.5911 28.013 23.2201 28.1667 22.8334 28.1667H3.87502C3.48825 28.1667 3.11731 28.013 2.84382 27.7395C2.57033 27.466 2.41669 27.0951 2.41669 26.7083ZM2.41669 34C2.41669 33.6132 2.57033 33.2423 2.84382 32.9688C3.11731 32.6953 3.48825 32.5417 3.87502 32.5417H14.0834C14.4701 32.5417 14.8411 32.6953 15.1146 32.9688C15.388 33.2423 15.5417 33.6132 15.5417 34C15.5417 34.3868 15.388 34.7577 15.1146 35.0312C14.8411 35.3047 14.4701 35.4583 14.0834 35.4583H3.87502C3.48825 35.4583 3.11731 35.3047 2.84382 35.0312C2.57033 34.7577 2.41669 34.3868 2.41669 34ZM2.41669 41.2917C2.41669 40.9049 2.57033 40.534 2.84382 40.2605C3.11731 39.987 3.48825 39.8333 3.87502 39.8333H19.9167C20.3035 39.8333 20.6744 39.987 20.9479 40.2605C21.2214 40.534 21.375 40.9049 21.375 41.2917C21.375 41.6784 21.2214 42.0494 20.9479 42.3229C20.6744 42.5964 20.3035 42.75 19.9167 42.75H3.87502C3.48825 42.75 3.11731 42.5964 2.84382 42.3229C2.57033 42.0494 2.41669 41.6784 2.41669 41.2917Z'
                          fill='white'
                        />
                        <path
                          fillRule='evenodd'
                          clipRule='evenodd'
                          d='M19.9167 7.75C20.3034 7.75 20.6744 7.90365 20.9479 8.17714C21.2214 8.45063 21.375 8.82156 21.375 9.20833V15.0417C21.375 15.4284 21.2214 15.7994 20.9479 16.0729C20.6744 16.3464 20.3034 16.5 19.9167 16.5C19.5299 16.5 19.159 16.3464 18.8855 16.0729C18.612 15.7994 18.4583 15.4284 18.4583 15.0417V9.20833C18.4583 8.82156 18.612 8.45063 18.8855 8.17714C19.159 7.90365 19.5299 7.75 19.9167 7.75ZM5.33333 7.75C5.72011 7.75 6.09104 7.90365 6.36453 8.17714C6.63802 8.45063 6.79167 8.82156 6.79167 9.20833V15.0417C6.79167 15.4284 6.63802 15.7994 6.36453 16.0729C6.09104 16.3464 5.72011 16.5 5.33333 16.5C4.94656 16.5 4.57563 16.3464 4.30214 16.0729C4.02865 15.7994 3.875 15.4284 3.875 15.0417V9.20833C3.875 8.82156 4.02865 8.45063 4.30214 8.17714C4.57563 7.90365 4.94656 7.75 5.33333 7.75Z'
                          fill='white'
                        />
                      </g>
                      <defs>
                        <clipPath id='clip0_61_802'>
                          <rect width='48' height='48' rx='16' fill='white' />
                        </clipPath>
                      </defs>
                    </svg>
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className='flex items-center w-full justify-center'>
        <div className='embla__dots3'>
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              onClick={() => scrollTo(index)}
            />
          ))}
        </div>
      </div>
    </>
  );
};

export default EmblaCarousel;

const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type='button'
    onClick={onClick}
  />
);

const PrevButton = ({ enabled, onClick }) => (
  <button
    className='embla__button embla__button--prev'
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className='embla__button__svg' viewBox='137.718 -1.001 366.563 644'>
      <path d='M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z' />
    </svg>
  </button>
);

const NextButton = ({ enabled, onClick }) => (
  <button
    className='embla__button embla__button--next'
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className='embla__button__svg' viewBox='0 0 238.003 238.003'>
      <path d='M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z' />
    </svg>
  </button>
);
