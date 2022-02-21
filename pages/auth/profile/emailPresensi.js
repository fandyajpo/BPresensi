import { useRouter } from "next/router";
import Header from "components/header";
const EmailPresensi = () => {
  const router = useRouter();
  return (
    <>
      <Header
        leftAction={() => router.back()}
        leftTitle={"Email Dari Aplikasi"}
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
      <div className="pt-20 px-4 bg-custom-pewter h-screen w-full">
        <p className="text-s">
          Email yang dikirim Aplikasi tentang keamanan dan login untuk
          memastikan bahwa email yang terdaftar asli atau palsu Email anda
          @fanyasyfdsfn@gmai.cord
        </p>
      </div>
    </>
  );
};

export default EmailPresensi;
