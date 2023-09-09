"use client";
import React, { useEffect, useRef, useState } from "react";
import Vocabulary from "./Vocabulary";
import Image from "next/image";
import { TranslationProps } from "@/types/TranslationProps";

const WordDefPage = ({ word, setOpenWin }: { word: string; setOpenWin: (value: boolean) => void }) => {
  const [translationResults, setTranslationResults] = useState<TranslationProps>();
  const [isSubmitting, setisSubmitting] = useState(false);

  const wordPageRef = useRef<HTMLDivElement>(null);
  const closeBtnRef = useRef<SVGSVGElement>(null);

  const closeWin = (e: MouseEvent) => {
    const dimensions = wordPageRef?.current?.getBoundingClientRect() as DOMRect;
    if (
      e.clientX < dimensions.left ||
      e.clientX > dimensions.right ||
      e.clientY < dimensions.top ||
      e.clientY > dimensions.bottom
    ) {
      wordPageRef.current?.classList.add("animate-squizeOut");
      closeBtnRef.current?.classList.add("animate-fadeOut");
      setTimeout(() => {
        setOpenWin(false);
      }, 350);
    }
  };

  useEffect(() => {
    setisSubmitting(true);

    //if there is localStorage, get it, rather than fetch it from the server
    const localWord = localStorage.getItem(word);
    if (localWord) {
      setTranslationResults(JSON.parse(localWord));
      setisSubmitting(false);
    } else {
      fetch(`/api/trans?q=${word}&mode=word`)
        .then((response) => {
          return response.json();
        })
        .then((result) => {
          if (result.wordTranslation.title) {
            setTranslationResults({ ...result, wordTranslation: result.wordTranslation.title });
          } else {
            localStorage.setItem(word, JSON.stringify(result));
            setTranslationResults(result);
          }
          setisSubmitting(false);
        })
        .catch((error) => {
          console.log(error);
          setTranslationResults(error.message);
          setisSubmitting(false);
        });
    }
    setTimeout(() => {
      window.addEventListener("click", closeWin);
    }, 200);
    return () => {
      window.removeEventListener("click", closeWin);
    };
  }, []);

  return (
    <div className="w-[100vw] h-[100vh] fixed top-0 left-0 bg-slate-500 bg-opacity-20 flex backdrop-blur-sm justify-center items-center z-50">
      <div className="flex justify-center flex-col items-center max-w-64 m-4 my-auto z-50" ref={wordPageRef}>
        <div className="p-4 rounded bg-slate-200 dark:bg-slate-900 max-h-[65vh] overflow-auto z-50 animate-squize">
          {isSubmitting ? (
            <Image src="/assets/loading.svg" alt="loading" width={40} height={40} className="mx-auto" />
          ) : (
            <svg
              ref={closeBtnRef}
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 457 390"
              className="absolute top-6 h-6 sm:h-8  dark:stroke-slate-200 right-6 hover:fill-slate-500 cursor-pointer transition-all active:scale-95 animate-fadeIn"
              onClick={() => {
                setOpenWin(false);
              }}>
              <path d="M20.2639 368.922L436.093 20" stroke="black" stroke-width="40" stroke-linecap="round" />
              <path d="M435.829 369.767L20 20.8442" stroke="black" stroke-width="40" stroke-linecap="round" />
            </svg>
          )}
          {translationResults?.wordTranslation && (
            <>
              <Vocabulary Vocabulary={translationResults.wordTranslation} />
            </>
          )}
        </div>
      </div>
    </div>
  );
};

export default WordDefPage;
