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

import projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import sty from "./PlasmicOrgList.module.css"; // plasmic-import: LzatSZ7oBYe/css

import FormatListBulletedBlack24DpsvgIcon from "./icons/PlasmicIcon__FormatListBulletedBlack24Dpsvg"; // plasmic-import: Iq1m1JJ7I8/icon
import GridViewBlack24DpsvgIcon from "./icons/PlasmicIcon__GridViewBlack24Dpsvg"; // plasmic-import: Bh_ZOVdxIy/icon

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

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        projectcss.all,
        projectcss.root_reset,
        projectcss.plasmic_default_styles,
        projectcss.plasmic_tokens,
        sty.root
      )}
    >
      <div
        className={classNames(projectcss.all, sty.freeBox__psGc, {
          [sty.freeBoxlist__psGCg02S4]: hasVariant(variants, "list", "list")
        })}
      >
        <p.Stack
          as={"div"}
          data-plasmic-name={"toggleBtn"}
          data-plasmic-override={overrides.toggleBtn}
          hasGap={true}
          className={classNames(projectcss.all, sty.toggleBtn, {
            [sty.toggleBtnlist]: hasVariant(variants, "list", "list")
          })}
        >
          <FormatListBulletedBlack24DpsvgIcon
            className={classNames(projectcss.all, sty.svg__ojiWa)}
            role={"img"}
          />

          <GridViewBlack24DpsvgIcon
            className={classNames(projectcss.all, sty.svg___8FAZa)}
            role={"img"}
          />
        </p.Stack>
      </div>

      <div className={classNames(projectcss.all, sty.freeBox__we4V)}>
        {p.renderPlasmicSlot({
          defaultContents: (
            <React.Fragment>
              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__bp3AN)}
                list={true}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__jsKye)}
                description={"アクセスするたび変わります"}
                list={true}
                name={"女装同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__iHbSt)}
                description={"ランダムに変わります"}
                list={true}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__j2G)}
                description={
                  "ランダムに選ぶ機能はWordPressの機能を使いたいところですが"
                }
                list={true}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__trp4P)}
                description={
                  "おそらくフロントエンドでシャッフルしないといけない"
                }
                list={true}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__tsqi9)}
                description={
                  <div
                    className={classNames(
                      projectcss.all,
                      projectcss.__wab_text,
                      sty.text__puyXv
                    )}
                  >
                    {
                      "長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れ長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみようてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう長い文字を入れてみよう"
                    }
                  </div>
                }
                list={true}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard__jo5Be)}
                list={true}
                name={"橋本環奈同好会"}
              />

              <OrgCard
                className={classNames("__wab_instance", sty.orgCard___17FaN)}
                list={true}
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

    return PlasmicOrgList__RenderFunc({
      variants,
      args,
      overrides,
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
