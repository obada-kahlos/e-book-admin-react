import React from "react";
import { ButtonProps } from "../data-access/button";

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <>
      <button
        onClick={props.onClick}
        className={`${props.className}-btn ${props.bgColor} hover:${props.bgHover}`}
        type={"submit"}>
        {props.buttonText}
      </button>
      <style>
        {`  
            .${props.className}-btn{
                width : ${props.width};
                padding : ${props.padding};
                margin : ${props.margin};
                color : ${props.color};
                font-size : ${props.fontSize};
                border-radius : ${props.borderRadius};
                border : ${props.border};
                cursor : pointer;
                transition : 0.4s;
            }
            @media(max-width : 768px){
              .${props.className}-btn{
                font-size : 18px;
              }
            }
        `}
      </style>
    </>
  );
};

export default Button;
