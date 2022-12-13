import { ReactEventHandler } from "react";

type buttonType = "button" | "submit" | "reset" | undefined;

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
  type?: buttonType;
  onClick?: ReactEventHandler;
}
