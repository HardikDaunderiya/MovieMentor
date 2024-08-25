import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux';
import { API_OPTION } from '../utils/constants';
import { addPopularMovie, addTopRatedMovie } from '../utils/MovieSlice';

const useTopRatedMovie = () => {

    const dispatch=useDispatch();
    const getTopRatedMovie= async ()=>{
        const data = await fetch('https://api.themoviedb.org/3/movie/top_rated?language=en-US&page=1', API_OPTION);
        const json =await data.json();
        // console.log(json.results);
        dispatch(addTopRatedMovie(json.results));
    }
    
    useEffect(()=>{
        getTopRatedMovie()
    },[]);

}

export default useTopRatedMovie
