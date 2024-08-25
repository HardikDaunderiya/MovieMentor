import { useEffect } from "react";
import { addPopularMovie } from "../utils/MovieSlice";
import { API_OPTION } from "../utils/constants";
import { useDispatch } from "react-redux";


const usePopularMovie=()=>{

    const dispatch=useDispatch();
    const getPopularMovie= async ()=>{
        const data = await fetch("https://api.themoviedb.org/3/movie/popular?language=en-US&page=1", API_OPTION);
        const json =await data.json();
        // console.log(json.results);
        dispatch(addPopularMovie(json.results));
    }
    
    useEffect(()=>{
        getPopularMovie()
    },[]);
}

export default usePopularMovie;