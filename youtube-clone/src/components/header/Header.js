import React, { useState } from 'react'
import "./Header.css"
import MenuIcon from '@mui/icons-material/Menu';
import SearchIcon from '@mui/icons-material/Search';
import VideoCallIcon from '@mui/icons-material/VideoCall';
import AppsIcon from '@mui/icons-material/Apps';
import NotificationsIcon from '@mui/icons-material/Notifications';
import { Avatar } from "@material-ui/core";
import profilePic from './profilePic.jpg'
import { Link } from 'react-router-dom';

const Header = () => {
    const [inputSearch, setInputSearch] = useState("");

    return (
        <div className='header'>
            <div className='left'>
                <MenuIcon />
                <Link to='/'>
                    <img className='logo'
                        src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b8/YouTube_Logo_2017.svg/300px-YouTube_Logo_2017.svg.png"
                        alt=''
                    />
                </Link>
            </div>
            <div className='middle_input'>
                <input onChange={e => setInputSearch(e.target.value)} value={inputSearch} placeholder='Search' type="text" />
                <Link to={`/search/${inputSearch}`}>
                    <SearchIcon className='input_button' />
                </Link>
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
