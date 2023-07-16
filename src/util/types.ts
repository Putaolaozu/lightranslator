export type VocabularyProps = {
  word: string;
  phonetic: string;
  phonetics: {
    text: string;
    audio?: string;
    sourceUrl?: string;
    license?: { name: string; url: string };
  }[];
  origin?: string;
  meanings: {
    partOfSpeech: string;
    definitions: {
      definition: string;
      synonyms: string[] | null[];
      antonyms: string[] | null[];
      example?: string;
    }[];
    synonyms: string[] | null[];
    antonyms: string[] | null[];
  }[];
  license?: { name: string; url: string };
  sourceUrls: string[];
}[];
