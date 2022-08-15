import {CommentBank, SendOutlined, ShareRounded, ThumbUp } from "@mui/icons-material";
import { Avatar } from "@mui/material";
import InputOption from "./InputOption";

const Posts = ({ name, description, message,  photoUrl}) => {
    return ( 

        <div className="font-Nunito bg-white mt-8 mb-8 rounded-md p-3">
           {/* Post header */}
           <div className="flex p-1 gap-4">
                <Avatar src =  {photoUrl}  /> 
                {/* Post info */}
                <div className="">
                    <h2 className="text-xl font-bold">
                        {name}
                    </h2>
                    <p className="text-gray-500 text-sm">  {description}</p>
                </div>
           </div>

           {/* Post body */}

           <div>
             <p className="break-normal" > {message} </p>
           </div>

            {/* Post buttons */}
            <div className="flex justify-evenly p-2">
                <InputOption title="like" Icon = {ThumbUp} color ="gray" />
                <InputOption title="comment" Icon = {CommentBank
                } color ="gray" />
                <InputOption title="share" Icon = {ShareRounded} color ="gray" />
                <InputOption title="send" Icon = {SendOutlined} color ="gray" />
            </div>
           
            
        </div>
     );
}
 
export default Posts;