export const s3Fetch = (url: string) => {
  url = "https://s3.missmonacoin.org" + url;
  return fetch(url, { mode: "cors" }).then((res) => res.json());
};
