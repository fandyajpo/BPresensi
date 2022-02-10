import { useRouter } from "next/router"
import { useState } from "react"

const Lainnya = () => {
    const [showMore, setShowMore] = useState(false)
    const router = useRouter()

    return (
        <div className="h-screen w-screen bg-gray-200">
            <div className="w-full h-14 bg-green-500 flex justify-between px-2 z-40 fixed">
                <div className="w-2/3 h-full flex items-center">
                    <div className="w-8" onClick={() => router.back()}>
                        <img src="/icon/left.svg"/>
                    </div>
                    <div className="w-full text-white">
                        Riwayat Aktivitas
                    </div>
                </div>
                <div className="w-1/3 h-full flex justify-end items-center">
                    <img src="/icon/search.svg"/>
                </div>
            </div>
            <div className="w-screen h-screen pt-14 relative">

                <div className={`w-screen h-screen absolute top-0 left-0 z-40 ${showMore ? 'bg-gray-600 bg-opacity-20 block' : 'hidden'}`} onClick={() => {setShowMore(!showMore)}}>
                       
                </div> 
                <div className={`absolute w-10 z-50 h-36 bottom-20 right-6 grid grid-rows-3 ${showMore ? 'block' : 'hidden'}`}>
                    <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                        <img src="/icon/plus_g.svg" className="w-full"/>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                        <img src="/icon/calendar_g.svg" className="w-2/3"/>
                    </div>
                    <div className="h-10 w-10 rounded-full bg-white flex justify-center items-center">
                        <img src="/icon/reload_g.svg" className="w-2/3"/>
                    </div>
                </div>
                <div className="absolute w-14 h-14 rounded-full z-50 bg-green-600 bottom-4 right-4 flex justify-center items-center" onClick={() => {setShowMore(!showMore)}}>
                    <img src={`${showMore ? '/icon/close.svg' : '/icon/option.svg'}`} className="w-1/2"/>
                </div>
            </div>

        </div>
    )
}

export default Lainnya