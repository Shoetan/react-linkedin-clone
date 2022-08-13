
import man from '../assets/man.png'
import texture from '../assets/texture.jpg'

const LeftSidebar = () => {
    return (
      /* LeftSidebar container */
        <div className='w-2/12 h-full bg-white rounded-xl'>
         {/* Banner */} 
        
         <img src={texture} className="object-cover w-full h-20 rounded-t-lg"/> 
         
           <div className="flex flex-col gap-2" >

                    <div className="flex flex-col  items-center -mt-8">
                            <img src={man} alt="" className=" h-24 rounded-full ring-2 ring-white "/>
                            <h4 className='font-Nunito
                            '>Emmanuel Soetan</h4>
                            <h4 className="font-Nunito"> emmanuel.soetan@gmail.com</h4>
                        </div> 


                        {/* Stats */}
                        <div className=" flex flex-col items-center">
                           <div className="flex gap-2">
                           <p>Who viewed you</p>
                            <p>4,000</p>
                           </div>
                           <div className="flex gap-2">
                           <p>views on post</p>
                            <p>2,500</p>
                           </div>
                        </div>
           </div>
        </div>
        
      );
}
 
export default LeftSidebar;