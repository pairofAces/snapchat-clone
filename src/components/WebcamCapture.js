import React, { useCallback, useState, useRef } from 'react';
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
    const [image, setImage] = useState(null);

    // create the onClick function or RadioButton
    const capture = useCallback(() => {
        const imageSrc = webcamRef.current.getScreenshot();
        console.log(imageSrc)
        setImage(imageSrc)
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
            <img src={image} alt=""/>
        </div>
    )
}

export default WebcamCapture;
