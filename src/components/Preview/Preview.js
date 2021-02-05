import React, { useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { selectCameraImage } from '../../features/cameraSlice';
import './Preview.css';
import CloseIcon from '@material-ui/icons/Close';

function Preview() {
    // pull the image required in the preview div
    // from the redux-data-layer
    const cameraImage = useSelector(selectCameraImage);
    const history = useHistory();

     useEffect(() => {
        if (!cameraImage) {
            history.replace('/')
        }
     }, [])

     const closePreview = () => {
         
     }

    return (
        <div className="preview">
            {/* preview of the image goes here */}
            {/* <h1>This is the preview of the image</h1> */}
            <CloseIcon onClick={closePreview} className="preview__close"/>
            <img src={cameraImage} alt=""/>
        </div>
    )
}

export default Preview
