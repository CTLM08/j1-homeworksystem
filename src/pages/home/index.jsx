import React from "react";
import { Icon } from "@iconify/react";
import { collection, deleteDoc, doc } from "firebase/firestore";
import { firestore } from "../../firebase";
import { useCollection } from "react-firebase-hooks/firestore";
import { useEffect } from "react";
import { useState } from "react";
import { appContext } from "../../App";
import { useContext } from "react";
const Home = () => {
  const { user, userData, navigate, userUid } = useContext(appContext);
  const [value, loading] = useCollection(collection(firestore, "homework"));
  const [IsAdmin, setIsAdmin] = useState(false);
  const deleteHomework = async (id) => {
    await deleteDoc(doc(firestore, "homework", id));
  }
  useEffect(() => {
    if (userUid == "F0aVMmUufSNVTzvUwtxeqJQJTs33" && user) {
      setIsAdmin(true);
      console.log(IsAdmin);
    }
  }, [user]);
  return (
    <div className="flex flex-col items-center gap-8 p-10 w-full">
      {value?.docs.map((doc, index) => (
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
              {IsAdmin && (<Icon onClick={
                () => deleteHomework(doc.id)
              } icon="mi:delete" className="text-red-600 w-6 h-6 right-5" />)}
            </div>
            
          </div>
          <div className="text-3xl text-white mt-2 font-bold">
            {doc.data().title}
          </div>
          <div className="text-sm mt-5 leading-relaxed text-white/50">
            {doc.data().content}
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
