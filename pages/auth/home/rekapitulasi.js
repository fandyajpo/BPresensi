import { useContext, useState } from "react"
import Header from "../../../component/Header"
import Button from "../../../component/Button"
import { HomeContext } from "../../../context/HomeContext"

const Rekapitulasi = () => {
    const [type, setType] = useState()
    const home = useContext(HomeContext)

    return (
        <div className="w-screen h-screen bg-gray-200">
            <Header title={`Laporan ${home.data.rekap}`}/>
            <div className="w-screen h-screen px-4 pt-20 text-xs">
                <div className="w-full h-auto bg-white rounded-md p-4">
                    <div className="mb-4">
                        <p>Dari Tanggal</p>
                        <input type="date" className="w-full h-8 bg-white border-b-1 outline-none" />
                    </div>
                    <div className="mb-4">
                        <p>Sampai Tanggal</p>
                        <input type="date" className="w-full h-8 bg-white border-b-1 outline-none" />
                    </div>
                    <p>Jenis File</p>
                    <div className="flex w-full h-8 items-center">
                        <div className={`h-4 w-4 ${type == 1 ? 'bg-green-500' : 'border-1 border-green-500'} rounded-full`} onClick={() => {setType(1)}}></div>
                        <div className="h-4 w-full px-4"> Export Pdf</div>
                    </div>
                    <div className="flex w-full h-8 items-center">
                        <div className={`h-4 w-4 ${type == 2 ? 'bg-green-500' : 'border-1 border-green-500'} rounded-full`} onClick={() => {setType(2)}}></div>
                        <div className="h-4 w-full px-4"> Export Excel</div>
                    </div>
                    <div className="flex w-full h-8 items-center">
                        <div className={`h-4 w-4 ${type == 3 ? 'bg-green-500' : 'border-1 border-green-500'} rounded-full`} onClick={() => {setType(3)}}></div>
                        <div className="h-4 w-full px-4"> Lihat Langsung</div>
                    </div>
                </div>
            </div>
                <div className="fixed w-full h-auto bottom-0 p-4 text-xs">
                    <Button title="Terapkan"/>
                </div>
        </div>
    )
}

export default Rekapitulasi