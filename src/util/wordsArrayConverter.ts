export const convertToWordsArray = (text: string) => {
  let nowWord = "";
  let wordsArray = [""];
  for (let i = 0; i < text.length; i++) {
    const char = text.charAt(i);

    if (/[A-Za-z\-]/.test(char)) {
      if (wordsArray[wordsArray.length - 1] === nowWord) {
        wordsArray.pop();
      }
      nowWord = nowWord.concat(char);
      wordsArray.push(nowWord);
    } else if (/\n/.test(char)) {
      wordsArray.push("\n");
      nowWord = "";
    } else {
      wordsArray.push(char);
      nowWord = "";
    }
  }
  return wordsArray;
};
