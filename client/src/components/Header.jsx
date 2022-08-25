import SearchIcon from '@mui/icons-material/Search';
import Linkedin_icon from '../assets/Linkedin_icon.png'
import HeaderOption from './HeaderOption';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import man from '../assets/man.png'
const Header = () => {
    return (
        <div className='flex justify-evenly border-b-2 items-center sticky top-0 bg-white'>
        
            {/* Header left Icon and search bar */}
            <div className='flex -mt-4 '>
                <img src={Linkedin_icon} alt="" className='h-9 rounded-md mr-1' />
                {/* search icon and input field */}
                <div className='flex p-2 rounded-md bg-blue-50 items-center'>
                    <SearchIcon className='text-stone-600'/>
                    <input type="text" className='outline-none font-Nunito bg-transparent ' placeholder='search' />
                </div>
               
            </div>
            {/* Header right  */}
            <div className='flex gap-6 m-1'>
                <HeaderOption title='Home' Icon = {HomeIcon}/>
                <HeaderOption title='My network' Icon={SupervisorAccountIcon}/>
                <HeaderOption title= 'Jobs' Icon={BusinessCenterIcon}/>
                <HeaderOption title = 'Messaging' Icon={MailIcon}/>
                <HeaderOption title = 'Notifications' Icon={NotificationsIcon}/>
                <HeaderOption title ='me' avatar = {man}/>
            </div>
        </div>
      );
}
 
export default Header;
