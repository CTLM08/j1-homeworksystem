import { Icon } from "@iconify/react";
import { addDoc, collection, doc, setDoc } from "firebase/firestore";
import React, { useContext } from "react";
import { useState } from "react";
import { v4 } from "uuid";
import { firestore } from "../../firebase";
import { appContext } from "../../App";

const AddHomeWork = () => {
  const { user, userData, navigate, userUid } = useContext(appContext);
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const [result, setResult] = useState("");
  const [loading, setLoading] = useState(false);
  function textAreaAdjust(element) {
    element.style.height = "1px";
    element.style.height = 25 + element.scrollHeight + "px";
  }
  const Add = async () => {
    setLoading(true);
    await addDoc(collection(firestore,'homework'), {
      title: title,
      content: content,
      result: result,
    }).then(() => { 
      setLoading(false);
      navigate("/");
    });
  };
  return (
    <div className="w-full p-10 flex flex-col">
      <div className="text-white text-4xl font-bold">添加新作业</div>
      <p className=" font-semibold mt-2 text-[#7289da]">
        研教，准备好折磨初一新生了吗？
      </p>
      <p className="text-2xl mt-5 font-bold text-white">Title</p>
      <input
        className="outline-none w-full mt-3 bg-zinc-900 h-16 border-2 text-white  p-5 boder-white font-semibold"
        value={title}
        onChange={(e) => setTitle(e.target.value)}
      />

      <p className="text-2xl mt-5 font-bold text-white">Content</p>
      <textarea
        value={content}
        onChange={(e) => setContent(e.target.value)}
        onKeyUp={(e) => textAreaAdjust(e.target)}
        className="overflow-hidden outline-none resize-none w-full mt-3 bg-zinc-900 h-16 border-2 text-white  p-5 boder-white font-semibold"
      ></textarea>
      <p className="text-2xl mt-5 font-bold text-white">Result</p>
      <textarea
        value={result}
        onChange={(e) => setResult(e.target.value)}
        onKeyUp={(e) => textAreaAdjust(e.target)}
        className="overflow-hidden outline-none resize-none w-full mt-3 bg-zinc-900 h-16 border-2 text-white  p-5 boder-white font-semibold"
      ></textarea>
      <button
        onClick={() => {
          loading ? "" : Add();
        }}
        className="w-full flex items-center justify-center gap-3 hover:gap-8 text-xl text-white font-bold mt-5 p-5 border-2 border-white hover:bg-white hover:text-black transition-all"
      >
        {loading ? (
          <p>
            <Icon icon="eos-icons:loading" className="w-6 h-6" />
          </p>
        ) : (
          <div className="flex items-center justify-center gap-3 hover:gap-8 transition-all w-full">
            添加新作业
            <Icon icon="uil:arrow-right" className="w-6 h-6" />
          </div>
        )}
      </button>
    </div>
  );
};

export default AddHomeWork;
