import Profile from '../auth/profile';
import '../styles/layout.css';
import NotificationsNoneIcon from '@mui/icons-material/NotificationsNone';
import DarkModeIcon from '@mui/icons-material/DarkMode';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='navbarMenu'>
        <div className='menuName'> Welcome</div>
        <div className='menuItems'>
          <div>
            <DarkModeIcon />
          </div>
          <div>
            <NotificationsNoneIcon />
          </div>
          <div>
            <Profile />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
