import { useRef, useState } from "react";
import Header from "./Header";
import { FormValidation } from "../utils/FormValidation";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";
import { auth } from "../utils/firebase";
import { Navigate, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { addUser } from "../utils/userSlice";

const Login = () => {
  const navigate = useNavigate();
  const [isSignIn, setIsSignIn] = useState(true);
  const [isErrorMsg, setIsErrorMsg] = useState(null);
  const dispatch =useDispatch();

  const name = useRef(null);
  const email = useRef(null);
  const password = useRef(null);

  const handleButtonClick = () => {
    const msg = FormValidation(email.current.value, password.current.value);
    setIsErrorMsg(msg);

    if (msg) return;

    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed up
          const user = userCredential.user;
          updateProfile(user, {
            displayName: name.current.value ,
            photoURL: "https://www.infinityvision.in/student/images/results/HARDIK%20DAUNDRIYA.webp",
          })
            .then(() => {
              const { uid, displayName, email,photoURL } = auth.currentUser;
              dispatch(addUser({ uid: uid, email: email, displayName: displayName ,photoURL : photoURL}));
              navigate("/browse");
            })
            .catch((error) => {
              setIsErrorMsg(error.msg)
            });

          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMsg(errorCode + " " + errorMessage);
        });
    } else {
      signInWithEmailAndPassword(
        auth,
        email.current.value,
        password.current.value
      )
        .then((userCredential) => {
          // Signed in
          const user = userCredential.user;
          navigate("/browse");
          console.log(user);
        })
        .catch((error) => {
          const errorCode = error.code;
          const errorMessage = error.message;
          setIsErrorMsg(errorCode + errorMessage);
        });
    }
  };

  const toggleSignInForm = () => {
    setIsSignIn(!isSignIn);
  };

  return (
    <div>
      <Header />
      <div className="absolute ">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg"
          alt="bg pic"
        />
      </div>
      <form
        onSubmit={(e) => e.preventDefault()}
        className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-85"
      >
        <h1 className="text-white text-3xl font-bold py-4 my-4 mx-auto ">
          {isSignIn ? "Sign In" : "Sign Up"}
        </h1>
        {!isSignIn && (
          <input
          ref={name}
            type="text"
            placeholder="Full Name "
            className="p-4 my-4 text-white w-full bg-slate-900 rounded-lg"
          />
        )}
        <input
          ref={email}
          type="text"
          placeholder="Email Address "
          className="p-4 my-4 text-white w-full bg-slate-900 rounded-lg"
        />
        <input
          ref={password}
          type="Password"
          placeholder="Password"
          className="p-4 my-4 text-white w-full bg-slate-900 rounded-lg"
        />
        <p className="text-red-500 font-bold text-lg">
          {isErrorMsg && (
            <>
              <img
                src="/errorSymbol.png"
                alt="Error Logo"
                className="inline-block w-6 h-6"
              />
              {isErrorMsg}
            </>
          )}
        </p>
        <button
          className="text-white bg-red-700 p-4 my-6 w-full rounded-lg"
          onClick={handleButtonClick}
        >
          {isSignIn ? "Sign In" : "Sign Up"}
        </button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm}>
          {" "}
          {isSignIn
            ? "New to Netflix? Sign Up now!"
            : "Already a User? Sign In now!"}{" "}
        </p>
      </form>
    </div>
  );
};
export default Login;
