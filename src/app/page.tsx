"use client";
import PopupBtn from "@/components/ManualBtn";
import TextAreaText from "@/components/InputText";
import Vocabulary from "@/components/Vocabulary";
import { TranslationProps } from "@/types/TranslationProps";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import InputText from "@/components/InputText";
import { useResize } from "@/hooks/useResize";

export default function Home() {
  const [search, setSearch] = useState("");
  const [translationResults, setTranslationResults] = useState<TranslationProps>();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const [storageCleared, setStorageCleared] = useState(false);
  const [textareaRef, textareaWrapperRef] = useResize(); // automatically resize the textarea

  // handle searching event
  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (search) {
      setIsSubmitting(true);

      //if user has searched before, get the resule from localstorage
      const preSearchResult = localStorage.getItem(search);
      if (preSearchResult) {
        setTranslationResults(JSON.parse(preSearchResult));
        setIsSubmitting(false);
      }
      // if not, fetch the result
      else {
        fetch(`/api/trans?q=${search}`)
          .then((response) => {
            return response.json();
          })
          .then((result) => {
            if (result.wordTranslation?.title) {
              setTranslationResults({ ...result, wordTranslation: result.wordTranslation.title });
            } else if (!result.BaiduResult) {
              setTranslationResults(result);
            } else {
              localStorage.setItem(search, JSON.stringify(result));
              setTranslationResults(result);
            }

            setIsSubmitting(false);
          })

          .catch((error) => {
            console.log(error);
            alert(error);
            setIsSubmitting(false);
          });
      }
    }
  };

  const clearSearch = () => {
    setSearch("");
    textareaRef?.current?.focus();
  };

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(translationResults?.BaiduResult || "");
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  const clearStorage = () => {
    setStorageCleared(true);
    localStorage.clear();
    setTimeout(() => {
      setStorageCleared(false);
    }, 2000);
  };

  return (
    <>
      <main className="flex min-h-[92vh] flex-col items-center justify-center gap-5">
        <hgroup className="flex flex-col justify-center items-center gap-2 w-full mt-12 mb-4">
          <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold lg:font-extrabold font-mono italic tracking-tight">
            Ligh<span className="text-red-500">t</span>ranslator
          </h1>
          <PopupBtn />x
        </hgroup>
        <form onSubmit={handleSubmit} className="flex gap-2 flex-col w-[92vw] max-w-[1024px] m-4">
          <div
            ref={textareaWrapperRef as React.LegacyRef<HTMLDivElement>}
            className={`relative h-10 sm:h-28 p-2 md:p-6 box-border ${isSubmitting && "blur-[1px]"}`}>
            <TextAreaText text={search} textColor="[rgba(0,0,0,0)]" />
            <textarea
              id="query"
              name="query"
              placeholder="输入你想翻译的.."
              className={`textarea dark:bg-slate-800 absolute top-0 left-0 z-10`}
              value={search}
              onChange={handleChange}
              ref={textareaRef as React.LegacyRef<HTMLTextAreaElement>}
              disabled={isSubmitting}
            />

            {search === "" || (
              <Image
                src="/assets/close.svg"
                alt="clear input"
                width={22}
                height={22}
                className="clear-btn"
                onClick={clearSearch}
                title="clear all"
              />
            )}
          </div>

          <button type="submit" className="translate-button">
            {isSubmitting ? "稍等..." : "翻译"}
          </button>
        </form>
        {translationResults?.BaiduResult && (
          <section className="dark:bg-slate-900 bg-slate-50 rounded p-2 my-4 sm:p-6 w-[92vw] max-w-[1024px] flex flex-col relative sm:text-lg">
            <button
              type="button"
              title="copy"
              onClick={handleCopy}
              className={`copy-btn ${
                copied ? "copied" : "dark:hover:bg-slate-800 hover:bg-slate-200 transition-all cursor-pointer"
              }`}>
              <Image
                src={copied ? "/assets/tick.svg" : "/assets/copy.svg"}
                width={18}
                height={18}
                alt={copied ? "already copied" : "copy translation"}></Image>
            </button>
            <p className="text-slate-500 mb-2">译文:</p>
            <p className="dark:text-slate-200 text-left">
              <InputText text={translationResults.BaiduResult} textColor="inherit" />
            </p>
          </section>
        )}
        {translationResults?.wordTranslation && (
          <div className="w-[92vw] max-w-[1024px]">
            <Vocabulary Vocabulary={translationResults.wordTranslation} />
          </div>
        )}
      </main>
      <footer className="w-full mt-4 mb-2 flex justify-center items-center gap-4 min-h-[6vh]">
        <p className="text-center italic text-sm font-thin opacity-40">
          <Image src="/assets/github-mark.png" alt="github mark" width={20} height={20} className="inline-block mx-1" />
          <Link href="https://github.com/Putaolaozu/light-translater.git" className="underline font-light">
            Github
          </Link>
        </p>
        <p className="text-center italic text-sm font-thin opacity-40">
          {storageCleared ? (
            <svg
              fill="none"
              stroke-linecap="round"
              stroke-linejoin="round"
              strokeWidth="1.5"
              viewBox="0 0 24 24"
              width="14"
              height="14"
              version="1.1"
              xmlns="http://www.w3.org/2000/svg"
              className="dark:stroke-slate-200 stroke-slate-900">
              <path d="M20 6L9 17l-5-5" />
            </svg>
          ) : (
            <button type="button" className="underline font-light" onClick={clearStorage}>
              清除缓存
            </button>
          )}
        </p>
      </footer>
    </>
  );
}
