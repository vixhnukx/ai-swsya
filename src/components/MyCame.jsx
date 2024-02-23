import React, { useState, useRef } from 'react';
import Webcam from 'react-webcam';
import './MyCam.css'

function MyCam() {
  const [isMuted, setIsMuted] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const webcamRef = useRef(null);

  const toggleMute = () => {
    setIsMuted(prevState => !prevState);
  };

  const startCamera = () => {
    setIsCameraOn(true);
  };

  const endCamera = () => {
    setIsCameraOn(false);
  };

  return (
    <div className="camera-module">
      <div className="video-container">
        {isCameraOn && (
          <Webcam
            audio={isMuted}
            ref={webcamRef}
            muted={isMuted}
            screenshotFormat="image/jpeg"
            width={320}
            height={240}
            videoConstraints={{ facingMode: 'user' }}
          />
        )}
      </div>
      <div className="controls">
        {!isCameraOn ? (
          <button className="start-button" onClick={startCamera}>Start Cam</button>
        ) : (
          <button className="end-button" onClick={endCamera}>End Cam</button>
        )}
        <button className="mute-button" onClick={toggleMute}>{isMuted ? 'Unmute' : 'Mute'}</button>
      </div>
      <div className='mt-5 ,ml-4 '>
        <h5>Lorem ipsum dolor 
            sit amet consectetur,adipisicing elit. Eum iure aliquam fugiat consequuntur 
            perferendis impedit magnam magni 
            non. Praesentium sequi vero enim 
            distinctio quisquam omnis neque 
            non doloremque, iste ut?
        </h5>
    </div>
    </div>
  );
}
export default MyCam;
