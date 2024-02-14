import { BASE_URL } from "../utilities/constant";




export const fetchPath= () => {

      const response = fetch("https://api.themoviedb.org/3/movie/now_playing?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1")

        .then( resp => resp.json())
    return response;

}
export const  fetchPopular = () => {
  const response = fetch(`${BASE_URL}popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
  .then(resp => resp.json())
  return response;
}

export const fetchArtist = () => {
  const response = fetch(`${BASE_URL}603692/credits?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US`)
  .then(resp => resp.json())
  return response;
}
export const fetchUpcoming = () => {
  const response = fetch(`${BASE_URL}/upcoming?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
  .then(resp => resp.json())
  return response;
}

export const fetchBackground = () => {
  const response = fetch (`${BASE_URL}/popular?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US&page=1`)
  .then(resp => resp.json())
  return response;
}

export const searchMovies = async (query) => {
  const response = await fetch(`https://api.themoviedb.org/3/search/movie?api_key=4113f3ad734e747a5b463cde8c55de42&language=en- US&query=${query}`)
  return response.json()
}

export const getKey = async (id) => {
  const response = await fetch (`${BASE_URL}${id}/videos?api_key=4113f3ad734e747a5b463cde8c55de42&language=en-US/6384`)
  .then(resp => resp.json())
  return response;
}