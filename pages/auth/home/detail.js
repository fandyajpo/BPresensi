import { useRouter } from 'next/router'
import Header from '../../../component/Header'

const Detail = () => {
    const router = useRouter()
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
    ]

    return (
        <div className="min-h-screen w-screen ">
            <Header title="Januari 2022"/>
            <div className="w-full h-full pt-14 bg-white">
                {/* Last Actvity */}
                <div className="w-full h-full bg-gray-200 p-4">
                    <div className="w-full h-12">
                        <div className="flex justify-between items-center">
                            <p className="font-bold text-md">Aktivitas Terakhir</p>
                            <p className="text-xs text-green-500" onClick={() => {router.push('/auth/home/all')}}>Lihat Semua</p>
                        </div>
                    </div>
                    {data.map(item => (
                    <div className="w-full h-24 bg-white rounded-lg drop-shadow-md flex mb-1 items-center">
                        <div className="w-2/3 h-full flex items-center">
                            <div className="w-20 h-20 p-2 relative">
                                <div className="w-3 h-3 bg-green-500 absolute rounded-full right-3 top-3 border-1 border-white"></div>
                                <img src={item.img} className="w-full h-full bg-blue-100 rounded-full"/>
                            </div>
                            <div className="w-2/3 h-full px-4 flex flex-col justify-center capitalize text-xs">
                                <p className="font-bold">Presensi {item.type == '1' ? 'Datang' : item.type == '2' && 'Pulang'}</p>
                                <p>{item.time.toLocaleTimeString()}</p>
                                <p className="italic">Redwhite Coffee</p>
                            </div>
                        </div>
                        <div className="w-1/3 h-full text-green-500 p-4 text-xs flex justify-end">
                            <p>online</p>
                        </div>
                    </div>
                    ))}
                </div>
                {/* End of Last Activity */}
                {/* Chart Aktivitas */}
                <div className="w-full h-full bg-gray-200 p-4 mt-4">
                    <div className="w-full h-12">
                        <div className="">
                            <p className="font-bold text-md">Statistik Aktivitas</p>
                            <p className="text-xs text-gray-400">Jumlah per-aktivitas bulan ini.</p>
                        </div>
                    </div>
                    <div className="w-full h-72 bg-white rounded-lg drop-shadow-md flex mb-1 items-center">
                        
                    </div>
                </div>
                {/* End of Chart Aktivitas */}
                {/* Aktivitas Presensi */}
                <div className="w-full h-full bg-gray-200 p-4 mt-4">
                    <div className="w-full h-12">
                        <div className="">
                            <p className="font-bold text-md">Aktivitas Presensi</p>
                        </div>
                    </div>
                    <div className="w-full h-20 bg-white rounded-lg drop-shadow-md mb-1 grid grid-cols-3 p-4 divide-x-1">
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <p className="text-sm">Hari Kerja</p>
                            <p className='text-2xl font-medium'>3</p>
                        </div>
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <p className="text-sm">Hadir</p>
                            <p className='text-2xl font-medium'>3</p>
                        </div>
                        <div className='w-full h-full flex flex-col justify-center items-center'>
                            <p className="text-sm">Tidak Hadir</p>
                            <p className='text-2xl font-medium'>3</p>
                        </div>
                    </div>
                </div>
                {/* End of Aktivitas Presensi */}
                {/* Aktivtas Lembur */}
                <div className="w-full h-full bg-gray-200 p-4 mt-4">
                    <div className="w-full h-12">
                        <div className="">
                            <p className="font-bold text-md">Aktivitas Lembur</p>
                        </div>
                    </div>
                    <div className="w-full h-24 bg-white rounded-lg drop-shadow-md flex mb-1 items-center">
                        <div className="w-3/4 h-full flex items-center">
                            <div className="w-20 h-20 p-2 flex justify-center items-center">
                                <img src="/image/login.svg" className="w-2/3 h-2/3 bg-blue-100"/>
                            </div>
                            <div className="w-2/3 h-full px-4 flex flex-col justify-center capitalize text-xs">
                                <p className="font-medium">Lembur Jam Kerja </p>
                                <p className='text-gray-400'>Periode 1 - 26 Januari</p>
                            </div>
                        </div>
                        <div className="w-1/4 h-full font-bold p-4 text-2xl flex justify-center items-center">
                            <p>0</p>
                        </div>
                    </div>
                    <div className="w-full h-24 bg-white rounded-lg drop-shadow-md flex mb-1 items-center">
                        <div className="w-3/4 h-full flex items-center">
                            <div className="w-20 h-20 p-2 flex justify-center items-center">
                                <img src="/image/login.svg" className="w-2/3 h-2/3 bg-blue-100"/>
                            </div>
                            <div className="w-2/3 h-full px-4 flex flex-col justify-center capitalize text-xs">
                                <p className="font-medium">Lembur Hari Kerja </p>
                                <p className='text-gray-400'>Periode 1 - 26 Januari</p>
                            </div>
                        </div>
                        <div className="w-1/4 h-full font-bold p-4 text-2xl flex justify-center items-center">
                            <p>0</p>
                        </div>
                    </div>
                    <div className="w-full h-24 bg-white rounded-lg drop-shadow-md flex mb-1 items-center">
                        <div className="w-3/4 h-full flex items-center">
                            <div className="w-20 h-20 p-2 flex justify-center items-center">
                                <img src="/image/login.svg" className="w-2/3 h-2/3 bg-blue-100"/>
                            </div>
                            <div className="w-2/3 h-full px-4 flex flex-col justify-center capitalize text-xs">
                                <p className="font-medium">Lembur Hari Nasional </p>
                                <p className='text-gray-400'>Periode 1 - 26 Januari</p>
                            </div>
                        </div>
                        <div className="w-1/4 h-full font-bold p-4 text-2xl flex justify-center items-center">
                            <p>0</p>
                        </div>
                    </div>
                </div>
                {/* End of Aktivtas Lembur */}
            </div>
        </div>
    )
}

export default Detail