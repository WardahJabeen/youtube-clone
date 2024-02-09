import React from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@material-ui/core";
import profilePic from './profilePic.jpg'

const Header = () => {
    return (
        <div className='header'>
            <div className='left'>
                <MenuIcon />
                <img className='logo'
                    src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png"
                    alt=''
                />
            </div>
            <div className='middle_input'>
                <input placeholder='Search' type="text" />
                <SearchIcon className='input_button' />
            </div>
            <div className='right_logos'>
                <VideoCallIcon className='icon' />
                <AppsIcon className='icon' />
                <NotificationsIcon className='icon' />
                <Avatar
                    alt="Remy Sharp"
                    src={profilePic}
                />
            </div>

        </div>
    )
}

export default Header
