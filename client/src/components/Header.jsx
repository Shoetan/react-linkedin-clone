import SearchIcon from '@mui/icons-material/Search';
import linkedin from '../assets/linkedin.svg'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';

const Header = () => {
    return (
        <div className='flex justify-evenly border-b-2 items-center w-full position-sticky'>
        
            {/* Header left Icon and search bar */}
            <div className='flex'>
                <img src={linkedin} alt="" className='h-10 mr-1' />
                {/* search icon and input field */}
                <div className='p-2 flex align-center rounded-md bg-gray-100'>
                    <SearchIcon />
                    <input type="text" className='outline-none font-roboto bg-transparent'/>
                </div>
               
            </div>
            {/* Header right  */}
            <div className='flex gap-6'>
                <HeaderOption title='Home' Icon = {HomeIcon}/>
                <HeaderOption title='My network' Icon={SupervisorAccountIcon}/>
                <HeaderOption title= 'Jobs' Icon={BusinessCenterIcon}/>
                <HeaderOption title = 'Messaging' Icon={MailIcon}/>
                <HeaderOption title = 'Notifications' Icon={NotificationsIcon}/>
            </div>
        </div>
      );
}
 
export default Header;
