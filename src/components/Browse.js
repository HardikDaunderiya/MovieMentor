import Header from "./Header";
import useNowMovie from "../Hooks/useNowMovie";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../Hooks/usePopularMovie";
import useTopRatedMovie from "../Hooks/useTopRatedMovie";
import useUpcomingMovie from "../Hooks/useUpcomingMovie";


const Browse=()=>{

    useNowMovie();
    usePopularMovie();
    useTopRatedMovie();
    useUpcomingMovie();

    return (
        <div >
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}
export default Browse;