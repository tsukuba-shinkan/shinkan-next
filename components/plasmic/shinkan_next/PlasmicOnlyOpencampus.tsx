// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: x1nR8p_T71
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

import projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import sty from "./PlasmicOnlyOpencampus.module.css"; // plasmic-import: x1nR8p_T71/css

export type PlasmicOnlyOpencampus__VariantMembers = {
  opencampus: "opencampus";
};

export type PlasmicOnlyOpencampus__VariantsArgs = {
  opencampus?: SingleBooleanChoiceArg<"opencampus">;
};

type VariantPropType = keyof PlasmicOnlyOpencampus__VariantsArgs;
export const PlasmicOnlyOpencampus__VariantProps = new Array<VariantPropType>(
  "opencampus"
);

export type PlasmicOnlyOpencampus__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicOnlyOpencampus__ArgsType;
export const PlasmicOnlyOpencampus__ArgProps = new Array<ArgPropType>(
  "children"
);

export type PlasmicOnlyOpencampus__OverridesType = {
  root?: p.Flex<"div">;
  freeBox?: p.Flex<"div">;
};

export interface DefaultOnlyOpencampusProps {
  children?: React.ReactNode;
  opencampus?: SingleBooleanChoiceArg<"opencampus">;
  className?: string;
}

function PlasmicOnlyOpencampus__RenderFunc(props: {
  variants: PlasmicOnlyOpencampus__VariantsArgs;
  args: PlasmicOnlyOpencampus__ArgsType;
  overrides: PlasmicOnlyOpencampus__OverridesType;

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
      {(hasVariant(variants, "opencampus", "opencampus") ? true : false) ? (
        <div
          data-plasmic-name={"freeBox"}
          data-plasmic-override={overrides.freeBox}
          className={classNames(projectcss.all, sty.freeBox, {
            [sty.freeBoxopencampus]: hasVariant(
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
  root: ["root", "freeBox"],
  freeBox: ["freeBox"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  freeBox: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicOnlyOpencampus__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicOnlyOpencampus__VariantsArgs;
    args?: PlasmicOnlyOpencampus__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicOnlyOpencampus__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicOnlyOpencampus__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicOnlyOpencampus__ArgProps,
      internalVariantPropNames: PlasmicOnlyOpencampus__VariantProps
    });

    return PlasmicOnlyOpencampus__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOnlyOpencampus";
  } else {
    func.displayName = `PlasmicOnlyOpencampus.${nodeName}`;
  }
  return func;
}

export const PlasmicOnlyOpencampus = Object.assign(
  // Top-level PlasmicOnlyOpencampus renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    freeBox: makeNodeComponent("freeBox"),

    // Metadata about props expected for PlasmicOnlyOpencampus
    internalVariantProps: PlasmicOnlyOpencampus__VariantProps,
    internalArgProps: PlasmicOnlyOpencampus__ArgProps
  }
);

export default PlasmicOnlyOpencampus;
/* prettier-ignore-end */
