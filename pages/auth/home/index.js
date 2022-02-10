import { useRouter } from "next/router"
import { useContext, useEffect, useState } from "react"
import Presensi from '../../../component/home/Presensi'
import Slider from '../../../component/home/Slider'
import Layout from "../../../component/Layout"
import { HomeContext } from "../../../context/HomeContext"

const Home = () => {
    const home = useContext(HomeContext)
    console.log(home);
    const router = useRouter()
    const [selectedFilter, setSelectedFilter] = useState(0)
    const [modalDetail, setModalDetail] = useState(false)
    const [selectedPict, setSelectedPict] = useState('')

    useEffect(() => {
        var scroll =  document.getElementById('fade')
        var lost =  document.getElementById('lost')
        var head = document.getElementById('head')
        var logo = document.getElementById('logo')

        scroll.addEventListener('scroll', () => {
        var scrollTop = scroll.scrollTop;
        console.log(scrollTop);
        console.log('hh', lost.scrollHeight);
            if (scrollTop > 25) {
                lost.classList.remove('fadeIn')
                lost.classList.add('fadeOut')
                head.classList.add('fadeIn1')
                head.classList.add('justify-between')
                head.classList.remove('justify-end')
                logo.classList.remove('hidden')
                logo.classList.add('block')
            }
            else if (scrollTop <= 100) {
                lost.classList.remove('fadeOut')
                lost.classList.add('fadeIn')
                head.classList.add('fadeOut')
                head.classList.remove('justify-between')
                head.classList.add('justify-end')
                logo.classList.remove('block')
                logo.classList.add('hidden')
            }
        })

    },[])
    console.log(modalDetail);

    return (
        <div className="w-screen min-h-screen relative pb-14">
            <div className="w-screen h-screen bg-gray-200 fixed z-0">
                <div className="w-full h-52 bg-green-500" id="lost">

                </div>
            </div>
            <div className="w-full h-14 bg-green-500 absolute z-50 flex justify-end px-4 items-center" id="head">
                <div className="hidden" id="logo">Presensiku</div>
                <div className="h-2/3" onClick={() => {router.push('/auth/home/notification')}}>
                    <img src="/icon/notification.svg" className="h-full"/>
                </div>
            </div>
            {/* Content */}
            <div className="w-screen h-screen px-4 overflow-y-auto absolute top-0 left-0 pt-20 pb-16" id="fade">
                {/* Account */}
                <div className="w-full h-10 flex justify-between items-center text-white font-bold">
                    <p>PT Media Sarana Data</p>
                    <p>{new Date().toLocaleTimeString()}</p>
                </div>
                <div className="w-full h-20 bg-white rounded-lg drop-shadow-md flex mb-4">
                    <div className="w-20 h-full p-2">
                        <img src="/image/login.svg" className="w-full h-full bg-blue-100 rounded-3xl" onClick={() => {setSelectedPict('/image/login.svg'), setModalDetail(true)}}/>
                    </div>
                    <div className="w-auto h-full px-4 flex flex-col justify-center text-sm capitalize">
                        <p>Made</p>
                        <p>Aplication content</p>
                    </div>
                </div>
                {/* End of Account */}
                {/* Menu */}
                <div className="mb-4">
                    <Presensi/>
                </div>
                {/* End of Menu */}
                {/* Today Activity */}
                <div className="w-full h-12 mb-2">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-md">Presensi</p>
                        <p className="text-xs text-green-500">{new Date().toDateString()}</p>
                    </div>
                    <p className="text-xs text-gray-400">Aktivitasmu hari ini</p>
                </div>
                <div className="w-full h-40 bg-white rounded-lg drop-shadow-md flex mb-4">
                    <div className="w-2/3 h-full px-4 flex flex-col text-sm capitalize py-4">
                        <div className="flex items-center h-2/5 w-full">
                            <div className="w-12 h-12 bg-gray-100 rounded-lg flex justify-center items-center">
                                <img src="/image/login.svg" />
                            </div>
                            <p className="text-sm font-medium ml-4">Presensi Datang</p>
                        </div>
                        <div className="flex flex-col justify-around h-3/5 w-full">
                            <div className="text-xs">
                                Redwhite Coffee
                            </div>
                            <div className="text-xs flex w-full">
                                <div className="w-1/2 flex justify-between">
                                    <p>datang</p>
                                    <p>:</p>
                                </div>
                                <p className="ml-4">08:24</p>
                            </div>
                            <div className="text-xs flex w-full">
                                <div className="w-1/2 flex justify-between">
                                    <p>pulang</p>
                                    <p>:</p>
                                </div>
                                <p className="ml-4">-</p>
                            </div>
                        </div>
                    </div>
                    <div className="w-1/3 h-full flex justify-center items-center">
                        <div className="w-20 h-20 p-2" onClick={() => {setModalDetail(true), setSelectedPict('/image/login.svg')}}>
                            <img src="/image/login.svg" className="w-full h-full bg-blue-100 rounded-3xl" />
                        </div>
                    </div>
                </div>
                {/* End of Today Actvity */}
                {/* Monthly Activity */}
                <div className="w-full h-20 ">
                    <p className="font-bold text-md mb-2">Aktivitas Bulanan</p>
                    <div className="flex">
                        <div className={`text-xs border-1  p-2 ${selectedFilter == 0 ? 'border-green-500' :'border-gray-400'} bg-white rounded-full w-20 flex items-center justify-center mr-2`} onClick={() => {setSelectedFilter(0)}}>Lembur</div>
                        <div className={`text-xs border-1  p-2 ${selectedFilter == 1 ? 'border-green-500' :'border-gray-400'} bg-white rounded-full w-24 flex items-center justify-center`} onClick={() => {setSelectedFilter(1)}}>Izin dan Cuti</div>
                    </div>
                </div>
                <div className="w-full h-28">
                    <Slider selected={selectedFilter}/>
                </div>
                {/* End of Monthly Activity */}
                {/* Statistik */}
                <div className="w-full h-12 mb-2">
                    <div className="flex justify-between items-center">
                        <p className="font-bold text-md">Statistik</p>
                        <p className="text-xs text-green-500" onClick={() => {router.push('/auth/home/detail')}}>Lihat Detail</p>
                    </div>
                    <p className="text-xs font-extralight text-gray-500">Yuk, lihat statistik kegiatanmu</p>
                </div>
                <div className="w-full h-44 bg-white rounded-lg drop-shadow-md mb-4 p-4">
                    <div className="w-full h-2/3 divide-x-1 flex">
                        <div className="h-full w-1/2 divide-y-1 p-2">
                            <div className="h-1/2 w-full flex justify-between items-center px-4">
                                <p className="text-xs">Hadir</p>
                                <p className="text-xl">4</p>
                            </div>
                            <div className="h-1/2 w-full flex justify-between items-center px-4">
                                <p className="text-xs">Tidak Hadir</p>
                                <p className="text-xl">4</p>
                            </div>
                        </div>
                        <div className="h-full w-1/2 divide-y-1 p-2">
                            <div className="h-1/2 w-full flex justify-between items-center px-4">
                                <p className="text-xs">Terlambat</p>
                                <p className="text-xl">4</p>
                            </div>
                            <div className="h-1/2 w-full flex justify-between items-center px-4">
                                <p className="text-xs">Izin</p>
                                <p className="text-xl">4</p>
                            </div>
                        </div>
                    </div>
                    <div className="h-1/3 w-full flex flex-col justify-between p-2 mb-24">
                        <div className="w-full h-1 bg-green-400 rounded-full"></div>
                        <div className="text-xs flex w-full">
                            <div className="w-1/3 flex justify-between">
                                <p>Status</p>
                                <p>:</p>
                            </div>
                            <p className="ml-4">Kurang baik</p>
                        </div>
                    </div>
                </div>
                {/* End of Statistik */}
            </div>
            {/* End of Content */}
            {/* Modal Advanced */}
            {home.data.showModalHome &&
            <div>
                <div className="h-screen w-screen absolute top-0 left-0 z-50" onClick={() => {home.setShowModalHome(false)}}>
                </div>
                <div className="w-full h-5/6 bg-white rounded-t-3xl absolute bottom-0 border-t-1 z-50 p-4 text-xs" id="adv">
                    <div className="w-full h-4 flex justify-center items-center">
                        <div className="w-14 h-2 bg-gray-500 rounded-3xl bg-opacity-20 fixed" onClick={() => {home.setShowModalHome(false)}}></div>
                    </div>
                    <div className="h-full w-full overflow-y-auto">
                        <p className="text-lg font-bold">
                            Menu Utama
                        </p>
                        <div className="w-full my-4 grid grid-cols-4">
                            <div className=" flex flex-col items-center justify-center"  onClick={() => {router.push('/auth/home/camera'), home.setCamera("Presensi"), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-blue-100 rounded-full" />
                                </div>
                                <p>Presensi</p>
                            </div>
                            <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/camera'), home.setCamera("Mulai Lembur"), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-red-100 rounded-full" />
                                </div>
                                <p>Mulai Lembur</p>
                            </div>
                            <div className=" flex flex-col items-center justify-center"  onClick={() => {router.push('/auth/home/camera'), home.setCamera("Istirahat"), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-purple-100 rounded-full" />
                                </div>
                                <p>Istirahat</p>
                            </div>
                            <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/izin'), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2">
                                    <img src="/image/login.svg" className="w-full h-full bg-pink-100 rounded-full" />
                                </div>
                                <p>Izin dan Cuti</p>
                            </div>
                        </div>
                        <div className="w-full my-4 grid grid-cols-4">
                            <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/camera'), home.setCamera("Pulang"), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-green-100 rounded-full" />
                                </div>
                                <p>Pulang</p>
                            </div>
                            <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/camera'), home.setCamera("Selesai Lembur"), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-yellow-100 rounded-full" />
                                </div>
                                <p>Selesai Lembur</p>
                            </div>
                            <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/camera'), home.setCamera("Kembali Kerja"), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2">
                                    <img src="/image/login.svg" className="w-full h-full bg-cyan-100 rounded-full" />
                                </div>
                                <p>Kembali Kerja</p>
                            </div>
                            <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/lainnya'), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-blue-100 rounded-full" />
                                </div>
                                <p>Aktivitas Lain</p>
                            </div>
                        </div>
                        <div className="w-full my-4 grid grid-cols-4">
                            <div className=" flex flex-col items-center justify-center">
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-green-100 rounded-full" />
                                </div>
                                <p>Kendaraan Dinas</p>
                            </div>
                        </div>
                        <p className="text-lg font-bold">
                            Rekapitulasi
                        </p>
                        <div className="w-full my-4 grid grid-cols-4">
                            <div className=" flex flex-col items-center justify-center" onClick={() => {home.setRekap('Presensi'), router.push('/auth/home/rekapitulasi'), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-blue-100 rounded-full" />
                                </div>
                                <p>Presensi</p>
                            </div>
                            <div className=" flex flex-col items-center justify-center" onClick={() => {home.setRekap('Lembur'), router.push('/auth/home/rekapitulasi'), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-red-100 rounded-full" />
                                </div>
                                <p>Lembur</p>
                            </div>
                            <div className=" flex flex-col items-center justify-center" onClick={() => {home.setRekap('Aktivitas Lain'), router.push('/auth/home/rekapitulasi'), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-purple-100 rounded-full" />
                                </div>
                                <p>Aktivitas</p>
                            </div>
                            <div className=" flex flex-col items-center justify-center" onClick={() => {home.setRekap('Izin'), router.push('/auth/home/rekapitulasi'), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2">
                                    <img src="/image/login.svg" className="w-full h-full bg-pink-100 rounded-full" />
                                </div>
                                <p>Izin</p>
                            </div>
                        </div>
                        <div className="w-full my-4 grid grid-cols-4">
                            <div className=" flex flex-col items-center justify-center" onClick={() => {home.setRekap('Cuti'), router.push('/auth/home/rekapitulasi'), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-green-100 rounded-full" />
                                </div>
                                <p>Cuti</p>
                            </div>
                            <div className=" flex flex-col items-center justify-center" onClick={() => {home.setRekap('Semua'), router.push('/auth/home/rekapitulasi'), home.setShowModalHome(false)}}>
                                <div className="w-20 h-20 p-2 ">
                                    <img src="/image/login.svg" className="w-full h-full bg-yellow-100 rounded-full" />
                                </div>
                                <p>Semua</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            }
            {/* End of Modal Advanced */}
            {/* Modal Picture */}
            {modalDetail &&
                <div>
                    <div className="bg-gray-300 backdrop-blur-md bg-opacity-30 w-full h-full absolute z-50 left-0 top-0" onClick={() => {setModalDetail(false)}}>
                    </div>
                    <div className="absolute flex justify-center items-center h-full w-full top-0 left-0 px-4">
                        <div className="w-full h-56 bg-white z-50">
                            <img src={selectedPict} className="w-full h-full bg-white"/>
                        </div>
                    </div>
                </div>
            }
            {/* End of Modal Picture */}
        </div>
    )
}

export default Home
Home.layout = Layout