import { useEffect } from "react";
import { addPlayMovie } from "../utils/MovieSlice";
import { API_OPTION, url } from "../utils/constants";
import { useDispatch } from "react-redux";


const useNowMovie=()=>{

    const dispatch=useDispatch();
    const MovieOnline= async ()=>{
        const data = await fetch(url, API_OPTION);
        const json =await data.json();
        console.log(json.results);
        dispatch(addPlayMovie(json.results));
    }
    
    useEffect(()=>{
        MovieOnline()
    },[]);
}

export default useNowMovie;