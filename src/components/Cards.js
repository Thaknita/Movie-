
import React, { useEffect, useState } from "react";
import {useNavigate } from "react-router-dom";



export function Displaycard({ payload }) {
  console.log("payload", payload.poster_path);
  const navigation = useNavigate();

  const handleOnClick = () => {
    
    const id = payload.id;
    console.log('id', id);
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
      .then((resp) => resp.json())
      .then((res) => {
        const keyset = res.results[0];
        console.log('key', keyset.key);
       
        navigation('/playingpage', { state: keyset.key });
      

        
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };

  const ImageComponent = () => {

    const [isHolding, setIsHolding] = useState(false);
  
    const handleHoldStart = () => {
      setIsHolding(true);
      console.log("Image held");
      return(
        <>
        
      
        
        
        </>

      );
      
    };
  
    const handleHoldEnd = () => {
      setIsHolding(false);
      console.log("Hold released");
      // Add your custom logic here for when the hold on the image is released
    };
  
    return (
      <div>
      <img
        class="rounded"
        src={`https://image.tmdb.org/t/p/w440_and_h660_face${payload.poster_path}`}
        alt="picture"
        width={250}
        onMouseEnter={handleHoldStart}
        onMouseLeave={handleHoldEnd}
        
      />
      
      </div>
    );
  };
  
 



  useEffect(() => {
    
  },[])
 

  return (
    <>
    
      <div class=" mx-2 relative ">
        <ImageComponent/>
        <button  onClick={handleOnClick}  class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" sm:w-5 md:w-10 lg:w-12 fill-red-800 "
            viewBox="0 0 512 512"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
          </svg>
        </button>
        
      
      </div>
    </>
  );
}

export default function Cards({ backdrop }) {



  return (
    <div class=" mx-2 relative ">

        <img
          class="rounded"
          src={`https://image.tmdb.org/t/p/w440_and_h660_face${backdrop}`}
          alt="picture"
        />
        <button class=" absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            class=" sm:w-5 md:w-10 fill-red-800  "
            viewBox="0 0 512 512"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
          </svg>
        </button>
    </div>
  );

    

}
