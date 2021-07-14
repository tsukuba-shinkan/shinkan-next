// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigateBeforeBlack18DpsvgIconProps =
  React.ComponentProps<"svg"> & {
    title?: string;
  };

export function NavigateBeforeBlack18DpsvgIcon(
  props: NavigateBeforeBlack18DpsvgIconProps
) {
  const { className, style, title, ...restProps } = props;
  return (
    <svg
      xmlns={"http://www.w3.org/2000/svg"}
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

      <path d={"M0 0h24v24H0z"} fill={"none"}></path>

      <path d={"M15.41 7.41L14 6l-6 6 6 6 1.41-1.41L10.83 12z"}></path>
    </svg>
  );
}

export default NavigateBeforeBlack18DpsvgIcon;
/* prettier-ignore-end */
