import { useRouter } from "next/router"
import { useContext } from "react"
import { HomeContext } from "../../context/HomeContext"

const Presensi = () => {
    const router = useRouter()
    const home = useContext(HomeContext)

    return (
        <div className="w-full h-64 bg-white rounded-lg drop-shadow-md p-4 text-xs">
            <div className="w-full h-1/2 grid grid-cols-4">
                <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/camera'), home.setCamera("Presensi")}}>
                    <div className="w-20 h-20 p-2 ">
                        <img src="/image/login.svg" className="w-full h-full bg-blue-100 rounded-full" />
                    </div>
                    <p>Presensi</p>
                </div>
                <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/camera'), home.setCamera("Mulai Lembur")}}>
                    <div className="w-20 h-20 p-2 ">
                        <img src="/image/login.svg" className="w-full h-full bg-red-100 rounded-full" />
                    </div>
                    <p>Mulai Lembur</p>
                </div>
                <div className=" flex flex-col items-center justify-center"  onClick={() => {router.push('/auth/home/camera'), home.setCamera("Istirahat")}}>
                    <div className="w-20 h-20 p-2 ">
                        <img src="/image/login.svg" className="w-full h-full bg-purple-100 rounded-full" />
                    </div>
                    <p>Istirahat</p>
                </div>
                <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/izin')}}>
                    <div className="w-20 h-20 p-2">
                        <img src="/image/login.svg" className="w-full h-full bg-pink-100 rounded-full" />
                    </div>
                    <p>Izin dan Cuti</p>
                </div>
            </div>
            <div className="w-full h-1/2 grid grid-cols-4">
                <div className=" flex flex-col items-center justify-center"  onClick={() => {router.push('/auth/home/camera'), home.setCamera("Pulang")}}>
                    <div className="w-20 h-20 p-2 ">
                        <img src="/image/login.svg" className="w-full h-full bg-green-100 rounded-full" />
                    </div>
                    <p>Pulang</p>
                </div>
                <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/camera'), home.setCamera("Selesai Lembur")}}>
                    <div className="w-20 h-20 p-2 ">
                        <img src="/image/login.svg" className="w-full h-full bg-yellow-100 rounded-full" />
                    </div>
                    <p>Selesai Lembur</p>
                </div>
                <div className=" flex flex-col items-center justify-center" onClick={() => {router.push('/auth/home/camera'), home.setCamera("Kembali Kerja")}}>
                    <div className="w-20 h-20 p-2">
                        <img src="/image/login.svg" className="w-full h-full bg-cyan-100 rounded-full" />
                    </div>
                    <p>Kembali Kerja</p>
                </div>
                <div className=" flex flex-col items-center justify-center" onClick={() => {home.setShowModalHome(true)}}>
                    <div className="w-20 h-20 p-2 ">
                        <img src="/image/login.svg" className="w-full h-full bg-blue-100 rounded-full" />
                    </div>
                    <p>Lainnya</p>
                </div>
            </div>
        </div>
    )
}

export default Presensi