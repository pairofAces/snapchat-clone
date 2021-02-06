import { Avatar } from '@material-ui/core';
import React from 'react';
import './Chats.css';
import SearchIcon from '@material-ui/icons/Search';

function Chats() {
    return (
        <div className="chats">
            <div className="chats__header">
                <Avatar className="chats__avatar"/>
                <div className="chats__search">
                    <SearchIcon />
                </div>
            </div>
        </div>
    )
}

export default Chats
