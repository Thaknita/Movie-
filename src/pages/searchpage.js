import React, { useEffect, useState } from 'react'
import { searchMovies } from '../services/movieAction';
import Cards, { Displaycard } from '../components/Cards';

export default function Searchpage() {

  const [query, setQuery] = useState("");
  const [data,setData] = useState([])

  
  useEffect(()=>
  {

    searchMovies(query).then((resp) => setData(resp.results))
    
    console.log('datapop', data)
  },[query])
  
  return (
          <section class="" >
          <div class="absolute top-20  w-full bg-black h-full  ">
          <form class="w-1/2 mx-auto my-10" >
            <label
              for="default-search"
              class="mb-2 text-sm font-medium text-gray-900 sr-only dark:text-white"
            >
              Search
            </label>
            <div class="relative">
              <div class="absolute inset-y-0 start-0 flex items-center ps-3 pointer-events-none">
                <svg
                  class="w-4 h-4 text-gray-500 dark:text-gray-400"
                  aria-hidden="true"
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 20 20"
                >
                  <path
                    stroke="currentColor"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    stroke-width="2"
                    d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
                  />
                </svg>
              </div>
              <input
                type="search"
                id="default-search"
                class=" block w-full p-4 ps-10 text-sm text-gray-900 border border-gray-300 rounded-lg bg-gray-300 focus:ring-blue-500 focus:border-blue-500 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                onChange={(e) => {
                  setQuery(e.target.value);
                  console.log(query);
                }}
                placeholder="Search ..."
                required
              />
              <button
                type="submit"
                class="text-white absolute end-2.5 bottom-2.5 bg-gray-700 hover:bg-red-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
              >
                Search
              </button>
            </div>
          </form>

          <div class=" grid gap-2 mb-6  md:grid-cols-5 lg:grid-cols-8 sm:grid-cols-3 bg-black ">
          {
            data.length > 0 && data.map( movie => <Displaycard payload={movie}  /> )
          }
          </div>
    </div>
</section>
  )
}
