import React, { useEffect, useState } from "react";
import Trendingcard from "../components/Trendingcard";
import { fetchPopular } from "../services/movieAction";


export default function Trending() {
    const [data, setData] = useState([]);

    useEffect(()=> {
            fetchPopular().then((resp)=>setData(resp.results))
    },[])
    console.log("populardata", data)

  return (
    <div class=" bg-black pt-36 px-5 pb-5">

        <div class=" flex text-red-600 mb-14 mx-6">
            <h4 class="md:text-2xl sm:text-xs font-bold" > Reviewed</h4>
            
        </div>
        <div class=" mx-5 grid  gap-2 md:grid-cols-2 sm:grid-cols-1 lg:grid-cols-3  ">
        {
            data.length > 0 && data.map( (data) => {
                return (
                    <Trendingcard 
                        backdrop={data.poster_path}
                        title={data.original_title}
                        overview={data.overview}
                        id={data.id}
                    />
                )
            }
               

            )
        }



        </div> 
        
    </div>
  );
}
