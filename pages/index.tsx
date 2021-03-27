// This is a skeleton starter React page generated by Plasmic.
// This file is owned by you, feel free to edit as you see fit.
import Link from "next/link";
import React, { useEffect, useState } from "react";
import CategoryRadio from "../components/CategoryRadio";
import EventListItem from "../components/EventListItem";
import OrgCard from "../components/OrgCard";
import { PlasmicHome } from "../components/plasmic/shinkan_next/PlasmicHome";

type CatUnion = "all" | "sports" | "art" | "culture" | "other";
function Homepage() {
  // Use PlasmicHomepage to render this component as it was
  // designed in Plasmic, by activating the appropriate variants,
  // attaching the appropriate event handlers, etc.  You
  // can also install whatever React hooks you need here to manage state or
  // fetch data.
  //
  // Props you can pass into PlasmicHomepage are:
  // 1. Variants you want to activate,
  // 2. Contents for slots you want to fill,
  // 3. Overrides for any named node in the component to attach behavior and data,
  // 4. Props to set on the root node.
  //
  // By default, PlasmicHomepage is wrapped by your project's global
  // variant context providers. These wrappers may be moved to
  // Next.js Custom App component
  // (https://nextjs.org/docs/advanced-features/custom-app).
  const [category, selectCategory] = useState<CatUnion>("all");
  const [events, setEvents] = useState<
    {
      eventTitle: string;
      dateTime: string;
      orgId: string;
    }[]
  >([]);
  const [orgs, setOrgs] = useState<
    {
      src: string;
      description: string;
      name: string;
      category: "sports" | "art" | "culture" | "other";
      orgId: number;
    }[]
  >([]);
  const [news, setNews] = useState<
    { dateTime: string; title: string; newsId: string }[]
  >([]);
  useEffect(() => {
    setEvents([
      {
        eventTitle: "うんこする会",
        dateTime: "4/1 20:00",
        orgId: "unko_circle",
      },
    ]);
    setNews([{ dateTime: "4/1", newsId: "4", title: "新歓Webを公開しました" }]);
  }, []);
  useEffect(() => {
    setOrgs([
      {
        src:
          "data:image/jpeg;base64,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",
        description: "うんちまんこうんこ",
        name: "ファックファック",
        orgId: 5,
        category: "culture",
      },
    ]);
  }, []);

  return (
    <PlasmicHome
      eventList={
        <>
          {events.map((ev) => (
            <EventListItem eventTitle={ev.eventTitle} dateTime={ev.dateTime}>
              <Link href={`/org/${ev.orgId}`}>詳細を表示</Link>
            </EventListItem>
          ))}
        </>
      }
      eventCount={events.length}
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
            <EventListItem eventTitle={ev.title} dateTime={ev.dateTime}>
              <Link href={`/news/${ev.newsId}`}>詳細を表示</Link>
            </EventListItem>
          ))}
        </>
      }
    />
  );
}

export default Homepage;
