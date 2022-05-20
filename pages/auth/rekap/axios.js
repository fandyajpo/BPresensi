import axios from "axios";
import useSWR from "swr";
import { useState } from "react";
import UserProfile from "components/home/user_profile";
export default function App() {
  const [shouldFetch, setShouldFetch] = useState(true);

  const [profile, setProfile] = useState({
    url: "userdetail",
  });
  const { url } = profile;

  const [err, setErr] = useState("");
  const { data, error } = useSWR(shouldFetch ? ["/api/closed", profile] : null);

  if (!data) return <div>anjjir</div>;
  const { fullname } = data;
  console.log("USER PROFILE", data);

  // const url = "http://127.0.0.1:9039/userdetail";
  // axios
  //   .post(url, {
  //     method: "POST",
  //     headers: {
  //       Accept: "application/json, text/plain, */*",
  //       "Content-Type": "application/json",
  //     },
  //   })
  //   .then(function (response) {
  //     console.log(response);
  //   })
  //   .catch(function (error) {
  //     console.log(error);
  //   });

  return (
    <div className='App h-[940329432px]'>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <UserProfile />
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>TEST</h1>
      <h1>{fullname}</h1>
      <button>sajkbgk</button>
    </div>
  );
}
