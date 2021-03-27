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

export type PlasmicEvents__ArgsType = {};
type ArgPropType = keyof PlasmicEvents__ArgsType;
export const PlasmicEvents__ArgProps = new Array<ArgPropType>();

export type PlasmicEvents__OverridesType = {
  root?: p.Flex<"div">;
  page?: p.Flex<typeof Page>;
  searchBox?: p.Flex<"div">;
  searchButton?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultEventsProps {
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
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__fyiow
                )}
              >
                {"イベント検索"}
              </div>

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
                      className={classNames(
                        defaultcss.input,
                        sty.textbox__h17Zg
                      )}
                      placeholder={"2021/03/22" as const}
                      size={1 as const}
                      type={"text" as const}
                      value={"2021/03/22" as const}
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
                      className={classNames(
                        defaultcss.input,
                        sty.textbox___3Ngi3
                      )}
                      placeholder={"2021/03/22" as const}
                      size={1 as const}
                      type={"text" as const}
                      value={"2021/03/22" as const}
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
                      className={classNames(
                        defaultcss.input,
                        sty.textbox__m1Aer
                      )}
                      placeholder={"2021/03/22" as const}
                      size={1 as const}
                      type={"text" as const}
                      value={"2021/03/22" as const}
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
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box___4690
                    )}
                  >
                    {"4件"}
                  </div>
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box__tInj)}>
                <EventListItem2
                  className={classNames(
                    "__wab_instance",
                    sty.eventListItem2__eMU1
                  )}
                />

                <EventListItem2
                  className={classNames(
                    "__wab_instance",
                    sty.eventListItem2__gwpIg
                  )}
                />

                <EventListItem2
                  className={classNames(
                    "__wab_instance",
                    sty.eventListItem2__scLsl
                  )}
                />

                <EventListItem2
                  className={classNames(
                    "__wab_instance",
                    sty.eventListItem2__zc5Ak
                  )}
                />

                <EventListItem2
                  className={classNames(
                    "__wab_instance",
                    sty.eventListItem2__nAqkf
                  )}
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
  root: ["root", "page", "searchBox", "searchButton", "svg"],
  page: ["page", "searchBox", "searchButton", "svg"],
  searchBox: ["searchBox", "searchButton", "svg"],
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
  searchBox: "div";
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
    searchBox: makeNodeComponent("searchBox"),
    searchButton: makeNodeComponent("searchButton"),
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicEvents
    internalVariantProps: PlasmicEvents__VariantProps,
    internalArgProps: PlasmicEvents__ArgProps
  }
);

export default PlasmicEvents;
/* prettier-ignore-end */
