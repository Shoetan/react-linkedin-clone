
import { Avatar } from '@mui/material';
import { useSelector } from 'react-redux';
import texture from '../assets/texture.jpg'
import { selectUser } from '../features/userSlice';

const LeftSidebar = () => {

const user = useSelector(selectUser)

    return (
      /* LeftSidebar container */
        <div className='w-2/12 h-full bg-white rounded-xl'>
         {/* Banner */} 
         
         <img src={texture} className="object-cover w-full h-20 rounded-t-lg"/> 
         
           <div className="flex flex-col gap-2" >

                    <div className="flex flex-col  items-center -mt-8">
                            {/* <img src={user.photoUrl} alt="" className=" h-24 rounded-full ring-2 ring-white "/> */}

                            <Avatar className='h-24 rounded-full ring-2 ring-white'>
                            </Avatar>
                            <h5 className='font-Nunito text-xl font-bold'>{user.displayName}</h5>
                            <h3 className="font-Nunito">{user.email}</h3>
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