import React from 'react'

export default function Playing(key) {
    
  return (
    <div class=" w-full  h-screen  bg-black ">
    <iframe
     className="w-2/3 h-full mx-auto "

      src={`https://www.youtube.com/embed/${key}?autoplay=1`}
      title="Going Beyond the Game | The Super Mario Bros. Movie"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  </div>
  )
}
