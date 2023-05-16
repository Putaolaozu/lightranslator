import "./SearchBox.css";
import { useState, useCallback } from "react";

function SearchBox({ onSearch }) {
  const [searchContent, setSearchContent] = useState("");
  const handleSearchChange = ({ target }) => {
    setSearchContent(target.value);
  };

  const handleSubmit = () => {
    onSearch(searchContent);
  };
  return (
    <>
      <div>
        <textarea
          id="searchContent"
          value={searchContent}
          placeholder="What you wanna translate?????????????"
          onChange={handleSearchChange}></textarea>
        <button onClick={handleSubmit}>Translate</button>
      </div>
    </>
  );
}
export default SearchBox;
