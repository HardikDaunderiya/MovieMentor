import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { addUpcomingMovie } from "../utils/MovieSlice";
import { API_OPTION } from "../utils/constants";

const useUpcomingMovie = () => {

    const dispatch=useDispatch();
    const getUpcomingMovie= async ()=>{
        const data = await fetch( 'https://api.themoviedb.org/3/movie/upcoming?language=en-US&page=1', API_OPTION);
        const json =await data.json();
        // console.log(json.results);
        dispatch(addUpcomingMovie(json.results));
    }
    
    useEffect(()=>{
        getUpcomingMovie()
    },[]);

}

export default useUpcomingMovie
