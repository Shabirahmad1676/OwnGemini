import React, { createContext, useState, useEffect } from "react";
import run from "../Gemini";

export const dataContext = createContext();

const ApiContext = ({ children }) => {
  const [input, setInput] = useState("");
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setResultData] = useState("");
  const [recentPrompt, setRecentPrompt] = useState("");
  const [prevPrompt, setPrevPrompt] = useState([]);

  // Load previous prompts from localStorage when the app starts
  useEffect(() => {
    const storedPrompts = JSON.parse(localStorage.getItem("prevPrompt")) || [];
    setPrevPrompt(storedPrompts);
  }, []);

  function newChat() {
    setLoading(false);
    setShowResult(false);
  }

  const sent = async (prompt) => {
    try {
      setResultData("");
      setRecentPrompt(input);
      setShowResult(true);
      setLoading(true);

      // Add new prompt to prevPrompt state
      const updatedPrompts = [input, ...prevPrompt];

      setPrevPrompt(updatedPrompts);
      localStorage.setItem("prevPrompt", JSON.stringify(updatedPrompts)); // Save to localStorage

      let response = await run(prompt);
      setResultData(response.split("**") && response.split("*"));
      setLoading("");
    } catch (error) {
      console.error("Error sending prompt:", error);
    }
  };

  const data = {
    sent,
    input,
    setInput,
    loading,
    setLoading,
    resultData,
    setResultData,
    showResult,
    setShowResult,
    recentPrompt,
    setRecentPrompt,
    prevPrompt,
    setPrevPrompt,
    newChat
  };

  return <dataContext.Provider value={data}>{children}</dataContext.Provider>;
};

export default ApiContext;