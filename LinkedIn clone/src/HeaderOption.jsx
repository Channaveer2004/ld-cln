import React from 'react'
import "./headerOption.css"
import { Avatar } from '@mui/material'

function HeaderOption({ avatar, Icon, title }) {
    return (
        <div className='headerOption'>
            {Icon && <Icon className="headerOption_icon" />}
            {avatar && (
                <Avatar className='headerOption_icon' src="https://media.licdn.com/dms/image/D5603AQFsj6GHfJWVGw/profile-displayphoto-shrink_800_800/0/1684075953254?e=1726704000&v=beta&t=voGmrkI41pbTD9Tt6O-TENyC61jmx0FOPBkX6NYgw1Q" />
            )}
            <h3 className='headerOption_title' >{title}</h3>
        </div>
    )
}

export default HeaderOption