import React from 'react'
import "./RecommendedVideos.css"
import VideoCard from './videoCard/VideoCard'

const RecommendedVideos = () => {
    return (
        <div className='recommendedVideos'>
            <h2>Recommended</h2>
            <div className='recommendedVideos__videos'>
                <VideoCard
                    image="https://i.ytimg.com/vi/nb0BG0ixuQA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmYIgOnRTGJtFc_cy43v988GSsmQ"
                    title="Mi 11 Ultra Review - Xiaomi just KILLED Samsung!?"
                    channel="Mrwhosetheboss"
                    views="5.7M views"
                    timestamp="1 week ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s88-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    image="https://i.ytimg.com/vi/vInUoPtg8m0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7xhJ8v9q8UanoSs6Px4x9ScN--w"
                    title="Colored iMacs? Let's Talk About Apple's 4/20 Event!"
                    channel="Marques Brownlee"
                    views="2.9M views"
                    timestamp="1 day ago"
                    channelImage="//yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s176-c-k-c0x00ffffff-no-rj-mo"
                />
                <VideoCard
                    views="6.8K views"
                    subs="1.3M"
                    description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... "
                    timestamp="1 month ago"
                    channel="Clever Programmer"
                    title="ChatGPT Store Will Make You RICH"
                    image="https://i.ytimg.com/vi/rng8oDz2Edw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDH3LKLX8UiWC4QIeoWa5YEjnBQQ"
                />
                <VideoCard
                    views="75K views"
                    subs="1.3M"
                    description="Join me as I build Gmail with REACT.JS! (with React-Router, REDUX & Firebase)"
                    timestamp="1 year ago"
                    channel="Sonn Sangha"
                    title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                    image="https://i.ytimg.com/vi/b7nrXjS6Dqs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSHEzGy2_JQha1VjcCChtBJ691RQ"
                />
                <VideoCard
                    views="10k views"
                    subs="1.3M"
                    description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... "
                    timestamp="1 month ago"
                    channel="Clever Programmer"
                    title="Reacting to END of Programming Talk by Dr. Matt Welsh"
                    image="https://i.ytimg.com/vi/eJwYRANi4L0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvaF_SB-BxKwgftkwjfm0XZ1hgkg"
                />
                <VideoCard
                    image="https://i.ytimg.com/vi/nb0BG0ixuQA/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBmYIgOnRTGJtFc_cy43v988GSsmQ"
                    title="Mi 11 Ultra Review - Xiaomi just KILLED Samsung!?"
                    channel="Mrwhosetheboss"
                    views="5.7M views"
                    timestamp="1 week ago"
                    channelImage="https://yt3.ggpht.com/ytc/AAUvwnjkCEa45O-45oyqizcbgxfZwbL6OeZ_CIZCPQsE6Q=s88-c-k-c0x00ffffff-no-rj"
                />
                <VideoCard
                    image="https://i.ytimg.com/vi/vInUoPtg8m0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLD7xhJ8v9q8UanoSs6Px4x9ScN--w"
                    title="Colored iMacs? Let's Talk About Apple's 4/20 Event!"
                    channel="Marques Brownlee"
                    views="2.9M views"
                    timestamp="1 day ago"
                    channelImage="//yt3.ggpht.com/ytc/AAUvwngW9TQgw7E7NqS3Qzd3Up3tjUzkpvMXPWAhYf3LaQ=s176-c-k-c0x00ffffff-no-rj-mo"
                />
                <VideoCard
                    views="6.8K views"
                    subs="1.3M"
                    description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... "
                    timestamp="1 month ago"
                    channel="Clever Programmer"
                    title="ChatGPT Store Will Make You RICH"
                    image="https://i.ytimg.com/vi/rng8oDz2Edw/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBDH3LKLX8UiWC4QIeoWa5YEjnBQQ"
                />
                <VideoCard
                    views="75K views"
                    subs="1.3M"
                    description="Join me as I build Gmail with REACT.JS! (with React-Router, REDUX & Firebase)"
                    timestamp="1 year ago"
                    channel="Sonn Sangha"
                    title="Python Tutorial for Beginners - Full Course in 11 Hours [2020]"
                    image="https://i.ytimg.com/vi/b7nrXjS6Dqs/hq720.jpg?sqp=-oaymwEcCNAFEJQDSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLCSHEzGy2_JQha1VjcCChtBJ691RQ"
                />
                <VideoCard
                    views="10k views"
                    subs="1.3M"
                    description="Join the 3-part epic masterclass that shows you how to become a 6-figure developer... "
                    timestamp="1 month ago"
                    channel="Clever Programmer"
                    title="Reacting to END of Programming Talk by Dr. Matt Welsh"
                    image="https://i.ytimg.com/vi/eJwYRANi4L0/hqdefault.jpg?sqp=-oaymwEcCNACELwBSFXyq4qpAw4IARUAAIhCGAFwAcABBg==&rs=AOn4CLBvaF_SB-BxKwgftkwjfm0XZ1hgkg"
                />
            </div>
        </div>
    )
}

export default RecommendedVideos 
