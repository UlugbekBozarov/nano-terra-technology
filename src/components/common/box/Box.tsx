import { get } from "lodash";
import React from "react";
import { styled } from "styled-components";

interface ISpaceMediaObject {
  xs?: number;
  sm?: number;
  md?: number;
  lg?: number;
  xl?: number;
}

type IDisplay = "flex" | "block" | "initial" | "inherit";

interface IDisplayMediaObject {
  xs?: IDisplay;
  sm?: IDisplay;
  md?: IDisplay;
  lg?: IDisplay;
  xl?: IDisplay;
}

interface IBox {
  width?: number | string;
  minWidth?: number | string;
  maxWidth?: number | string;
  height?: number | string;
  minHeight?: number | string;
  maxHeight?: number | string;
  display?: IDisplayMediaObject | IDisplay;
  justifyContent?:
    | "center"
    | "space-between"
    | "space-around"
    | "flex-start"
    | "flex-end"
    | "end"
    | "start"
    | "inherit"
    | "initial";
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
  p?: ISpaceMediaObject | number;
  pt?: ISpaceMediaObject | number;
  pb?: ISpaceMediaObject | number;
  pr?: ISpaceMediaObject | number;
  pl?: ISpaceMediaObject | number;
  px?: ISpaceMediaObject | number;
  py?: ISpaceMediaObject | number;
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
  value?: object | number,
  media?: "xs" | "sm" | "md" | "lg" | "xl"
) => {
  if (typeof value === "object") {
    const newValue = get(value, media || "xs", undefined);
    return getStringSpace(newValue);
  } else {
    return getStringSpace(value);
  }
};

const BoxRoot = styled("div")<IBox>(
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
    width: typeof width === "number" ? `${width}px` : width,
    minWidth: typeof minWidth === "number" ? `${minWidth}px` : minWidth,
    maxWidth: typeof maxWidth === "number" ? `${maxWidth}px` : maxWidth,
    height: typeof height === "number" ? `${height}px` : height,
    minHeight: typeof minHeight === "number" ? `${minHeight}px` : minHeight,
    maxHeight: typeof maxHeight === "number" ? `${maxHeight}px` : maxHeight,
    display: getValueString(display),
    justifyContent,
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
      display: getValueString(display, "sm"),
      padding: getValue(p, "sm"),
      paddingTop: getValue(pt, "sm") || getValue(py, "sm"),
      paddingBottom: getValue(pb, "sm") || getValue(py, "sm"),
      paddingLeft: getValue(pl, "sm") || getValue(px, "sm"),
      paddingRight: getValue(pr, "sm") || getValue(px, "sm"),
    },
    "@media(min-width: 768px)": {
      display: getValueString(display, "md"),
      padding: getValue(p, "md"),
      paddingTop: getValue(pt, "md") || getValue(py, "md"),
      paddingBottom: getValue(pb, "md") || getValue(py, "md"),
      paddingLeft: getValue(pl, "md") || getValue(px, "md"),
      paddingRight: getValue(pr, "md") || getValue(px, "md"),
    },
    "@media(min-width: 1200px)": {
      display: getValueString(display, "lg"),
      padding: getValue(p, "lg"),
      paddingTop: getValue(pt, "lg") || getValue(py, "lg"),
      paddingBottom: getValue(pb, "lg") || getValue(py, "lg"),
      paddingLeft: getValue(pl, "lg") || getValue(px, "lg"),
      paddingRight: getValue(pr, "lg") || getValue(px, "lg"),
    },
  })
);

const Box: React.FC<IBox> = (props) => {
  return <BoxRoot {...props} />;
};

export default Box;
