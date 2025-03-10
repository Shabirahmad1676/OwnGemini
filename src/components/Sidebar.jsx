import React, { useContext, useState } from "react";
import { FaPlus } from "react-icons/fa";
import { FaRegMessage } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { dataContext } from "../context/ApiContext";

const Sidebar = () => {
  const [extend, setExtend] = useState(false);
  const { sent, prevPrompt, newChat } = useContext(dataContext);

  async function loadPrev(prompt) {
    await sent(prompt);
  }

  return (
    <>
      {/* Hamburger Menu Icon */}
      <GiHamburgerMenu
        className="ml-1 cursor-pointer absolute left-2 top-4 z-30 text-white"
        onClick={() => setExtend((prev) => !prev)}
      />

      {/* Sidebar */}
      <div
        className={`bg-[#0b0b0cef] cursor-pointer h-screen overflow-auto flex flex-col items-start p-4 pt-12 gap-4 shadow-2xl transition-all duration-500 ${
          extend ? "w-[190px] border-r-4 border-gray-800" : "w-[50px] opacity-70"
        }`}
      >
        {extend && (
          <>
            {/* New Chat Button */}
            <div
              onClick={() => newChat()}
              className="flex items-center justify-center gap-2 bg-gray-200 rounded-2xl p-2 hover:bg-gray-300 transition"
            >
              <FaPlus />
              <p className="text-xs">New Chat</p>
            </div>

            {/* Previous Chat Prompts */}
            {prevPrompt.length > 0 ? (
              prevPrompt.map((item, index) => (
                <div
                  onClick={() => loadPrev(item)}
                  key={index}
                  className="cursor-pointer flex items-center justify-center gap-3 bg-gray-200 rounded-2xl p-2 hover:bg-gray-300 transition"
                >
                  <FaRegMessage />
                  <p className="text-xs">{item.slice(0, 8)}...</p>
                </div>
              ))
            ) : (
              <p className="text-xs text-gray-400">No previous chats</p>
            )}
          </>
        )}
      </div>
    </>
  );
};

export default Sidebar;