import React, { useState, useEffect, useCallback, useRef } from "react";
import { useSpring, animated } from "react-spring";
import { useRouter } from "next/router";
import useEmblaCarousel from "embla-carousel-react";
import Header from "components/header";
import FloatCreateCuti from "components/floatCreateCuti";

const EmblaCarousel = ({ slides }) => {
  const router = useRouter();
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    draggable: false,
  });

  const [pengajuanInfo, setPengajuanInfo] = useState(false);
  const [pengajuanType, setPengajuanType] = useState("");

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

  useEffect(() => {
    if (!embla) return;
    onSelect();
    setScrollSnaps(embla.scrollSnapList());
    console.log("SELECTED INDEX : ", selectedIndex);
    embla.on("select", onSelect);
  }, [embla, setScrollSnaps, onSelect, selectedIndex]);

  return (
    <>
      <Header
        selectedIndex={selectedIndex}
        leftTitle={"Izin dan Cuti"}
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
      />

      <div
        className={`${
          pengajuanInfo ? "" : "hidden"
        } fixed bg-transparent backdrop-filter backdrop-blur-sm w-full h-full z-20`}
        onClick={() => setPengajuanInfo(false)}
      >
        <div className="flex items-center justify-center w-full h-full p-4">
          <div className="w-full">
            {selectedIndex === 0 ? (
              <>
                <div className="bg-custom-blue rounded-t-md p-2">
                  <p className="text-white font-bold">Detail Izin</p>
                </div>
                <div className="bg-white w-full border p-2">
                  <div className="flex flex-row gap-2">
                    <div className="bg-black w-24 h-24" />
                    <div>
                      <div>
                        <p className="text-s font-bold">Keterangan</p>
                        <p className="text-s text-custom-textGray">
                          Test izin coy
                        </p>
                      </div>
                      <div>
                        <p className="text-s font-bold">Jenis Izin</p>
                        <p className="text-s text-custom-textGray">
                          Pulang Awal
                        </p>
                      </div>
                      <div>
                        <p className="text-s font-bold">Tanggal</p>
                        <p className="text-s text-custom-textGray">
                          21 Februari 2022-21 Februari 2022
                        </p>
                      </div>
                      <div>
                        <p className="text-s font-bold">Status</p>
                        <p className="text-s text-custom-yellow">
                          Belum Disetujui
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            ) : (
              <>
                <div className="bg-custom-blue rounded-t-md p-2">
                  <p className="text-white font-bold">Detail Cuti</p>
                </div>
                <div className="bg-white w-full border p-2">
                  <div>
                    <div>
                      <div>
                        <p className="text-s font-bold">Keterangan</p>
                        <p className="text-s text-custom-textGray">
                          Test izin coy
                        </p>
                      </div>
                      <div>
                        <p className="text-s font-bold">Jenis Izin</p>
                        <p className="text-s text-custom-textGray">
                          Pulang Awal
                        </p>
                      </div>
                      <div>
                        <p className="text-s font-bold">Tanggal</p>
                        <p className="text-s text-custom-textGray">
                          21 Februari 2022-21 Februari 2022
                        </p>
                      </div>
                      <div>
                        <p className="text-s font-bold">Nomor Telepon</p>
                        <p className="text-s text-custom-textGray">
                          +628932985290
                        </p>
                      </div>
                      <div>
                        <p className="text-s font-bold">Status</p>
                        <p className="text-s text-custom-yellow">
                          Belum Disetujui
                        </p>
                      </div>
                    </div>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      <div className="w-full pt-20 h-full overflow-hidden">
        <div className="absolute top-14 w-full z-10 bg-custom-jetBlack h-8">
          <div className="flex items-center ">
            <button className="w-full" onClick={() => scrollTo(0)}>
              <p className="text-white font-bold">Izin</p>
            </button>
            <button className="w-full" onClick={() => scrollTo(1)}>
              <p className="text-white font-bold">Cuti</p>
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

        <div className="fixed bottom-4 right-4 z-10">
          <FloatCreateCuti selectedIndex={selectedIndex} />
        </div>

        <div className="embla pt-8">
          <div className="embla__viewport" ref={viewportRef}>
            <div className="embla__container">
              <div className="embla__slide">
                <div className="embla__slide__inner px-4 space-y-4">
                  <div className="">
                    <div className="bg-white p-4 rounded-md space-y-4 border">
                      <p className="text-s font-bold">Keterangan Izin</p>
                      <div className="space-y-2 divide-y">
                        <div className="flex flex-row divide-x w-full justify-between">
                          <div className="w-2/4 px-2 flex flex-row items-center justify-between">
                            <p className="text-xs">Tidak Hadir</p>
                            <p className="text-xl font-bold">30</p>
                          </div>
                          <div className="w-2/4 px-2 flex flex-row items-center justify-between">
                            <p className="text-xs">Terlambat</p>
                            <p className="text-xl font-bold">0</p>
                          </div>
                        </div>
                        <div className="flex flex-row divide-x w-full justify-between pt-2">
                          <div className="w-2/4 px-2 flex flex-row items-center justify-between">
                            <p className="text-xs">Pulang Awal</p>
                            <p className="text-xl font-bold">9</p>
                          </div>
                          <div className="w-2/4 px-2 flex flex-row items-center justify-between">
                            <p className="text-xs">Meninggalkan Kerja</p>
                            <p className="text-xl font-bold">4</p>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-md font-bold pb-4">Riwayat Izin</p>
                    <div className="space-y-2 pb-24">
                      <button
                        disabled={selectedIndex === 1}
                        onClick={() => setPengajuanInfo(true)}
                        className="w-full text-left h-auto border p-2 rounded-md flex items-center justify-between"
                      >
                        <div>
                          <div>
                            <p className="text-s font-bold">Alasan/Args</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm">Tipe Alasan</p>
                            <p className="text-sm">-</p>
                            <p className="text-sm">Persetujuan</p>
                          </div>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </button>
                      <button
                        disabled={selectedIndex === 1}
                        onClick={() => setPengajuanInfo(true)}
                        className="w-full text-left h-auto border p-2 rounded-md flex items-center justify-between"
                      >
                        <div>
                          <div>
                            <p className="text-s font-bold">Alasan/Args</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm">Tipe Alasan</p>
                            <p className="text-sm">-</p>
                            <p className="text-sm">Persetujuan</p>
                          </div>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </button>
                      <button
                        disabled={selectedIndex === 1}
                        onClick={() => setPengajuanInfo(true)}
                        className="w-full text-left h-auto border p-2 rounded-md flex items-center justify-between"
                      >
                        <div>
                          <div>
                            <p className="text-s font-bold">Alasan/Args</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm">Tipe Alasan</p>
                            <p className="text-sm">-</p>
                            <p className="text-sm">Persetujuan</p>
                          </div>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
                </div>
              </div>
              <div className="embla__slide">
                <div className="embla__slide__inner px-4 space-y-4">
                  <div className="">
                    <div className="relative w-full flex gap-6 snap-x overflow-x-auto">
                      <div className="snap-start shrink-0 last:pr-4 border rounded-md">
                        <div className="w-64 h-28 bg-white rounded-md p-2 flex flex-row items-center justify-between pr-6">
                          <div>
                            <p className="text-md font-bold">
                              Lembur Jam Kerja
                            </p>
                            <p className="text-xs w-32 text-custom-textGray">
                              Jumlah Lembur Jam Kerja
                            </p>
                            <p className="text-xl font-bold">0</p>
                          </div>
                          <div className="bg-custom-blue h-12 w-12 rounded-full"></div>
                        </div>
                      </div>
                      <div className="snap-start shrink-0 first:pl-4 last:pr-4 border rounded-md">
                        <div className="w-64 h-28 bg-white rounded-md p-2 flex flex-row items-center justify-between pr-6">
                          <div>
                            <p className="text-md font-bold">
                              Lembur Jam Kerja
                            </p>
                            <p className="text-xs w-32 text-custom-textGray">
                              Jumlah Lembur Jam Kerja
                            </p>
                            <p className="text-xl font-bold">0</p>
                          </div>
                          <div className="bg-custom-blue h-12 w-12 rounded-full"></div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div>
                    <p className="text-md font-bold pb-4">Riwayat Cuti</p>
                    <div className="space-y-2 pb-24">
                      <button
                        disabled={selectedIndex === 0}
                        onClick={() => setPengajuanInfo(true)}
                        className="w-full text-left h-auto border p-2 rounded-md flex items-center justify-between"
                      >
                        <div>
                          <div>
                            <p className="text-s font-bold">Alasan/Args</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm">Tipe Alasan</p>
                            <p className="text-sm">-</p>
                            <p className="text-sm">Persetujuan</p>
                          </div>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </button>
                      <button
                        disabled={selectedIndex === 0}
                        onClick={() => setPengajuanInfo(true)}
                        className="w-full text-left h-auto border p-2 rounded-md flex items-center justify-between"
                      >
                        <div>
                          <div>
                            <p className="text-s font-bold">Alasan/Args</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm">Tipe Alasan</p>
                            <p className="text-sm">-</p>
                            <p className="text-sm">Persetujuan</p>
                          </div>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </button>
                      <button
                        disabled={selectedIndex === 0}
                        onClick={() => setPengajuanInfo(true)}
                        className="w-full text-left h-auto border p-2 rounded-md flex items-center justify-between"
                      >
                        <div>
                          <div>
                            <p className="text-s font-bold">Alasan/Args</p>
                          </div>
                          <div className="flex items-center gap-2">
                            <p className="text-sm">Tipe Alasan</p>
                            <p className="text-sm">-</p>
                            <p className="text-sm">Persetujuan</p>
                          </div>
                        </div>
                        <div>
                          <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-5 w-5"
                            viewBox="0 0 20 20"
                            fill="currentColor"
                          >
                            <path
                              fillRule="evenodd"
                              d="M7.293 14.707a1 1 0 010-1.414L10.586 10 7.293 6.707a1 1 0 011.414-1.414l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414 0z"
                              clipRule="evenodd"
                            />
                          </svg>
                        </div>
                      </button>
                    </div>
                  </div>
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

const PrevButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--prev"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="137.718 -1.001 366.563 644">
      <path d="M428.36 12.5c16.67-16.67 43.76-16.67 60.42 0 16.67 16.67 16.67 43.76 0 60.42L241.7 320c148.25 148.24 230.61 230.6 247.08 247.08 16.67 16.66 16.67 43.75 0 60.42-16.67 16.66-43.76 16.67-60.42 0-27.72-27.71-249.45-249.37-277.16-277.08a42.308 42.308 0 0 1-12.48-30.34c0-11.1 4.1-22.05 12.48-30.42C206.63 234.23 400.64 40.21 428.36 12.5z" />
    </svg>
  </button>
);

const NextButton = ({ enabled, onClick }) => (
  <button
    className="embla__button embla__button--next"
    onClick={onClick}
    disabled={!enabled}
  >
    <svg className="embla__button__svg" viewBox="0 0 238.003 238.003">
      <path d="M181.776 107.719L78.705 4.648c-6.198-6.198-16.273-6.198-22.47 0s-6.198 16.273 0 22.47l91.883 91.883-91.883 91.883c-6.198 6.198-6.198 16.273 0 22.47s16.273 6.198 22.47 0l103.071-103.039a15.741 15.741 0 0 0 4.64-11.283c0-4.13-1.526-8.199-4.64-11.313z" />
    </svg>
  </button>
);

export default EmblaCarousel;
