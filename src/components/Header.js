import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom"
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { LOGO, USER_AVATAR } from "../utils/constants";

const Header = () => {
  const navigate =useNavigate();
  const dispatch=useDispatch();
  const user= useSelector(store => store.user);

  const handleSignOut=()=>{
    signOut(auth).then(() => {
    }).catch((error) => {
      navigate("/error")
    });
  }

  useEffect(() => {
    const unsubscribed=onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email,photoURL } = user;
        dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL : photoURL}));
        navigate("/browse")
      } else {
        dispatch(removeUser());
        navigate("/")
      }
    });
    // unsubscribe 
    return ()=>unsubscribed();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-4  bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44 " src={LOGO} alt="NetflixLogo"/>
      {user && <div className="flex">
        <img className="w-12 h-12 m-8" src={USER_AVATAR} alt="logo"/>
        <button onClick={handleSignOut} className="text-white">Sign Out</button>
      </div>}
    </div>
  )
}

export default Header
