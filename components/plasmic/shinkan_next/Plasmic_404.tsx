// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: 3Ag6mdjdwk
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
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import * as sty from "./Plasmic_404.module.css"; // plasmic-import: 3Ag6mdjdwk/css

export type Plasmic_404__VariantMembers = {};

export type Plasmic_404__VariantsArgs = {};
type VariantPropType = keyof Plasmic_404__VariantsArgs;
export const Plasmic_404__VariantProps = new Array<VariantPropType>();

export type Plasmic_404__ArgsType = {};
type ArgPropType = keyof Plasmic_404__ArgsType;
export const Plasmic_404__ArgProps = new Array<ArgPropType>();

export type Plasmic_404__OverridesType = {
  root?: p.Flex<"div">;
  page?: p.Flex<typeof Page>;
};

export interface Default_404Props {
  dataFetches: Plasmic_404__Fetches;
}

function Plasmic_404__RenderFunc(props: {
  variants: Plasmic_404__VariantsArgs;
  args: Plasmic_404__ArgsType;
  overrides: Plasmic_404__OverridesType;
  dataFetches?: Plasmic_404__Fetches;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode, dataFetches } = props;

  return (
    <React.Fragment>
      <Head>
        <title key="title">{""}</title>
        <meta key="og:title" property="og:title" content={""} />
        <meta
          key="description"
          name="description"
          property="og:description"
          content={""}
        />
      </Head>

      <style>{`
        body {
          margin: 0;
        }
      `}</style>

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
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__xpOkw
              )}
            >
              {"404"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.freeBox__htAjc
              )}
            >
              {"お探しのページは見つかりませんでした"}
            </div>
          </Page>
        </div>
      </div>
    </React.Fragment>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "page"],
  page: ["page"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  page: typeof Page;
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  Plasmic_404__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: Plasmic_404__VariantsArgs;
    args?: Plasmic_404__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: Plasmic_404__Fetches;
  } & Omit<Plasmic_404__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<Plasmic_404__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: Plasmic_404__ArgProps,
      internalVariantPropNames: Plasmic_404__VariantProps
    });

    const { dataFetches } = props;

    return Plasmic_404__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "Plasmic_404";
  } else {
    func.displayName = `Plasmic_404.${nodeName}`;
  }
  return func;
}

export const Plasmic_404 = Object.assign(
  // Top-level Plasmic_404 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    page: makeNodeComponent("page"),

    // Metadata about props expected for Plasmic_404
    internalVariantProps: Plasmic_404__VariantProps,
    internalArgProps: Plasmic_404__ArgProps
  }
);

export default Plasmic_404;
/* prettier-ignore-end */
