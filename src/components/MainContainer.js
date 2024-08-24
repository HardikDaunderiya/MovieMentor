import { useSelector } from "react-redux"
import VideoBackground from "./VideoBackground"
import VideoTitle from "./VideoTitle"


const MainContainer = () => {

    const movies = useSelector((store)=>store.movies?.playMovie);
    if(!movies) return;

    const mainMovie=movies[0];
    console.log(mainMovie)

    const {
      original_title
      , overview,id}= mainMovie;

  return (
    <div>
      <h1>MainContainer</h1>
      <div>
        <VideoTitle title={original_title} overview={overview} />
        <VideoBackground movieID={id}/>
      </div>
    </div>
  )
}

export default MainContainer;
