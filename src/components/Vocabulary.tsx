import { VocabularyProps } from "@/util/types";
import React from "react";

const Vocabulary = ({ Vocabulary }: { Vocabulary: VocabularyProps }) => {
  if (typeof Vocabulary === "string") {
    return <p>{Vocabulary}</p>;
  }

  const { word, phonetics, meanings } = Vocabulary[0];
  return (
    <>
      {word && (
        <section className="max-w-[1024px] m-4 z-50">
          <h2 className="sm:text-2xl text-xl font-bold font-mono my-4">{word}</h2>

          {/* Phonetic of the vocabulary */}
          <h3 className="dark:text-indigo-400 text-indigo-900 italic">phonetic</h3>
          <ul className="list-disc my-3 p-2">
            {phonetics.map((phonetic, index) => {
              return (
                <li className="grid grid-cols-3 gap-4 my-2 sm:my-4 w-fit" key={index}>
                  <em className="tracking-wide text-sm sm:text-base lg:text-lg font-bold dark:text-stone-400 text-stone-800">
                    {phonetic.text}
                  </em>
                  {phonetic.audio && phonetic.text && (
                    <audio
                      controls
                      src={phonetic.audio}
                      className="h-6 w-20 sm:w-32 lg:w-64 dark:opacity-90 sm:border-2 rounded-full dark:border-none"></audio>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Meaning of the word */}
          {meanings.map((meaning, index) => {
            return (
              <div className="my-4" key={index}>
                <h3 className="dark:text-blue-400 text-blue-900 italic">{meaning.partOfSpeech}</h3>
                <ol className="list-decimal px-8">
                  {meaning.definitions.map((definition, index) => {
                    return (
                      <li className="sm:my-2 p-2 sm:text-lg" key={index}>
                        <p className="font-sans">{definition.definition}</p>
                        {definition.synonyms[0] && (
                          <p className="mt-2">
                            <span className="italic dark:text-violet-500 text-purple-700 mx-2">Synonyms: </span>
                            <span className="font-bold text-lg font-mono dark:text-amber-100 text-amber-500">
                              {definition.synonyms.join(", ")}
                            </span>
                          </p>
                        )}
                        {definition.antonyms[0] && (
                          <p className="mt-2">
                            <span className="italic dark:text-purple-500 text-purple-700 mx-2">Antonyms: </span>
                            <span className="font-bold text-lg font-mono dark:text-amber-100 text-amber-500">
                              {definition.antonyms.join(", ")}
                            </span>
                          </p>
                        )}
                      </li>
                    );
                  })}
                </ol>
              </div>
            );
          })}
        </section>
      )}
    </>
  );
};

export default Vocabulary;
