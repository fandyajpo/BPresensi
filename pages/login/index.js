import bgLogin from "public/bg_login.webp";
import withSession from "lib/session";
import Image from "next/image";
import dynamic from "next/dynamic";
import { login } from "lib/Auth";
import { useRouter } from "next/router";
const FormLogin = dynamic(() => import("components/Auth/FormLogin"), {
  ssr: true,
});

const Index = (props) => {
  return (
    <>
      <div className='w-full h-screen absolute z-0 overflow-hidden'>
        <div className='flex w-full h-full bg-blue-700'>
          {/* <Image
              src={bgLogin}
              blurDataURL='data:image/jpeg;base64,/9j/2wBDAAYEBQYFBAYGBQYHBwYIChAKCgkJChQODwwQFxQYGBcUFhYaHSUfGhsjHBYWICwgIyYnKSopGR8tMC0oMCUoKSj/2wBDAQcHBwoIChMKChMoGhYaKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCgoKCj/wAARCAAIAAoDASIAAhEBAxEB/8QAFQABAQAAAAAAAAAAAAAAAAAAAAb/xAAhEAACAQMDBQAAAAAAAAAAAAABAgMABAUGIWEREiMxUf/EABUBAQEAAAAAAAAAAAAAAAAAAAMF/8QAGhEAAgIDAAAAAAAAAAAAAAAAAAECEgMRkf/aAAwDAQACEQMRAD8AltJagyeH0AthI5xdrLcNM91BF5pX2HaH9bcfaSXWGaRmknyJckliyjqTzSlT54b6bk+h0R//2Q=='
              alt='Alt'
              layout='fill'
              objectFit='cover'
              placeholder='blur'
            /> */}
        </div>
      </div>
      <div className='w-full h-full flex flex-nowrap absolute z-10'>
        <div className='w-auto h-auto xl:w-full xl:h-full'>
          <div className='w-full h-screen relative' />
        </div>
        <div className='w-full h-full xl:w-6/12 xl:h-full flex justify-center items-center px-6'>
          <div className='w-full h-auto backdrop-filter backdrop-blur-md rounded-lg overflow-hidden'>
            <div className='p-4'>
              <FormLogin isLogin={props} />
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export const getServerSideProps = withSession(async function ({ req, res }) {
  const user = req.session.get("user");
  return {
    props: {
      login: user ? true : false,
    },
  };
});

export default Index;
