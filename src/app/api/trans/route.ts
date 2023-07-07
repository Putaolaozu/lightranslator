import axios from "axios";
import { MD5 } from "@/util/md5";
import { getURLQuery } from "@/util/GetURLQuery";
import { NextRequest, NextResponse } from "next/server";

const appID = process.env.APP_ID;
const key = process.env.KEY;
const salt = 13213789743;
const baidu = "https://fanyi-api.baidu.com/api/trans/vip/translate";

function getFetchURL(query: string, to: string) {
  const sign = MD5(appID + query + salt + key);
  return `${baidu}?q=${query}&from=auto&to=${to}&appid=${appID}&salt=${salt}&sign=${sign}`;
}

async function translate(data: string) {
  if (data == "" || typeof data !== "string") return;
  let isEn = /^[a-zA-Z\s,.]+$/.test(data);

  const url = getFetchURL(data, isEn ? "zh" : "en");
  const result = await axios
    .get(url)
    .then((response) => {
      return response.data.trans_result[0].dst;
    })
    .catch((error) => {
      console.log(error);
    });
  return result;
}
export const GET = async (req: NextRequest, res: NextResponse) => {
  const url = req.url;
  if (url) {
    const query = getURLQuery(url, "q");
    const result = await translate(query);
    return NextResponse.json(result);
  }
};
