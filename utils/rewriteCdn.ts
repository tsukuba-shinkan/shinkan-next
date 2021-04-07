export function rewriteToCdn(url: string | undefined): string | undefined {
  return url?.replace(
    /^https:\/\/www.stb.tsukuba.ac.jp/,
    "https://stb.missmonacoin.org"
  );
}
