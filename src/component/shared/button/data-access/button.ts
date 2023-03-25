import { ReactEventHandler } from "react";

export interface ButtonProps {
  className: string;
  buttonText: string;
  width: string;
  padding: string;
  margin: string;
  borderRadius: string;
  bgColor: string;
  color: string;
  fontSize: string;
  bgHover?: string;
  border?: string;
  onClick?: ReactEventHandler;
}
