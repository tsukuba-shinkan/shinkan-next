// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: gugJhCOlow
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
import sty from "./PlasmicHeaderLink.module.css"; // plasmic-import: gugJhCOlow/css

export type PlasmicHeaderLink__VariantMembers = {};

export type PlasmicHeaderLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicHeaderLink__VariantsArgs;
export const PlasmicHeaderLink__VariantProps = new Array<VariantPropType>();

export type PlasmicHeaderLink__ArgsType = {
  children?: React.ReactNode;
  to?: string;
};

type ArgPropType = keyof PlasmicHeaderLink__ArgsType;
export const PlasmicHeaderLink__ArgProps = new Array<ArgPropType>(
  "children",
  "to"
);

export type PlasmicHeaderLink__OverridesType = {
  root?: p.Flex<"div">;
  link?: p.Flex<"a"> & Partial<LinkProps>;
};

export interface DefaultHeaderLinkProps {
  children?: React.ReactNode;
  to?: string;
  className?: string;
}

function PlasmicHeaderLink__RenderFunc(props: {
  variants: PlasmicHeaderLink__VariantsArgs;
  args: PlasmicHeaderLink__ArgsType;
  overrides: PlasmicHeaderLink__OverridesType;

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
      <p.PlasmicLink
        data-plasmic-name={"link"}
        data-plasmic-override={overrides.link}
        className={classNames(projectcss.all, projectcss.a, sty.link)}
        component={Link}
        href={args.to}
        platform={"nextjs"}
      >
        {p.renderPlasmicSlot({
          defaultContents: "???????????????",
          value: args.children,
          className: classNames(sty.slotTargetChildren)
        })}
      </p.PlasmicLink>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "link"],
  link: ["link"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  link: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicHeaderLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicHeaderLink__VariantsArgs;
    args?: PlasmicHeaderLink__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicHeaderLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicHeaderLink__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicHeaderLink__ArgProps,
      internalVariantPropNames: PlasmicHeaderLink__VariantProps
    });

    return PlasmicHeaderLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicHeaderLink";
  } else {
    func.displayName = `PlasmicHeaderLink.${nodeName}`;
  }
  return func;
}

export const PlasmicHeaderLink = Object.assign(
  // Top-level PlasmicHeaderLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    link: makeNodeComponent("link"),

    // Metadata about props expected for PlasmicHeaderLink
    internalVariantProps: PlasmicHeaderLink__VariantProps,
    internalArgProps: PlasmicHeaderLink__ArgProps
  }
);

export default PlasmicHeaderLink;
/* prettier-ignore-end */
