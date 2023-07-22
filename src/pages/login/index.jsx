import React from "react";
import svg from "../../assets/pc.svg";
import { Icon } from "@iconify/react";
const Login = () => {
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
            className="outline-none rounded-md p-1 w-full bg-zinc-700 ml-2 text-center text-white/60  "
            placeholder="学校账号"
          />
        </div>
        <div className="w-full flex flex-row relatvie items-center mt-5">
          <button className="absolute flex justify-center items-center bg-gray-200/60 rounded-full shadow-md w-10 h-10">
            <Icon icon="clarity:lock-solid" />
          </button>
          <input
            className="outline-none rounded-md p-1 w-full bg-zinc-700 ml-2 text-center text-white/60  "
            placeholder="密码"
          />
        </div>
        <div className="w-full h-8"></div>
        <button className="bg-zinc-700 rounded-md p-3 text-white w-full flex flex-row items-center justify-center gap-5">
          登录
          <Icon icon="maki:arrow" />
        </button>
      </div>
    </div>
  );
};

export default Login;
