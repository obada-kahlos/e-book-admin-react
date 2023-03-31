import React from "react";
import Icon from "../../icon/ui/icon";
import { FlotingButtonProps } from "../data-access/floating-button";

const FloatingButton: React.FC<FlotingButtonProps> = ({ ...props }) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`${props.className}-btn ${props.bgColor} hover:${props.bgHover}`}>
        <Icon icon={props.icon} />
      </button>
      <style>
        {`  
            .${props.className}-btn{
                position: ${props.position};
                width : ${props.width};
                height : ${props.height};
                padding : ${props.padding};
                margin : ${props.margin};
                color : ${props.color};
                font-size : ${props.fontSize};
                border-radius : ${props.borderRadius};
                transition : 0.4s;
                top : ${props.top};
                bottom : ${props.bottom};
                left : ${props.left};
                right : ${props.right};
                z-index : 1000;
            }
        `}
      </style>
    </>
  );
};

export default FloatingButton;
