import React from "react";
import Logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
const Navvnar = () => {
  return (
    <div className="hover:bg-[#7289da]  fixed transition-all justify-between w-full h-20 flex items-center  text-white p-5">
      <div className="flex flex-row gap-3 items-center w-80%">
        <img src={Logo} className="w-16 h-16" />
        初一新生作业缴交系统
        <p>·</p>
        <Icon icon="devicon:javascript" className="w-7 h-7" />
        <p>·</p>
        <div className=" flex  items-center gap-8 w-40% ml-4">
          <button>未交作业</button>
          <button>学习</button>
          <button>同学</button>
        </div>
      </div>

      <div className="flex flex-row gap-3 items-center">
        <Link to="/login">
          <div className="hover:bg-white hover:text-zinc-800 w-20 flex flex-row gap-2 justify-center items-center  rounded-md p-2 transition-all">
            登录
            <Icon icon="maki:arrow" />
          </div>
        </Link>
      </div>
    </div>
  );
};

export default Navvnar;
