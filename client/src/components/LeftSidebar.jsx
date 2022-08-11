import { Avatar } from "@mui/material";
import man from '../assets/man.png'
import texture from '../assets/texture.jpg'

const LeftSidebar = () => {
    return (
      /* LeftSidebar container */
        <div className='w-2/12 h-full bg-white rounded-xl'>
         {/* Banner */} 
         <img src={texture} className="object-cover w-full h-20 -mb-10 rounded-t-lg"/> 
           <div className="flex flex-col " >
                    <div className="">
                            <img src={man} alt="" className=" h-24"/>
                            <h3 className='font-roboto'>Emmanuel B Soetan</h3>
                            <h4 className="font-roboto"> emmanuel.soetan@gmail.com</h4>
                        </div>  
                        {/* Stats */}
                        <div className="">
                            <p>Who viewed you</p>
                            <p>4,000</p>
                            <p>views on post</p>
                            <p>2,500</p>
                        </div>
           </div>
        </div>
        
      );
}
 
export default LeftSidebar;