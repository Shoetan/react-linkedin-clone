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
    onAuthStateChanged(auth, (userCredentials) =>{
      if(userCredentials){
        //user is logged in

        //console.log(userCredentials.email);

        dispatch(login({
          email : userCredentials.email,
          uid : userCredentials.uid,
          displayName : userCredentials.displayName,
          photoUrl : userCredentials.photoURL
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