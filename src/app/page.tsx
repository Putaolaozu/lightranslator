import axios from "axios";
import { MD5 } from "../../util/md5";

const appID = process.env.APP_ID;
const key = process.env.KEY;
const salt = 13213789743;
const baidu = "https://fanyi-api.baidu.com/api/trans/vip/translate";
let translation = "";

export default function Home() {
  return (
    <main className="flex min-h-screen flex-col items-center justify-center gap-4 p-24">
      <h1>Hi</h1>
      <form action={translate} className="flex gap-2">
        <input type="text" id="query" name="query" placeholder="Type in to translate.." className="text-slate-800" />
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

function getFetchURL(query: string) {
  const sign = MD5(appID + query + salt + key);
  return `${baidu}?q=${query}&from=en&to=zh&appid=${appID}&salt=${salt}&sign=${sign}`;
}

async function translate(data: FormData) {
  "use server";
  const query = data.get("query")?.valueOf();
  if (query == "" || typeof query !== "string") return;

  const url = getFetchURL(query);
  axios
    .get(url)
    .then((response) => {
      console.log(response.data.trans_result);
      translation = response.data.trans_result[0].dst;
    })
    .catch((error) => {
      console.log(error);
    });
}
