import React from "react";
import logo from "../assets/logo.png";
import { Icon } from "@iconify/react";
const Footer = () => {
  function GoToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="w-full p-5">
      <hr className="w-full h-0.5 bg-white/40" />
      <div className="p-5 flex flex-row">
        <div>
          <button className="flex items-center">
            <img src={logo} className="w-24 h-24" />
            <p className="font-bold text-2xl text-white">
              新山宽柔中学电脑协会
            </p>
          </button>
          <p className="text-white  font-semibold">
            © 2022 ‒ 2023 新山宽柔中学电脑协会 版权所有{" "}
          </p>
          <p className="text-white font-semibold">电协43届研教共同制作</p>
        </div>

        <div className=" p-6 flex flex-row ml-10 gap-5 items-start">
          <button className="items-center justify-start flex flex-col ">
            <div className="font-semibold text-white w-40 text-left text-xl">
              制作团队
            </div>
            <p className="text-white font-semibold  w-40  text-left">
              蔡陈礼詺
            </p>
            <div className="font-semibold text-white w-40 text-left mt-5 text-xl">
              客串 · 救援小队
            </div>
            <p className="text-white font-semibold  w-40 text-left">谢品文</p>
          </button>
          <button className="ml-10">
            <div className="font-semibold text-white w-40 text-xl text-left">
              电协网页
            </div>
            <p className="text-white font-semibold w-40 text-left">电协官网</p>
            <div className="font-semibold text-white w-40 text-xl text-left mt-5">
              Github
            </div>
            <p className="text-white font-semibold w-40 text-left">
              <a
                href="https://github.com/CTLM08"
                className="text-white font-semibold text-sm w-32 text-left"
              >
                蔡陈礼詺
              </a>
            </p>
            <p className="text-white font-semibold w-40 text-left">
              <a
                href="https://github.com/melvinchia3636"
                className="text-white font-semibold text-sm w-32 text-left "
              >
                谢品文
              </a>
            </p>
          </button>
          <button>
            <div className="text-white text-2xl font-bold w-46 text-left">
              关注我们
            </div>
            <p className="text-white font-semibold w-46 text-left">
              新山宽柔中学电脑协会
            </p>
            <div className="flex flex-row text-white gap-8 mt-4">
              <button>
                <a>
                  <Icon icon="uil:instagram-alt" className="w-10 h-10" />
                </a>
              </button>
              <button>
                <a>
                  <Icon icon="uil:facebook" className="w-10 h-10" />
                </a>
              </button>
              <button>
                <a>
                  <Icon icon="uil:youtube" className="w-10 h-10" />
                </a>
              </button>
            </div>
          </button>
          <div className="ml-10">
            <h1 className="text-2xl font-bold text-white">还不赶紧敲代码？</h1>
            <button
              className="flex flex-row items-center text-white font-semibold mt-8 text-xl w-32 bg-[#7289da] p-2 justify-center  rounded-md gap-3"
              onClick={() => {
                GoToTop();
              }}
            >
              开始
              <Icon icon="uil:arrow-right" className="w-8 h-8" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
