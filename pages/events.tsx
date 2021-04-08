// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import Link from "next/link";
import React, { useState } from "react";
import EventListItem2 from "../components/EventListItem2";
import { PlasmicEvents } from "../components/plasmic/shinkan_next/PlasmicEvents";
import { activityType, organizationType } from "../utils/categoryTable";
import { s3Fetch } from "../utils/s3Fetch";

function Events() {
  const [keyword, setKeyword] = useState("");
  const [rangestart, setRangestart] = useState("");
  const [rangeend, setRangeend] = useState("");
  const [result, setResult] = useState<
    {
      start: string;
      end: string;
      title: string;
      page_id: number;
      page: any;
      description?: string;
    }[]
  >([]);
  const search = async () => {
    if (!keyword && !rangestart && !rangeend) {
      return setResult([]);
    }
    let url = `/search/events?q=${keyword}`;
    if (rangeend) {
      url += `&rangeend=${rangeend}`;
    }
    if (rangestart) {
      url += `&rangestart=${rangestart}`;
    }
    setResult(await s3Fetch(url));
  };
  const onKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) =>
    e.code === "Enter" && search();

  return (
    <PlasmicEvents
      keyword={{
        value: keyword,
        onChange(e) {
          setKeyword(e.target.value);
        },
        onKeyDown,
      }}
      rangeend={{
        value: rangeend,
        onChange(e) {
          setRangeend(e.target.value);
        },
        onKeyDown,
      }}
      rangestart={{
        value: rangestart,
        onChange(e) {
          setRangestart(e.target.value);
        },
        onKeyDown,
      }}
      resultLength={result.length.toString()}
      searchButton={{
        onClick() {
          search();
        },
      }}
    >
      {result.map((it) => (
        <EventListItem2
          dateTime={it.start}
          title={it.title}
          orgName={it.page.title.rendered}
          activity={activityType[it.page.activitytype[0]]?.name as any}
          organization={
            organizationType[it.page.organizationtype[0]]?.name as any
          }
        >
          {it.description && (
            <div
              dangerouslySetInnerHTML={{
                __html: it.description, // WordPressが無害化してくれると期待しているので危ないことしても許されると思っています。
              }}
            ></div>
          )}
          <Link href={`/org/${it.page.id}`}>詳細を表示</Link>
        </EventListItem2>
      ))}
    </PlasmicEvents>
  );
}

export default Events;
