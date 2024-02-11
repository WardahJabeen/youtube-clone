import React from 'react'
import "./VideoRow.css"

const VideoRow = ({ image, channel, title, views, subs, timestamp, description }) => {
    return (
        <div className='videoRow'>
            <img src={image} alt="" />
            <div className="text">
                <h3>{title}</h3>
                <p className="headeline">
                    {channel} ·{" "}
                    <span className="subs">
                        <span className="subsNumber">{subs}</span> Subscribers
                    </span>{" "}
                    {views} views · {timestamp}
                </p>
                <p className="description">
                    {description}
                </p>
            </div>
        </div>
    )
}

export default VideoRow
