import React, { createContext, useState } from "react";
import run from "../Gemini";

export const dataContext = createContext();

const ApiContext = ({ children }) => {
  const [input, setInput] = useState("");

  const sent = async (prompt) => {
    try {
      await run(prompt);
    } catch (error) {
      console.error("Error sending prompt:", error);
    }
  };

  const data = {
    sent,
    input,
    setInput,
  };

  return (
    <dataContext.Provider value={data}>
      {children}
    </dataContext.Provider>
  );
};

export default ApiContext;