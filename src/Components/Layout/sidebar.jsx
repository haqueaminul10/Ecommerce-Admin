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
    // route: '/product',
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
  const [showListId, setShowListIs] = useState(null);

  const handleToggleList = (item) => {
    if (item.subRoutes) {
      if (showListId === item.id) {
        setShowListIs(null);
      } else {
        setShowListIs(item.id);
      }
    } else {
      navigate(item.route);
    }
  };

  return (
    <div>
      <div className='dashBoard'>
        <div onClick={() => navigate('/')} className='logo'>
          <div className='logoSize'>
            <LocalMallIcon fontSize='large' />
          </div>
          <div className='companyName'> EcoHuB</div>
        </div>
      </div>

      <div className='sideBarMenu'>
        {dashboardItem &&
          dashboardItem.length > 0 &&
          dashboardItem.map((item) => (
            <div
              key={item.id}
              className='itemsContainer'
              onClick={() => handleToggleList(item)}
            >
              <section className='itemsContainerSec1'>
                <div>{item.icon}</div>
                <div className='itemsLabel'>{item.label}</div>
                <div className='listArrowIcon'>
                  {item.subRoutes &&
                    (showListId === item.id ? (
                      <KeyboardControlKeyIcon />
                    ) : (
                      <KeyboardArrowDownIcon />
                    ))}
                </div>
              </section>

              <section
                className={`submenu ${showListId === item.id && 'open'}`}
              >
                {showListId === item.id &&
                  item.subRoutes.map((sub, index) => (
                    <div
                      key={index}
                      className='subItem'
                      onClick={() => navigate(sub.route)}
                    >
                      {sub.label}
                    </div>
                  ))}
              </section>
            </div>
          ))}
      </div>
    </div>
  );
};

export default SideBar;
