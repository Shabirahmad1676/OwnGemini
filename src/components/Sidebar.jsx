import React, { useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  return (
    <>
      <GiHamburgerMenu
        className="ml-1 cursor-pointer absolute left-4 top-4 z-30 text-white"
        onClick={() => setExtend((prev) => !prev)}
      />
      {extend && (
        <div className="bg-[#27292B] h-screen w-[190px] overflow-auto flex flex-col items-start p-4 pt-12 gap-4 shadow-2xl border-r-4 border-white">
          <div className="flex items-center justify-center gap-2 bg-gray-200 rounded-2xl p-2">
            <FaPlus />
            <p className="text-xs">New Chat</p>
          </div>

          <div className="flex items-center justify-center gap-3 bg-gray-200 rounded-2xl p-2">
            <FaRegMessage />
            <p className="text-xs">Who are You</p>
          </div>
        </div>
      )}
    </>
  );
};

export default Sidebar;
