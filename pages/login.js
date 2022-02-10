import { useRouter } from "next/router"
import { useState } from "react"
import Button from "../component/Button"

const Login = () => {
    const router = useRouter()
    const [login, setLogin] = useState({
        email : '',
        pass : ''
    })
    return (
        <div className="w-screen h-screen p-4">
            <div className="w-full h-1/2">
                <div className="w-full h-1/3 bg-green-50">
                    Log in to presensiku
                </div>
                <div className="w-full h-2/3 flex justify-center items-center">
                    <div className="w-1/2 h-full">
                        <img src="/image/login.svg" className="w-full h-full"/>
                    </div>
                </div>
            </div>
            <div className="w-full h-1/2 py-4">
                <input type="text" className="w-full h-12 outline-none border-b-1 my-1" placeholder="Email or Username" onChange={(e) => {setLogin({...login, email: e.target.value})}}/>
                <input type="password" className="w-full h-12 outline-none border-b-1 my-1" placeholder="Password" onChange={(e) => {setLogin({...login, pass: e.target.value})}}/>
                <div className="text-xs w-full h-12 flex justify-end items-center underline my-2">
                    <p onClick={() => router.push('/forgotPassword')}>Lupa password?</p>
                </div>
                <div onClick={() => {router.push('/auth/home')}}>
                    <Button type="success" fill={true} disable={login.email == '' || login.pass == ''} title="Sign in"/>
                </div>
            </div>
            
        </div>
    )
}
export default Login