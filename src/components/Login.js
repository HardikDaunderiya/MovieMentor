import { useState } from "react";
import Header from "./Header";
const Login = () => {

    const[isSignIn , setIsSignIn]=useState()

    const toggleSignInForm=()=>{
        setIsSignIn(!isSignIn);
    }

  return (
    <div>
      <Header />
      <div className="absolute">
        <img
          src="https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_small.jpg"
          alt="bg pic"
        />
      </div>
      <form className=" w-3/12 absolute p-12 bg-black my-36 mx-auto right-0 left-0 bg-opacity-80">
        <h1 className="text-white text-3xl font-bold py-4 my-4 mx-auto ">{ isSignIn ? "Sign In" :"Sign Up"}</h1>
        {!isSignIn && 
        <input
            type="text"
            placeholder="Full Name "
            className="p-4 my-4 text-white w-full bg-slate-900 rounded-lg"
        />

        }
        <input
          type="text"
          placeholder="Email Address "
          className="p-4 my-4 text-white w-full bg-slate-900 rounded-lg"
        />
        <input
          type="Password"
          placeholder="Password"
          className="p-4 my-4 text-white w-full bg-slate-900 rounded-lg"
        />
        <button className="text-white bg-red-700 p-4 my-6 w-full rounded-lg">{ isSignIn ? "Sign In" :"Sign Up"}</button>
        <p className="text-white cursor-pointer" onClick={toggleSignInForm} > { isSignIn ? "New to Netflix? Sign Up now!":"Already a User? Sign In now!"}  </p>
      </form>
    </div>
  );
};
export default Login;
