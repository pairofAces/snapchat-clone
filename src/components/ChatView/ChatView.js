import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectSelectedImage } from '../../features/appSlice';
import './ChatView.css';

function ChatView() {
    const selectedImage = useSelector(selectSelectedImage);
    const history = useHistory();

    // console.log(selectedImage)
    useEffect(() => {
        if (!selectedImage) {
            exit();
        }
    }, [selectedImage])

    const exit = () => {
        history.replace('/chats')
    };

    return (
        <div className="chatView">
            <img src={selectedImage} onClick={exit} alt=""/>
        </div>
    )
}

export default ChatView
