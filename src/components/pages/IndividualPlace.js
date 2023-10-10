import React, { useState, useEffect } from 'react'
import { useLocation, useParams } from 'react-router-dom'
import axios from 'axios';
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";


const IndividualPlace = () => {

    const location = useLocation();
    const placeData = location.state;

    const [showPopup, setShowPopup] = useState(false);
    const [selectedArtifact, setSelectedArtifact] = useState(null);
    const [place, setPlace] = useState(null);
    const { id } = useParams();

    const settings = {
        dots: false,
        infinite: true,
        speed: 500,
        slidesToShow: 3,
        slidesToScroll: 1,
        nextArrow: <SampleNextArrow />,
        prevArrow: <SamplePrevArrow />,
    };

    useEffect(()=> {
        // if data was passed from previous page
        if(placeData){
            setPlace(placeData);
        }
        // page navigated to manually -> request data
        else {
            async function fetchPlace(){
                try {
                    const response = await axios.post(`https://pma-backend.herokuapp.com/place?version=37&id=${id}`);
                    setPlace(response.data[0]);
                } catch (error) {
                    console.error("Failed to fetch place:", error);
                }
            }
            fetchPlace();
        }
    }, [id, placeData])

    const handleArtifactClick = (artifact) => {
        if(artifact.caption?.en.length < 4){
            return;
        }
        setSelectedArtifact(artifact);
        setShowPopup(true);
    }
    
        function SampleNextArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div
                    className={`${className} bg-gray-600 p-2 rounded-full`}
                    style={{
                        ...props.style,
                        display: "block",
                        width: "40px",
                        height: "40px",
                        right: "10px", // Adjust position
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 1
                    }}
                    onClick={onClick}
                >
                <svg className="w-4 h-4 mx-auto" viewBox="0 0 256 512">
                    <path d="M224.3 273l-136 136c-9.4 9.4-24.6 9.4-33.9 0l-22.6-22.6c-9.4-9.4-9.4-24.6 0-33.9l96.4-96.4-96.4-96.4c-9.4-9.4-9.4-24.6 0-33.9L54.3 103c9.4-9.4 24.6-9.4 33.9 0l136 136c9.5 9.4 9.5 24.6.1 34z"/>
                </svg>
        </div>
            );
        }
    
        function SamplePrevArrow(props) {
            const { className, style, onClick } = props;
            return (
                <div className={`${className} bg-gray-600 p-2 rounded-full`}
                    style={{
                        ...props.style,
                        display: "block",
                        width: "40px",
                        height: "40px",
                        left: "10px", // Adjust position
                        top: "50%",
                        transform: "translateY(-50%)",
                        zIndex: 1
                    }}
                    onClick={onClick}
                >
                <svg className="w-4 h-4 mx-auto" viewBox="0 0 256 512">
                    <path d="M31.7 239L167.7 103c9.4-9.4 24.6-9.4 33.9 0l22.6 22.6c9.4 9.4 9.4 24.6 0 33.9L68.7 256l155.6 96.4c9.4 9.4 9.4 24.6 0 33.9L201.7 409c-9.4 9.4-24.6 9.4-33.9 0L31.7 273c-9.4-9.4-9.4-24.6 0-34z"/>
                </svg>
            </div>
            );
        }

  return (
    <div>
      {place && (
        <div>
            <div>
            {place ? (
                <div className='flex flex-col'>
                    <div className='bg-pma-green flex flex-col items-center text-white mb-4'>
                        <img src={place.artifacts[0].imageUrl} alt={place.artifacts[0].title?.en} onClick={()=> handleArtifactClick(place.artifacts[0])} className='h-96 md:h-124 p-5 pt-10'/>
                        <h1 className='font-canela xs:text-3xl md:text-4xl pb-5'>{place.name?.en}</h1>
                    </div>
                    <div className='px-24'>
                    <Slider {...settings} className='px-32'>
                        {place.artifacts.slice(1).map((artifact, index) => (
                            <div key={index} onClick={()=> handleArtifactClick(artifact)}>
                                <img src={artifact.imageUrl} alt={artifact.title?.en} className="w-full h-72 p-2 object-contain" />
                            </div>
                        ))}
                    </Slider>
                    </div>
                    {/* Popup to give more information about artifacts */}
                    {showPopup && (
                        <div className="fixed top-0 left-0 w-full h-full flex justify-center items-center z-50">
                            <div className=" bg-pma-light-orange w-3/4 h-3/4 p-8 rounded-lg shadow-lg relative">
                                <button className="absolute top-2 right-4 text-xl text-gray-800 hover:text-gray-500" onClick={() => setShowPopup(false)}>&times;</button>
                                <div className='flex flex-col justify-center items-center h-full p-5'>
                                    <img src={selectedArtifact.imageUrl} alt={selectedArtifact.title?.en} className='max-h-64 w-auto'/>
                                    <div className='font-avenir text-sm text-center px-10 mt-4 flex-grow'>{selectedArtifact.caption?.en}</div>
                                    <br/>
                                    <div className='font-avenir text-gray-700 text-sm text-center px-10 mt-4 flex-grow'>{selectedArtifact.date}</div>
                                    <div className='font-avenir text-gray-700 text-sm text-center px-10 flex-grow'>{selectedArtifact.credit?.en}</div>
                                </div>
                            </div>
                        </div>
                    )}
                    <p className='font-avenir text-s text-center pb-4 px-10 md:px-32'>{place.description?.en}</p>
                </div>
            ) : (
                <p>Loading...</p>
            )}
        </div>
        </div>
      )}
    </div>
  )
}

export default IndividualPlace;
