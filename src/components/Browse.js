import Header from "./Header";
import useNowMovie from "../Hooks/useNowMovie";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";
import usePopularMovie from "../Hooks/usePopularMovie";
import useTopRatedMovie from "../Hooks/useTopRatedMovie";
import useUpcomingMovie from "../Hooks/useUpcomingMovie";
import { useSelector } from "react-redux";
import GptSearch from "./GptSearch";


const Browse=()=>{

    const showGptSearch=useSelector(store=> store?.gpt?.showGptSearch)

    useNowMovie();
    usePopularMovie();
    useTopRatedMovie();
    useUpcomingMovie();

    

    return (
        <div >
            <Header/>
            {
                showGptSearch ?<GptSearch/>:<>
                            <MainContainer/>
                            <SecondaryContainer/></>
            }
            

        </div>
    )
}
export default Browse;