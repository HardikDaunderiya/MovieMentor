import { useDispatch } from "react-redux";
import { API_OPTION } from "../utils/constants";
import { addTrailerVideo } from "../utils/MovieSlice";
import { useEffect } from "react";


const useMovieTrailer = (movieID) => {
    const dispatch =useDispatch();
    const getMovieVideos = async () => {
        const data = await fetch(
          "https://api.themoviedb.org/3/movie/"+ movieID +"/videos?language=en-US",
          API_OPTION
        );
        const json = await data.json();
        // console.log(json);
        const filterData = json?.results?.filter(
          (videos) => videos.type === "Trailer"
        );
        const trailer = filterData.length ? filterData[0] : json?.results[0];
        // console.log(trailer);
        const key = trailer?.key;
        dispatch(addTrailerVideo(trailer));
      };
      useEffect(() => {
        getMovieVideos();
      }, []);
}

export default useMovieTrailer;
