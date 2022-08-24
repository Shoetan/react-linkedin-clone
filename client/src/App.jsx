import { useSelector } from "react-redux";
import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import MainFeed from "./components/Mainfeed";
import RightSideBar from "./components/RightSidebar";
import Login from "./components/Login";
import { selectUser } from "./features/userSlice";

const App = () => {

  const user = useSelector(selectUser)



  return ( 

    <div className="font-Nunito">
   
      <Header />

      {user ? <Login/> : 
          <div className="flex flex-col justify-evenly w-full mt-9 md:flex-row">

            
            <LeftSidebar/>

            
            <MainFeed/>

          
            <RightSideBar/>

          </div>
      }

      
     {/*  <div className="flex flex-col justify-evenly w-full mt-9 md:flex-row">

        
        <LeftSidebar/>

        
        <MainFeed/>

       
        <RightSideBar/>

      </div> */}

    </div>
   );
}
 
export default App;