// @ts-nocheck
/* eslint-disable */
/* tslint:disable */
/* prettier-ignore-start */
import React from "react";
import { classNames } from "@plasmicapp/react-web";

export type ExpandLess24PxsvgIconProps = React.ComponentProps<"svg"> & {
  title?: string;
};

export function ExpandLess24PxsvgIcon(props: ExpandLess24PxsvgIconProps) {
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

      <path d={"M12 8l-6 6 1.41 1.41L12 10.83l4.59 4.58L18 14z"}></path>
    </svg>
  );
}

export default ExpandLess24PxsvgIcon;
/* prettier-ignore-end */
