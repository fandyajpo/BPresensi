//dikerjakan tanggal 10 februari 2022
//last update 10 februari
import Layout from "components/layout";

//STATE
import { useState, useEffect } from "react";

//USER_COMPONENTS
import UserProfile from "components/home/user_profile";
import UserCategory from "components/home/user_category";
import UserPresent from "components/home/user_present";
import UserActivity from "components/home/user_activity";
import UserStatistic from "components/home/user_statistic";

const Home = () => {
  const [scrolling, setScrolling] = useState(false);
  const NavbarAnimation = (event) => {
    if (window.scrollY > 70) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }
  };
  useEffect(() => {
    window.addEventListener("scroll", NavbarAnimation);
  }, []);
  return (
    <div className="w-full h-full bg-custom-sky">
      <div
        className={`fixed top-0 z-0 ${
          scrolling
            ? "bg-gradient-to-t from-custom-sky via-custom-blue to-custom-blue h-0"
            : "bg-gradient-to-b from-custom-blue via-custom-blue to-custom-sky h-64"
        } duration-1000 w-full min-h-fit outline-none`}
      />
      <div
        className={`pt-20 pb-32 w-full h-full bg-custom-sky duration-500 outline-none`}
      >
        <div className="px-4 space-y-4">
          <UserProfile />
          <UserCategory />
          <UserPresent />
          <UserActivity />
          <UserStatistic />
        </div>
      </div>
    </div>
  );
};

Home.layout = Layout;
export default Home;
