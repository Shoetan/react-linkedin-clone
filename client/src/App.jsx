import Header from "./components/Header";
import LeftSidebar from "./components/LeftSidebar";

const App = () => {
  return ( 

    <div className="font-roboto">
   
      <Header />

      {/* App body */}
      <div>
        {/* Sidebar 1 */}
        <LeftSidebar/>
        {/* Feed */}
        {/* Sidebar 2 */}
      </div>
       

    </div>
   );
}
 
export default App;