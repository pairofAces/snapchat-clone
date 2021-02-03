import React, { useCallback, useState, useRef } from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';
import { useDispatch } from 'react-redux';
import { setCameraImage } from '../../features/cameraSlice';
import { useHistory } from 'react-router-dom';
import './WebcamCapture.css';

// create video constraints to set the size of the camera video
const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
}


function WebcamCapture() {
    // create a reference point for the webcam
    const webcamRef = useRef(null);
    const dispatch = useDispatch();
    const history = useHistory();
    // const [image, setImage] = useState(null);

    // create the onClick function or RadioButton
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        dispatch(setCameraImage(imageSrc));
        history.push('./preview');
    }, [webcamRef])

    return (
        <div className="webcamCapture">
            <Webcam 
                audio={false}
                height={videoConstraints.height}
                ref={webcamRef}
                screenshotFormat="image/jpeg"
                width={videoConstraints.width}
                videoConstraints={videoConstraints}
            />

            <RadioButtonUncheckedIcon 
                className="webcamCapture__button"
                onClick={capture}
                fontSize="large"
            />
            {/* <img src={image} alt=""/> */}
        </div>
    )
}

export default WebcamCapture;
