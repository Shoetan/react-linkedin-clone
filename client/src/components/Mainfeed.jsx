
import InputOption from '../components/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotesIcon from '@mui/icons-material/Notes';
import Posts from './Post';
import { useEffect, useState } from 'react';
import { db } from '../logic/firebase'
import {collection, addDoc, onSnapshot,serverTimestamp,query, orderBy } from 'firebase/firestore'
import { useSelector } from 'react-redux';
import { selectUser } from '../features/userSlice';
import { Avatar } from '@mui/material';

const MainFeed = () => {


    /* Import user from redux */

    const user = useSelector(selectUser)

    /* state to track change in input */

    const [postInput, setPostInput] = useState('')

    /* State to keep posts */

    const [posts, setPosts] = useState([])

    

  
    
     /* Reference to the the database in cloud firestore and the collection name */
     const databaseReference = collection(db, "post")

     useEffect(()=>{

        const q = query(databaseReference, orderBy("timestamp","desc"))

        onSnapshot(q,(snapshot) =>{

                let data  = snapshot.docs.map( (doc) => 


                /* Returns and object in this manner 
                            {
                                id: "",
                                data:{}
                            } 
                */
                {
                    return{

                        id:doc.id, data : doc.data()
                    }
                }
                
                ) 

                setPosts(data)
           
        })   
        
     }
     ,[])


    const sendPost = (event) => {


        /* if the enter key is pressed on the keyboard run the below function */
        if(event.key === 'Enter'){
             
            /* Data to be sent to the database on cloud firestore using and object */
            const data = {
                name : user.displayName,
                message : postInput,
                description : user.email,
                photoUrl: user.photoUrl,
                timestamp :serverTimestamp()
            }
            /* firebase function to add data to the cloud firestore */
            addDoc  (databaseReference,data)
            .then(() =>{
                console.log("Successfully added")
            })
            .catch((err) =>{ console.log(err.message) })
           
              setPostInput('')
        }
    }

 

    return ( 
        <div className=" w-5/12 h-full">  

        {/* Input section */}      
         <div className=' bg-white rounded-lg p-2 border border-gray-200'>

            <div className="flex">
                <Avatar className="h-16"></Avatar>
                <input type="text" className='w-full rounded-full font-roboto border-2 m-2 p-3 outline-none' placeholder='start a post'
                    onChange={ (e) => {setPostInput(e.target.value)}}
                    onKeyDown={sendPost}
                    value={postInput}
                />
            </div>

            <div className="flex justify-evenly"  >
                <InputOption title="photo" Icon={ImageIcon} color ="blue"/>
                <InputOption title="video" Icon={YouTubeIcon} color ="green"/>
                <InputOption title="Audio event" Icon={CalendarMonthIcon} color ="red"/>
                <InputOption title="Write article" Icon={NotesIcon} color ="brown"/>
            </div>

        </div>


        {/* Post body section */}

        {  posts.map(({id, data:{name, description,message,photoUrl,timestamp}}) =>{

            return <Posts 
                key={id}
                name={name}
                description={description}
                timestamp={timestamp}
                photoUrl={photoUrl}
                message={message}
            />

        }) }

  
        </div>
     );
}
 
export default MainFeed;