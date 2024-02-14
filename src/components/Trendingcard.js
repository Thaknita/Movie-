import React from 'react'
import { useNavigate } from 'react-router-dom';


export default function Trendingcard({backdrop, title, overview,id}) {
  const navigation = useNavigate();

  const handleOnClick = () => {
    fetch(`https://api.themoviedb.org/3/movie/${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
      .then((resp) => resp.json())
      .then((res) => {
        const keyset = res.results[0];
        const keyplay = keyset.key;
        console.log('key', keyset.key);
       
        navigation('/playingpage', { state: keyset.key });

      })
      .catch((error) => {
        console.error('Error:', error);
      });
  };


  return (
   
    <div class=" w-96 bg-gray-800 max-w-sm border rounded-lg shadow  overflow-hidden">
      <a href="#"
       class="  "
      >
        <div class=" h-64 overflow-hidden ">
        <img    
          class="rounded-t-lg mx-auto w-full"
          src={ `https://image.tmdb.org/t/p/w440_and_h660_face${backdrop}`}
          alt=""
        />
        </div>
        <div class="p-5 ">
        <a href="#">
          <h5 class=" h-14 mb-2 text-2xl font-bold tracking-tight text-gray-200 ">
            {title}
          </h5>
        </a>
        <p class=" h-32 mb-3 font-normal text-gray-400 dark:text-gray-400 overflow-hidden">
          {overview}
        </p>
        <button onClick={handleOnClick}>
        <a
          href="#"
          class=" inline-flex items-center px-3 py-2  text-sm font-medium text-center text-white bg-red-900 rounded-lg hover:bg-red-700 focus:ring-4 focus:outline-none focus:ring-blue-300"
        >
          Watch Trailer
   
          <svg
            class="mx-2"
            xmlns="http://www.w3.org/2000/svg"
            height="32"
            width="32"
            viewBox="0 0 512 512"
          >
            <path d="M464 256A208 208 0 1 0 48 256a208 208 0 1 0 416 0zM0 256a256 256 0 1 1 512 0A256 256 0 1 1 0 256zM188.3 147.1c7.6-4.2 16.8-4.1 24.3 .5l144 88c7.1 4.4 11.5 12.1 11.5 20.5s-4.4 16.1-11.5 20.5l-144 88c-7.4 4.5-16.7 4.7-24.3 .5s-12.3-12.2-12.3-20.9V168c0-8.7 4.7-16.7 12.3-20.9z" />
          </svg>
        </a>
        </button>
        
      </div>
      </a>
      
    </div>
 
  )
}
