import Header from "../../../component/Header"
import Button from "../../../component/Button"
import { useState } from "react"

const CreateIzin = () => {
    const [type, setType] = useState()
    const [days, setDays] = useState(false)
    return (
        <div className="w-screen min-h-screen bg-gray-200 overflow-y-auto pb-24">
            <Header title="Pengajuan Izin"/>
            <div className="w-full h-full pt-20 px-4 text-xs">
                <div className="w-full h-auto bg-white rounded-md p-4">
                    <p>Mengajukan izin untuk</p>
                    <div className="px-4">
                        <div className="flex w-full h-8 items-center" onClick={() => {setType(1)}}>
                            <div className={`h-4 w-4 ${type == 1 ? 'bg-green-500' : 'border-1 border-green-500'} rounded-full`}></div>
                            <div className="h-4 w-full px-4"> Tidak masuk bekerja</div>
                        </div>
                        <div className="flex w-full h-8 items-center" onClick={() => {setType(2)}}>
                            <div className={`h-4 w-4 ${type == 2 ? 'bg-green-500' : 'border-1 border-green-500'} rounded-full`}></div>
                            <div className="h-4 w-full px-4"> Terlambat masuk bekerja</div>
                        </div>
                        <div className="flex w-full h-8 items-center" onClick={() => {setType(3)}}>
                            <div className={`h-4 w-4 ${type == 3 ? 'bg-green-500' : 'border-1 border-green-500'} rounded-full`}></div>
                            <div className="h-4 w-full px-4"> Pulang Awal</div>
                        </div>
                        <div className="flex w-full h-8 items-center" onClick={() => {setType(4)}}>
                            <div className={`h-4 w-4 ${type == 4 ? 'bg-green-500' : 'border-1 border-green-500'} rounded-full`}></div>
                            <div className="h-4 w-full px-4"> Meninggalkan jam kerja</div>
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
                                    <input type="checkbox" onChange={() => {setDays(!days)}}/>
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

export default CreateIzin