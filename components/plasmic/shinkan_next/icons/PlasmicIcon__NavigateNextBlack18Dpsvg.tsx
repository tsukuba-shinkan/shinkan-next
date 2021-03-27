// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type NavigateNextBlack18DpsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function NavigateNextBlack18DpsvgIcon(
  props: NavigateNextBlack18DpsvgIconProps
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

      <path d={"M10 6L8.59 7.41 13.17 12l-4.58 4.59L10 18l6-6z"}></path>
    </svg>
  );
}

export default NavigateNextBlack18DpsvgIcon;
/* prettier-ignore-end */
