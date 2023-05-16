import { MD5 } from "./md5";
const KEY = "C6tjMrOiy7VTNWcmf3OV";
const APPID = "20230409001634676";
const salt = "234623784";

const getTranslation = async (query = "apple", from = "en", to = "zh") => {
  const stringOne = APPID + query + salt + KEY;
  const sign = MD5(stringOne);
  const fetchURL = `http://api.fanyi.baidu.com/api/trans/vip/translate?q=${query}&from=${from}&to=${to}&appid=${APPID}&salt=${salt}&sign=${sign}`;

  const response = await fetch(fetchURL);
  const result = response.json();
  return result;
};

export default getTranslation;
