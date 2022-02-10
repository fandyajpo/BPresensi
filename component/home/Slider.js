import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";


const Slider = ({selected = 0}) => {
    const slider = [
        [
            {
                name : 'Lembur Jam Kerja',
                description : 'Jumlah Lembur Jam Kerja',
                count : 2,
                img : '/image/login.svg'
            },
            {
                name : 'Lembur Hari Kerja',
                description : 'Jumlah Lembur Hari Kerja',
                count : 0,
                img : '/image/login.svg'
            },
            {
                name : 'Lembur Libur Nasional',
                description : 'Jumlah Lembur Libur Nasional',
                count : 1,
                img : '/image/login.svg'
            }
        ],
        [
            {
                name : 'Total Izin',
                description : 'Jumlah aktivitas izin anda',
                count : 0,
                img : '/image/login.svg'
            },
            {
                name : 'Total Cuti',
                description : 'Jumlah aktivitas cuti anda',
                count : 2,
                img : '/image/login.svg'
            },
        ],

    ]

    return (
            <Swiper 
            slidesPerView={1.4}
            className="w-full h-full">
                {slider[selected].map((item) => (
                    <SwiperSlide>
                        <div className="h-full p-2 ">
                            <div className="w-full h-full bg-white rounded-xl flex drop-shadow-md">
                                <div className="w-2/3 h-full p-4 flex flex-col justify-between">
                                    <div>
                                        <p className="text-xs font-medium">{item.name}</p>
                                        <p className="text-[10px] font-light">{item.description}</p>
                                    </div>
                                    <p className="text-2xl">{item.count}</p>

                                </div>
                                <div className="w-1/3 h-full flex justify-center items-center">
                                    <img src={item.img} className="w-12 h-12 bg-red-300 rounded-full"/>
                                </div>

                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
    )
}

export default Slider