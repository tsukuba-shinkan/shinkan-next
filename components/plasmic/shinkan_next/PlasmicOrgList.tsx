// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: LzatSZ7oBYe
import * as React from "react";

import Head from "next/head";
import Link, { LinkProps } from "next/link";

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
import OrgCard from "../../OrgCard"; // plasmic-import: hH2h_5Dtgs/component

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import * as sty from "./PlasmicOrgList.module.css"; // plasmic-import: LzatSZ7oBYe/css

export type PlasmicOrgList__VariantMembers = {
  list: "list";
};

export type PlasmicOrgList__VariantsArgs = {
  list?: SingleBooleanChoiceArg<"list">;
};

type VariantPropType = keyof PlasmicOrgList__VariantsArgs;
export const PlasmicOrgList__VariantProps = new Array<VariantPropType>("list");

export type PlasmicOrgList__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOrgList__ArgsType;
export const PlasmicOrgList__ArgProps = new Array<ArgPropType>("children");

export type PlasmicOrgList__OverridesType = {
  root?: p.Flex<"div">;
  toggleBtn?: p.Flex<"div">;
};

export interface DefaultOrgListProps {
  children?: React.ReactNode;
  list?: SingleBooleanChoiceArg<"list">;
  className?: string;
}

function PlasmicOrgList__RenderFunc(props: {
  variants: PlasmicOrgList__VariantsArgs;
  args: PlasmicOrgList__ArgsType;
  overrides: PlasmicOrgList__OverridesType;
  dataFetches?: PlasmicOrgList__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div
        className={classNames(defaultcss.all, sty.box__psGc, {
          [sty.box__list__psGCg02S4]: hasVariant(variants, "list", "list")
        })}
      >
        <div
          data-plasmic-name={"toggleBtn"}
          data-plasmic-override={overrides.toggleBtn}
          className={classNames(defaultcss.all, sty.toggleBtn, {
            [sty.toggleBtn__list]: hasVariant(variants, "list", "list")
          })}
        >
          <div
            className={classNames(
              defaultcss.all,
              defaultcss.__wab_text,
              sty.box__wWoB,
              {
                [sty.box__list__wWoBg02S4]: hasVariant(variants, "list", "list")
              }
            )}
          >
            {hasVariant(variants, "list", "list")
              ? "カード表示に切り替え"
              : "リスト表示に切り替え"}
          </div>
        </div>
      </div>

      <div className={classNames(defaultcss.all, sty.box__we4V)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__bp3AN)}
                list={"list" as const}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__jsKye)}
                description={"アクセスするたび変わります"}
                list={"list" as const}
                name={"女装同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__iHbSt)}
                description={"ランダムに変わります"}
                list={"list" as const}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__j2G)}
                description={
                  "ランダムに選ぶ機能はWordPressの機能を使いたいところですが"
                }
                list={"list" as const}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__trp4P)}
                description={
                  "おそらくフロントエンドでシャッフルしないといけない"
                }
                list={"list" as const}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__tsqi9)}
                description={
                  <div
                    className={classNames(
                      defaultcss.all,
                      defaultcss.__wab_text,
                      sty.box__puyXv
                    )}
                  >
                    {
                      "長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れ長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみようてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう"
                    }
                  </div>
                }
                list={"list" as const}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__jo5Be)}
                list={"list" as const}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard___17FaN)}
                list={"list" as const}
              />
            </React.Fragment>
          ),
          value: args.children
        })}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "toggleBtn"],
  toggleBtn: ["toggleBtn"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  toggleBtn: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOrgList__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOrgList__VariantsArgs;
    args?: PlasmicOrgList__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicOrgList__Fetches;
  } & Omit<PlasmicOrgList__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOrgList__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicOrgList__ArgProps,
      internalVariantPropNames: PlasmicOrgList__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicOrgList__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOrgList";
  } else {
    func.displayName = `PlasmicOrgList.${nodeName}`;
  }
  return func;
}

export const PlasmicOrgList = Object.assign(
  // Top-level PlasmicOrgList renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    toggleBtn: makeNodeComponent("toggleBtn"),

    // Metadata about props expected for PlasmicOrgList
    internalVariantProps: PlasmicOrgList__VariantProps,
    internalArgProps: PlasmicOrgList__ArgProps
  }
);

export default PlasmicOrgList;
/* prettier-ignore-end */
