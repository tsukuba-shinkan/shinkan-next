// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: wOiDfdBxT1
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import * as sty from "./PlasmicOnlyOpencampus2.module.css"; // plasmic-import: wOiDfdBxT1/css

export type PlasmicOnlyOpencampus2__VariantMembers = {
  opencampus: "opencampus";
};

export type PlasmicOnlyOpencampus2__VariantsArgs = {
  opencampus?: SingleBooleanChoiceArg<"opencampus">;
};

type VariantPropType = keyof PlasmicOnlyOpencampus2__VariantsArgs;
export const PlasmicOnlyOpencampus2__VariantProps = new Array<VariantPropType>(
  "opencampus"
);

export type PlasmicOnlyOpencampus2__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOnlyOpencampus2__ArgsType;
export const PlasmicOnlyOpencampus2__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicOnlyOpencampus2__OverridesType = {
  root?: p.Flex<"div">;
  box?: p.Flex<"div">;
};

export interface DefaultOnlyOpencampus2Props {
  children?: React.ReactNode;
  opencampus?: SingleBooleanChoiceArg<"opencampus">;
  className?: string;
}

function PlasmicOnlyOpencampus2__RenderFunc(props: {
  variants: PlasmicOnlyOpencampus2__VariantsArgs;
  args: PlasmicOnlyOpencampus2__ArgsType;
  overrides: PlasmicOnlyOpencampus2__OverridesType;
  dataFetches?: PlasmicOnlyOpencampus2__Fetches;
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
      {(hasVariant(variants, "opencampus", "opencampus") ? true : false) ? (
        <div
          data-plasmic-name={"box"}
          data-plasmic-override={overrides.box}
          className={classNames(defaultcss.all, sty.box, {
            [sty.box__opencampus]: hasVariant(
              variants,
              "opencampus",
              "opencampus"
            )
          })}
        >
          {p.renderPlasmicSlot({
            defaultContents: null,
            value: args.children
          })}
        </div>
      ) : null}
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "box"],
  box: ["box"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  box: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOnlyOpencampus2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOnlyOpencampus2__VariantsArgs;
    args?: PlasmicOnlyOpencampus2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicOnlyOpencampus2__Fetches;
  } & Omit<PlasmicOnlyOpencampus2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOnlyOpencampus2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicOnlyOpencampus2__ArgProps,
      internalVariantPropNames: PlasmicOnlyOpencampus2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicOnlyOpencampus2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOnlyOpencampus2";
  } else {
    func.displayName = `PlasmicOnlyOpencampus2.${nodeName}`;
  }
  return func;
}

export const PlasmicOnlyOpencampus2 = Object.assign(
  // Top-level PlasmicOnlyOpencampus2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    box: makeNodeComponent("box"),

    // Metadata about props expected for PlasmicOnlyOpencampus2
    internalVariantProps: PlasmicOnlyOpencampus2__VariantProps,
    internalArgProps: PlasmicOnlyOpencampus2__ArgProps
  }
);

export default PlasmicOnlyOpencampus2;
/* prettier-ignore-end */
