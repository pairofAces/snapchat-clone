import React from 'react';
import { useSelector } from 'react-redux';
import { selectCameraImage } from '../../features/cameraSlice';
import './Preview.css';

function Preview() {
    // pull the image required in the preview div
    // from the redux-data-layer
    const cameraImage = useSelector(selectCameraImage);

    return (
        <div className="preview">
            {/* preview of the image goes here */}
            <img src={selectCameraImage} alt=""/>
        </div>
    )
}

export default Preview
