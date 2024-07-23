import React, {forwardRef} from 'react'
import "./post.css"
import { Avatar } from '@mui/material'
import InputOption from './InputOption'
import RecommendIcon from '@mui/icons-material/Recommend';
import CommentIcon from '@mui/icons-material/Comment';
import SwapCallsIcon from '@mui/icons-material/SwapCalls';
import SendIcon from '@mui/icons-material/Send';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';

const Post = forwardRef(({ name, description, message, photoUrl },ref) =>{
    const user = useSelector(selectUser)
    return (
        <div ref={ref} className='post'>
            <div className="post_header">
                <Avatar src={photoUrl} >{name[0]}</Avatar>
                <div className="post_info">
                    <h2>{name}</h2>
                    <p>{description}</p>
                </div>
            </div>

            <div className="post_body">
                <p>{message}</p>
            </div>

            <div className="post_buttons">
                <InputOption
                    Icon={RecommendIcon}
                    title="Like"
                    color="gray"
                />
                <InputOption
                    Icon={CommentIcon}
                    title="Comment"
                    color="gray"
                />
                <InputOption
                    Icon={SwapCallsIcon}
                    title="Repost"
                    color="gray"
                />
                <InputOption
                    Icon={SendIcon}
                    title="Send"
                    color="gray"
                />
            </div>
        </div>
    )
})

export default Post
