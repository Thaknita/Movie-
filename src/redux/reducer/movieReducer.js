/*
reducer handle on: 
    check request type and return appropriate state
*/

import { actionTypes } from "../action/movieActiontype"


// must have initialState
const initialState = {
    movies: [],
    path:[],
 
}

export const moviesReducer = (state = initialState, action) =>{
    // checking request 
    let {type, payload} = action
    let{GET_PATH}=actionTypes
    let {GET_NOWPLAYING} = actionTypes
    switch(type){
        case GET_NOWPLAYING:
            return {...state, movies: payload}
        case GET_PATH:
            return {...state, path: payload}
        default: 
            return state
    }
}
