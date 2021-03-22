// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandMoreBlack24DpsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExpandMoreBlack24DpsvgIcon(
  props: ExpandMoreBlack24DpsvgIconProps
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

      <path d={"M16.59 8.59L12 13.17 7.41 8.59 6 10l6 6 6-6z"}></path>
    </svg>
  );
}

export default ExpandMoreBlack24DpsvgIcon;
/* prettier-ignore-end */
