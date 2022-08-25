import linkedin from '../assets/linkedin.png'
import { useState } from 'react'



const Login = () => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [password, setPassword] = useState('')
    const [photoUrl, setPhotoUrl] = useState('')

    const register = () => {
        console.log("Hello register");
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                    <img src={linkedin} alt="Linkedin company banner" className="h-72" />
            </div>
            <div className="flex flex-col">
                    <input type="text" className="w-96 mb-2 p-3 outline-none border border-gray-200 rounded-md" placeholder="Enter full name...(required if registering)" onChange={(e) =>{setUserName(e.target.value)}} value ={userName}/>
                    <input type="text" className="w-96 mb-2 p-3 outline-none border border-gray-200 rounded-md" placeholder="profile pic URL..(optional)" />
                    <input type="email" className="w-96 mb-2 p-3 outline-none border border-gray-200 rounded-md" placeholder="Email..." />
                    <input type="password" className="w-96 mb-2 p-3 outline-none border border-gray-200 rounded-md" placeholder="password ..." />
                    <button className="bg-blue-700 text-white p-2 rounded-md mb-2 hover:bg-blue-600">Sign In</button>
                    <p className="text-center">Not a member? <span className="text-blue-700 cursor-pointer" onClick={register}>Register Now</span></p>
                    {userName}
            </div>
        </div>
     );
}
 
export default Login;  