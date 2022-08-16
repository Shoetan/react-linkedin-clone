import man from '../assets/man.png' 
import InputOption from '../components/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotesIcon from '@mui/icons-material/Notes';
import Posts from './Post';
import { useState } from 'react';

const MainFeed = () => {

    const [posts, setPosts] = useState([])

    const sendPost = (event) => {
        if(event.key === 'Enter'){
            console.log(posts);
            setPosts('')
        }
    }

 



    return ( 
        <div className=" w-5/12 h-full">  
        {/* Input section */}      
         <div className=' bg-white rounded-lg p-2 border border-gray-200'>

            <div className="flex">
                <img src={man} alt="" className="h-16" />
                <input type="text" className='w-full rounded-full font-roboto border-2 m-2 p-3 outline-none' placeholder='start a post'
                    onChange={ (e) => {setPosts(e.target.value)}}
                    onKeyDown={sendPost}
                    value={posts}
                />
            </div>
            <div className="flex justify-evenly"  >
                <InputOption title="photo" Icon={ImageIcon} color ="blue"/>
                <InputOption title="video" Icon={YouTubeIcon} color ="green"/>
                <InputOption title="Audio event" Icon={CalendarMonthIcon} color ="red"/>
                <InputOption title="Write article" Icon={NotesIcon} color ="brown"/>
            </div>
        
        </div>
               {/*  {posts.map((post)=>{
                    <Posts/>
                })} */}
                <Posts name= "Emmanuel Soetan" description="Software Dev..."  photoUrl = {man} message = "Testing..." />
     
        
            
        </div>
     );
}
 
export default MainFeed;