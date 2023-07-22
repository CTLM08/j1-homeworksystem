import React from "react";
import { Icon } from "@iconify/react";
const Home = () => {
  return (
    <div className="flex justify-center items-center flex-row p-10 h-screen w-full">
      <div className="rounded-md bg-zinc-800 w-full p-5">
        <div className="flex flex-row justify-between items-center">
          <div className="text-[#7289da]">第一份作业</div>
          <div className="flex flex-row items-center gap-4">
            <p className="text-white/60 hover:text-white/80 transition-all">
              已交
            </p>
            <Icon
              icon="ic:twotone-settings-ethernet"
              className="text-white/50 hover:text-white transition-all w-6 h-6"
            />
          </div>
        </div>
        <div className="text-4xl text-white mt-2">输入 · 输出</div>
        <div className="text-sm mt-5 leading-relaxed text-white/50">
          输入用户的身高及体重 并 输出"收到！"
        </div>
        <button className="bg-[#7289da]  p-2 mt-5 rounded-sm text-white flex flex-row items-center gap-2">
          查看作业
          <Icon icon="maki:arrow" />
        </button>
      </div>
      <div></div>
    </div>
  );
};

export default Home;
