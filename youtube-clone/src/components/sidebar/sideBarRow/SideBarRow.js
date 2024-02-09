import React from 'react'
import './SideBarRow.css'

const SideBarRow = ({ title, Icon, selected }) => {
    return (
        <div className={`sideBarRow ${selected && ' selected'}`} >
            <Icon className="icon" />
            <h2 className='title'>{title}</h2>

        </div >
    )
}

export default SideBarRow
