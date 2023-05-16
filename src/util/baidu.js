import { MD5 } from "./md5";
const KEY = "C6tjMrOiy7VTNWcmf3OV";
const APPID = "20230409001634676";
const salt = "234623784";

const getTranslation = async (query = "apple", from = "en", to = "zh") => {
  const stringOne = APPID + query + salt + KEY;
  const sign = MD5(stringOne);
  const fetchURL = `https://api.fanyi.baidu.com/api/trans/vip/translate?q=${query}&from=${from}&to=${to}&appid=${APPID}&salt=${salt}&sign=${sign}`;
  console.log(fetchURL);
  const result = await fetch(fetchURL)
    .then((res) => res.json())
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log(err);
    });
  return result;
};

export default getTranslation;
