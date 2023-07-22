import React from "react";
import logo from "../assets/logo.png";
const Footer = () => {
  return (
    <div className="absolute bottom-0 w-full p-5">
      <hr className="w-full h-0.5 bg-white/40" />
      <div className="p-5 flex flex-row">
        <div>
          <button className="flex items-center">
            <img src={logo} className="w-16 h-16" />
            <p className="font-bold text-xl text-white">新山宽柔中学电脑协会</p>
          </button>
          <p className="text-white text-sm font-semibold">
            © 2022 ‒ 2023 新山宽柔中学电脑协会 版权所有{" "}
          </p>
          <p className="text-white font-semibold   text-sm">
            电协43届研教共同制作
          </p>
        </div>

        <div className=" p-6 flex flex-row ml-10 gap-5 items-start">
          <button className="items-center justify-start flex flex-col ">
            <div className="font-semibold text-white w-32 text-left">
              制作团队
            </div>
            <p className="text-white font-semibold text-sm w-32 text-left">
              蔡陈礼詺
            </p>
            <div className="font-semibold text-white w-32 text-left mt-5">
              客串 · 救援小队
            </div>
            <p className="text-white font-semibold text-sm w-32 text-left">
              谢品文
            </p>
          </button>
          <button className="ml-10">
            <div className="font-semibold text-white w-32 text-left">
              电协网页
            </div>
            <p className="text-white font-semibold text-sm w-32 text-left">
              电协官网
            </p>
            <div className="font-semibold text-white w-32 text-left mt-5">
              Github
            </div>
            <p className="text-white font-semibold text-sm w-32 text-left">
              <a
                href="https://github.com/CTLM08"
                className="text-white font-semibold text-sm w-32 text-left"
              >
                蔡陈礼詺
              </a>
            </p>
            <p className="text-white font-semibold text-sm w-32 text-left">
              <a
                href="https://github.com/melvinchia3636"
                className="text-white font-semibold text-sm w-32 text-left "
              >
                谢品文
              </a>
            </p>
          </button>
        </div>
      </div>
    </div>
  );
};

export default Footer;
