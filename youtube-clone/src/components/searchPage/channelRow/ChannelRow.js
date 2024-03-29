import React from 'react'
import "./ChannelRow.css"
// import { Avatar } from "@material-ui/core";
import { Avatar } from "@mui/material";

import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ChannelRow = ({ image, channel, subs, noOfVideos, verified, description }) => {
    return (
        <div className='channelRow'>
            <Avatar
                className='channelRow__logo'
                alt={channel}
                src={image}
            />
            <div className='channelRow__text'>
                <h4>
                    {channel} {verified && <CheckCircleOutlineIcon />}
                </h4>
                <p>
                    {subs} subscribers · {noOfVideos} videos
                </p>
                <p>
                    {description}
                </p>
            </div>
        </div>
    )
}

export default ChannelRow
