"use client";
import Image from "next/image";
import Link from "next/link";
import { useRef, useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [translation, setTranslation] = useState("");
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
      .then((response) => {
        setTranslation(response);
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
    navigator.clipboard.writeText(translation);
    setTimeout(() => {
      setCopied(false);
    }, 3000);
  };

  return (
    <>
      <main className="flex min-h-screen flex-col items-center justify-center gap-5 p-24">
        <hgroup className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl font-bold">光是翻译就够了</h1>
          <p className="text-slate-400">(自动中译英，其他译中)</p>
        </hgroup>
        <form onSubmit={handleSubmit} className="relative flex gap-2 flex-col">
          <textarea
            id="query"
            cols={30}
            rows={5}
            name="query"
            placeholder="输入你想翻译的.."
            className="dark:text-slate-200 dark:bg-slate-800 rounded p-2 outline-none border-none placeholder:text-sm"
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
              className="absolute top-2 right-2 cursor-pointer dark:invert opacity-60"
              onClick={clearSearch}
            />
          )}

          <button
            type="submit"
            className="dark:border-slate-600 text-slate-100 dark:text-slate-300 border-spacing-1 dark:border-2 rounded bg-blue-500 dark:bg-blue-800 p-2 hover:bg-blue-400 transition-all">
            {isSubmitting ? "正在翻译..." : "翻译"}
          </button>
        </form>
        {translation === "" || (
          <section className="dark:bg-slate-900 rounded p-2 w-[300px] flex flex-col relative">
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
            <p className="dark:text-slate-500 text-slate-500">意思是:</p>
            <p className="dark:text-slate-200 text-center">{translation}</p>
          </section>
        )}
      </main>
      <footer className="absolute bottom-4 w-full">
        <p className="text-center italic text-sm font-thin opacity-40">
          By&nbsp;
          <Link href="https://github.com/Putaolaozu/light-translater.git" className="underline font-light">
            Putaolaozu
          </Link>
          &nbsp;
          <Image src="/assets/github-mark.png" alt="github mark" width={20} height={20} className="inline-block" />
        </p>
      </footer>
    </>
  );
}
