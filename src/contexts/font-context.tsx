// context/FontContext.tsx
"use client";

import { createContext, useContext, useState } from "react";

const FontContext = createContext({
  fontClass: "font-inter",
  setFontClass: (value: string) => {},
});

export const useFont = () => useContext(FontContext);

export const FontProvider = ({ children }: { children: React.ReactNode }) => {
  const [fontClass, setFontClass] = useState("font-inter");

  return (
    <FontContext.Provider value={{ fontClass, setFontClass }}>
      <div className={fontClass}>{children}</div>
    </FontContext.Provider>
  );
};
