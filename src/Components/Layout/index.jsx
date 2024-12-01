import Navbar from './navbar';
import SideBar from './sidebar';

const Layout = ({ children }) => {
  return (
    <>
      <Navbar />
      {/* <SideBar /> */}
      <div className='layoutContainer'>
        <SideBar />
        <div className='mainContent'>{children}</div>
      </div>
    </>
  );
};

export default Layout;
