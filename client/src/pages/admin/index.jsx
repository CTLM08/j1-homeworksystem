import React, { useContext } from "react";
import { appContext } from "../../App";
import { Link } from "react-router-dom";
import { auth } from "../../firebase";

const Admin = () => {
  const { user, userData, navigate, userUid } = useContext(appContext);
  const signOut = () => {
    auth.signOut().then(() => {
      // Sign-out successful.
      navigate("/login");
    });
  };
  return (
    <div className="w-full   flex justify-center items-center flex-col gap-3">
      {user && userUid == "F0aVMmUufSNVTzvUwtxeqJQJTs33" ? (
        <div className="w-full p-10  flex justify-center items-center flex-col gap-3">
          <h1 className="text-white font-bold text-4xl mt-10">
            {userData?.username}
          </h1>
          <p className="mt-3 text-white/60 font-semibold">{userData.email}</p>
          <Link to="/addhomework">
            <button className=" text-xl h-14 w-[328px] text-white font-semibold border-2 hover:bg-white hover:text-black transition-all">
              添加作业
            </button>
          </Link>
          <div className="flex flex-row w-full  items-center justify-center mt-2 gap-2">
            <Link to="/">
              <button className=" text-xl h-14 w-40 text-white font-semibold border-2">
                继续管理
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
      ) : (
        <p className="text-white font-semibold">无权访问</p>
      )}
    </div>
  );
};

export default Admin;
