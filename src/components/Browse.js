import Header from "./Header";
import useNowMovie from "../Hooks/useNowMovie";
import MainContainer from "./MainContainer"
import SecondaryContainer from "./SecondaryContainer";


const Browse=()=>{

    useNowMovie();

    return (
        <div >
            <Header/>
            <MainContainer/>
            <SecondaryContainer/>
        </div>
    )
}
export default Browse;