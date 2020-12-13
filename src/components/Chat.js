import { Avatar, IconButton } from "@material-ui/core"
import React, { useState, useEffect } from 'react'

import "./Chat.css"
import { AttachFile, SearchOutlined, MoreVert, InsertEmoticon, Mic } from "@material-ui/icons"

function Chat() {
    const [seed, setSeed] = useState("")
    const [textInput, setTextInput] = useState("")

    useEffect(() => {
        setSeed(Math.floor(Math.random() * 5000))

    }, [])

    const sendMessage = (e) => {
        e.preventDefault()
        console.log("Typed message >> ", textInput)
        setTextInput("")
    }

    return (
        <div className="chat">
            <div className="chat__header">
                <Avatar src={`https://avatars.dicebear.com/api/human/${seed}.svg`} />
                <div className="chat__headerInfo">
                    <h3>Room Name</h3>
                    <p>Last seen at..</p>
                </div>
                <div className="chat__headerRight">
                    <IconButton>
                        <SearchOutlined />
                    </IconButton>
                    <IconButton>
                        <AttachFile />
                    </IconButton>
                    <IconButton>
                        <MoreVert />
                    </IconButton>
                </div>

            </div>

            <div className="chat__body">
                <p className={`chat__message ${true && "chat__receiver"}`}>
                    <span className="chat__name">Adam Azmi</span>
                    Hey Guys.......
                    <span className="chat__timestamp">3:52pm</span>
                </p>
                <p className="chat__message">
                    Hey Guys
                </p>
                <p className="chat__message">
                    Hey Guys
                </p>
            </div>

            <div className="chat__footer">
                <IconButton>
                    <InsertEmoticon />
                </IconButton>
                <form action="">
                    <input value={textInput}
                        onChange={(e) => setTextInput(e.target.value)}
                        placeholder="Type a message" type="text" />
                    <button onClick={sendMessage} type="submit">
                        Send message</button>
                </form>
                <IconButton>
                    <Mic />
                </IconButton>
            </div>
        </div>
    )
}

export default Chat
