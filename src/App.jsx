import "./App.css";
import { useState } from "react";
import SearchBox from "./component/SearchBox/SearchBox";
import Translation from "./component/Translation/Translation";
import getTranslation from "./util/baidu";

function App() {
  const [searchTerm, setSearchTerm] = useState("");
  const [result, setResult] = useState({
    from: "en",
    to: "zh",
    trans_result: [
      {
        src: "apple",
        dst: "苹果",
      },
    ],
  });
  const search = async (term) => {
    console.log(term);
    setSearchTerm(term);
    getTranslation(term).then((result) => setResult(result));
  };

  return (
    <>
      <SearchBox onSearch={search}></SearchBox>
      <Translation searchTerm={searchTerm} result={result}></Translation>
    </>
  );
}

export default App;
