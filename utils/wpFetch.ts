export const wpFetch = (url: string) => {
  url =
    "https://www.stb.tsukuba.ac.jp/~shinkan-web/orgadmin/?rest_route=/wp" + url;
  return fetch(url).then((res) => res.json());
};
export function buildPathWithWPQuery(
  url: string,
  params: { [key: string]: string }
): string {
  for (let [k, v] of Object.entries(params)) {
    url += "&" + k + "=" + encodeURIComponent(v);
  }
  return url;
}
