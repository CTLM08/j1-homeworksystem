import React from "react";
import { Icon } from "@iconify/react";
const Home = () => {
  return (
    <div className="flex flex-col items-center gap-8 p-10 w-full">
      {Array(10)
        .fill(0)
        .map(() => (
          <div className="rounded-md bg-zinc-800 w-full p-5">
            <div className="flex flex-row justify-between items-center">
              <div className="text-[#7289da] font-semibold">第一份作业</div>
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
            <div className="text-3xl text-white mt-2 font-bold">
              输入 · 输出
            </div>
            <div className="text-sm mt-5 leading-relaxed text-white/50">
              输入用户的身高及体重 并 输出"收到！"
            </div>
            <button className="bg-[#7289da] font-semibold p-3 pl-4 pr-3 mt-5 rounded-md text-white flex flex-row items-center gap-1.5">
              查看作业
              <Icon icon="uil:arrow-right" className="w-6 h-6" />
            </button>
          </div>
        ))}
      <div className="h-56"></div>
    </div>
  );
};

export default Home;
