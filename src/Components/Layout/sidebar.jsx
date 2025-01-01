import LocalMallIcon from '@mui/icons-material/LocalMall';
import DashboardIcon from '@mui/icons-material/Dashboard';
import ShoppingBagIcon from '@mui/icons-material/ShoppingBag';
import GroupIcon from '@mui/icons-material/Group';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardControlKeyIcon from '@mui/icons-material/KeyboardControlKey';
import { useNavigate } from 'react-router-dom';
import '../styles/sidebar.css';
import { useState } from 'react';

const dashboardItem = [
  {
    id: 1,
    label: 'Dashboard',
    icon: <DashboardIcon fontSize='small' />,
    route: '/',
  },
  {
    id: 2,
    label: 'Products',
    icon: <ShoppingBagIcon fontSize='small' />,

    subRoutes: [
      { label: 'List', route: '/product/list' },
      { label: 'Add Product', route: '/products/add' },
    ],
  },
  {
    id: 3,
    label: 'Users',
    icon: <GroupIcon fontSize='small' />,
    route: '/user',
  },
];
const SideBar = () => {
  const navigate = useNavigate();
  const [showDropdown, setShowDropdown] = useState(null);
  const handleToggleDropdown = (item) => {
    if (item.subRoutes) {
      setShowDropdown(showDropdown === item.id ? null : item.id);
    } else {
      setShowDropdown(null);
      navigate(item.route);
    }
  };

  return (
    <>
      <div className='sidebarContainer'>
        <div className='logo'>
          <div>
            <LocalMallIcon fontSize='large' />
          </div>
          <h1>EcoHuB</h1>
        </div>

        <div className='sidebarItemsContainer'>
          {dashboardItem &&
            dashboardItem.length > 0 &&
            dashboardItem.map((item) => (
              <div key={item.id}>
                <div
                  onClick={() => handleToggleDropdown(item)}
                  className='sidebarItem'
                >
                  <div>{item.icon}</div>
                  <p
                    // className={`sidebarItemlabel  ${
                    //   showDropdown === item.id ? 'active' : ''
                    // }`}
                    className='sidebarItemlabel'
                  >
                    {item.label}
                  </p>
                  <div className='sidebarUpDownIcon'>
                    {item.subRoutes &&
                      (showDropdown ? (
                        <KeyboardControlKeyIcon />
                      ) : (
                        <KeyboardArrowDownIcon />
                      ))}
                  </div>
                </div>
                <div className='subRouteContainer'>
                  {showDropdown === item.id &&
                    item.subRoutes &&
                    item.subRoutes.length > 0 &&
                    item.subRoutes.map((subItem, index) => (
                      <div
                        key={index}
                        onClick={() => navigate(subItem.route)}
                        className='subRouteItems'
                      >
                        {subItem.label}
                      </div>
                    ))}
                </div>
              </div>
            ))}
        </div>
      </div>
    </>
  );
};

export default SideBar;
