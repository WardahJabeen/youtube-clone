import React from 'react'
import "./SearchPage.css"
import TuneIcon from '@mui/icons-material/Tune';
import ChannelRow from './channelRow/ChannelRow';
import VideoRow from './videoRow/VideoRow';

const SearchPage = () => {
    return (
        <div className='searchPage'>
            <div className='filter'>
                <TuneIcon />
                <h2>FILTER</h2>
            </div>
            <hr />
            <ChannelRow
                image="//yt3.ggpht.com/ytc/AAUvwniwccxGvXvGzzwka5f73aPbmdxvEX4G_cUd7TEzkw=s176-c-k-c0x00ffffff-no-rj-mo"
                channel="Clever Programmer"
                verified
                subs="660k"
                noOfVideos={382}
                description="You can find awesome programming lessons here! Also, expect programming tips and tricks that will take your coding skills to the ..."
            />
            <hr />

            <VideoRow
                views="2M views"
                subs="928K"
                description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... "
                timestamp="1 year ago"
                channel="Clever Programmer"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                image="https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaafw-b__ydDsmTRZgUB1sFb4i7A"
            />
            <VideoRow
                views="2M views"
                subs="928K"
                description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... "
                timestamp="1 year ago"
                channel="Clever Programmer"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                image="https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaafw-b__ydDsmTRZgUB1sFb4i7A"
            />
            <VideoRow
                views="2M views"
                subs="928K"
                description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... "
                timestamp="1 year ago"
                channel="Clever Programmer"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                image="https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaafw-b__ydDsmTRZgUB1sFb4i7A"
            />
            <VideoRow
                views="2M views"
                subs="928K"
                description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... "
                timestamp="1 year ago"
                channel="Clever Programmer"
                title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                image="https://i.ytimg.com/vi/4F2m91eKmts/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLDaafw-b__ydDsmTRZgUB1sFb4i7A"
            />
        </div>
    )
}

export default SearchPage
