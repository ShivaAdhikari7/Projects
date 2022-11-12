import { TIME_OUT } from './config.js';
const timeOut = function (s) {
  return new Promise(function (_, reject) {
    setTimeout(() => {
      reject(
        new Error(`Request has been rejected due to time which is ${s} seconds`)
      );
    }, s * 1000);
  });
};

export const getJson = async function (url) {
  try {
    const res = await Promise.race([fetch(url), timeOut(TIME_OUT)]);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`${data.message}9${res.status}`);
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};
