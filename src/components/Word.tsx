"use client";
import React, { useState } from "react";
import WordDefPage from "./WordDefPage";

const Word = ({ word, textColor }: { word: string; textColor: string }) => {
  const [openDef, setOpenDef] = useState(false);
  const getDefinition = () => {
    setOpenDef(true);
  };

  return (
    <>
      <span className="relative inline-block z-20">
        {/[A-Za-z\-]/.test(word) ? (
          <button
            type="button"
            className={`word-btn sm:text-lg lg:text-xl text-${textColor} active:scale-95`}
            onClick={getDefinition}>
            {word}
          </button>
        ) : word === " " ? (
          <span className="sm:text-lg lg:text-xl">&nbsp;</span>
        ) : (
          <span className={`sm:text-lg lg:text-xl text-${textColor}`}>{word}</span>
        )}
      </span>
      {openDef && /[A-Za-z\-]/.test(word) && <WordDefPage word={word} setOpenWin={setOpenDef} />}
    </>
  );
};

export default Word;
