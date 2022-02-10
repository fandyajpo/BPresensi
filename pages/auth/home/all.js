import { useState } from "react"
import Header from "../../../component/Header"

const AllDetails = () => {
    const [modalDetail, setModalDetail] = useState(false)
    const [filter, setFilter] = useState(false)
    const [selectedItem, setSelectedItem] = useState({})
    const [onSearch, setOnSearch] = useState(false)
    const [selectedFilter, setSelectedFilter] = useState(0)

    const data = [
        {
            type : '1',
            time : new Date('2022-01-14T08:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '2',
            time : new Date('2022-01-14T17:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '1',
            time : new Date('2022-01-14T08:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '2',
            time : new Date('2022-01-14T18:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '1',
            time : new Date('2022-01-14T08:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '2',
            time : new Date('2022-01-14T17:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '1',
            time : new Date('2022-01-14T08:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '2',
            time : new Date('2022-01-14T18:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '1',
            time : new Date('2022-01-14T08:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '2',
            time : new Date('2022-01-14T17:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '1',
            time : new Date('2022-01-14T08:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '2',
            time : new Date('2022-01-14T18:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '1',
            time : new Date('2022-01-14T08:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '2',
            time : new Date('2022-01-14T17:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '1',
            time : new Date('2022-01-14T08:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
        {
            type : '2',
            time : new Date('2022-01-14T18:15:00'),
            img : '/image/login.svg',
            status : '1',
        },
    ]

    return (
        <div className="h-screen w-screen bg-gray-100 relative">
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
                        Rekap Bulan Januari
                    </div>
                </div>
                <div className="w-1/3 h-full flex justify-end items-center">
                    <img src="/icon/reload.svg" onClick={() => {setFilter(true)}} className="mr-4"/>
                    <img src="/icon/search.svg" onClick={() => {setOnSearch(true)}}/>
                </div>
            </div>
            }
            <div className="w-full h-full pt-14 overflow-y-auto" onClick={() => setOnSearch(false)}>
                {data.map(item => (
                <div className="w-full h-18 px-4  bg-gray-100 flex items-center" onClick={() => {setModalDetail(true), setSelectedItem(item)}}>
                    <div className="w-full h-full flex items-center">
                        <div className="w-14 h-14 p-2">
                            <img src={item.img} className="w-full h-full bg-blue-100 rounded-full"/>
                        </div>
                        <div className="w-full h-full px-4 py-2 flex flex-col justify-center capitalize text-xs  border-b-1 ">
                            <p className="font-bold">Presensi {item.type == '1' ? 'Datang' : item.type == 2 && 'Pulang'}</p>
                            <p>{item.time.toDateString()} - {item.time.toLocaleTimeString()}</p>
                        </div>
                    </div>
                </div>
                ))}
            </div>
            {modalDetail &&
                <div>
                    <div className="bg-gray-300 backdrop-blur-sm w-full h-full absolute bg-opacity-50 z-40 left-0 top-0">
                    </div>
                    <div className="absolute flex justify-center items-center h-full w-full top-0 left-0 z-40">
                        <div className="w-3/4 h-64 bg-white rounded-3xl">
                            <div className="h-12 w-full bg-green-600 rounded-t-3xl flex justify-between items-center px-4">
                                <p className="text-white">Presensi {selectedItem.type == '1' ? 'Datang' : selectedItem.type == '2' && 'Pulang'}</p>
                                <p className="text-white text-2xl"  onClick={() => {setSelectedItem({}), setModalDetail(false)}}>x</p>
                            </div>                                                                                                                                                   
                            <div className="h-40 w-full flex">
                                <div className="w-1/3 h-full  flex justify-center items-center">
                                    <img src={selectedItem.img} className="w-20 h-20"/>
                                </div>
                                <div className="w-2/3 h-full py-10 px-4 text-xs">
                                    <div className="w-full h-1/3 grid grid-cols-2">
                                        <p className="font-semibold">Status</p>
                                        <p>{selectedItem.status == '1' && 'Hadir'}</p>
                                    </div>
                                    <div className="w-full h-1/3 grid grid-cols-2">
                                        <p className="font-semibold">Tanggal</p>
                                        <p>{selectedItem.time.toDateString()}</p>
                                    </div>
                                    <div className="w-full h-1/3 grid grid-cols-2">
                                        <p className="font-semibold">Waktu</p>
                                        <p>{selectedItem.time.toLocaleTimeString()}</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            }
            {filter &&
                <div>
                    <div className="bg-gray-300 backdrop-blur-sm w-full h-full absolute bg-opacity-50 z-40 left-0 top-0" onClick={() => {setFilter(false)}}>
                    </div>
                    <div className="absolute h-full w-full top-0 left-0">
                        <div className="w-full h-52 bg-white rounded-t-3xl absolute bottom-0 z-40 p-4">
                            <p>Filter berdasarkan</p>
                            <div className="w-full h-1/4 flex items-center px-4" onClick={() => setSelectedFilter(1)}>
                                <div className={`h-6 w-6 rounded-full ${selectedFilter == 1 ? 'bg-green-600' : 'border-1 border-green-600'}`}></div>
                                <p className="ml-6">Hadir</p>
                            </div>
                            <div className="w-full h-1/4 flex items-center px-4" onClick={() => setSelectedFilter(2)}>
                                <div className={`h-6 w-6 rounded-full ${selectedFilter == 2 ? 'bg-green-600' : 'border-1 border-green-600'}`}></div>
                                <p className="ml-6">Terlambat</p>
                            </div>
                            <div className="w-full h-1/4 flex items-center px-4" onClick={() => setSelectedFilter(3)}>
                            <div className={`h-6 w-6 rounded-full ${selectedFilter == 3 ? 'bg-green-600' : 'border-1 border-green-600'}`}></div>
                                <p className="ml-6">Izin</p>
                            </div>
                            
                        </div>
                    </div>
                </div>
            }
        </div>
    )
}

export default AllDetails