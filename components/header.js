import { useState, useEffect } from "react";

const Header = () => {
  const [scrolling, setScrolling] = useState(false);
  const NavbarAnimation = (event) => {
    if (window.scrollY > 30) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", NavbarAnimation);
  }, []);
  return (
    <div
      className={`bg-custom-blue fixed top-0 w-full h-14 backdrop-filter backdrop-blur-2xl z-10`}
    >
      <div className="w-full flex flex-row items-center justify-end p-4 h-full">
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
            d="M4 6h16M4 12h16m-7 6h7"
          />
        </svg>
      </div>
    </div>
  );
};
export default Header;
