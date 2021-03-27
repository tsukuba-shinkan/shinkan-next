// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: oqvYWNjt53
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
import OrgCard from "../../OrgCard"; // plasmic-import: hH2h_5Dtgs/component
import Pager from "../../Pager"; // plasmic-import: v0V4QrK8UW/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import * as sty from "./PlasmicOrg.module.css"; // plasmic-import: oqvYWNjt53/css

import SearchBlack24DpsvgIcon from "./icons/PlasmicIcon__SearchBlack24Dpsvg"; // plasmic-import: C2oaTY0g2i/icon

export type PlasmicOrg__VariantMembers = {};

export type PlasmicOrg__VariantsArgs = {};
type VariantPropType = keyof PlasmicOrg__VariantsArgs;
export const PlasmicOrg__VariantProps = new Array<VariantPropType>();

export type PlasmicOrg__ArgsType = {
  orgs?: React.ReactNode;
  resultLength?: React.ReactNode;
  pager?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOrg__ArgsType;
export const PlasmicOrg__ArgProps = new Array<ArgPropType>(
  "orgs",
  "resultLength",
  "pager"
);

export type PlasmicOrg__OverridesType = {
  root?: p.Flex<"div">;
  page?: p.Flex<typeof Page>;
  searchBox?: p.Flex<"div">;
  searchInput?: p.Flex<"input">;
  searchButton?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
  orgList?: p.Flex<"div">;
  pager?: p.Flex<typeof Pager>;
};

export interface DefaultOrgProps {
  orgs?: React.ReactNode;
  resultLength?: React.ReactNode;
  pager?: React.ReactNode;
  className?: string;
}

function PlasmicOrg__RenderFunc(props: {
  variants: PlasmicOrg__VariantsArgs;
  args: PlasmicOrg__ArgsType;
  overrides: PlasmicOrg__OverridesType;
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
            <div className={classNames(defaultcss.all, sty.box___41A8P)}>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___1Xgp3
                )}
              >
                {"団体検索"}
              </div>

              <div
                data-plasmic-name={"searchBox"}
                data-plasmic-override={overrides.searchBox}
                className={classNames(defaultcss.all, sty.searchBox)}
              >
                <input
                  data-plasmic-name={"searchInput"}
                  data-plasmic-override={overrides.searchInput}
                  className={classNames(defaultcss.input, sty.searchInput)}
                  placeholder={"検索キーワードを入力…" as const}
                  size={1 as const}
                  type={"text" as const}
                  value={"" as const}
                />

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

            <div
              data-plasmic-name={"orgList"}
              data-plasmic-override={overrides.orgList}
              className={classNames(defaultcss.all, sty.orgList)}
            >
              <div className={classNames(defaultcss.all, sty.box__mxtRq)}>
                <div
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.box__jOdXl
                  )}
                >
                  {"検索結果"}
                </div>

                <div className={classNames(defaultcss.all, sty.box__saii2)}>
                  <p.PlasmicSlot
                    defaultContents={"0"}
                    value={args.resultLength}
                    className={classNames(sty.slotResultLength)}
                  />

                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__gjBqq
                    )}
                  >
                    {"件"}
                  </div>
                </div>
              </div>

              <div className={classNames(defaultcss.all, sty.box__dzb5F)}>
                <p.PlasmicSlot
                  defaultContents={
                    <React.Fragment>
                      <OrgCard
                        className={classNames(
                          "__wab_instance",
                          sty.orgCard__uw1Nc
                        )}
                        name={"橋本環奈同好会"}
                      />

                      <OrgCard
                        className={classNames(
                          "__wab_instance",
                          sty.orgCard___0G7Mm
                        )}
                        description={"アクセスするたび変わります"}
                        name={"女装同好会"}
                      />

                      <OrgCard
                        className={classNames(
                          "__wab_instance",
                          sty.orgCard__kG7BQ
                        )}
                        description={"ランダムに変わります"}
                        name={"橋本環奈同好会"}
                      />

                      <OrgCard
                        className={classNames(
                          "__wab_instance",
                          sty.orgCard__v5JYk
                        )}
                        description={
                          "ランダムに選ぶ機能はWordPressの機能を使いたいところですが"
                        }
                        name={"橋本環奈同好会"}
                      />

                      <OrgCard
                        className={classNames(
                          "__wab_instance",
                          sty.orgCard__pCwz9
                        )}
                        description={
                          "おそらくフロントエンドでシャッフルしないといけない"
                        }
                        name={"橋本環奈同好会"}
                      />

                      <OrgCard
                        className={classNames(
                          "__wab_instance",
                          sty.orgCard___8WgBq
                        )}
                        name={"橋本環奈同好会"}
                      />

                      <OrgCard
                        className={classNames(
                          "__wab_instance",
                          sty.orgCard__af4Ij
                        )}
                        name={"橋本環奈同好会"}
                      />

                      <OrgCard
                        className={classNames(
                          "__wab_instance",
                          sty.orgCard__nsBjC
                        )}
                      />
                    </React.Fragment>
                  }
                  value={args.orgs}
                />
              </div>

              <div className={classNames(defaultcss.all, sty.box__a7EEb)}>
                <p.PlasmicSlot
                  defaultContents={
                    <Pager
                      data-plasmic-name={"pager"}
                      data-plasmic-override={overrides.pager}
                      className={classNames("__wab_instance", sty.pager)}
                      hasNext={"hasNext" as const}
                      hasPrev={"hasPrev" as const}
                    />
                  }
                  value={args.pager}
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
    "searchBox",
    "searchInput",
    "searchButton",
    "svg",
    "orgList",
    "pager"
  ],
  page: [
    "page",
    "searchBox",
    "searchInput",
    "searchButton",
    "svg",
    "orgList",
    "pager"
  ],
  searchBox: ["searchBox", "searchInput", "searchButton", "svg"],
  searchInput: ["searchInput"],
  searchButton: ["searchButton", "svg"],
  svg: ["svg"],
  orgList: ["orgList", "pager"],
  pager: ["pager"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  page: typeof Page;
  searchBox: "div";
  searchInput: "input";
  searchButton: "div";
  svg: "svg";
  orgList: "div";
  pager: typeof Pager;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOrg__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicOrg__VariantsArgs;
  args?: PlasmicOrg__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicOrg__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicOrg__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicOrg__ArgProps,
      internalVariantPropNames: PlasmicOrg__VariantProps
    });

    return PlasmicOrg__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOrg";
  } else {
    func.displayName = `PlasmicOrg.${nodeName}`;
  }
  return func;
}

export const PlasmicOrg = Object.assign(
  // Top-level PlasmicOrg renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    page: makeNodeComponent("page"),
    searchBox: makeNodeComponent("searchBox"),
    searchInput: makeNodeComponent("searchInput"),
    searchButton: makeNodeComponent("searchButton"),
    svg: makeNodeComponent("svg"),
    orgList: makeNodeComponent("orgList"),
    pager: makeNodeComponent("pager"),

    // Metadata about props expected for PlasmicOrg
    internalVariantProps: PlasmicOrg__VariantProps,
    internalArgProps: PlasmicOrg__ArgProps
  }
);

export default PlasmicOrg;
/* prettier-ignore-end */
