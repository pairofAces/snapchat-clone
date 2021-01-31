import React, { useCallback, useRef } from 'react';
import Webcam from 'react-webcam';
import RadioButtonUncheckedIcon from '@material-ui/icons/RadioButtonUnchecked';

// create video constraints to set the size of the camera video
const videoConstraints = {
    width: 250,
    height: 400,
    facingMode: "user",
}


function WebcamCapture() {
    // create a reference point for the webcam
    const webcamRef = useRef(null);

    // create the onClick function or RadioButton
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc)
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
        </div>
    )
}

export default WebcamCapture;
