import { useDispatch, useSelector } from "react-redux";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import MainFeed from "./components/Mainfeed";
import RightSideBar from "./components/RightSidebar";
import Login from "./components/Login";
import { login, logout, selectUser } from "./features/userSlice";
import { useEffect } from "react";
import {auth} from "../src/logic/firebase"
import { onAuthStateChanged } from "firebase/auth";

const App = () => {

  const user = useSelector(selectUser)
  const dispatch = useDispatch()

  useEffect(() => {
    onAuthStateChanged(auth, (user) =>{
      if(user){
        dispatch(login({
          email : user.email,
          uid : user.uid,
          displayName : user.displayName,
          photoUrl : user.photoURL
        }))
    
      }
      else {
        //user is not logged in or logged out

        dispatch(logout())
      }
    })
  }, [])

  



  return ( 

    <div className="font-Nunito">
   
      <Header />

      {!user ? <Login/> : 
          <div className="flex flex-col justify-evenly w-full mt-9 md:flex-row">

            
            <LeftSidebar/>

            
            <MainFeed/>

          
            <RightSideBar/>

          </div>
      }

    </div>
   );
}
 
export default App;