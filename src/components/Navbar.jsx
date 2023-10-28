import React, { useEffect, useState } from "react";
import Logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
import { Link } from "react-router-dom";
import { useContext } from "react";
import { appContext } from "../App";
const Navvnar = () => {
  const [isTop, setIsTop] = useState(true);
  const { user, userData, userUid } = useContext(appContext);
  useEffect(() => {
    window.onscroll = () => setIsTop(window.scrollY < 100);
  }, []);

  return (
    <nav
      className={`fixed transition-all justify-between w-full h-20 flex items-center  text-white p-8 ${
        isTop ? "py-12" : "bg-[#7289da] py-8"
      }`}
    >
      <div className="flex flex-row gap-3 items-center w-80% font-bold">
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
        <Link
          to={
            user && userUid != "F0aVMmUufSNVTzvUwtxeqJQJTs33"
              ? `/logout`
              : userUid == "F0aVMmUufSNVTzvUwtxeqJQJTs33"
              ? "/admin"  
              : "/login"
          }
        >
          <div className="hover:bg-white hover:text-zinc-800 w-22  font-semibold flex flex-row gap-2 justify-center items-center  rounded-md p-3 transition-all">
            {user ? <div>{userData?.username}</div> : <p>登录</p>}
            <Icon icon="uil:arrow-right" className="w-6 h-6" />
          </div>
        </Link>
      </div>
    </nav>
  );
};

export default Navvnar;
