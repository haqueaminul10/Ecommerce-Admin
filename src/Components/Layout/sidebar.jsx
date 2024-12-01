import LocalMallIcon from '@mui/icons-material/LocalMall';
const SideBar = () => {
  return (
    <div>
      <div className='dashBoard'>
        <div className='logo'>
          <div className='logoSize'>
            <LocalMallIcon fontSize='large' />
          </div>
          <div className='companyName'> EcoHuB</div>
        </div>
      </div>
      <div className='sideBarMenu'>contain</div>
    </div>
  );
};

export default SideBar;
