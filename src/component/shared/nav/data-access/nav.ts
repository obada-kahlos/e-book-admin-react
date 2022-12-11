import { ReactElement } from "react";

export interface NavProps {
  width: string;
  height: string;
  padding: string;
  margin: string;
  className: string;
  borderRightColor?: string;
  borderRightStyle?: string;
  borderRightWidth?: string;
  children: ReactElement;
}
