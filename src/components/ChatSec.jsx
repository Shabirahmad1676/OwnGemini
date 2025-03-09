import React, { useContext, useState } from "react";
import { BiPlus } from "react-icons/bi";
import { LuSendHorizontal } from "react-icons/lu";
import { dataContext } from "../context/ApiContext";

const ChatSec = () => {
  const { sent, input, setInput } = useContext(dataContext);

  const handleSubmit = (e) => {
    e.preventDefault();
    if (input.trim()) {
      sent(input);
    }
    setInput("")
  };

  return (
    <div className="flex flex-col w-[100%] h-screen items-center justify-center bg-[#27292B]">
      <div className="flex flex-col w-[800px] h-[75vh] items-center justify-center">
        <h1 className="text-3xl font-bold text-emerald-400 ">Hi, Shabir.Dev</h1>
        <h1 className="text-3xl font-bold text-emerald-400">
          What ! can I help You...?
        </h1>
      </div>
      <div className="relative flex w-full h-[25vh] justify-center">
        <form className="flex w-[900px] gap-4 items-center justify-center mt-4" onSubmit={handleSubmit}>
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            placeholder="Enter prompt..."
            className="border rounded-2xl pl-4 w-[699px] py-3 text-black shadow-[0_10px_20px_rgba(0,0,0,0.8)] bg-white "
          />
          <button
            type="submit"
            className="bg-white p-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            <LuSendHorizontal className="text-black text-xl cursor-pointer rounded-2xl" />
          </button>
          <button
            type="button"
            className="bg-white p-4 rounded-full shadow-[0_10px_20px_rgba(0,0,0,0.8)]"
          >
            <BiPlus className="text-black text-xl cursor-pointer rounded-2xl" />
          </button>
        </form>
      </div>
    </div>
  );
};

export default ChatSec;