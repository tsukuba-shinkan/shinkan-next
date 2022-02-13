// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type SportsMartialArtsBlack24DpsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function SportsMartialArtsBlack24DpsvgIcon(
  props: SportsMartialArtsBlack24DpsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
      fill={"currentColor"}
      viewBox={"0 0 24 24"}
      height={"1em"}
      width={"1em"}
      style={{
        fill: "currentcolor",

        ...(style || {}),
      }}
      className={classNames("plasmic-default__svg", className)}
      {...restProps}
    >
      {title && <title>{title}</title>}

      <path fill={"none"} d={"M0 0h24v24H0z"}></path>

      <path
        d={
          "M19.8 2l-8.2 6.7-1.21-1.04 3.6-2.08L9.41 1 8 2.41l2.74 2.74L5 8.46l-1.19 4.29L6.27 17 8 16l-2.03-3.52.35-1.3L9.5 13l.5 9h2l.5-10L21 3.4z"
        }
      ></path>

      <circle cx={"5"} cy={"5"} r={"2"}></circle>
    </svg>
  );
}

export default SportsMartialArtsBlack24DpsvgIcon;
/* prettier-ignore-end */
