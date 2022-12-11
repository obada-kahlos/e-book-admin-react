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
  name: string;
  type: InputType;
  placeholder: string;
  id: string;
  width: string;
  margin: string;
  padding: string;
  borderRadius: string;
  border: string;
  bgColor: string;
  color: string;
  fontSize: string;
}
