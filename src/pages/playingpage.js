import React, { useEffect } from 'react';
import { useLocation } from 'react-router-dom';

export default function Playingpage() {
  const location = useLocation();
  const videoKey = location.state;

  useEffect(() => {
    console.log('videoKey:', videoKey);
  }, [videoKey]);

  return (
    <div>
        <div class="absolute h-full w-full">
                <iframe class="w-full h-full"src={`https://www.youtube.com/embed/${videoKey}?autoplay=1`} 
                frameborder="0"
                allowfullscreen>
                </iframe>

      </div>
    </div>
  );
}

