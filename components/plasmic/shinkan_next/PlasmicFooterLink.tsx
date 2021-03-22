// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: mfIEP8VL9n
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

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import * as sty from "./PlasmicFooterLink.module.css"; // plasmic-import: mfIEP8VL9n/css

export type PlasmicFooterLink__VariantMembers = {};

export type PlasmicFooterLink__VariantsArgs = {};
type VariantPropType = keyof PlasmicFooterLink__VariantsArgs;
export const PlasmicFooterLink__VariantProps = new Array<VariantPropType>();

export type PlasmicFooterLink__ArgsType = {
  to?: string | PageHref;
};

type ArgPropType = keyof PlasmicFooterLink__ArgsType;
export const PlasmicFooterLink__ArgProps = new Array<ArgPropType>("to");

export type PlasmicFooterLink__OverridesType = {
  root?: p.Flex<"a"> & Partial<__PlatformLinkProps>;
};

export interface DefaultFooterLinkProps {
  to?: string | PageHref;
  className?: string;
}

function PlasmicFooterLink__RenderFunc(props: {
  variants: PlasmicFooterLink__VariantsArgs;
  args: PlasmicFooterLink__ArgsType;
  overrides: PlasmicFooterLink__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(
        defaultcss.all,
        defaultcss.__wab_text,
        projectcss.root_reset,
        sty.root
      )}
      component={__PlatformLink}
      href={args.to}
      platform={"nextjs"}
    >
      {"リンク"}
    </p.PlasmicLink>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "a";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicFooterLink__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicFooterLink__VariantsArgs;
  args?: PlasmicFooterLink__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicFooterLink__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicFooterLink__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicFooterLink__ArgProps,
      internalVariantPropNames: PlasmicFooterLink__VariantProps
    });

    return PlasmicFooterLink__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicFooterLink";
  } else {
    func.displayName = `PlasmicFooterLink.${nodeName}`;
  }
  return func;
}

export const PlasmicFooterLink = Object.assign(
  // Top-level PlasmicFooterLink renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicFooterLink
    internalVariantProps: PlasmicFooterLink__VariantProps,
    internalArgProps: PlasmicFooterLink__ArgProps
  }
);

export default PlasmicFooterLink;
/* prettier-ignore-end */
