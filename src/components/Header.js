import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { signOut } from "firebase/auth";

const Header = () => {
  const navigate =useNavigate();
  const dispatch=useDispatch();
  const user= useSelector(store => store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
      navigate("/");
    }).catch((error) => {
      navigate("/error")
    });
  }


  return (
    <div className="absolute w-screen px-8 py-4  bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src="https://download.logo.wine/logo/Netflix/Netflix-Logo.wine.png" alt="NetflixLogo"/>
      {user && <div className="flex">
        <img className="w-12 h-12 m-8" src={user?.photoURL} alt="logo"/>
        <button onClick={handleSignOut}>Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
