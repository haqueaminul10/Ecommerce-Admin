import Navbar from './navbar';
import SideBar from './sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <div className='layoutContainer'>
        <div className='sidebarSection'>
          <SideBar />
        </div>
        <div className='navbarSection'>
          <Navbar />
          <div className='childrenItems'>{children}</div>
        </div>
      </div>
    </>
  );
};

export default Layout;
