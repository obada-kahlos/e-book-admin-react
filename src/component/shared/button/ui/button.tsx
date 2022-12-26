import React from "react";
import { ButtonProps } from "../data-access/button";

const Button: React.FC<ButtonProps> = ({ ...props }) => {
  return (
    <>
      <button onClick={props.onClick} className={`${props.className}-btn ${props.bgColor} hover:${props.bgHover}`} type={'submit'}>
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
                transition : 0.4s;
                // box-shadow: 0px 0px 20px 2px rgba(22, 134, 186, 0.251);
            }
            @media(max-width : 768px){
              .${props.className}-btn{
                font-size : 14px;
                padding : 10px 15px
              }
            }
        `}
      </style>
    </>
  );
};

export default Button;
