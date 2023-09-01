import React, { useRef, useState, useEffect } from 'react'
import axios from 'axios';


const LaSelfie = () => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraMode, setIsCameraMode] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [takenPictureBlob, setTakenPictureBlob] = useState(null);

  const startCamera = async () => {
    try{
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraOn(true);
    } catch (error){
      console.error("Error accessing the webcam:", error);
    }
  };

  const captureImage = () => {
    if(videoRef.current.readyState === videoRef.current.HAVE_ENOUGH_DATA) {
      if(canvasRef.current){
        const context = canvasRef.current.getContext('2d');
        context.drawImage(videoRef.current, 0, 0, 640, 480);

        canvasRef.current.toBlob(blob => {
          setTakenPictureBlob(blob)

          // Send image blob to backend
          sendToBackend(blob);
        }, 'image/jpeg');
        
        // Stop Camera
        if(videoRef.current.srcObject){
          const tracks = videoRef.current.srcObject.getTracks();
          tracks.forEach(track => track.stop());
        }
        setIsCameraOn(false);
        setIsCameraMode(false);

      } else {
        console.error('Canvas not available');
      }
    }
  }

  const sendToBackend = async (imageBlob) => {
    try {
        // Create a FormData object
        const formData = new FormData();
        formData.append('image', imageBlob);

        // Send the object to the backend
        const res = await axios.post('http://localhost:3001/facematch', FormData);

        console.log('Backend Response:', res.data);
    } catch (error) {
        console.error('Error sending data to backend:', error);
    }
  };

  const handlePhotoClick = () => {
    setIsCameraMode(true);
  };

  useEffect(()=> {
    if(isCameraMode && !isCameraOn) {
      startCamera();
    }
  }, [isCameraMode, isCameraOn]);

  return (
    <div>
      <div className='grid grid-cols-7 mx-auto px-16 pb-2 pt-2'>
        <div className='col-span-2 flex flex-col items-center justify-center pt-6'>
            <h1 className='font-avenir text-center'>An Heiress?</h1>
            <img src='/images/ArcadiaBandiniStearnsdeBaker.png' alt='Heiress' loading='lazy' className='max-w-xxs'/>
        </div>
        <div className='col-span-3 text-center px-2'>
          <h1 className='font-canela text-4xl'>¿Quién esta usted?</h1>
          <h2 className='font-avenir pb-3'>Take a selfie and match to a Mexican historical portrait</h2>
          { isCameraMode ? 
          <video ref={videoRef} autoPlay={true} className='-scale-x-100'></video> :
          takenPictureBlob ? 
          <img src={URL.createObjectURL(takenPictureBlob)} alt="Captured" className='-scale-x-100 mx-auto object-contain max-w-smm' /> :
          <img src='/images/blurryface.png' alt='' loading='lazy' className='mx-auto object-contain max-w-smm'/>
          }
        </div>
        <div className='col-span-2 flex flex-col items-center justify-center pt-6'>
          <h1 className='font-avenir text-center'>A soldier?</h1>
          <img src='/images/JoseRamonPico.png' alt='Soldier' loading='lazy' className='max-w-xxs'/>
        </div>
      </div>
      <div className='flex justify-center pb-12'>
        { isCameraMode ? 
          <button onClick={captureImage} className='bg-pma-orange hover:bg-pma-orange-dark text-white font-bold py-2 px-4 rounded mt-4 transition duration-200'>
          TAKE PHOTO
          </button> 
          :
          takenPictureBlob ? 
          <button onClick={handlePhotoClick} className='bg-pma-orange hover:bg-pma-orange-dark text-white font-bold py-2 px-4 rounded mt-4 transition duration-200'>
          TAKE ANOTHER PICTURE
          </button> :
          <button onClick={handlePhotoClick} className='bg-pma-orange hover:bg-pma-orange-dark text-white font-bold py-2 px-4 rounded mt-4 transition duration-200'>
          TURN CAMERA ON
          </button> 
        }
      </div>

      {/* Is not displayed to user, stores image when picture is taken */}
      <canvas ref={canvasRef} style={{ display: "none" }} width="640" height="480"></canvas>
    </div>
  )
}

export default LaSelfie;
