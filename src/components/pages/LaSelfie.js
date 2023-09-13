import React, { useRef, useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import CircularProgressBar from '../widgets/CircularProgressBar';


const LaSelfie = () => {

  const videoRef = useRef(null);
  const canvasRef = useRef(null);
  const [isCameraMode, setIsCameraMode] = useState(false);
  const [isCameraOn, setIsCameraOn] = useState(false);
  const [takenPictureBlob, setTakenPictureBlob] = useState(null);
  const [selfieData, setSelfieData] = useState(null);

  const navigate = useNavigate();

  // start Camera
  const startCamera = async () => {
    try{
      const stream = await navigator.mediaDevices.getUserMedia({ video: true });
      videoRef.current.srcObject = stream;
      setIsCameraOn(true);
    } catch (error){
      console.error("Error accessing the webcam:", error);
    }
  };

  // Stop Camera
  // Trying to get Camera to shut off when component unmounts
  // currently having some difficulty
  const stopCamera = () => {
    console.log(videoRef.current);
    //console.log(videoRef.current.srcObject);
    if(videoRef.current && videoRef.current.srcObject){
      const tracks = videoRef.current.srcObject.getTracks();
      console.log('Tracks:', tracks);  // Log the tracks to inspect them.
      tracks.forEach(track => track.stop());
      setIsCameraOn(false);
    } else{
      console.log('Something aint right')
    }
  };

  // Take a picture in blob format
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

  // Send image to backend, currently not working due to API paywall
  const sendToBackend = async (imageBlob) => {
    try {
        // Create a FormData object
        const formData = new FormData();
        formData.append('image', imageBlob);

        // Only necessary for testing, faceMatch does not check the version
        formData.append('version', '36');

        // Send the object to the backend
        const res = await axios.post('http://localhost:3001/facesnatch', formData);

        console.log('Backend Response:', res.data);
        setSelfieData(res.data);
    } catch (error) {
        console.error('Error sending data to backend:', error);
    }
  };

  const handlePhotoClick = () => {
    setIsCameraMode(true);
  };

  useEffect(()=> {
    console.log('Use effect')
    if(isCameraMode && !isCameraOn) {
      startCamera();
    }

  }, [isCameraMode, isCameraOn]);


  // Cleanup function to close camera is when component unmounts
  useEffect(()=> {
    return () => {
      console.log('Stop camera')
      stopCamera();
    };
  }, [])

  return (
    <div>
      { selfieData ? 
      <div>
        <div className='flex justify-around pt-8'>
          <div className='flex'>
            <CircularProgressBar value={selfieData[0].confidence}/>
            <div className='text-center mt-3'>
              <h1 className='font-avenir text-xl'>YOUR MATCH</h1>
              <h1 className='font-canela text-3xl'>{selfieData[0].person[0].name?.en}</h1>
            </div>
          </div>
        </div> 
        <div>
          <div className='flex justify-around'>
            <div className='flex'>
              <img src={URL.createObjectURL(takenPictureBlob)} alt="Captured" className='-scale-x-100 w-96 object-contain' />
              <img src={selfieData[0].artifacts.length > 0 ? selfieData[0].artifacts[0].imageUrl : null} alt="" className='w-96 object-contain'/>
            </div>
          </div>
        </div>
          <div className='font-avenir text-center mt-6 px-12 md:px-48'>
            {selfieData[0].person[0].description?.en}
          </div>
          <div className='flex justify-around'>
            <div>
              <button className='bg-pma-orange hover:bg-pma-orange-dark text-white font-bold py-2 px-4 rounded mt-4 transition duration-200 mx-2'>
                RETAKE
              </button> 
              <button onClick = {()=> {
                  navigate(`/laselfie/${selfieData[0]._id}`, { state: { selfieData: selfieData } } ) 
                  window.scrollTo(0,0);
                }} className='bg-pma-orange hover:bg-pma-orange-dark text-white font-bold py-2 px-4 rounded mt-4 transition duration-200 mx-2'>
                LEARN MORE
              </button>
            </div>
          </div>
          <div className='mx-16 pt-8'>
            <h1 className='font-avenir font-bold'>OTHER MATCHES</h1>
            <div className='border-t border-gray-900 mt-2 mb-4 w-auto'/>
            <div className='flex justify-around'>
            { selfieData.slice(1, 4).map((result, index) => (
              <div key={index} className={`flex flex-col items-center m-2 ${index === 2 ? 'hidden md:flex' : ''} ${index === 1 ? 'hidden sm:flex' : ''}`}>
                <img src={result.artifacts.length > 0 ? result.artifacts[0].imageUrl : null} alt='More selfie responses' className='object-fit h-64'/>
                <div className='bg-pma-light-orange w-full overflow-hidden'>
                <h1 className='font-avenir text-sm md:text-m line-clamp-3 mt-5 mx-4'>{result.person[0].name?.en}</h1>
                <button onClick = {() => {
                  navigate(`/laselfie/${result._id}`, { state: { selfieData: selfieData } } ) 
                  window.scrollTo(0,0);
                }}>
                  <p className='font-avenir text-s text-gray-800 mx-5 mb-5 mt-2 hover:underline'>Read Story</p>
                </button>
              </div>
              </div>
            ))}
            </div>
          </div>
      </div>
      : 
      <div>
      <div className='grid grid-cols-3 lg:grid-cols-7 mx-auto px-16 pb-2 pt-2'>
        <div className='hidden lg:flex col-span-2 flex-col items-center justify-center pt-6'>
            <h1 className='font-avenir text-center'>An Heiress?</h1>
            <img src='/images/ArcadiaBandiniStearnsdeBaker.png' alt='Heiress' loading='lazy' className='max-w-xxs'/>
        </div>
        <div className='col-span-3 text-center px-2 pb-4'>
            <h1 className='font-canela text-4xl'>¿Quién esta usted?</h1>
            <h2 className='font-avenir pb-3'>Take a selfie and match to a Mexican historical portrait</h2>
          { isCameraMode ? 
            <video ref={videoRef} autoPlay={true} className='-scale-x-100 h-80 lg:h-96 mx-auto object-contain '></video> :
            takenPictureBlob ? 
            <img src={URL.createObjectURL(takenPictureBlob)} alt="Captured" className='-scale-x-100 h-80 lg:h-96 mx-auto object-contain' /> :
            <img src='/images/blurryface.png' alt='' loading='lazy' className='h-80 lg:h-96 mx-auto object-contain'/>
          }
        </div>
        <div className='hidden lg:flex col-span-2 flex-col items-center justify-center pt-6'>
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
    }
    </div>
  )
}

export default LaSelfie;