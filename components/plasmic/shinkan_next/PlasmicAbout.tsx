// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: 8Na-IOV-bC
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
import Page from "../../Page"; // plasmic-import: tdmoFHXXat7/component

import "@plasmicapp/react-web/lib/plasmic.css";

import projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import sty from "./PlasmicAbout.module.css"; // plasmic-import: 8Na-IOV-bC/css

export type PlasmicAbout__VariantMembers = {};

export type PlasmicAbout__VariantsArgs = {};
type VariantPropType = keyof PlasmicAbout__VariantsArgs;
export const PlasmicAbout__VariantProps = new Array<VariantPropType>();

export type PlasmicAbout__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicAbout__ArgsType;
export const PlasmicAbout__ArgProps = new Array<ArgPropType>("children");

export type PlasmicAbout__OverridesType = {
  root?: p.Flex<"div">;
  page?: p.Flex<typeof Page>;
  h1?: p.Flex<"h1">;
};

export interface DefaultAboutProps {}

function PlasmicAbout__RenderFunc(props: {
  variants: PlasmicAbout__VariantsArgs;
  args: PlasmicAbout__ArgsType;
  overrides: PlasmicAbout__OverridesType;

  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <React.Fragment>
      <Head>
        <meta name="twitter:card" content="summary" />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

      <div className={projectcss.plasmic_page_wrapper}>
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
          <Page
            data-plasmic-name={"page"}
            data-plasmic-override={overrides.page}
            className={classNames("__wab_instance", sty.page)}
          >
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                projectcss.all,
                projectcss.h1,
                projectcss.__wab_text,
                sty.h1
              )}
            >
              {"???????????????????????????"}
            </h1>

            <div className={classNames(projectcss.all, sty.freeBox___8Irta)}>
              <div className={classNames(projectcss.all, sty.freeBox__sgg3G)}>
                {p.renderPlasmicSlot({
                  defaultContents: "???????????????????????????WordPress???????????????",
                  value: args.children,
                  className: classNames(sty.slotTargetChildren)
                })}
              </div>
            </div>
          </Page>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "page", "h1"],
  page: ["page", "h1"],
  h1: ["h1"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  page: typeof Page;
  h1: "h1";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicAbout__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicAbout__VariantsArgs;
    args?: PlasmicAbout__ArgsType;
    overrides?: NodeOverridesType<T>;
  } & Omit<PlasmicAbout__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicAbout__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicAbout__ArgProps,
      internalVariantPropNames: PlasmicAbout__VariantProps
    });

    return PlasmicAbout__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicAbout";
  } else {
    func.displayName = `PlasmicAbout.${nodeName}`;
  }
  return func;
}

export const PlasmicAbout = Object.assign(
  // Top-level PlasmicAbout renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    page: makeNodeComponent("page"),
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicAbout
    internalVariantProps: PlasmicAbout__VariantProps,
    internalArgProps: PlasmicAbout__ArgProps
  }
);

export default PlasmicAbout;
/* prettier-ignore-end */
