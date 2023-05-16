import "./Translation.css";

function Translation({ searchTerm, result }) {
  return (
    <>
      <h2>结果</h2>
      <p>{searchTerm}</p>
      <span>{result.trans_result[0].dst}</span>
    </>
  );
}
export default Translation;
