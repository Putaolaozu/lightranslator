export type VocabularyProps =
  | {
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
    }[]
  | string;

export type TranslationProps =
  | {
      BaiduResult: string;
      wordTranslation: {
        word: string;
        phonetic: string;
        phonetics: {
          text: string;
          audio: string;
        }[];
        origin: string;
        meanings: {
          partOfSpeech: string;
          definitions: {
            definition: string;
            synonyms: string[];
            antonyms: string[];
          }[];
          synonyms: string[];
          antonyms: string[];
        }[];
        license: { name: string; url: string };
        sourceUrls: string[];
      }[];
    }
  | { BaiduResult: string; wordTranslation: string };
