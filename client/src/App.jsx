import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";
import MainFeed from "./components/Mainfeed";
import RightSideBar from "./components/RightSidebar";

const App = () => {
  return ( 

    <div className="font-roboto">
   
      <Header />

      {/* App body */}
      <div className="flex justify-evenly gap-6 w-full mt-6">

        {/* Sidebar 1 */}
        <LeftSidebar/>

        {/* Feed middle section */}
        <MainFeed/>

        {/* Sidebar 2 */}
        <RightSideBar/>

      </div>

       

    </div>
   );
}
 
export default App;