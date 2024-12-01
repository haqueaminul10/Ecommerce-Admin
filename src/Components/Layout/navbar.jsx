import Profile from '../auth/profile';
import '../styles/layout.css';

const Navbar = () => {
  return (
    <div className='navbarContainer'>
      <div className='navbarMenu'>
        <div className='menuName'> Welcome</div>
        <div>
          <Profile />
        </div>
      </div>
    </div>
  );
};

export default Navbar;
