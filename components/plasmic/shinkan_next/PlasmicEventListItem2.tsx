// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */

/** @jsxRuntime classic */
/** @jsx createPlasmicElementProxy */
/** @jsxFrag React.Fragment */

// This class is auto-generated by Plasmic; please do not edit!
// Plasmic Project: 4oWAtwkSeL4ciDYEekjxG9
// Component: g0BBn2-YWf
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
import * as sty from "./PlasmicEventListItem2.module.css"; // plasmic-import: g0BBn2-YWf/css

import ExpandMoreBlack24DpsvgIcon from "./icons/PlasmicIcon__ExpandMoreBlack24Dpsvg"; // plasmic-import: nktDh0ThKG/icon
import ExpandLess24PxsvgIcon from "./icons/PlasmicIcon__ExpandLess24Pxsvg"; // plasmic-import: PYIjxKxUq0/icon

export type PlasmicEventListItem2__VariantMembers = {
  expand: "expand";
  activity: "sports" | "art" | "culture" | "other";
  organization: "ippan" | "kagai" | "other";
};

export type PlasmicEventListItem2__VariantsArgs = {
  expand?: SingleBooleanChoiceArg<"expand">;
  activity?: SingleChoiceArg<"sports" | "art" | "culture" | "other">;
  organization?: SingleChoiceArg<"ippan" | "kagai" | "other">;
};

type VariantPropType = keyof PlasmicEventListItem2__VariantsArgs;
export const PlasmicEventListItem2__VariantProps = new Array<VariantPropType>(
  "expand",
  "activity",
  "organization"
);

export type PlasmicEventListItem2__ArgsType = {
  dateTime?: React.ReactNode;
  place?: React.ReactNode;
  orgName?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
};

type ArgPropType = keyof PlasmicEventListItem2__ArgsType;
export const PlasmicEventListItem2__ArgProps = new Array<ArgPropType>(
  "dateTime",
  "place",
  "orgName",
  "children",
  "title"
);

export type PlasmicEventListItem2__OverridesType = {
  root?: p.Flex<"div">;
  svg?: p.Flex<"svg">;
};

export interface DefaultEventListItem2Props {
  dateTime?: React.ReactNode;
  place?: React.ReactNode;
  orgName?: React.ReactNode;
  children?: React.ReactNode;
  title?: React.ReactNode;
  expand?: SingleBooleanChoiceArg<"expand">;
  activity?: SingleChoiceArg<"sports" | "art" | "culture" | "other">;
  organization?: SingleChoiceArg<"ippan" | "kagai" | "other">;
  className?: string;
}

function PlasmicEventListItem2__RenderFunc(props: {
  variants: PlasmicEventListItem2__VariantsArgs;
  args: PlasmicEventListItem2__ArgsType;
  overrides: PlasmicEventListItem2__OverridesType;
  dataFetches?: PlasmicEventListItem2__Fetches;
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
      <div
        className={classNames(defaultcss.all, sty.box__luIu, {
          [sty.box__activity_art__luIuBzkut]: hasVariant(
            variants,
            "activity",
            "art"
          ),
          [sty.box__activity_culture__luIuBcQjz]: hasVariant(
            variants,
            "activity",
            "culture"
          ),
          [sty.box__activity_other__luIu3V2CT]: hasVariant(
            variants,
            "activity",
            "other"
          ),
          [sty.box__activity_sports__luIuVLebt]: hasVariant(
            variants,
            "activity",
            "sports"
          ),
          [sty.box__expand__luIuVeGt]: hasVariant(variants, "expand", "expand")
        })}
      >
        <div
          className={classNames(defaultcss.all, sty.box__cAelG, {
            [sty.box__activity_other__cAelG3V2CT]: hasVariant(
              variants,
              "activity",
              "other"
            ),
            [sty.box__activity_sports__cAelGvLebt]: hasVariant(
              variants,
              "activity",
              "sports"
            ),
            [sty.box__expand__cAelGveGt]: hasVariant(
              variants,
              "expand",
              "expand"
            )
          })}
        >
          <div
            className={classNames(defaultcss.all, sty.box__wkg, {
              [sty.box__activity_other__wkg3V2CT]: hasVariant(
                variants,
                "activity",
                "other"
              ),
              [sty.box__expand__wkgVeGt]: hasVariant(
                variants,
                "expand",
                "expand"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "4/4 18:00",
              value: args.dateTime,
              className: classNames(sty.slotDateTime, {
                [sty.slotDateTime__activity_other]: hasVariant(
                  variants,
                  "activity",
                  "other"
                ),
                [sty.slotDateTime__expand]: hasVariant(
                  variants,
                  "expand",
                  "expand"
                )
              })
            })}
          </div>

          <div
            className={classNames(defaultcss.all, sty.box__aTUjn, {
              [sty.box__activity_sports__aTUjnvLebt]: hasVariant(
                variants,
                "activity",
                "sports"
              ),
              [sty.box__expand__aTUjnVeGt]: hasVariant(
                variants,
                "expand",
                "expand"
              )
            })}
          >
            {p.renderPlasmicSlot({
              defaultContents: "ご飯会",
              value: args.title,
              className: classNames(sty.slotTitle, {
                [sty.slotTitle__activity_sports]: hasVariant(
                  variants,
                  "activity",
                  "sports"
                ),
                [sty.slotTitle__expand]: hasVariant(
                  variants,
                  "expand",
                  "expand"
                )
              })
            })}
          </div>

          {false ? (
            <div
              className={classNames(defaultcss.all, sty.box__epzFf, {
                [sty.box__activity_art__epzFfBzkut]: hasVariant(
                  variants,
                  "activity",
                  "art"
                ),
                [sty.box__activity_culture__epzFfBcQjz]: hasVariant(
                  variants,
                  "activity",
                  "culture"
                ),
                [sty.box__activity_other__epzFf3V2CT]: hasVariant(
                  variants,
                  "activity",
                  "other"
                ),
                [sty.box__activity_sports__epzFfvLebt]: hasVariant(
                  variants,
                  "activity",
                  "sports"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "Zoom",
                value: args.place,
                className: classNames(sty.slotPlace, {
                  [sty.slotPlace__activity_sports]: hasVariant(
                    variants,
                    "activity",
                    "sports"
                  )
                })
              })}
            </div>
          ) : null}

          <div className={classNames(defaultcss.all, sty.box___46Hq2)}>
            <div
              className={classNames(defaultcss.all, sty.box___2DfeI, {
                [sty.box__activity_other___2DfeI3V2CT]: hasVariant(
                  variants,
                  "activity",
                  "other"
                ),
                [sty.box__activity_sports___2DfeIvLebt]: hasVariant(
                  variants,
                  "activity",
                  "sports"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "ちょっと長めの団体名を入れてみます",
                value: args.orgName,
                className: classNames(sty.slotOrgName, {
                  [sty.slotOrgName__activity_other]: hasVariant(
                    variants,
                    "activity",
                    "other"
                  )
                })
              })}
            </div>

            <div className={classNames(defaultcss.all, sty.box__v4I50)}>
              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box__keKdP,
                  {
                    [sty.box__activity_art__keKdPBzkut]: hasVariant(
                      variants,
                      "activity",
                      "art"
                    ),
                    [sty.box__activity_culture__keKdPBcQjz]: hasVariant(
                      variants,
                      "activity",
                      "culture"
                    ),
                    [sty.box__activity_other__keKdP3V2CT]: hasVariant(
                      variants,
                      "activity",
                      "other"
                    ),
                    [sty.box__activity_sports__keKdPvLebt]: hasVariant(
                      variants,
                      "activity",
                      "sports"
                    ),
                    [sty.box__organization_ippan__keKdPj5Ay7]: hasVariant(
                      variants,
                      "organization",
                      "ippan"
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
                  sty.box__dp6W,
                  {
                    [sty.box__activity_art__dp6WBzkut]: hasVariant(
                      variants,
                      "activity",
                      "art"
                    ),
                    [sty.box__activity_culture__dp6WBcQjz]: hasVariant(
                      variants,
                      "activity",
                      "culture"
                    ),
                    [sty.box__activity_other__dp6W3V2CT]: hasVariant(
                      variants,
                      "activity",
                      "other"
                    ),
                    [sty.box__activity_sports__dp6WVLebt]: hasVariant(
                      variants,
                      "activity",
                      "sports"
                    )
                  }
                )}
              >
                {"・"}
              </div>

              <div
                className={classNames(
                  defaultcss.all,
                  defaultcss.__wab_text,
                  sty.box___6KSj,
                  {
                    [sty.box__activity_art___6KSjBzkut]: hasVariant(
                      variants,
                      "activity",
                      "art"
                    ),
                    [sty.box__activity_culture___6KSjBcQjz]: hasVariant(
                      variants,
                      "activity",
                      "culture"
                    ),
                    [sty.box__activity_other___6KSj3V2CT]: hasVariant(
                      variants,
                      "activity",
                      "other"
                    ),
                    [sty.box__activity_sports___6KSjVLebt]: hasVariant(
                      variants,
                      "activity",
                      "sports"
                    ),
                    [sty.box__expand___6KSjVeGt]: hasVariant(
                      variants,
                      "expand",
                      "expand"
                    ),
                    [sty.box__organization_ippan___6KSjJ5Ay7]: hasVariant(
                      variants,
                      "organization",
                      "ippan"
                    ),
                    [sty.box__organization_kagai___6KSjDe9XZ]: hasVariant(
                      variants,
                      "organization",
                      "kagai"
                    ),
                    [sty.box__organization_other___6KSjEmHf]: hasVariant(
                      variants,
                      "organization",
                      "other"
                    )
                  }
                )}
              >
                {hasVariant(variants, "organization", "other")
                  ? "その他"
                  : hasVariant(variants, "organization", "kagai")
                  ? "課外活動団体"
                  : hasVariant(variants, "organization", "ippan")
                  ? "一般学生団体"
                  : "なんとか学生団体"}
              </div>
            </div>
          </div>

          <p.PlasmicIcon
            data-plasmic-name={"svg"}
            data-plasmic-override={overrides.svg}
            PlasmicIconType={
              hasVariant(variants, "expand", "expand")
                ? ExpandLess24PxsvgIcon
                : ExpandMoreBlack24DpsvgIcon
            }
            className={classNames(defaultcss.all, sty.svg, {
              [sty.svg__expand]: hasVariant(variants, "expand", "expand")
            })}
            role={"img"}
          />
        </div>

        {(hasVariant(variants, "expand", "expand") ? true : false) ? (
          <div
            className={classNames(defaultcss.all, sty.box__n0Ou2, {
              [sty.box__expand__n0Ou2VeGt]: hasVariant(
                variants,
                "expand",
                "expand"
              )
            })}
          >
            <div
              className={classNames(defaultcss.all, sty.box___3Kcnf, {
                [sty.box__activity_sports___3KcnfvLebt]: hasVariant(
                  variants,
                  "activity",
                  "sports"
                ),
                [sty.box__expand___3KcnfVeGt]: hasVariant(
                  variants,
                  "expand",
                  "expand"
                )
              })}
            >
              {p.renderPlasmicSlot({
                defaultContents: "詳細情報がここに書いてあります",
                value: args.children,
                className: classNames(sty.slotChildren, {
                  [sty.slotChildren__activity_sports]: hasVariant(
                    variants,
                    "activity",
                    "sports"
                  ),
                  [sty.slotChildren__expand]: hasVariant(
                    variants,
                    "expand",
                    "expand"
                  )
                })
              })}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  ) as React.ReactElement | null;
}

const PlasmicDescendants = {
  root: ["root", "svg"],
  svg: ["svg"]
} as const;
type NodeNameType = keyof typeof PlasmicDescendants;
type DescendantsType<T extends NodeNameType> =
  typeof PlasmicDescendants[T][number];
type NodeDefaultElementType = {
  root: "div";
  svg: "svg";
};

type ReservedPropsType = "variants" | "args" | "overrides";
type NodeOverridesType<T extends NodeNameType> = Pick<
  PlasmicEventListItem2__OverridesType,
  DescendantsType<T>
>;
type NodeComponentProps<T extends NodeNameType> =
  // Explicitly specify variants, args, and overrides as objects
  {
    variants?: PlasmicEventListItem2__VariantsArgs;
    args?: PlasmicEventListItem2__ArgsType;
    overrides?: NodeOverridesType<T>;
    dataFetches?: PlasmicEventListItem2__Fetches;
  } & Omit<PlasmicEventListItem2__VariantsArgs, ReservedPropsType> & // Specify variants directly as props
    // Specify args directly as props
    Omit<PlasmicEventListItem2__ArgsType, ReservedPropsType> &
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
      internalArgPropNames: PlasmicEventListItem2__ArgProps,
      internalVariantPropNames: PlasmicEventListItem2__VariantProps
    });

    const { dataFetches } = props;

    return PlasmicEventListItem2__RenderFunc({
      variants,
      args,
      overrides,
      dataFetches,
      forNode: nodeName
    });
  };
  if (nodeName === "root") {
    func.displayName = "PlasmicEventListItem2";
  } else {
    func.displayName = `PlasmicEventListItem2.${nodeName}`;
  }
  return func;
}

export const PlasmicEventListItem2 = Object.assign(
  // Top-level PlasmicEventListItem2 renders the root element
  makeNodeComponent("root"),
  {
    // Helper components rendering sub-elements
    svg: makeNodeComponent("svg"),

    // Metadata about props expected for PlasmicEventListItem2
    internalVariantProps: PlasmicEventListItem2__VariantProps,
    internalArgProps: PlasmicEventListItem2__ArgProps
  }
);

export default PlasmicEventListItem2;
/* prettier-ignore-end */
