import React, { useEffect, useState } from 'react';
import "./feed.css";
import CreateIcon from '@mui/icons-material/Create';
import InputOption from './InputOption';
import ImageIcon from '@mui/icons-material/Image';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import EventNoteIcon from '@mui/icons-material/EventNote';
import CalendarTodayIcon from '@mui/icons-material/CalendarToday';
import Post from './Post';
import { db } from './firebase';
import { collection, onSnapshot, addDoc, serverTimestamp, query, orderBy } from 'firebase/firestore';
import { useSelector } from 'react-redux';
import { selectUser } from './userSlice';
import FlipMove from "react-flip-move"

function Feed() {
    const user = useSelector(selectUser)

    const [input, setInput] = useState("");
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const postsQuery = query(collection(db, "posts"), orderBy("timestamp", "desc"));
    
        return onSnapshot(postsQuery, (snapshot) => {
            setPosts(snapshot.docs.map(doc => ({
                id: doc.id,
                data: doc.data()
            })));
        });
    }, []);

    const sendPost = (e) => {
        e.preventDefault();
        addDoc(collection(db, 'posts'), {
            name: user.displayName,
            description: user.email,
            message: input,
            photoUrl: user.photoUrl || "",
            timestamp: serverTimestamp()
        });
        setInput(""); // Clear the input field after sending the post
    };

    return (
        <div className='feed'>
            <div className="feed_inputContainer">
                <div className="feed_input">
                    <CreateIcon />
                    <form>
                        <input
                            type="text"
                            value={input}
                            onChange={e => setInput(e.target.value)}
                        />
                        <button onClick={sendPost} type='submit'>Send</button>
                    </form>
                </div>
                <div className="feed_inputOption">
                    <InputOption
                        Icon={ImageIcon}
                        title="Photo"
                        color="#70B5F9"
                    />
                    <InputOption
                        Icon={SubscriptionsIcon}
                        title="Video"
                        color="#E7A33E"
                    />
                    <InputOption
                        Icon={EventNoteIcon}
                        title="Event"
                        color="#C0CBCD"
                    />
                    <InputOption
                        Icon={CalendarTodayIcon}
                        title="Write Article"
                        color="#7FC15E"
                    />
                </div>
            </div>

            <FlipMove>

            {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
                <Post
                key={id}
                name={name}
                description={description}
                message={message}
                photoUrl={photoUrl}
                />
            ))}
            </FlipMove>
        </div>
    );
}

export default Feed;
