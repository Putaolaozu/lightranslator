import "./Translation.css";

function Translation({ searchTerm, result }) {
  console.log(result ? result : "");
  const resultWord = result.trans_result[0].dst;
  return (
    <>
      <h2>结果</h2>
      <p>{searchTerm}</p>
      <span>{resultWord}</span>
    </>
  );
}
export default Translation;
