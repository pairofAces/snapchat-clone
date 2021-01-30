import React, { useRef } from 'react';
import Webcam from 'react-webcam';

// create video constraints to set the size of the camera video
const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
}


function WebcamCapture() {
    // create a reference point for the webcam
    const webcamRef = useRef(null);

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
        </div>
    )
}

export default WebcamCapture;
