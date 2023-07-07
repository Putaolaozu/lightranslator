"use client";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [translation, setTranslation] = useState("");
  const [isSubmitting, setisSubmitting] = useState(false);
  const [copied, setCopied] = useState(false);

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
        setSearch("");
      })

      .catch((error) => console.log(error));
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
        <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
          <textarea
            id="query"
            cols={30}
            rows={5}
            name="query"
            placeholder="输入你想翻译的.."
            className="dark:text-slate-200 dark:bg-slate-800 rounded p-2 outline-none border-none placeholder:text-sm"
            value={search}
            onChange={handleChange}
          />
          <button
            type="submit"
            className="dark:border-slate-600 border-slate-800 text-slate-100 dark:text-slate-300 border-spacing-1 border-2 rounded bg-blue-500 dark:bg-blue-800 p-2 hover:bg-blue-500">
            {isSubmitting ? "正在翻译..." : "翻译"}
          </button>
        </form>
      </main>
      <footer className="absolute bottom-4 w-full">
        <p className="text-center italic text-sm font-thin opacity-40">
          By&nbsp;
          <Link href="https://github.com/Putaolaozu/light-translater.git" className="underline font-light">
            Putaolaozu
          </Link>
        </p>
      </footer>
    </>
  );
}
