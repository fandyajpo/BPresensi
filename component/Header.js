import { useRouter } from "next/router"

const Header = ({title = ''}) => {
    const router = useRouter()
    return (
        <div className="w-full h-14 bg-green-500 flex items-center px-2 z-40 fixed">
            <div className="w-8" onClick={() => router.back()}>
                <img src="/icon/left.svg"/>
            </div>
            <div className="w-full text-white">
                {title}
            </div>
        </div>
    )
}

export default Header