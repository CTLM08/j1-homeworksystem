import React from "react";
import { useContext } from "react";
import { appContext } from "../../App";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const LogOut = () => {
  const { user, userData, navigate } = useContext(appContext);
  const signOut = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
      navigate("/login");
    });
  };

  return (
    <div className="w-full p-10  flex justify-center items-center flex-col gap-3">
      <h1 className="text-white font-bold text-4xl mt-10">
        {userData?.username}
      </h1>
      <p className="mt-3 text-white/60 font-semibold">{userData.email}</p>
      <div className="flex flex-row w-full  items-center justify-center mt-2 gap-2">
        <Link to="/">
          <button className=" text-xl h-14 w-40 text-white font-semibold border-2">
            继续做作业
          </button>
        </Link>
        <button
          className=" w-40 text-xl h-14  font-semibold bg-white"
          onClick={() => signOut()}
        >
          登出
        </button>
      </div>
    </div>
  );
};

export default LogOut;
