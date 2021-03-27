import React, { useEffect, useState } from "react";
import Page from "../../components/Page";
import { wpFetch } from "../../utils/wpFetch";
import Orgid from "./[id]";

export function Detail() {
  if (typeof window === "undefined") {
    return (
      <Page>
        <>
          本ページはまだJavaScriptを無効化した状態での閲覧に対応していません。JavaScriptを有効にしてください。
        </>
      </Page>
    );
  }
  const urlParams = new URLSearchParams(window.location.search);
  const pageId = urlParams.get("id");
  const [initialData, setInitialData] = useState<any>(null);
  useEffect(() => {
    if (!pageId) {
      return;
    }
    wpFetch(`/v2/pages/${pageId}`).then((post) => setInitialData(post));
  }, [pageId]);
  if (!pageId) {
    return (
      <Page>
        <>IDを指定して下しあ</>
      </Page>
    );
  }
  if (!initialData) {
    return (
      <Page>
        <>読み込み中</>
      </Page>
    );
  }
  return <Orgid initialData={initialData} />;
}
export default Detail;
