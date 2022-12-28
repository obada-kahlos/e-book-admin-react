import { ReactElement } from "react";

export interface NavProps {
  width: string;
  height: string;
  padding: string;
  margin: string;
  className: string;
  bgColor: string;
  borderRightColor?: string;
  borderRightStyle?: string;
  borderRightWidth?: string;
  position?: string;
  children: ReactElement;
}
