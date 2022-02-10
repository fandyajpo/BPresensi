import { Swiper, SwiperSlide } from "swiper/react"
import Header from "../../../component/Header"
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import SwiperCore, { Autoplay, Pagination, Scrollbar } from 'swiper';
import { useRouter } from "next/router";

const Izin = () => {
    SwiperCore.use([Scrollbar, Autoplay, Pagination]);
    const router = useRouter()
    const names = ['Izin', 'Cuti' ]
    const pagination = {
        "el": '.swiper-pagination',
        "type": 'bullets',
        "clickable": true,
          "renderBullet": function (index, className) {
            const halo = ['Izin', 'Cuti' ]
            return '<span class=\"' + className + '\">' + halo[index] + '</span>';
          }
    }

    return (
        <div className="h-screen w-screen bg-gray-200">
            <Header title="Izin dan Cuti"/>
            <div className="w-screen h-screen pt-14 ">
                <div className="swiper-pagination swiper-paginate flex items-end fixed top-14 w-screen h-12 bg-green-500 z-30">

                </div>
                <Swiper
                slidesPerView={1}
                pagination={pagination}
                className="w-full h-full pb-14">
                    <SwiperSlide>
                    <div className="w-full h-full relative px-4 pt-16">
                        <div className="w-full h-32 bg-white rounded-lg drop-shadow-md mb-4 p-2">
                            <div className="w-full h-1/6 px-2">
                                <p className="font-bold text-md">Keterangan Izin</p>
                            </div>
                            <div className="w-full h-5/6 divide-x-1 flex py-4 ">
                                <div className="h-full w-1/2 divide-y-1 p-1">
                                    <div className="h-1/2 w-full flex justify-between items-center px-4">
                                        <p className="text-xs">Tidak Masuk</p>
                                        <p className="text-xl">4</p>
                                    </div>
                                    <div className="h-1/2 w-full flex justify-between items-center px-4">
                                        <p className="text-xs">Terlambat</p>
                                        <p className="text-xl">4</p>
                                    </div>
                                </div>
                                <div className="h-full w-1/2 divide-y-1 p-1">
                                    <div className="h-1/2 w-full flex justify-between items-center px-4">
                                        <p className="text-xs">Pulang Awal</p>
                                        <p className="text-xl">4</p>
                                    </div>
                                    <div className="h-1/2 w-full flex justify-between items-center px-4">
                                        <p className="text-xs">Meninggalkan Kerja</p>
                                        <p className="text-xl">4</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-full h-96 bg-red-50 overflow-y-auto p-4">

                        <div className="w-full h-full bg-red-500 ">
                            <div className="w-full h-12 text-sm">
                                <p>Riwayat Izin</p>
                            </div>
                        </div>
                        </div>
                        <div className="absolute w-14 h-14 rounded-full bg-green-600 text-white bottom-4 right-4 flex justify-center items-center" onClick={() => {router.push('/auth/home/createIzin')}}>
                            <img src="/icon/plus.svg" className="w-2/3"/>
                        </div>
                    </div>
                    </SwiperSlide>
                    <SwiperSlide>
                    <div className="w-full h-full relative px-4 pt-16">
                        <Swiper
                        slidesPerView={1}
                        spaceBetween={30}
                        loop={true}
                        autoplay={{
                            "delay": 2500,
                          }}
                        className="w-full h-36">
                            <SwiperSlide className="w-full h-full px-2">
                                <div className="w-full h-32 bg-white rounded-lg drop-shadow-md mb-4 p-2">
                                    <div className="w-full h-1/6 px-2">
                                        <p className="font-bold text-md">Tahunan</p>
                                    </div>
                                    <div className="w-full h-5/6 divide-x-1 grid grid-cols-3 py-4">
                                        <div className=" flex flex-col items-center justify-center">
                                            <p className="text-xs">Kuota</p>
                                            <p className="text-xl">0</p>
                                        </div>
                                        <div className=" flex flex-col items-center justify-center">
                                            <p className="text-xs">Sisa</p>
                                            <p className="text-xl">0</p>
                                        </div>
                                        <div className=" flex flex-col items-center justify-center">
                                            <p className="text-xs">Pemakaian</p>
                                            <p className="text-xl">0</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                            <SwiperSlide className="w-full h-full">
                                <div className="w-full h-32 bg-white rounded-lg drop-shadow-md mb-4 p-2">
                                    <div className="w-full h-1/6 px-2">
                                        <p className="font-bold text-md">Melahirkan</p>
                                    </div>
                                    <div className="w-full h-5/6 divide-x-1 grid grid-cols-3 py-4">
                                        <div className=" flex flex-col items-center justify-center">
                                            <p className="text-xs">Kuota</p>
                                            <p className="text-xl">0</p>
                                        </div>
                                        <div className=" flex flex-col items-center justify-center">
                                            <p className="text-xs">Sisa</p>
                                            <p className="text-xl">0</p>
                                        </div>
                                        <div className=" flex flex-col items-center justify-center">
                                            <p className="text-xs">Pemakaian</p>
                                            <p className="text-xl">0</p>
                                        </div>
                                    </div>
                                </div>
                            </SwiperSlide>
                        </Swiper>
                        <div className="w-full h-96 bg-red-50 overflow-y-auto p-4">
                            <div className="w-full h-full bg-red-500">

                            </div>
                        </div>
                        <div className="absolute w-14 h-14 rounded-full bg-green-600 text-white bottom-4 right-4 flex justify-center items-center" onClick={() => {router.push('/auth/home/createCuti')}}>
                            <img src="/icon/plus.svg" className="w-2/3"/>
                        </div>
                    </div>
                    </SwiperSlide>
                </Swiper>
            </div>
        </div>
    )
}

export default Izin