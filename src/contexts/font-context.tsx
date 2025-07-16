"use client";

import React, { createContext, useContext, useEffect, useState } from "react";

type FontContextType = {
  fontClass: string;
  setFontClass: (value: string) => void;
  isFontReady: boolean;
};

const FontContext = createContext<FontContextType>({
  fontClass: "font-inter",
  setFontClass: () => {},
  isFontReady: false,
});

export const useFont = () => useContext(FontContext);

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontClass, setFontClassState] = useState("font-merriweather");
  const [isFontReady, setIsFontReady] = useState(false);

  useEffect(() => {
    const storedFont = localStorage.getItem("font");
    if (storedFont) {
      setFontClassState(storedFont);
    }
    setIsFontReady(true);
  }, []);

  useEffect(() => {
    if (isFontReady) {
      localStorage.setItem("font", fontClass);
    }
  }, [fontClass, isFontReady]);

  const setFontClass = (value: string) => {
    setFontClassState(value);
  };

  return (
    <FontContext.Provider value={{ fontClass, setFontClass, isFontReady }}>
      <div className={fontClass}>{children}</div>
    </FontContext.Provider>
  );
};
