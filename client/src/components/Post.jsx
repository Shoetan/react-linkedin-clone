import { Avatar } from "@mui/material";

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
            
        </div>
     );
}
 
export default Posts;