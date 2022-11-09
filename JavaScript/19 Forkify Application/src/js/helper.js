export const getJson = async function (url) {
  try {
    const res = await fetch(url);
    const data = await res.json();
    if (!res.ok) {
      throw new Error(`${data.message}9${res.status}`);
    }
    return data;
  } catch (err) {
    console.log(err);
  }
};
