"use client";
import Vocabulary from "@/components/Vocabulary";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [translationResults, setTranslationResults] = useState({
    BaiduResult: "",
    wordTranslation: [
      {
        word: "",
        phonetic: "",
        phonetics: [
          {
            text: "",
            audio: "",
          },
        ],
        origin: "",
        meanings: [
          {
            partOfSpeech: "",
            definitions: [
              {
                definition: "",
                synonyms: [],
                antonyms: [],
              },
            ],
            synonyms: [],
            antonyms: [],
          },
        ],
        license: { name: "", url: "" },
        sourceUrls: [""],
      },
    ],
  });
  const [isSubmitting, setisSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);
  const textareaRef = useRef<HTMLTextAreaElement>(null);

  const handleChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setisSubmitting(true);
    fetch(`/api/trans?q=${search}`)
      .then((response) => {
        return response.json();
      })
      .then((result) => {
        setTranslationResults(result);
        setisSubmitting(false);
      })

      .catch((error) => console.log(error));
  };

  const clearSearch = () => {
    setSearch("");
    textareaRef?.current?.focus();
  };

  const handleCopy = () => {
    setCopied(true);
    navigator.clipboard.writeText(translationResults.BaiduResult);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      <main className="flex min-h-[93vh] flex-col items-center justify-center gap-5">
        <hgroup className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl lg:text-3xl font-bold mt-4">纯粹是翻译</h1>
          <p className="text-slate-400">(中译英，其他译中，单个单词显示词典)</p>
        </hgroup>
        <form onSubmit={handleSubmit} className="relative flex gap-2 flex-col w-[92vw] max-w-[1024px] m-4">
          <textarea
            id="query"
            name="query"
            placeholder="输入你想翻译的.."
            className="dark:text-slate-200 sm:text-lg lg:text-xl w-full h-28 sm:h-[256px] md:h-[480px] lg:h-[600px] dark:bg-slate-800 rounded p-2 md:p-6 outline-none border-none placeholder:text-sm sm:placeholder:text-lg"
            value={search}
            onChange={handleChange}
            ref={textareaRef}
          />

          {search === "" || (
            <Image
              src="/assets/close.svg"
              alt="clear input"
              width={22}
              height={22}
              className="absolute bottom-16 right-2 sm:right-6 cursor-pointer dark:invert opacity-60 hover:opacity-100"
              onClick={clearSearch}
              title="clear all"
            />
          )}

          <button
            type="submit"
            className="dark:border-slate-600 text-slate-100 dark:text-slate-300 border-spacing-1 dark:border-2 rounded bg-blue-500 dark:bg-blue-800 p-2 hover:bg-blue-400 transition-all">
            {isSubmitting ? "正在翻译..." : "翻译"}
          </button>
        </form>
        {translationResults.BaiduResult === "" || (
          <section className="dark:bg-slate-900 bg-slate-50 rounded p-2 sm:p-6 w-[96vw] max-w-[1024px] flex flex-col relative sm:text-lg">
            <button
              type="button"
              title="copy"
              onClick={handleCopy}
              className={`copy_btn absolute top-2 right-2 ${
                copied ? "copied" : "dark:hover:bg-slate-800 hover:bg-slate-200 transition-all cursor-pointer"
              }`}>
              <Image
                src={copied ? "/assets/tick.svg" : "/assets/copy.svg"}
                width={18}
                height={18}
                alt={copied ? "already copied" : "copy translation"}></Image>
            </button>
            <p className="text-slate-500 mb-2">译文:</p>
            <p className="dark:text-slate-200 text-center">{translationResults.BaiduResult}</p>
          </section>
        )}
        {translationResults.wordTranslation[0] === null || (
          <Vocabulary Vocabulary={translationResults.wordTranslation} />
        )}
      </main>
      <footer className="w-full mt-4 mb-2">
        <p className="text-center italic text-sm font-thin opacity-40">
          <Image src="/assets/github-mark.png" alt="github mark" width={20} height={20} className="inline-block mx-1" />
          <Link href="https://github.com/Putaolaozu/light-translater.git" className="underline font-light">
            Putaolaozu
          </Link>
        </p>
      </footer>
    </>
  );
}
