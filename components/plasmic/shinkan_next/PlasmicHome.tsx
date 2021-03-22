// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: eUF7R_7Fga
import * as React from "react";

import __PlatformHead from "next/head";
import __PlatformLink, { LinkProps as __PlatformLinkProps } from "next/link";

import * as p from "@plasmicapp/react-web";
import {
  hasVariant,
  classNames,
  wrapWithClassName,
  createPlasmicElementProxy,
  makeFragment,
  MultiChoiceArg,
  SingleBooleanChoiceArg,
  SingleChoiceArg,
  pick,
  omit,
  useTrigger,
  StrictProps,
  deriveRenderOpts,
  ensureGlobalVariants
} from "@plasmicapp/react-web";
import Page from "../../Page"; // plasmic-import: tdmoFHXXat7/component
import EventListItem from "../../EventListItem"; // plasmic-import: GMIuDj3rjM/component
import CategoryRadio from "../../CategoryRadio"; // plasmic-import: s14nWegQm7/component
import OrgCard from "../../OrgCard"; // plasmic-import: hH2h_5Dtgs/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import * as sty from "./PlasmicHome.module.css"; // plasmic-import: eUF7R_7Fga/css

export type PlasmicHome__VariantMembers = {};

export type PlasmicHome__VariantsArgs = {};
type VariantPropType = keyof PlasmicHome__VariantsArgs;
export const PlasmicHome__VariantProps = new Array<VariantPropType>();

export type PlasmicHome__ArgsType = {
  orgs?: React.ReactNode;
  categoryRadio?: React.ReactNode;
  eventList?: React.ReactNode;
  news?: React.ReactNode;
  eventCount?: React.ReactNode;
};

type ArgPropType = keyof PlasmicHome__ArgsType;
export const PlasmicHome__ArgProps = new Array<ArgPropType>(
  "orgs",
  "categoryRadio",
  "eventList",
  "news",
  "eventCount"
);

export type PlasmicHome__OverridesType = {
  root?: p.Flex<"div">;
  page?: p.Flex<typeof Page>;
  hero?: p.Flex<"div">;
  events?: p.Flex<"div">;
  button?: p.Flex<"div">;
  eventList?: p.Flex<"div">;
  orgsContainer?: p.Flex<"div">;
  orgList?: p.Flex<"div">;
  announcements?: p.Flex<"div">;
  eventList2?: p.Flex<"div">;
};

export interface DefaultHomeProps {
  orgs?: React.ReactNode;
  categoryRadio?: React.ReactNode;
  eventList?: React.ReactNode;
  news?: React.ReactNode;
  eventCount?: React.ReactNode;
  className?: string;
}

function PlasmicHome__RenderFunc(props: {
  variants: PlasmicHome__VariantsArgs;
  args: PlasmicHome__ArgsType;
  overrides: PlasmicHome__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <React.Fragment>
      <__PlatformHead>
        <title key="title">{""}</title>
      </__PlatformHead>

      <div className={defaultcss.plasmic_page_wrapper}>
        <div
          data-plasmic-name={"root"}
          data-plasmic-override={overrides.root}
          data-plasmic-root={true}
          data-plasmic-for-node={forNode}
          className={classNames(
            defaultcss.all,
            projectcss.root_reset,
            sty.root
          )}
        >
          <Page
            data-plasmic-name={"page"}
            data-plasmic-override={overrides.page}
            className={classNames("__wab_instance", sty.page)}
            container={
              <React.Fragment>
                <div
                  data-plasmic-name={"hero"}
                  data-plasmic-override={overrides.hero}
                  className={classNames(defaultcss.all, sty.hero)}
                >
                  <div className={classNames(defaultcss.all, sty.box__ig9Yl)} />

                  <div className={classNames(defaultcss.all, sty.box__ykPs0)} />
                </div>

                <div
                  data-plasmic-name={"events"}
                  data-plasmic-override={overrides.events}
                  className={classNames(defaultcss.all, sty.events)}
                >
                  <div className={classNames(defaultcss.all, sty.box__p08Hk)}>
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__vzmTl
                      )}
                    >
                      {"本日のイベント"}
                    </div>

                    <div className={classNames(defaultcss.all, sty.box__lxuSy)}>
                      <p.PlasmicSlot
                        defaultContents={"4"}
                        value={args.eventCount}
                        className={classNames(sty.slotEventCount)}
                      />
                    </div>

                    <div
                      className={classNames(defaultcss.all, sty.box__kKcvo)}
                    />

                    <div
                      data-plasmic-name={"button"}
                      data-plasmic-override={overrides.button}
                      className={classNames(defaultcss.all, sty.button)}
                    >
                      <p.PlasmicLink
                        className={classNames(
                          defaultcss.all,
                          defaultcss.__wab_text,
                          sty.link__mV3YJ
                        )}
                        component={__PlatformLink}
                        href={"/events" as const}
                        platform={"nextjs"}
                      >
                        {"イベント検索へ"}
                      </p.PlasmicLink>
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"eventList"}
                    data-plasmic-override={overrides.eventList}
                    className={classNames(defaultcss.all, sty.eventList)}
                  >
                    <p.PlasmicSlot
                      defaultContents={
                        <React.Fragment>
                          <EventListItem
                            className={classNames(
                              "__wab_instance",
                              sty.eventListItem__hoLhM
                            )}
                            eventTitle={
                              <div
                                className={classNames(
                                  defaultcss.all,
                                  defaultcss.__wab_text,
                                  sty.box___1Nq1
                                )}
                              >
                                {"桜を見る会 @ 反町の森公園"}
                              </div>
                            }
                          />

                          <EventListItem
                            className={classNames(
                              "__wab_instance",
                              sty.eventListItem__av7V1
                            )}
                            eventTitle={
                              <div
                                className={classNames(
                                  defaultcss.all,
                                  defaultcss.__wab_text,
                                  sty.box__vcY8
                                )}
                              >
                                {"橋本環奈同好会オンライン説明会"}
                              </div>
                            }
                          />

                          <EventListItem
                            className={classNames(
                              "__wab_instance",
                              sty.eventListItem__bTwts
                            )}
                            eventTitle={"女装同好会"}
                          />

                          <EventListItem
                            className={classNames(
                              "__wab_instance",
                              sty.eventListItem__svl9R
                            )}
                          />
                        </React.Fragment>
                      }
                      value={args.eventList}
                    />
                  </div>
                </div>

                <div
                  data-plasmic-name={"orgsContainer"}
                  data-plasmic-override={overrides.orgsContainer}
                  className={classNames(defaultcss.all, sty.orgsContainer)}
                >
                  <div className={classNames(defaultcss.all, sty.box__gJi0C)}>
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box___7SGb5
                      )}
                    >
                      {"おすすめの団体"}
                    </div>

                    <div className={classNames(defaultcss.all, sty.box__bkJeC)}>
                      <p.PlasmicSlot
                        defaultContents={
                          <React.Fragment>
                            <CategoryRadio
                              className={classNames(
                                "__wab_instance",
                                sty.categoryRadio__l6S0E
                              )}
                            />

                            <CategoryRadio
                              className={classNames(
                                "__wab_instance",
                                sty.categoryRadio__soEt
                              )}
                            />

                            <CategoryRadio
                              className={classNames(
                                "__wab_instance",
                                sty.categoryRadio___2VI6B
                              )}
                            />
                          </React.Fragment>
                        }
                        value={args.categoryRadio}
                      />
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"orgList"}
                    data-plasmic-override={overrides.orgList}
                    className={classNames(defaultcss.all, sty.orgList)}
                  >
                    <p.PlasmicSlot
                      defaultContents={
                        <React.Fragment>
                          <OrgCard
                            category={"体育系・一般学生団体"}
                            className={classNames(
                              "__wab_instance",
                              sty.orgCard___5D3PU
                            )}
                            name={"橋本環奈同好会"}
                          />

                          <OrgCard
                            category={"体育系・一般学生団体"}
                            className={classNames(
                              "__wab_instance",
                              sty.orgCard__pgQCd
                            )}
                            description={"アクセスするたび変わります"}
                            name={"女装同好会"}
                          />

                          <OrgCard
                            category={"体育系・一般学生団体"}
                            className={classNames(
                              "__wab_instance",
                              sty.orgCard__tnADu
                            )}
                            description={"ランダムに変わります"}
                            name={"橋本環奈同好会"}
                          />

                          <OrgCard
                            category={"体育系・一般学生団体"}
                            className={classNames(
                              "__wab_instance",
                              sty.orgCard__z2CI
                            )}
                            description={
                              "ランダムに選ぶ機能はWordPressの機能を使いたいところですが"
                            }
                            name={"橋本環奈同好会"}
                          />

                          <OrgCard
                            category={"体育系・一般学生団体"}
                            className={classNames(
                              "__wab_instance",
                              sty.orgCard__f8LUy
                            )}
                            description={
                              "おそらくフロントエンドでシャッフルしないといけない"
                            }
                            name={"橋本環奈同好会"}
                          />

                          <OrgCard
                            category={"体育系・一般学生団体"}
                            className={classNames(
                              "__wab_instance",
                              sty.orgCard__o1P8X
                            )}
                            name={"橋本環奈同好会"}
                          />

                          <OrgCard
                            category={"体育系・一般学生団体"}
                            className={classNames(
                              "__wab_instance",
                              sty.orgCard__jG91M
                            )}
                            name={"橋本環奈同好会"}
                          />

                          <OrgCard
                            className={classNames(
                              "__wab_instance",
                              sty.orgCard__jdCC
                            )}
                          />
                        </React.Fragment>
                      }
                      value={args.orgs}
                    />
                  </div>

                  <div className={classNames(defaultcss.all, sty.box__c6Wud)}>
                    <p.PlasmicLink
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.link__xXnx
                      )}
                      component={__PlatformLink}
                      href={"/orgs" as const}
                      platform={"nextjs"}
                    >
                      {"団体を検索する"}
                    </p.PlasmicLink>
                  </div>
                </div>

                <div
                  data-plasmic-name={"announcements"}
                  data-plasmic-override={overrides.announcements}
                  className={classNames(defaultcss.all, sty.announcements)}
                >
                  <div className={classNames(defaultcss.all, sty.box__gLaDz)}>
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__ruukh
                      )}
                    >
                      {"お知らせ"}
                    </div>
                  </div>

                  <div
                    data-plasmic-name={"eventList2"}
                    data-plasmic-override={overrides.eventList2}
                    className={classNames(defaultcss.all, sty.eventList2)}
                  >
                    <p.PlasmicSlot
                      defaultContents={
                        <EventListItem
                          className={classNames(
                            "__wab_instance",
                            sty.eventListItem__npZl
                          )}
                          eventTitle={"a"}
                        />
                      }
                      value={args.news}
                    />
                  </div>
                </div>
              </React.Fragment>
            }
          />
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "page",
    "hero",
    "events",
    "button",
    "eventList",
    "orgsContainer",
    "orgList",
    "announcements",
    "eventList2"
  ],
  page: [
    "page",
    "hero",
    "events",
    "button",
    "eventList",
    "orgsContainer",
    "orgList",
    "announcements",
    "eventList2"
  ],
  hero: ["hero"],
  events: ["events", "button", "eventList"],
  button: ["button"],
  eventList: ["eventList"],
  orgsContainer: ["orgsContainer", "orgList"],
  orgList: ["orgList"],
  announcements: ["announcements", "eventList2"],
  eventList2: ["eventList2"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  page: typeof Page;
  hero: "div";
  events: "div";
  button: "div";
  eventList: "div";
  orgsContainer: "div";
  orgList: "div";
  announcements: "div";
  eventList2: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHome__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicHome__VariantsArgs;
  args?: PlasmicHome__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicHome__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicHome__ArgsType, ReservedPropsType> &
  // Specify overrides for each element directly as props
  Omit<
    NodeOverridesType<T>,
    ReservedPropsType | VariantPropType | ArgPropType
  > &
  // Specify props for the root element
  Omit<
    Partial<React.ComponentProps<NodeDefaultElementType[T]>>,
    ReservedPropsType | VariantPropType | ArgPropType | DescendantsType<T>
  >;

function makeNodeComponent<NodeName extends NodeNameType>(nodeName: NodeName) {
  type PropsType = NodeComponentProps<NodeName> & { key?: React.Key };
  const func = function <T extends PropsType>(
    props: T & StrictProps<T, PropsType>
  ) {
    const { variants, args, overrides } = deriveRenderOpts(props, {
      name: nodeName,
      descendantNames: [...PlasmicDescendants[nodeName]],
      internalArgPropNames: PlasmicHome__ArgProps,
      internalVariantPropNames: PlasmicHome__VariantProps
    });

    return PlasmicHome__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHome";
  } else {
    func.displayName = `PlasmicHome.${nodeName}`;
  }
  return func;
}

export const PlasmicHome = Object.assign(
  // Top-level PlasmicHome renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    page: makeNodeComponent("page"),
    hero: makeNodeComponent("hero"),
    events: makeNodeComponent("events"),
    button: makeNodeComponent("button"),
    eventList: makeNodeComponent("eventList"),
    orgsContainer: makeNodeComponent("orgsContainer"),
    orgList: makeNodeComponent("orgList"),
    announcements: makeNodeComponent("announcements"),
    eventList2: makeNodeComponent("eventList2"),

    // Metadata about props expected for PlasmicHome
    internalVariantProps: PlasmicHome__VariantProps,
    internalArgProps: PlasmicHome__ArgProps
  }
);

export default PlasmicHome;
/* prettier-ignore-end */
