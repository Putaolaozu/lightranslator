import { getURLQuery } from "@/util/getURLQuery";
import { NextRequest, NextResponse } from "next/server";
import { baiduTranslate } from "@/util/baiduTranslate";
import { queryInfo } from "@/util/queryInfo";

export const GET = async (req: NextRequest) => {
  const query = getURLQuery(req.url, "q");
  const mode = getURLQuery(req.url, "mode");

  let BaiduResult = null;
  if (mode !== "word") {
    BaiduResult = await baiduTranslate(query);
  }

  const { word } = queryInfo(query);
  let wordTranslation = null;
  if (word) {
    wordTranslation = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`)
      .then((response) => {
        return response.json();
      })
      .catch((error) => {
        console.log(error);
        return { title: `Error: ${error.message}` };
      });
  }

  const result = { wordTranslation, BaiduResult };
  return NextResponse.json(result);
};
