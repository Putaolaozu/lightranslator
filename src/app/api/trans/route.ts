import { getURLQuery } from "../../../util/getURLQuery";
import { NextRequest, NextResponse } from "next/server";
import { BaiduTranslate } from "@/util/BaiduTranslate";
import { queryInfo } from "@/util/queryInfo";

export const GET = async (req: NextRequest) => {
  const query = getURLQuery(req.url, "q");
  const BaiduResult = await BaiduTranslate(query);

  const { word } = queryInfo(query);
  if (!word) return;

  const wordTranslation = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`).then((response) =>
    response.json()
  );

  const result = { wordTranslation, BaiduResult };
  return NextResponse.json(result);
};
