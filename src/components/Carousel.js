import React from 'react'
import { useEffect } from 'react';
import { fetchPath } from '../services/movieAction';
import Cards from './Cards';
import { useState } from 'react';

export default function Carousel() {
const [carouseldata, setCarouseldata] = useState([]);
const [index, setIndex] = useState([0])
const slideLeft = () => {
        setIndex(index - 4); 
};

const slideRight = () => {
    setIndex(index + 4);
};

    useEffect(() => {
        fetchPath().then((resp) => setCarouseldata(resp.results));
      }, []);
      
    console.log("carouseldata", carouseldata);
  return (
    <div >
                
    <div class="">
      
        <div class=" flex gap-4 w-full">
            
        {
        carouseldata.length>0 && carouseldata.map( (data, index) => {
            let position = index > 0 ? "nextCard" : index === 0 ? 
        "activeCard" : "prevCard";
          return <Cards 
                       title={data.original_title}
                       desc={data.overview}
                       backdrop={data.backdrop_path}
           />;
        })}
        {console.log('index', index)}
        </div>
    </div>
    
    <button onClick={slideLeft} type="button" class="absolute top-0 start-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-prev>
                      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 1 1 5l4 4"/>
                          </svg>
                          <span class="sr-only">Previous</span>
                      </span>
                  </button>
                  <button  onClick={slideRight} type="button" class="absolute top-0 end-0 z-30 flex items-center justify-center h-full px-4 cursor-pointer group focus:outline-none" data-carousel-next>
                      <span class="inline-flex items-center justify-center w-10 h-10 rounded-full bg-white/30 dark:bg-gray-800/30 group-hover:bg-white/50 dark:group-hover:bg-gray-800/60 group-focus:ring-4 group-focus:ring-white dark:group-focus:ring-gray-800/70 group-focus:outline-none">
                          <svg class="w-4 h-4 text-white dark:text-gray-800 rtl:rotate-180" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 6 10">
                              <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="m1 9 4-4-4-4"/>
                          </svg>
                          <span class="sr-only">Next</span>
                      </span>
                  </button>
</div> 
  )
}


