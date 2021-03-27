// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */
// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: hH2h_5Dtgs
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
import * as sty from "./PlasmicOrgCard.module.css"; // plasmic-import: hH2h_5Dtgs/css

export type PlasmicOrgCard__VariantMembers = {
  activity: "sports" | "art" | "culture" | "other";
  orgType: "ippan" | "kagai" | "other";
};

export type PlasmicOrgCard__VariantsArgs = {
  activity?: SingleChoiceArg<"sports" | "art" | "culture" | "other">;
  orgType?: SingleChoiceArg<"ippan" | "kagai" | "other">;
};

type VariantPropType = keyof PlasmicOrgCard__VariantsArgs;
export const PlasmicOrgCard__VariantProps = new Array<VariantPropType>(
  "activity",
  "orgType"
);

export type PlasmicOrgCard__ArgsType = {
  name?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  src?: string;
  to?: string | PageHref;
};

type ArgPropType = keyof PlasmicOrgCard__ArgsType;
export const PlasmicOrgCard__ArgProps = new Array<ArgPropType>(
  "name",
  "description",
  "children",
  "src",
  "to"
);

export type PlasmicOrgCard__OverridesType = {
  root?: p.Flex<"a"> & Partial<__PlatformLinkProps>;
};

export interface DefaultOrgCardProps {
  name?: React.ReactNode;
  description?: React.ReactNode;
  children?: React.ReactNode;
  src?: string;
  to?: string | PageHref;
  activity?: SingleChoiceArg<"sports" | "art" | "culture" | "other">;
  orgType?: SingleChoiceArg<"ippan" | "kagai" | "other">;
  className?: string;
}

function PlasmicOrgCard__RenderFunc(props: {
  variants: PlasmicOrgCard__VariantsArgs;
  args: PlasmicOrgCard__ArgsType;
  overrides: PlasmicOrgCard__OverridesType;
  forNode?: string;
}) {
  const { variants, args, overrides, forNode } = props;

  return (
    <p.PlasmicLink
      data-plasmic-name={"root"}
      data-plasmic-override={overrides.root}
      data-plasmic-root={true}
      data-plasmic-for-node={forNode}
      className={classNames(defaultcss.all, projectcss.root_reset, sty.root, {
        [sty.root__activity_art]: hasVariant(variants, "activity", "art"),
        [sty.root__activity_culture]: hasVariant(
          variants,
          "activity",
          "culture"
        ),
        [sty.root__activity_other]: hasVariant(variants, "activity", "other"),
        [sty.root__activity_sports]: hasVariant(variants, "activity", "sports")
      })}
      component={__PlatformLink}
      href={args.to}
      platform={"nextjs"}
    >
      <div className={classNames(defaultcss.all, sty.box__oxQw3)}>
        <div className={classNames(defaultcss.all, sty.box__egDkZ)}>
          <p.PlasmicSlot
            defaultContents={
              <div className={classNames(defaultcss.all, sty.box___7AuY)} />
            }
            value={args.children}
          />
        </div>

        <div
          className={classNames(defaultcss.all, sty.box___6WKxl, {
            [sty.box__activity_art___6WKxlLhErp]: hasVariant(
              variants,
              "activity",
              "art"
            ),
            [sty.box__activity_culture___6WKxllHrU6]: hasVariant(
              variants,
              "activity",
              "culture"
            ),
            [sty.box__activity_other___6WKxlpqEoh]: hasVariant(
              variants,
              "activity",
              "other"
            ),
            [sty.box__activity_sports___6WKxl6TPp1]: hasVariant(
              variants,
              "activity",
              "sports"
            )
          })}
        >
          <div
            className={classNames(defaultcss.all, sty.box___8In5T, {
              [sty.box__activity_culture___8In5TlHrU6]: hasVariant(
                variants,
                "activity",
                "culture"
              )
            })}
          >
            <p.PlasmicSlot
              defaultContents={"文字"}
              value={args.description}
              className={classNames(sty.slotDescription)}
            />
          </div>

          <div
            className={classNames(defaultcss.all, sty.box__jSjep, {
              [sty.box__activity_other__jSjeppqEoh]: hasVariant(
                variants,
                "activity",
                "other"
              )
            })}
          >
            <p.PlasmicSlot
              defaultContents={"橋本環奈同好会"}
              value={args.name}
              className={classNames(sty.slotName)}
            />
          </div>

          <div
            className={classNames(defaultcss.all, sty.box__ekacc, {
              [sty.box__activity_art__ekaccLhErp]: hasVariant(
                variants,
                "activity",
                "art"
              ),
              [sty.box__activity_sports__ekacc6TPp1]: hasVariant(
                variants,
                "activity",
                "sports"
              )
            })}
          >
            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__k4V,
                {
                  [sty.box__activity_art__k4VLhErp]: hasVariant(
                    variants,
                    "activity",
                    "art"
                  ),
                  [sty.box__activity_culture__k4VLHrU6]: hasVariant(
                    variants,
                    "activity",
                    "culture"
                  ),
                  [sty.box__activity_other__k4VPqEoh]: hasVariant(
                    variants,
                    "activity",
                    "other"
                  ),
                  [sty.box__activity_sports__k4V6TPp1]: hasVariant(
                    variants,
                    "activity",
                    "sports"
                  )
                }
              )}
            >
              {hasVariant(variants, "activity", "other")
                ? "その他"
                : hasVariant(variants, "activity", "culture")
                ? "文化系"
                : hasVariant(variants, "activity", "art")
                ? "芸術系"
                : hasVariant(variants, "activity", "sports")
                ? "体育系"
                : "なんとか系"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box__e1DR
              )}
            >
              {"・"}
            </div>

            <div
              className={classNames(
                defaultcss.all,
                defaultcss.__wab_text,
                sty.box___1OPd2,
                {
                  [sty.box__activity_art___1OPd2LhErp]: hasVariant(
                    variants,
                    "activity",
                    "art"
                  ),
                  [sty.box__activity_culture___1OPd2LHrU6]: hasVariant(
                    variants,
                    "activity",
                    "culture"
                  ),
                  [sty.box__activity_sports___1OPd26TPp1]: hasVariant(
                    variants,
                    "activity",
                    "sports"
                  ),
                  [sty.box__orgType_ippan___1OPd2FytRu]: hasVariant(
                    variants,
                    "orgType",
                    "ippan"
                  ),
                  [sty.box__orgType_kagai___1OPd2Efjyw]: hasVariant(
                    variants,
                    "orgType",
                    "kagai"
                  ),
                  [sty.box__orgType_other___1OPd2Cn0BT]: hasVariant(
                    variants,
                    "orgType",
                    "other"
                  )
                }
              )}
            >
              {hasVariant(variants, "orgType", "other")
                ? "その他"
                : hasVariant(variants, "orgType", "kagai")
                ? "課外活動団体"
                : hasVariant(variants, "orgType", "ippan")
                ? "一般学生団体"
                : "なんとか学生団体"}
            </div>
          </div>
        </div>
      </div>
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
  PlasmicOrgCard__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> = { // Explicitly specify variants, args, and overrides as objects
  variants?: PlasmicOrgCard__VariantsArgs;
  args?: PlasmicOrgCard__ArgsType;
  overrides?: NodeOverridesType<T>;
} & Omit<PlasmicOrgCard__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
  // Specify args directly as props
  Omit<PlasmicOrgCard__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicOrgCard__ArgProps,
      internalVariantPropNames: PlasmicOrgCard__VariantProps
    });

    return PlasmicOrgCard__RenderFunc({
      variants,
      args,
      overrides,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicOrgCard";
  } else {
    func.displayName = `PlasmicOrgCard.${nodeName}`;
  }
  return func;
}

export const PlasmicOrgCard = Object.assign(
  // Top-level PlasmicOrgCard renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements

    // Metadata about props expected for PlasmicOrgCard
    internalVariantProps: PlasmicOrgCard__VariantProps,
    internalArgProps: PlasmicOrgCard__ArgProps
  }
);

export default PlasmicOrgCard;
/* prettier-ignore-end */
