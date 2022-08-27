import linkedin from '../assets/linkedin.png'
import { useState } from 'react'
import {auth} from '../logic/firebase'
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth'
import { useDispatch } from 'react-redux'
import { login } from '../features/userSlice'



const Login = () => {

    const [userName, setUserName] = useState('')
    const [userEmail, setUserEmail] = useState('')
    const [userPassword, setPassword] = useState('')
    const [userProfilePic, setUserProfilePic] = useState('')
    const dispatch = useDispatch()

    const signIn =() =>{
        
    }

    const register = async () => {
        /* once the user is created the updateProfile function from firebase will update the displayname and the photourl of the current created user */
       try {
            if (!userName) {
                alert('Please enter a full name')
            }
            let userCredentials = await(createUserWithEmailAndPassword(auth, userEmail,userPassword))

            await updateProfile( userCredentials.user, {
                displayName: userName,
                photoURL: userProfilePic
            })

            dispatch(login({
                email:userCredentials.user.email,
                uid : userCredentials.user.uid,
                displayName : userName,
                photoUrl : userProfilePic
            }))
       } catch (error) {
        console.log(error)
       }
    }
    return (
        <div className="flex flex-col justify-center items-center">
            <div>
                    <img src={linkedin} alt="Linkedin company banner" className="h-72" />  
            </div>
            <div className="flex flex-col">

                    <input type="text"
                     className="w-96 mb-2 p-3 outline-none border border-gray-200 rounded-md" 
                     placeholder="Enter full name...(required if registering)" onChange={(e) =>{setUserName(e.target.value)}}
                     value ={userName}/>

                    <input type="text"
                     className="w-96 mb-2 p-3 outline-none border border-gray-200 rounded-md" 
                     placeholder="Profile Pic...(optional)"
                     onChange={(e) =>{setUserProfilePic(e.target.value)}} 
                     value={userProfilePic}
                     />

                    <input type="email" 
                    className="w-96 mb-2 p-3 outline-none border border-gray-200 rounded-md" 
                    placeholder="Email..." 
                    onChange={(e) =>{setUserEmail(e.target.value)}} 
                    value ={userEmail} />

                    <input type="password"
                     className="w-96 mb-2 p-3 outline-none border border-gray-200 rounded-md" 
                     placeholder="password ..." 
                     onChange ={(e) =>{setPassword(e.target.value)}} 
                     value = {userPassword}   />

                    <button onClick = {signIn} className="bg-blue-700 text-white p-2 rounded-md mb-2 hover:bg-blue-600">Sign In</button>

                    <p className="text-center">Not a member? <span className="text-blue-700 cursor-pointer" onClick={register}>Register Now</span></p>
                    
            </div>
        </div>
     );
}
 
export default Login;  