/* 
* HeaderOption is just a reusable component that takes in a set of props.
* This is exclusively for the header icons in the linkedin clone

*/
import { Avatar } from "@mui/material";

const HeaderOption = ({Icon, title, avatar}) => {
    return ( 
        <div className="flex items-center flex-col cursor-pointer text-gray-500 hover:text-stone-900">
            {Icon && <Icon />}

            {avatar && (
                <Avatar className='' src={avatar}/>
            )}
            <h3>{title}</h3>
        </div>
     );
}
 
export default HeaderOption;