import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import useEmblaCarousel from "embla-carousel-react";
import Header from "components/header";
const EmblaCarousel = ({ slides }) => {
  const router = useRouter();
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    draggable: false,
  });

  const [syncMenu, setSyncMenu] = useState(false);
  const [prevBtnEnabled, setPrevBtnEnabled] = useState(false);
  const [nextBtnEnabled, setNextBtnEnabled] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);
  const [scrollSnaps, setScrollSnaps] = useState([]);
  const scrollTo = useCallback(
    (index) => embla && embla.scrollTo(index),
    [embla]
  );

  const onSelect = useCallback(() => {
    console.log(scrollTo);
    if (!embla) return;
    setSelectedIndex(embla.selectedScrollSnap());
    setPrevBtnEnabled(embla.canScrollPrev());
    setNextBtnEnabled(embla.canScrollNext());
  }, [embla, setSelectedIndex, scrollTo]);

  const refer = useRef();
  const scrollingIntoView = () => {
    setTimeout(() => {
      refer.current.scrollIntoView({
        behavior: "smooth",
        block: "center",
      });
    }, 500);
  };
  const [deleteModal, setDeleteModal] = useState(false);
  const handleOpenDeleteModal = () => setDeleteModal(true);
  const handleCloseDeleteModal = () => setDeleteModal(false);
  const deleteData = useSpring({
    to: {
      y: deleteModal ? 0 : 1000,
    },
  });

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    console.log("SELECTED INDEX : ", selectedIndex);
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect, selectedIndex]);

  const SyncAnimate = useSpring({
    to: {
      x: syncMenu ? 0 : 1000,
    },
  });

  return (
    <>
      <Header
        selectedIndex={selectedIndex}
        leftTitle={"Pintasan Mode Offline"}
        leftAction={() => router.back()}
        leftIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-8 w-8"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 17l-5-5m0 0l5-5m-5 5h12"
            />
          </svg>
        }
        rightIcon={
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="white"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M12 5v.01M12 12v.01M12 19v.01M12 6a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2zm0 7a1 1 0 110-2 1 1 0 010 2z"
            />
          </svg>
        }
        rightAction={() => setSyncMenu(true)}
      />

      <div
        onTouchEnd={() => setSyncMenu(false)}
        className={`${
          syncMenu ? "" : "hidden"
        } bg-transparent absolute w-full h-full z-20 overflow-hidden`}
      ></div>

      <animated.div
        style={SyncAnimate}
        className={`bg-gray-700 rounded-md w-44 h-24 right-4 top-4 absolute z-20 flex items-center justify-center py-4 ${
          syncMenu ? "" : "hidden"
        }`}
      >
        <div className="space-y-3 divide-y">
          <div>
            <button onClick={() => setSyncMenu(false)}>
              <p className="text-white">Sinkronkan Data</p>
            </button>
          </div>
          <div className="pt-3">
            <button
              onClick={(e) => {
                setSyncMenu(false);
                handleOpenDeleteModal(e);
              }}
            >
              <p className="text-white">Hapus Data</p>
            </button>
          </div>
        </div>
      </animated.div>

      <div
        onClick={handleCloseDeleteModal}
        className={`${
          deleteModal ? "" : "hidden"
        } fixed z-20 bg-opacity-30 bg-black w-full h-full`}
      >
        a
      </div>
      <animated.div style={deleteData} className="fixed z-20 w-full bottom-0">
        <div className="w-full h-full flex items-center justify-center">
          <div className="bg-white w-full h-auto flex flex-col items-start justify-start p-4 space-y-2 divide-y">
            <button className="w-full" onClick={handleCloseDeleteModal}>
              <p className="text-sm font-bold text-left p-1">Presesi Offline</p>
            </button>
            <button className="pt-2 w-full" onClick={handleCloseDeleteModal}>
              <p className="text-sm font-bold text-left p-1">Pulang Offline</p>
            </button>
            <button className="pt-2 w-full" onClick={handleCloseDeleteModal}>
              <p className="text-sm font-bold text-left p-1">
                Aktivitas Offline
              </p>
            </button>
          </div>
        </div>
      </animated.div>

      <div className="w-full pt-20 h-full overflow-hidden">
        <div className="absolute top-14 w-full z-10 bg-custom-jetBlack h-10">
          <div className="flex items-center mt-3">
            <button className="w-full" onClick={() => scrollTo(0)}>
              <p className="text-white font-bold">Presensi</p>
            </button>
            <button className="w-full" onClick={() => scrollTo(1)}>
              <p className="text-white font-bold">Pulang</p>
            </button>
            <button className="w-full" onClick={() => scrollTo(2)}>
              <p className="text-white font-bold">Aktivitas</p>
            </button>
          </div>
          <div className="flex justify-between">
            {scrollSnaps.map((_, index) => (
              <>
                <DotButton
                  key={index}
                  className="w-24 h-full"
                  selected={index === selectedIndex}
                  onClick={() => scrollTo(index)}
                />
              </>
            ))}
          </div>
        </div>

        <div className="embla pt-8">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <div className="embla__slide__inner px-4 space-y-4">
                  <p>AKtivitas</p>
                </div>
              </div>
              <div className="embla__slide">
                <div className="embla__slide__inner px-4 space-y-4">
                  <p>AKtivitas</p>
                </div>
              </div>
              <div className="embla__slide">
                <div className="embla__slide__inner px-4 space-y-4">
                  <p>AKtivitas</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);
export default EmblaCarousel;
