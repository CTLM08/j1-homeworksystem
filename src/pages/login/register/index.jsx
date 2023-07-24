import React, { useState } from "react";
import { Icon } from "@iconify/react";
import { createUserWithEmailAndPassword } from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { auth, firestore } from "../../../firebase";
const Register = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const [userName, setUserName] = useState("");
  const signInWithEmail = () => {
    createUserWithEmailAndPassword(auth, email, password)
      .then(async (userCredential) => {
        const { user } = userCredential;
        await setDoc(doc(firestore, "user", user.uid), {
          username: userName,
          email: email,
        });
      })
      .catch((err) => {
        throw err;
        const errorCode = err.code;
        switch (errorCode) {
          case "auth/email-already-in-use":
            setError("email already in use");
            break;
          case "auth/invalid-email":
            setError("invalid email");
            break;
          case "auth/weak-password":
            setError("weak password");
            break;
          default:
            setError("something went wrong");
            break;
        }

        // ..
      });
  };
  return (
    <div className="p-10 flex justify-center items-center flex-col ">
      <div className="w-1/3 bg-zinc-800 rounded-md p-5 mt-10 relative flex justify-center items-center flex-col">
        <button className="bg-white/60 shadow-md rounded-full absolute -top-10 w-16 h-16 flex justify-center items-center">
          <Icon
            icon="icon-park-outline:code-computer"
            className="text-zinc-800 w-8 h-8"
          />
        </button>
        <div className="w-full h-14" />
        <div className="w-full flex flex-row relatvie items-center">
          <button className="absolute flex justify-center items-center bg-gray-200/60 rounded-full shadow-md w-10 h-10">
            <Icon icon="humbleicons:user" />
          </button>
          <input
            className="outline-none rounded-md p-1 w-full bg-zinc-700 ml-2 text-center text-white/60 font-semibold "
            placeholder="学校账号"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-row relatvie items-center mt-5">
          <button className="absolute flex justify-center items-center bg-gray-200/60 rounded-full shadow-md w-10 h-10">
            <Icon icon="humbleicons:user" />
          </button>
          <input
            className="outline-none rounded-md p-1 w-full bg-zinc-700 ml-2 text-center text-white/60 font-semibold "
            placeholder="姓名"
            value={userName}
            onChange={(e) => setUserName(e.target.value)}
          />
        </div>
        <div className="w-full flex flex-row relatvie items-center mt-5">
          <button className="absolute flex justify-center items-center bg-gray-200/60 rounded-full shadow-md w-10 h-10 ">
            <Icon icon="clarity:lock-solid" />
          </button>
          <input
            className="outline-none rounded-md p-1 w-full bg-zinc-700 ml-2 text-center text-white/60 font-semibold "
            placeholder="密码"
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <div className="w-full h-8"></div>
        <button
          onClick={() => {
            signInWithEmail();
          }}
          className=" rounded-md font-semibold bg-[#7289da] mt-4    p-3 text-white w-full flex flex-row items-center justify-center gap-5"
        >
          注册
          <Icon icon="maki:arrow" />
        </button>
        <div className="h-4" />
      </div>
      <div className="h-8"></div>
    </div>
  );
};

export default Register;
