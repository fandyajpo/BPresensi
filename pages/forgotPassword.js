import { useState } from "react"
import Button from "../component/Button"
import Header from "../component/Header"

const ForgotPassword = () => {
    const [pass, setPass] = useState('')
    return (
        <div className="w-screen h-screen">
            <div className="w-full h-2/5">
            <Header title="Forgot Password"/>
            <div className="w-full h-full flex justify-center items-end pb-12">
                <div className="w-full h-1/2">
                    <img src="/image/login.svg" className="w-full h-full"/>
                </div>
            </div>
            </div>
            <div className="w-full h-3/5 px-4">
                <input type="text" className="w-full h-12 outline-none border-b-1 my-2 mb-10" placeholder="Password" onChange={(e) => {setPass(e.target.value)}}/>
                <div>
                    <Button type="success" disable={pass == ''} title="Submit"/>
                </div>
            </div>
        </div>
    )
}

export default ForgotPassword