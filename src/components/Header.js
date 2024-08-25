import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import { addUser, removeUser } from "../utils/userSlice";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useEffect } from "react";
import { LOGO, SUPPORTES_LANG, USER_AVATAR } from "../utils/constants";
import GptSearch from "./GptSearch";
import { toggleGptSearch } from "../utils/gptSlice";
import { languageChange } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch= useSelector((store) => store.gpt.showGptSearch)

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };

  const handleGPTSearchClick = () => {
    dispatch(toggleGptSearch());
  };

  const handleLanguageChange=(e)=>{
      console.log(e.target.value);
      dispatch(languageChange(e.target.value))  
  }

  useEffect(() => {
    const unsubscribed = onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, displayName, email, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
    // unsubscribe
    return () => unsubscribed();
  }, []);

  return (
    <div className="absolute w-screen px-8 py-4 bg-gradient-to-b from-black z-10 flex justify-between items-center">
      {/* Logo Section */}
      <img className="w-44" src={LOGO} alt="NetflixLogo" />

      {/* User Section */}
      {user && (
        <div className="flex items-center space-x-6">
          {showGptSearch && (<select className="py-2 px-4 text-white bg-gray-900 rounded-lg" onChange={handleLanguageChange}>
            {SUPPORTES_LANG.map((lang) => (
              <option key={lang.id} value={lang.id} >
                {lang.name}
              </option>
            ))}
          </select>)}
          <button
            className="py-2 px-4 bg-purple-800 text-white rounded-lg hover:bg-purple-700 transition duration-300"
            onClick={handleGPTSearchClick}
          >
            {showGptSearch?<div>Home</div>:<div>GPT Search</div>}
          </button>

          <img
            className="w-12 h-12 border-2 border-white"
            src={USER_AVATAR}
            alt="User Avatar"
          />

          <button
            onClick={handleSignOut}
            className="text-white bg-transparent border border-white py-2 px-4 rounded-lg hover:bg-white hover:text-black transition duration-300"
          >
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
