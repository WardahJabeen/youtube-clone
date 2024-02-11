import React from 'react'
import "./ChannelRow"
import { Avatar } from "@material-ui/core";
import CheckCircleOutlineIcon from '@mui/icons-material/CheckCircleOutline';

const ChannelRow = ({ image, channel, subs, noOfVideos, verified, description }) => {
    return (
        <div className='channelRow'>
            <Avatar
                className='logo'
                alt={channel}
                src={image}
            />
            <div className='text'>
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
