import React from "react";
import { IconProps } from "../data-access/icon";

const Icon: React.FC<IconProps> = ({ ...props }) => {
  return (
    <>
      <span className="icon" onClick={props.onClick}> {props.icon} </span>
      <style>
        {`
          span.icon{
            display : flex;
            justify-content: center;
            align-items: center;
            color : #fff;
          }
        `}
      </style>
    </>
  );
};

export default Icon;
