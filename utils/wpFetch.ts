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
export const login = async () => {
  const userId = process.env.WP_USERID;
  const password = process.env.WP_PASSWORD;
  if (!userId || !password) {
    return false;
  }
  const result = await fetch(
    "https://www.stb.tsukuba.ac.jp/~shinkan-web/orgadmin/wp-login.php",
    {
      method: "POST",
      body: `log=${userId}&pwd=${password}&rememberme=forever&testcookie=1`,
      headers: {
        "Content-Type": "application/x-www-form-urlencoded",
      },
    }
  );
  console.log(result);

  return result.redirected;
};
