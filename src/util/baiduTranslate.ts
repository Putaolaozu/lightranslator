import axios from "axios";
import { MD5 } from "./md5";
import { queryInfo } from "./queryInfo";

const appID = process.env.APP_ID;
const key = process.env.KEY;
const salt = 13213789743;
const baidu = "https://fanyi-api.baidu.com/api/trans/vip/translate";

function getFetchURL(query: string, to: string) {
  const sign = MD5(appID + query + salt + key);
  return `${baidu}?q=${query}&from=auto&to=${to}&appid=${appID}&salt=${salt}&sign=${sign}`;
}

async function baiduTranslate(query: string) {
  if (query == "") return "";
  let { isZh } = queryInfo(query);

  const Baiduurl = getFetchURL(query, isZh ? "en" : "zh");
  const BaiduResult = await axios
    .get(Baiduurl)
    .then((response) => {
      return response.data.trans_result[0].dst;
    })
    .catch((error) => {
      console.log(error);
    });

  return BaiduResult;
}

export { baiduTranslate };
