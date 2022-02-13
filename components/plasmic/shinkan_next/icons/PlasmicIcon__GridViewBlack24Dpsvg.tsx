// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type GridViewBlack24DpsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function GridViewBlack24DpsvgIcon(props: GridViewBlack24DpsvgIconProps) {
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

      <g fillRule={"evenodd"}>
        <path d={"M0 0h24v24H0z"} fill={"none"}></path>

        <path
          d={
            "M3 3v8h8V3H3zm6 6H5V5h4v4zm-6 4v8h8v-8H3zm6 6H5v-4h4v4zm4-16v8h8V3h-8zm6 6h-4V5h4v4zm-6 4v8h8v-8h-8zm6 6h-4v-4h4v4z"
          }
        ></path>
      </g>
    </svg>
  );
}

export default GridViewBlack24DpsvgIcon;
/* prettier-ignore-end */
