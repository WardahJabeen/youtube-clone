import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './channelRow/ChannelRow';
import VideoRow from './videoRow/VideoRow';
import pfp from './pfp.jpg'

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className='searchPage__filter'>
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image={pfp}
                channel="Clever Programmer"
                verified={true}
                subs={1249}
                noOfVideos={78}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
            />
            <hr />

            <VideoRow
                views="6.8K views"
                subs="1.3M"
                description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... "
                timestamp="1 month ago"
                channel="Clever Programmer"
                title="ChatGPT Store Will Make You RICH"
                image="https://i.ytimg.com/vi/rng8oDz2Edw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDH3LKLX8UiWC4QIeoWa5YEjnBQQ"
            />
            <VideoRow
                views="75K views"
                subs="1.3M"
                description="Join me as I build Gmail with REACT.JS! (with React-Router, REDUX & Firebase)"
                timestamp="1 year ago"
                channel="Sonn Sangha"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                image="https://i.ytimg.com/vi/b7nrXjS6Dqs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSHEzGy2_JQha1VjcCChtBJ691RQ"
            />
            <VideoRow
                views="10k views"
                subs="1.3M"
                description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... "
                timestamp="1 month ago"
                channel="Clever Programmer"
                title="Reacting to END of Programming Talk by Dr. Matt Welsh"
                image="https://i.ytimg.com/vi/eJwYRANi4L0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvaF_SB-BxKwgftkwjfm0XZ1hgkg"
            />
        </div>
    )
}

export default SearchPage
