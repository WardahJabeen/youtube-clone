import React from 'react'
import "./Sidebar.css"
import SideBarRow from './sideBarRow/SideBarRow'
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import OndemandVideoIcon from '@mui/icons-material/OndemandVideo';
import WatchLaterIcon from '@mui/icons-material/WatchLater';
import ThumbUpAltIcon from '@mui/icons-material/ThumbUpAlt';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

const Sidebar = () => {
    return (
        <div className='sidebar'>
            <SideBarRow selected Icon={HomeIcon} title="Home" />
            <SideBarRow Icon={WhatshotIcon} title="Trending" />
            <SideBarRow Icon={SubscriptionsIcon} title="Subscription" />
            <hr />
            <SideBarRow Icon={VideoLibraryIcon} title="Library" />
            <SideBarRow Icon={HistoryIcon} title="History" />
            <SideBarRow Icon={OndemandVideoIcon} title="Your videos" />
            <SideBarRow Icon={WatchLaterIcon} title="Watch Later" />
            <SideBarRow Icon={ThumbUpAltIcon} title="Liked videos" />
            <SideBarRow Icon={ExpandMoreIcon} title="Show more" />
            <hr />
        </div>
    )
}

export default Sidebar
