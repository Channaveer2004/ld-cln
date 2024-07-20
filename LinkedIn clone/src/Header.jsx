import React from 'react'
import './header.css'
import SearchIcon from '@mui/icons-material/Search';
import HomeIcon from '@mui/icons-material/Home';
import SupervisorAccountIcon from '@mui/icons-material/SupervisorAccount';
import BusinessCenterIcon from '@mui/icons-material/BusinessCenter';
import ChatIcon from '@mui/icons-material/Chat';
import NotificationsIcon from '@mui/icons-material/Notifications';
import HeaderOption from './HeaderOption';


function Header() {
  return (
    <div className="header">

      <div className="header_left">
        <img src="https://itcnet.gr/wp-content/uploads/2020/09/Linkedin-logo-on-transparent-Background-PNG--1200x1200.png" alt="" />
        <div className="header_search">
          <SearchIcon />
          <input type="text" />
        </div>
      </div>


      <div className="header_right">
        <HeaderOption Icon={HomeIcon} title="Home" />
        <HeaderOption Icon={SupervisorAccountIcon} title="My Network" />
        <HeaderOption Icon={BusinessCenterIcon} title="Jobs" />
        <HeaderOption Icon={ChatIcon} title="Messaging" />
        <HeaderOption Icon={NotificationsIcon} title="Notification" />
        <HeaderOption avatar="https://media.licdn.com/dms/image/D5603AQFsj6GHfJWVGw/profile-displayphoto-shrink_800_800/0/1684075953254?e=1726704000&v=beta&t=voGmrkI41pbTD9Tt6O-TENyC61jmx0FOPBkX6NYgw1Q"/>
      </div>
    </div>
  )
}

export default Header