import { VocabularyProps } from "@/util/types";
import React from "react";

const Vocabulary = ({ Vocabulary }: { Vocabulary: VocabularyProps }) => {
  const { word, phonetics, meanings } = Vocabulary[0];
  return (
    <>
      {word && (
        <section className="w-[96vw] max-w-[1024px] m-4">
          <h2 className="sm:text-2xl text-xl font-bold font-mono m-2">{word}</h2>

          {/* Phonetic of the vocabulary */}
          <ul className="list-disc my-3 p-2">
            {phonetics.map((phonetic) => {
              return (
                <li className="flex justify-start items-center gap-4">
                  <em className="tracking-wide text-lg font-bold dark:text-stone-400 text-stone-800">
                    {phonetic.text}
                  </em>
                  {phonetic.audio && phonetic.text && (
                    <audio
                      controls
                      src={phonetic.audio}
                      className="h-8 w-36 md:w-64 dark:opacity-90 border-2 rounded-full dark:border-none"></audio>
                  )}
                </li>
              );
            })}
          </ul>

          {/* Meaning of the word */}
          {meanings.map((meaning) => {
            return (
              <div className="my-4">
                <h3 className="dark:text-blue-400 text-blue-900 italic">{meaning.partOfSpeech}</h3>
                <ol className="list-decimal px-8">
                  {meaning.definitions.map((definition) => {
                    return (
                      <li className="my-2 p-2 sm:text-lg">
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
