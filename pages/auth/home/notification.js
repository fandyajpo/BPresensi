import { useRouter } from "next/router"
import { useState } from "react"

const Notification = () => {
    const router = useRouter()
    const [onSearch, setOnSearch] = useState(false)
    return (
        <div className="w-screen h-screen bg-gray-200">
            {onSearch ? 
                <div className="w-full h-14 bg-green-500 flex  p-2 z-40 fixed">
                    <input className="h-full w-full bg-white outline-none px-2" placeholder="Search"/>
                </div>
            : <div className="w-full h-14 bg-green-500 flex justify-between px-2 z-40 fixed">
                <div className="w-2/3 h-full flex items-center">
                    <div className="w-8" onClick={() => router.back()}>
                        <img src="/icon/left.svg"/>
                    </div>
                    <div className="w-full text-white">
                        Notifikasi
                    </div>
                </div>
                <div className="w-1/3 h-full flex justify-end items-center">
                    <img src="/icon/search.svg" onClick={() => {setOnSearch(true)}}/>
                </div>
            </div>
            }
            <div className="w-screen h-screen pt-16" onClick={() => {setOnSearch(false)}}>
                <div className="w-full h-auto border-b-1 border-gray-400 px-4 py-2">
                    <p className="font-semibold">Tidandk</p>
                    <p className="text-sm">Tidandk vhvnjdv ddshfv sdkvfvf </p>
                </div>
                <div className="w-full h-auto border-b-1 border-gray-400 px-4 py-2">
                    <p className="font-semibold">Tidandk</p>
                    <p className="text-sm">Tidandk vhvnjdv ddshfv sdkvfvf </p>
                </div>
                <div className="w-full h-auto border-b-1 border-gray-400 px-4 py-2">
                    <p className="font-semibold">Tidandk</p>
                    <p className="text-sm">Tidandk vhvnjdv ddshfv sdkvfvf </p>
                </div>
            </div>
        </div>
    )
}

export default Notification