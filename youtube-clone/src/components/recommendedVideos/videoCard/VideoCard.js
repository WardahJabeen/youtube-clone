import React from 'react'
import "./VideoCard.css"
import { Avatar } from "@material-ui/core";

const VideoCard = ({ title, views, channel, timestamp, image, channelImage }) => {
    return (
        <div className="video">
            <img src={image} alt="" className="thumbnail" />
            <div className="info">
                <Avatar
                    className="avatar"
                    src={channelImage} alt={channel}
                />
                <div className="text">
                    <h4>{title}</h4>
                    <p>{channel}</p>
                    <p>
                        {views} · {timestamp}
                    </p>
                </div>
            </div>
        </div>
    )
}

export default VideoCard
