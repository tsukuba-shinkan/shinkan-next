// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import Head from "next/head";
import Link from "next/link";
import React, { useState } from "react";
import useSWR from "swr";
import CategoryRadio from "../components/CategoryRadio";
import EventListItem from "../components/EventListItem";
import OrgCard from "../components/OrgCard";
import { PlasmicHome } from "../components/plasmic/shinkan_next/PlasmicHome";
import { activityType, organizationType } from "../utils/categoryTable";
import { s3Fetch } from "../utils/s3Fetch";
import { buildPathWithWPQuery, wpFetch } from "../utils/wpFetch";

type CatUnion = "all" | "sports" | "art" | "culture" | "other";
function getCurrentDate() {
  const date = new Date();
  return `${date.getFullYear()}-${("0" + (date.getMonth() + 1)).slice(-2)}-${(
    "0" +
    (date.getDate() + 1)
  ).slice(-2)}`;
}
function Homepage() {
  const [category, selectCategory] = useState<CatUnion>("all");

  const { data: eventData } = useSWR(
    buildPathWithWPQuery("/custom/events", {
      fromdate: getCurrentDate(),
      todate: getCurrentDate(),
    }),
    wpFetch
  );
  const events: {
    eventTitle: string;
    dateTime: string;
    orgId: string;
    orgName: string;
  }[] = eventData?.map((e: any) => ({
    dateTime: `${e.start}`,
    eventTitle: e.title,
    orgId: e.organizationID,
    orgName: e.organizationName,
  }));

  const { data: orgData } = useSWR(
    category == "all" ? "/random/org" : "/random/org?activity=" + category,
    s3Fetch,
    {
      dedupingInterval: 300000,
    }
  );
  const orgs: {
    wpsrc: string;
    description: string;
    name: string;
    activity: "sports" | "art" | "culture" | "other";
    orgType: "ippan" | "kagai" | "other";
    orgId: number;
  }[] =
    orgData?.map((o: any) => ({
      wpsrc: o.event.mainImage?.[0],
      description: o.excerpt.rendered,
      name: o.title.rendered,
      activity: activityType[o.activitytype[0]].name,
      orgType: organizationType[o.organizationtype[0]].name,
      orgId: o.id,
    })) || [];

  const { data: newsData } = useSWR(
    buildPathWithWPQuery("/v2/posts", { tags: /*news=2*/ "2" }),
    wpFetch,
    {
      dedupingInterval: 300000,
    }
  );
  const news: { date: string; title: string; newsId: string }[] =
    newsData?.map((n: any) => ({
      date: n.date.replace(/T.*$/, ""), // 汚い？ああそう
      title: n.title.rendered,
      newsId: n.id,
    })) || [];

  return (
    <>
      <Head>
        <title>筑波大学新歓Web</title>
      </Head>
      <PlasmicHome
        eventList={
          <>
            {events?.map((ev) => (
              <EventListItem
                eventTitle={ev.eventTitle}
                dateTime={ev.dateTime.slice(5)}
                orgName={ev.orgName}
              >
                <Link href={`/org/${ev.orgId}`}>詳細を表示</Link>
              </EventListItem>
            ))}
          </>
        }
        eventCount={events?.length || "0"}
        categoryRadio={
          <>
            {["all", "sports", "art", "culture", "other"].map((c) => (
              <CategoryRadio
                variant={c as CatUnion}
                selected={category === c}
                onClick={() => selectCategory(c as CatUnion)}
              />
            ))}
          </>
        }
        orgs={
          <>
            {orgs.map((o) => (
              <OrgCard {...o} />
            ))}
          </>
        }
        news={
          <>
            {news.map((ev) => (
              <EventListItem eventTitle={ev.title} dateTime={ev.date}>
                <Link href={`/news/${ev.newsId}`}>詳細を表示</Link>
              </EventListItem>
            ))}
          </>
        }
      />
    </>
  );
}

export default Homepage;
