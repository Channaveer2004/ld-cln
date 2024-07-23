import React from 'react'
import "./sidebar.css"
import { Avatar } from '@mui/material'
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

function Sidebar() {

    const user = useSelector(selectUser);

    const recentItem = (topic) => {
        return (
            <div className="sidebar_recentItem">
                <span className="sidebar_hash">#</span>
                <p>{topic}</p>
            </div>
        );
    };

    return (
        <div className='sidebar'>
            <div className="sidebar_top">
                <img
                    src="https://th.bing.com/th/id/OIP.4qrPVLhmg-R2WdYFEgs9ygHaEz?rs=1&pid=ImgDetMain"
                    alt="bg image"
                />
                <Avatar src={user.photoUrl} className='sidebar_avatar' >
                    {user.email[0]}
                </Avatar>
                <h2>{user.displayName}</h2>
                <h4>{user.email}</h4>
            </div>

            <div className="sidebar_stats">
                <div className="sidebar_stat">
                    <p>Who viewed you</p>
                    <p className='sidebar_stno'>2,248</p>
                </div>
                <div className="sidebar_stat">
                    <p>Views on post</p>
                    <p className='sidebar_stno'>2,358</p>
                </div>
            </div>

            <div className="sidebar_bottom">
                <h4>Recent</h4>
                {recentItem("react js")}
                {recentItem("programming")}
                {recentItem("software engineering")}
                {recentItem("design")}
                {recentItem("developer")}
            </div>
        </div>
    );
}

export default Sidebar;
