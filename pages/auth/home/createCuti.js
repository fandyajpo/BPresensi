import Header from "../../../component/Header"
import Button from "../../../component/Button"
import { useState } from "react"

const CreateCuti = () => {
    const [type, setType] = useState()
    const [days, setDays] = useState(false)
    return (
        <div className="w-screen min-h-screen bg-gray-200 overflow-y-auto pb-24">
            <Header title="Pengajuan Cuti"/>
            <div className="w-full h-full pt-20 px-4 text-xs">
                <div className="w-full h-auto bg-white rounded-md p-4">
                    <p>Jenis Cuti</p>
                    <div className="px-4">
                        <div className="flex w-full h-8 items-center" onClick={() => {setType(1)}}>
                            <div className={`h-4 w-4 ${type == 1 ? 'bg-green-500' : 'border-1 border-green-500'} rounded-full`}></div>
                            <div className="h-4 w-full px-4">Tahunan</div>
                        </div>
                        <div className="flex w-full h-8 items-center" onClick={() => {setType(2)}}>
                            <div className={`h-4 w-4 ${type == 2 ? 'bg-green-500' : 'border-1 border-green-500'} rounded-full`}></div>
                            <div className="h-4 w-full px-4">Melahirkan</div>
                        </div>
                    </div>
                    <div className="py-2">
                        <div className="flex justify-between">
                            <div className="w-3/4">
                                <p>Tanggal</p>
                            </div>
                            <div className="w-1/5 flex justify-center">
                                <p className="text-[8px]">Lebih dari sehari?</p>
                            </div>
                        </div>
                        <div className="flex justify-between">
                            <div className="w-3/4">
                                <input type="date" className="w-full h-8 bg-white border-b-1 outline-none" />
                            </div>
                            <div className="w-1/5 flex justify-center items-center">
                                <label className="switch">
                                    <input type="checkbox" onClick={() => {setDays(!days)}}/>
                                    <span className="slider round"></span>
                                </label>
                            </div>
                        </div>
                    </div>
                    {days &&
                    <div className="py-2">
                        <div className="flex ">
                            <div className="w-3/4">
                                <p>Sampai Tanggal</p>
                            </div>
                        </div>
                        <div className="flex">
                            <div className="w-3/4">
                                <input type="date" className="w-full h-8 bg-white border-b-1 outline-none"/>
                            </div>
                        </div>
                    </div>
                    }
                    <div className="py-2">
                        <p>Alasan</p>
                        <textarea className="h-16 w-full border-b-1 outline-none" placeholder="...."/>
                    </div>
                    <div className="py-2">
                        <p>Ambil Gambar</p>
                        <div className="w-8 h-8 bg-blue-400">

                        </div>
                    </div>
                </div>
                
            </div>
            <div className="fixed bottom-4 w-full px-4">
                <Button title="Ajukan"/>
            </div>
        </div>
    )
}

export default CreateCuti