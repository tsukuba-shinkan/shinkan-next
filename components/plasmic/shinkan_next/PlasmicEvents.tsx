// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: 22CMj1wbxr
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
import EventListItem2 from "../../EventListItem2"; // plasmic-import: g0BBn2-YWf/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import * as sty from "./PlasmicEvents.module.css"; // plasmic-import: 22CMj1wbxr/css

import SearchBlack24DpsvgIcon from "./icons/PlasmicIcon__SearchBlack24Dpsvg"; // plasmic-import: C2oaTY0g2i/icon

export type PlasmicEvents__VariantMembers = {};

export type PlasmicEvents__VariantsArgs = {};
type VariantPropType = keyof PlasmicEvents__VariantsArgs;
export const PlasmicEvents__VariantProps = new Array<VariantPropType>();

export type PlasmicEvents__ArgsType = {
  resultLength?: React.ReactNode;
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicEvents__ArgsType;
export const PlasmicEvents__ArgProps = new Array<ArgPropType>(
  "resultLength",
  "children"
);

export type PlasmicEvents__OverridesType = {
  root?: p.Flex<"div">;
  page?: p.Flex<typeof Page>;
  h1?: p.Flex<"h1">;
  searchBox?: p.Flex<"div">;
  rangestart?: p.Flex<"input">;
  rangeend?: p.Flex<"input">;
  keyword?: p.Flex<"input">;
  searchButton?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultEventsProps {
  resultLength?: React.ReactNode;
  children?: React.ReactNode;
  className?: string;
}

function PlasmicEvents__RenderFunc(props: {
  variants: PlasmicEvents__VariantsArgs;
  args: PlasmicEvents__ArgsType;
  overrides: PlasmicEvents__OverridesType;
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
          >
            <div className={classNames(defaultcss.all, sty.box__h057B)}>
              <h1
                data-plasmic-name={"h1"}
                data-plasmic-override={overrides.h1}
                className={classNames(
                  defaultcss.h1,
                  defaultcss.__wab_text,
                  sty.h1
                )}
              >
                {"イベント検索"}
              </h1>

              <div
                data-plasmic-name={"searchBox"}
                data-plasmic-override={overrides.searchBox}
                className={classNames(defaultcss.all, sty.searchBox)}
              >
                <div className={classNames(defaultcss.all, sty.box__s3Ufq)}>
                  <div className={classNames(defaultcss.all, sty.box___0P6Py)}>
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__myI5B
                      )}
                    >
                      {"日時"}
                    </div>

                    <input
                      data-plasmic-name={"rangestart"}
                      data-plasmic-override={overrides.rangestart}
                      className={classNames(defaultcss.input, sty.rangestart)}
                      placeholder={"2021-04-01" as const}
                      size={1 as const}
                      type={"text" as const}
                      value={"2021-04-01" as const}
                    />

                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__blOde
                      )}
                    >
                      {"〜"}
                    </div>

                    <input
                      data-plasmic-name={"rangeend"}
                      data-plasmic-override={overrides.rangeend}
                      className={classNames(defaultcss.input, sty.rangeend)}
                      placeholder={"2021-04-01" as const}
                      size={1 as const}
                      type={"text" as const}
                      value={"2021-04-01" as const}
                    />
                  </div>

                  <div className={classNames(defaultcss.all, sty.box__yeUuy)}>
                    <div
                      className={classNames(
                        defaultcss.all,
                        defaultcss.__wab_text,
                        sty.box__vQh62
                      )}
                    >
                      {"キーワード"}
                    </div>

                    <input
                      data-plasmic-name={"keyword"}
                      data-plasmic-override={overrides.keyword}
                      className={classNames(defaultcss.input, sty.keyword)}
                      placeholder={"キーワードを入力…" as const}
                      size={1 as const}
                      type={"text" as const}
                      value={"" as const}
                    />
                  </div>
                </div>

                <div
                  data-plasmic-name={"searchButton"}
                  data-plasmic-override={overrides.searchButton}
                  className={classNames(defaultcss.all, sty.searchButton)}
                >
                  <SearchBlack24DpsvgIcon
                    data-plasmic-name={"svg"}
                    data-plasmic-override={overrides.svg}
                    className={classNames(defaultcss.all, sty.svg)}
                    role={"img"}
                  />
                </div>
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.box__ymDwU)}>
              <div className={classNames(defaultcss.all, sty.box__dOAhW)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__vKghT
                  )}
                >
                  {"検索結果"}
                </div>

                <div className={classNames(defaultcss.all, sty.box__xOcYl)}>
                  <p.PlasmicSlot
                    defaultContents={"0"}
                    value={args.resultLength}
                    className={classNames(sty.slotResultLength)}
                  />

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__ymTcg
                    )}
                  >
                    {"件"}
                  </div>
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box__tInj)}>
                <p.PlasmicSlot
                  defaultContents={
                    <React.Fragment>
                      <EventListItem2
                        className={classNames(
                          "__wab_instance",
                          sty.eventListItem2__m0KKv
                        )}
                      />

                      <EventListItem2
                        className={classNames(
                          "__wab_instance",
                          sty.eventListItem2__v6HRd
                        )}
                      />

                      <EventListItem2
                        className={classNames(
                          "__wab_instance",
                          sty.eventListItem2__tg0EF
                        )}
                      />

                      <EventListItem2
                        className={classNames(
                          "__wab_instance",
                          sty.eventListItem2___6PQtD
                        )}
                      />

                      <EventListItem2
                        className={classNames(
                          "__wab_instance",
                          sty.eventListItem2__bYprV
                        )}
                      />
                    </React.Fragment>
                  }
                  value={args.children}
                />
              </div>
            </div>
          </Page>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: [
    "root",
    "page",
    "h1",
    "searchBox",
    "rangestart",
    "rangeend",
    "keyword",
    "searchButton",
    "svg"
  ],
  page: [
    "page",
    "h1",
    "searchBox",
    "rangestart",
    "rangeend",
    "keyword",
    "searchButton",
    "svg"
  ],
  h1: ["h1"],
  searchBox: [
    "searchBox",
    "rangestart",
    "rangeend",
    "keyword",
    "searchButton",
    "svg"
  ],
  rangestart: ["rangestart"],
  rangeend: ["rangeend"],
  keyword: ["keyword"],
  searchButton: ["searchButton", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  page: typeof Page;
  h1: "h1";
  searchBox: "div";
  rangestart: "input";
  rangeend: "input";
  keyword: "input";
  searchButton: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEvents__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicEvents__VariantsArgs;
  args?: PlasmicEvents__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicEvents__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicEvents__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicEvents__ArgProps,
      internalVariantPropNames: PlasmicEvents__VariantProps
    });

    return PlasmicEvents__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEvents";
  } else {
    func.displayName = `PlasmicEvents.${nodeName}`;
  }
  return func;
}

export const PlasmicEvents = Object.assign(
  // Top-level PlasmicEvents renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    page: makeNodeComponent("page"),
    h1: makeNodeComponent("h1"),
    searchBox: makeNodeComponent("searchBox"),
    rangestart: makeNodeComponent("rangestart"),
    rangeend: makeNodeComponent("rangeend"),
    keyword: makeNodeComponent("keyword"),
    searchButton: makeNodeComponent("searchButton"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicEvents
    internalVariantProps: PlasmicEvents__VariantProps,
    internalArgProps: PlasmicEvents__ArgProps
  }
);

export default PlasmicEvents;
/* prettier-ignore-end */
