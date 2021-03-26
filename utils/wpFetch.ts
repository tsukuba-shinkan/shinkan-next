export const wpFetch = (url: string) => {
  url =
    "https://www.stb.tsukuba.ac.jp/~shinkan-web/orgadmin/?rest_route=/wp" + url;
  return fetch(url).then((res) => res.json());
};
