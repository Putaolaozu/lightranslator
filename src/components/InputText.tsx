"use client";
import React, { useEffect, useState } from "react";
import Word from "./Word";
import { convertToWordsArray } from "@/util/wordsArrayConverter";

const TextAreaText = ({ text, textColor }: { text: string; textColor: string }) => {
  const [words, setWords] = useState([""]);

  useEffect(() => {
    const wordsArray = convertToWordsArray(text);
    setWords(wordsArray);
  }, [text]);

  return (
    <>
      {words.map((word, index) => {
        if (word === "\n" && words[index - 1] === "\n") {
          return (
            <p key={index} className="sm:text-lg lg:text-xl">
              &nbsp;
            </p>
          );
        } else if (word === "\n") {
          return <br key={index} />;
        }
        return <Word word={word} key={index} textColor={textColor} />;
      })}
    </>
  );
};

export default TextAreaText;
