export const timeout = s => {
  return new Promise(function (_, reject) {
    setTimeout(function () {
      reject(new Error(`Request take too long which is ${s}`));
    }, s * 1000);
  });
};

export const getJsonData = async url => {
  try {
    const res = await fetch(url);
    const data = await res.json();

    return data;
  } catch (err) {
    throw err;
  }
};
