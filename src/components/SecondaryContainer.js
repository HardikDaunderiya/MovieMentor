import { useSelector } from "react-redux"
import MovieList from "./MovieList"


const SecondaryContainer = () => {

  const movie=useSelector((store)=> store.movies)
  return movie.playMovie &&(
    <div className=" bg-black" >
      <div className="-mt-72 pl-12 relative z-20">
      <MovieList title={"Now Playing"} movies={movie.playMovie} />
      <MovieList title={"Top Rated"} movies={movie.topRatedMovie} />
      <MovieList title={"Popular"} movies={movie.popularMovie} />
      <MovieList title={"Adventure"} movies={movie.upcomingMovie} />
      <MovieList title={"Game"} movies={movie.playMovie} />
      </div>
    </div>
  )
}

export default SecondaryContainer
