import { ReactElement, ReactEventHandler } from "react";
import { IconProps } from "../../shared/icon/data-access/icon";

export interface PopupProps extends IconProps {
  headerTitle:string;
  width: string;
  className: string;
  translate: string;
  height: string;
  bgClor: string;
  padding?: string;
  borderRadius: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
  zIndex: string;
  paddingBodyBottom: string;
  isOpen: boolean | string | any;
  children?: ReactElement;
  onClick?: ReactEventHandler;
}
