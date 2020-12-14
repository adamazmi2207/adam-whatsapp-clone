import React, { useEffect, useState } from 'react'

import { Avatar } from '@material-ui/core'
import './SidebarChat.css'
import firestoreDb from '../firebase';
import {Link} from "react-router-dom"


function SidebarChat({ id, roomName, addNewChat }) {
    const [seed, setSeed] = useState('');

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000));
    }, []);


    const createChat = () => {
        const roomName = prompt("Please enter name for chatroom")
        if (roomName) {
            firestoreDb.collection("rooms").add({
                roomName: roomName
            })
        }
    }

    return !addNewChat ? (
        <Link to={`/rooms/${id}`}>
            <div className="sidebarChat">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="sidebarChat__info">
                    <h2>{roomName}</h2>
                    <p>Last message</p>
                </div>
            </div>
        </Link>
    ) : (
            <div onClick={createChat}
                className="sidebarChat">
                <div className="sidebarChat__info">
                    <h2>Add New Chatroom</h2>
                </div>
            </div>
        )
}


export default SidebarChat
