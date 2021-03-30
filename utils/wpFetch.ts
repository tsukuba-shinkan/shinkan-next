let basic = "";
export const wpFetch = (url: string) => {
  url =
    "https://www.stb.tsukuba.ac.jp/~shinkan-web/orgadmin/?rest_route=/wp" + url;
  let f;
  if (basic) {
    f = fetch(url, {
      headers: {
        Authentication: basic,
      },
    });
  } else {
    f = fetch(url);
  }
  return f.then((res) => res.json());
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
export const login = async () => {
  const userId = process.env.WP_USERID;
  const password = process.env.WP_PASSWORD;
  if (!userId || !password) {
    return false;
  }
  basic = `Basic ` + Buffer.from(`${userId}:${password}`).toString("base64");
  return true;
};
