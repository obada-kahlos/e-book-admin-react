import { ReactElement, ReactEventHandler } from "react";
import { IconProps } from "../../shared/icon/data-access/icon";

export interface PopupProps extends IconProps {
  header: {
    title: string;
  };
  width: string;
  height: string;
  bgClor: string;
  padding?: string;
  borderRadius: string;
  top: string;
  left: string;
  right: string;
  bottom: string;
  isOpen: boolean | string | any;
  children?: ReactElement;
  onClick?: ReactEventHandler;
}
