import { IconProps } from "../../icon/data-access/icon";

type InputType =
  | "number"
  | "search"
  | "button"
  | "time"
  | "image"
  | "text"
  | "checkbox"
  | "color"
  | "date"
  | "datetime-local"
  | "email"
  | "file"
  | "hidden"
  | "month"
  | "password"
  | "radio"
  | "range";
export interface InputProps extends IconProps {
  lable?: string;
  className?: string;
  name: string;
  type?: InputType;
  placeholder: string;
  id: string;
  width: string;
  margin: string;
  padding: string;
  borderradius: string;
  border: string;
  bgcolor: string;
  color: string;
  fontSize: string;
}
