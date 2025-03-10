import React, { useContext, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from "../context/ApiContext";
import { CgUser } from "react-icons/cg";
import { ImSpinner4 } from "react-icons/im";

const ChatSec = () => {
  const { sent, input, setInput, showResult, resultData, recentPrompt, loading } = useContext(dataContext);
  const [rotate, setRotate] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sent(input);
    }
    setInput("");
  };

  const handlePlusClick = () => {
    setRotate((prev) => !prev);
  };

  return (
    <div className="relative flex flex-col w-full items-center bg-[#1E1F22] p-6">
      <div className="w-full sm:w-[70%] md:w-[65%] lg:w-[60%] h-[84vh] overflow-y-auto p-6 rounded-xl flex flex-col gap-4">
        {showResult ? (
          <>
            <div className="flex items-center gap-4 self-end bg-gray-600 p-4 rounded-lg max-w-[80%] break-words whitespace-pre-wrap">
              <CgUser className="text-white text-2xl" />
              <p className="text-white text-lg">{recentPrompt}</p>
            </div>

            <div className="flex items-center gap-4 self-start bg-gray-900 p-4 rounded-lg max-w-[80%] break-words whitespace-pre-wrap">
              {loading ? (
                <div className="flex justify-center items-center gap-2 animate-pulse">
                  <ImSpinner4 className="animate-spin text-white text-4xl" />
                  <p className="text-white text-lg font-semibold">Thinking...👁👁</p>
                </div>
              ) : (
                <p className="text-white text-lg">{resultData}</p>
              )}
            </div>
          </>
        ) : (
          <div className="flex flex-col items-center justify-center text-center mt-10">
            <h1 className="text-3xl sm:text-5xl font-bold bg-gradient-to-r from-yellow-300 to-orange-600 text-transparent bg-clip-text">
              Hi, Shabir.Dev.
            </h1>
            <h2 className="text-2xl sm:text-4xl font-semibold mt-2 bg-gradient-to-r from-pink-500 to-emerald-600 text-transparent bg-clip-text">
              What can I help you with today?
            </h2>
          </div>
        )}
      </div>

      <div className="absolute bottom-6 z-40 w-full flex justify-center">
        <form className="flex w-full sm:w-3/6 gap-4 items-center" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter your message..."
            className="flex-1 border border-gray-600 rounded-full px-6 py-3 text-white bg-[#2A2C30] focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          {input ? (
            <button
              type="submit"
              className="bg-blue-500 hover:bg-blue-600 cursor-pointer p-4 rounded-full transition duration-300"
            >
              <LuSendHorizontal className="text-white text-2xl" />
            </button>
          ) : (
            ""
          )}
          <button
            type="upload"
            className={`bg-gray-700 cursor-pointer hover:bg-gray-600 p-4 rounded-full transition-transform duration-500 ${rotate ? "rotate-90" : ""}`}
            onMouseOver={handlePlusClick}
          >
            <BiPlus className="text-white text-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatSec;