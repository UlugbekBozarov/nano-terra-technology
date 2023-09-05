import { get } from "lodash";
import React from "react";
import { styled } from "styled-components";

interface IMediaObject {
  xs?: string | number;
  sm?: string | number;
  md?: string | number;
  lg?: string | number;
  xl?: string | number;
}

type IDisplay = "flex" | "block" | "initial" | "inherit";

interface IDisplayMediaObject {
  xs?: IDisplay;
  sm?: IDisplay;
  md?: IDisplay;
  lg?: IDisplay;
  xl?: IDisplay;
}

type IJustifyContent =
  | "center"
  | "space-between"
  | "space-around"
  | "flex-start"
  | "flex-end"
  | "end"
  | "start"
  | "inherit"
  | "initial";

interface IJustifyContentMediaObject {
  xs?: IJustifyContent;
  sm?: IJustifyContent;
  md?: IJustifyContent;
  lg?: IJustifyContent;
  xl?: IJustifyContent;
}

interface IBox {
  id?: string;
  width?: IMediaObject | number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  display?: IDisplayMediaObject | IDisplay;
  justifyContent?: IJustifyContentMediaObject | IJustifyContent;
  alignItems?:
    | "center"
    | "baseline"
    | "stretch"
    | "flex-start"
    | "flex-end"
    | "end"
    | "start"
    | "inherit"
    | "initial";
  m?: number;
  mt?: number;
  mb?: number;
  mr?: number;
  ml?: number;
  mx?: number;
  my?: number;
  p?: IMediaObject | number;
  pt?: IMediaObject | number;
  pb?: IMediaObject | number;
  pr?: IMediaObject | number;
  pl?: IMediaObject | number;
  px?: IMediaObject | number;
  py?: IMediaObject | number;
  children?: React.ReactNode;
}

const getValueString = (
  value?: object | string,
  media?: "xs" | "sm" | "md" | "lg" | "xl"
) => {
  if (typeof value === "object") {
    return get(value, media || "xs", undefined);
  } else {
    return value;
  }
};

const getStringSpace = (value?: string | number) => {
  if (typeof value === "number") {
    return `${value}px`;
  } else if (typeof value === "string") {
    return value;
  } else return undefined;
};

const getValue = (
  value?: object | number | string,
  media?: "xs" | "sm" | "md" | "lg" | "xl"
) => {
  if (typeof value === "object") {
    const newValue = get(value, media || "xs", undefined);
    return getStringSpace(newValue);
  } else if (typeof value === "string") {
    return value;
  } else {
    return getStringSpace(value);
  }
};

const BoxRoot = styled("div").withConfig({
  shouldForwardProp: (prop) =>
    ![
      "width",
      "minWidth",
      "maxWidth",
      "height",
      "minHeight",
      "maxHeight",
      "display",
      "justifyContent",
      "alignItems",
      "m",
      "mb",
      "ml",
      "mr",
      "mt",
      "mx",
      "my",
      "p",
      "pb",
      "pl",
      "pr",
      "pt",
      "px",
      "py",
    ].includes(prop),
})<IBox>(
  ({
    width,
    minWidth,
    maxWidth,
    height,
    minHeight,
    maxHeight,
    display,
    justifyContent,
    alignItems,
    m,
    mb,
    ml,
    mr,
    mt,
    mx,
    my,
    p,
    pb,
    pl,
    pr,
    pt,
    px,
    py,
  }) => ({
    width: getValue(width),
    minWidth: getValue(minWidth),
    maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
    height: typeof height === "number" ? `${height}px` : height,
    minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
    maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
    display: getValueString(display),
    justifyContent: getValue(justifyContent),
    alignItems,
    margin: m ? `${m}px` : undefined,
    marginLeft: ml || mx ? `${ml || mx}px` : undefined,
    marginRight: mr || mx ? `${mr || mx}px` : undefined,
    marginTop: mt || my ? `${mt || my}px` : undefined,
    marginBottom: mb || my ? `${mb || my}px` : undefined,
    padding: getValue(p, "lg"),
    paddingTop: getValue(pt) || getValue(py),
    paddingBottom: getValue(pb) || getValue(py),
    paddingLeft: getValue(pl) || getValue(px),
    paddingRight: getValue(pr) || getValue(px),
    "@media(min-width: 576px)": {
      width: getValue(width, "sm"),
      minWidth: getValue(minWidth, "sm"),
      display: getValueString(display, "sm"),
      justifyContent: getValueString(justifyContent, "sm"),
      padding: getValue(p, "sm"),
      paddingTop: getValue(pt, "sm") || getValue(py, "sm"),
      paddingBottom: getValue(pb, "sm") || getValue(py, "sm"),
      paddingLeft: getValue(pl, "sm") || getValue(px, "sm"),
      paddingRight: getValue(pr, "sm") || getValue(px, "sm"),
    },
    "@media(min-width: 768px)": {
      width: getValue(width, "md"),
      minWidth: getValue(minWidth, "md"),
      display: getValueString(display, "md"),
      justifyContent: getValueString(justifyContent, "md"),
      padding: getValue(p, "md"),
      paddingTop: getValue(pt, "md") || getValue(py, "md"),
      paddingBottom: getValue(pb, "md") || getValue(py, "md"),
      paddingLeft: getValue(pl, "md") || getValue(px, "md"),
      paddingRight: getValue(pr, "md") || getValue(px, "md"),
    },
    "@media(min-width: 992px)": {
      width: getValue(width, "lg"),
      minWidth: getValue(minWidth, "lg"),
      display: getValueString(display, "lg"),
      justifyContent: getValueString(justifyContent, "lg"),
      padding: getValue(p, "lg"),
      paddingTop: getValue(pt, "lg") || getValue(py, "lg"),
      paddingBottom: getValue(pb, "lg") || getValue(py, "lg"),
      paddingLeft: getValue(pl, "lg") || getValue(px, "lg"),
      paddingRight: getValue(pr, "lg") || getValue(px, "lg"),
    },
    "@media(min-width: 1200px)": {
      width: getValue(width, "xl"),
      minWidth: getValue(minWidth, "xl"),
      display: getValueString(display, "xl"),
      justifyContent: getValueString(justifyContent, "xl"),
      padding: getValue(p, "xl"),
      paddingTop: getValue(pt, "xl") || getValue(py, "xl"),
      paddingBottom: getValue(pb, "xl") || getValue(py, "xl"),
      paddingLeft: getValue(pl, "xl") || getValue(px, "xl"),
      paddingRight: getValue(pr, "xl") || getValue(px, "xl"),
    },
  })
);

const Box: React.FC<IBox> = (props) => {
  return <BoxRoot {...props} />;
};

export default Box;
