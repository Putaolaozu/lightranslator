"use client";

import { useState } from "react";

export default function Home() {
  const [search, setSearch] = useState("");
  const [translation, setTranslation] = useState("");

  const handleChange = (e) => {
    setSearch(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    fetch(`/api/trans?q=${search}`)
      .then((response) => {
        return response.json();
      })
      .then((response) => setTranslation(response))

      .catch((error) => console.log(error));
  };

  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <form onSubmit={handleSubmit} className="flex gap-2 flex-col">
        <input
          type="text"
          id="query"
          name="query"
          placeholder="Type in to translate.."
          className="text-slate-800"
          value={search}
          onChange={handleChange}
        />
        <button
          type="submit"
          className="border-slate-200 border-spacing-1 border-2 rounded bg-blue-600 p-2 hover:bg-blue-500">
          Translate
        </button>
      </form>
      <p className="text-slate-100">{translation}</p>
    </main>
  );
}
