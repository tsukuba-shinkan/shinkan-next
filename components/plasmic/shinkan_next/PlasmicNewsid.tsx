// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: ErjPU3ASyU
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
import * as sty from "./PlasmicNewsid.module.css"; // plasmic-import: ErjPU3ASyU/css

export type PlasmicNewsid__VariantMembers = {};

export type PlasmicNewsid__VariantsArgs = {};
type VariantPropType = keyof PlasmicNewsid__VariantsArgs;
export const PlasmicNewsid__VariantProps = new Array<VariantPropType>();

export type PlasmicNewsid__ArgsType = {
  title?: React.ReactNode;
  children?: React.ReactNode;
  date?: React.ReactNode;
};

type ArgPropType = keyof PlasmicNewsid__ArgsType;
export const PlasmicNewsid__ArgProps = new Array<ArgPropType>(
  "title",
  "children",
  "date"
);

export type PlasmicNewsid__OverridesType = {
  root?: p.Flex<"div">;
  page?: p.Flex<typeof Page>;
  h1?: p.Flex<"h1">;
};

export interface DefaultNewsidProps {
  dataFetches: PlasmicNewsid__Fetches;
}

function PlasmicNewsid__RenderFunc(props: {
  variants: PlasmicNewsid__VariantsArgs;
  args: PlasmicNewsid__ArgsType;
  overrides: PlasmicNewsid__OverridesType;
  dataFetches?: PlasmicNewsid__Fetches;
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
            <h1
              data-plasmic-name={"h1"}
              data-plasmic-override={overrides.h1}
              className={classNames(
                defaultcss.h1,
                defaultcss.__wab_text,
                sty.h1
              )}
            >
              {"お知らせ"}
            </h1>

            <div className={classNames(defaultcss.all, sty.freeBox__fjhVu)}>
              {p.renderPlasmicSlot({
                defaultContents: "新歓Webを公開しました",
                value: args.title,
                className: classNames(sty.slotTitle)
              })}
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox___97Osx)}>
              {p.renderPlasmicSlot({
                defaultContents: "2020/4/1",
                value: args.date,
                className: classNames(sty.slotDate)
              })}
            </div>

            <div className={classNames(defaultcss.all, sty.freeBox__bKa9P)}>
              {p.renderPlasmicSlot({
                defaultContents: "テキストがWordPressから取得されると思います",
                value: args.children,
                className: classNames(sty.slotChildren)
              })}
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
  PlasmicNewsid__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicNewsid__VariantsArgs;
    args?: PlasmicNewsid__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicNewsid__Fetches;
  } & Omit<PlasmicNewsid__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicNewsid__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicNewsid__ArgProps,
      internalVariantPropNames: PlasmicNewsid__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicNewsid__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicNewsid";
  } else {
    func.displayName = `PlasmicNewsid.${nodeName}`;
  }
  return func;
}

export const PlasmicNewsid = Object.assign(
  // Top-level PlasmicNewsid renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    page: makeNodeComponent("page"),
    h1: makeNodeComponent("h1"),

    // Metadata about props expected for PlasmicNewsid
    internalVariantProps: PlasmicNewsid__VariantProps,
    internalArgProps: PlasmicNewsid__ArgProps
  }
);

export default PlasmicNewsid;
/* prettier-ignore-end */
