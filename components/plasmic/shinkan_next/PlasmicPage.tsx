// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: tdmoFHXXat7
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
import HeaderLink from "../../HeaderLink"; // plasmic-import: gugJhCOlow/component

import { useScreenVariants } from "./PlasmicGlobalVariant__Screen"; // plasmic-import: rGlYl5prqxJP/globalVariant

import "@plasmicapp/react-web/lib/plasmic.css";
import * as defaultcss from "../plasmic__default_style.module.css"; // plasmic-import: global/defaultcss
import * as projectcss from "./plasmic_shinkan_next.module.css"; // plasmic-import: 4oWAtwkSeL4ciDYEekjxG9/projectcss
import * as sty from "./PlasmicPage.module.css"; // plasmic-import: tdmoFHXXat7/css

export type PlasmicPage__VariantMembers = {};

export type PlasmicPage__VariantsArgs = {};
type VariantPropType = keyof PlasmicPage__VariantsArgs;
export const PlasmicPage__VariantProps = new Array<VariantPropType>();

export type PlasmicPage__ArgsType = {
  children?: React.ReactNode;
};

type ArgPropType = keyof PlasmicPage__ArgsType;
export const PlasmicPage__ArgProps = new Array<ArgPropType>("children");

export type PlasmicPage__OverridesType = {
  root?: p.Flex<"div">;
  header?: p.Flex<"div">;
  title?: p.Flex<"a"> & Partial<__PlatformLinkProps>;
  links?: p.Flex<"div">;
  container?: p.Flex<"div">;
  footer?: p.Flex<"div">;
  columns?: p.Flex<"div">;
};

export interface DefaultPageProps {
  children?: React.ReactNode;
  className?: string;
}

function PlasmicPage__RenderFunc(props: {
  variants: PlasmicPage__VariantsArgs;
  args: PlasmicPage__ArgsType;
  overrides: PlasmicPage__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  const globalVariants = ensureGlobalVariants({
    screen: useScreenVariants()
  });

  return (
    <div
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root)}
    >
      <div className={classNames(defaultcss.all, sty.box__i8QZa)}>
        <div
          data-plasmic-name={"header"}
          data-plasmic-override={overrides.header}
          className={classNames(defaultcss.all, sty.header)}
        >
          <p.PlasmicLink
            data-plasmic-name={"title"}
            data-plasmic-override={overrides.title}
            className={classNames(defaultcss.all, sty.title)}
            component={__PlatformLink}
            href={"/" as const}
            platform={"nextjs"}
          >
            <img
              alt={""}
              className={classNames(defaultcss.img, sty.img__e1Q90)}
              role={"img"}
              src={"/plasmic/shinkan_next/images/microsoftTeamsImagepng.png"}
            />

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__enS97
              )}
            >
              {"筑波大学新歓Web"}
            </div>
          </p.PlasmicLink>

          <div
            data-plasmic-name={"links"}
            data-plasmic-override={overrides.links}
            className={classNames(defaultcss.all, sty.links)}
          >
            <HeaderLink
              className={classNames("__wab_instance", sty.headerLink___2GQ6)}
              to={"/events" as const}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__wyzrt
                )}
              >
                {"イベントを探す"}
              </div>
            </HeaderLink>

            <HeaderLink
              className={classNames("__wab_instance", sty.headerLink__lle4C)}
              to={"/org" as const}
            >
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__wyBgt
                )}
              >
                {"団体を探す"}
              </div>
            </HeaderLink>
          </div>
        </div>

        <div
          data-plasmic-name={"container"}
          data-plasmic-override={overrides.container}
          className={classNames(defaultcss.all, sty.container)}
        >
          <p.PlasmicSlot defaultContents={null} value={args.children} />
        </div>

        <div
          data-plasmic-name={"footer"}
          data-plasmic-override={overrides.footer}
          className={classNames(defaultcss.all, sty.footer)}
        >
          <p.Stack
            as={"div"}
            data-plasmic-name={"columns"}
            data-plasmic-override={overrides.columns}
            hasGap={true}
            className={classNames(defaultcss.all, sty.columns)}
          >
            <div className={classNames(defaultcss.all, sty.column__swH9F)}>
              <div className={classNames(defaultcss.all, sty.box__uj51S)}>
                <p.PlasmicLink
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.link__oM7U
                  )}
                  component={__PlatformLink}
                  href={"/about" as const}
                  platform={"nextjs"}
                >
                  {"このサイトについて"}
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.link__ur8FT
                  )}
                  component={__PlatformLink}
                  href={"/404" as const}
                  platform={"nextjs"}
                >
                  {"新歓祭について"}
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.link___8Ay0F
                  )}
                  component={__PlatformLink}
                  href={"/404" as const}
                  platform={"nextjs"}
                >
                  {"団体用システムログイン"}
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.link__xFwV
                  )}
                  component={__PlatformLink}
                  href={
                    "http://www.stb.tsukuba.ac.jp/~bunsa/wiki/doku.php" as const
                  }
                  platform={"nextjs"}
                >
                  {"文化系サークル連合会"}
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.link__ilNgt
                  )}
                  component={__PlatformLink}
                  href={"http://www.stb.tsukuba.ac.jp/~geisa/" as const}
                  platform={"nextjs"}
                >
                  {"芸術系サークル連合会"}
                </p.PlasmicLink>

                <p.PlasmicLink
                  className={classNames(
                    defaultcss.all,
                    defaultcss.__wab_text,
                    sty.link__qr0Va
                  )}
                  component={__PlatformLink}
                  href={"https://www.stb.tsukuba.ac.jp/~taiikukai/" as const}
                  platform={"nextjs"}
                >
                  {"体育会"}
                </p.PlasmicLink>
              </div>
            </div>

            <div className={classNames(defaultcss.all, sty.column__yXJr8)}>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__l1A9M
                )}
              >
                {"©\u00012021\u0001筑波大学新歓Webプロジェクトチーム"}
              </div>

              <img
                alt={""}
                className={classNames(defaultcss.img, sty.img__jxcc1)}
                role={"img"}
                src={"/plasmic/shinkan_next/images/schoollogopng.png"}
              />
            </div>
          </p.Stack>
        </div>
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "header", "title", "links", "container", "footer", "columns"],
  header: ["header", "title", "links"],
  title: ["title"],
  links: ["links"],
  container: ["container"],
  footer: ["footer", "columns"],
  columns: ["columns"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<
  T extends NodeNameType
> = typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  header: "div";
  title: "a";
  links: "div";
  container: "div";
  footer: "div";
  columns: "div";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicPage__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicPage__VariantsArgs;
  args?: PlasmicPage__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicPage__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicPage__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicPage__ArgProps,
      internalVariantPropNames: PlasmicPage__VariantProps
    });

    return PlasmicPage__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicPage";
  } else {
    func.displayName = `PlasmicPage.${nodeName}`;
  }
  return func;
}

export const PlasmicPage = Object.assign(
  // Top-level PlasmicPage renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    header: makeNodeComponent("header"),
    title: makeNodeComponent("title"),
    links: makeNodeComponent("links"),
    container: makeNodeComponent("container"),
    footer: makeNodeComponent("footer"),
    columns: makeNodeComponent("columns"),

    // Metadata about props expected for PlasmicPage
    internalVariantProps: PlasmicPage__VariantProps,
    internalArgProps: PlasmicPage__ArgProps
  }
);

export default PlasmicPage;
/* prettier-ignore-end */
