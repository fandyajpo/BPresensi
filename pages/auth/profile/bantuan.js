import React, { useState, useEffect, useCallback } from "react";

import useEmblaCarousel from "embla-carousel-react";
import { useRouter } from "next/router";

const EmblaCarousel = ({ slides }) => {
  const router = useRouter();
  const [viewportRef, embla] = useEmblaCarousel({
    skipSnaps: false,
    draggable: false,
  });
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
      <div className="embla w-full">
        <div className="embla__viewport" ref={viewportRef}>
          <div className="embla__container">
            <div className="embla__slide">
              <div className="embla__slide__inner pt-36 pb-20 flex items-center justify-center">
                <div className="px-4 w-full h-full flex flex-col items-center gap-8">
                  <div className="bg-black w-64 h-36" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry`s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__inner pt-36 pb-20 flex items-center justify-center">
                <div className="px-4 w-full h-full flex flex-col items-center gap-8">
                  <div className="bg-black w-64 h-36" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry`s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__inner pt-36 pb-20 flex items-center justify-center">
                <div className="px-4 w-full h-full flex flex-col items-center gap-8">
                  <div className="bg-black w-64 h-36" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry`s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
            </div>
            <div className="embla__slide">
              <div className="embla__slide__inner pt-36 pb-20 flex items-center justify-center">
                <div className="px-4 w-full h-full flex flex-col items-center gap-8">
                  <div className="bg-black w-64 h-36" />
                  <p>
                    Lorem Ipsum is simply dummy text of the printing and
                    typesetting industry. Lorem Ipsum has been the industry`s
                    standard dummy text ever since the 1500s, when an unknown
                    printer took a galley of type and scrambled it to make a
                    type specimen book. It has survived not only five centuries,
                    but also the leap into electronic typesetting, remaining
                    essentially unchanged
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-row items-center space-x-8 justify-center">
        <button onClick={() => router.back()}>
          <p className="text-custom-blue">Skip</p>
        </button>
        <button onClick={scrollPrev} enabled={prevBtnEnabled}>
          <p
            className={`${
              selectedIndex === 0 ? "text-custom-textGray" : "text-custom-green"
            }`}
          >
            Previous
          </p>
        </button>
        <div className="embla__dots1">
          {scrollSnaps.map((_, index) => (
            <DotButton
              key={index}
              selected={index === selectedIndex}
              // onClick={() => scrollTo(index)}
            />
          ))}
        </div>
        <button
          onClick={selectedIndex === 3 ? () => router.back() : scrollNext}
          enabled={nextBtnEnabled}
        >
          {selectedIndex === 3 ? (
            <p className="text-custom-green">Start</p>
          ) : (
            <p className="text-custom-green">Next</p>
          )}
        </button>
      </div>
    </>
  );
};

export default EmblaCarousel;

export const DotButton = ({ selected, onClick }) => (
  <button
    className={`embla__dot1 ${selected ? "is-selected" : ""}`}
    type="button"
    onClick={onClick}
  />
);

export const PrevButton = ({ enabled, onClick }) => (
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

export const NextButton = ({ enabled, onClick }) => (
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
