import man from '../assets/man.png' 
import InputOption from '../components/InputOption';
import ImageIcon from '@mui/icons-material/Image';
import YouTubeIcon from '@mui/icons-material/YouTube';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';
import NotesIcon from '@mui/icons-material/Notes';
import Posts from './Post';
import { useEffect, useState } from 'react';
import { db } from '../logic/firebase'
import firebase from 'firebase/compat/app'
import {collection, addDoc, onSnapshot } from 'firebase/firestore'

const MainFeed = () => {

    /* state to track change in input */

    const [postInput, setPostInput] = useState('')

    /* State to keep posts */

    const [posts, setPosts] = useState([])

    

  
    
     /* Reference to the the database in cloud firestore and the collection name */
     const databaseReference = collection(db, "post")





     useEffect(()=>{

        onSnapshot(databaseReference,(snapshot) =>{


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
                name : "Emmanuel Soetan",
                message : postInput,
                description : "Software Dev",
                photoUrl: "",
                timestamp : ""
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
                <img src={man} alt="" className="h-16" />
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