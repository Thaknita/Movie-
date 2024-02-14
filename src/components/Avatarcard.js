import React from 'react'

export default function Avatarcard({avarta,name}) {
  return (
<span class="container flex-col item-center">
  <div class="h-2/3">
<img class="h-5/6 rounded-full" width={100}  src={`https://image.tmdb.org/t/p/w440_and_h660_face${avarta}`} alt="Bordered avatar"/>
</div>
<h2 class="text-white text-start text-sm  pt-0">{name}</h2>
</span>
  )
}
