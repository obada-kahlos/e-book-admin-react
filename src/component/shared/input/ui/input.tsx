import React from "react";
import Icon from "../../icon/ui/icon";
import { InputProps } from "../data-access/input";

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <>
        <div className="input-container">
            <label className="lable" htmlFor={props.id}>
            {props.lable}
            </label>
          <input className="" type={props.type} id={props.id} name={props.name} placeholder={props.placeholder}/>
          <div className="absolute top-[50%] right-[10px] -translate-x-[50%]">
            <Icon icon={props.icon} />
          </div>
        </div>
      <style>
        {`
            .lable{
                color : ${props.color};
                font-size : ${props.fontSize};
            }
            input{
                width : 100%;
                padding : ${props.padding};
                margin : ${props.margin};
                background-color : ${props.bgColor};
                border-radius : ${props.borderRadius};
                border: ${props.border};
                color : ${props.color};
                font-size : ${props.fontSize};
            }
            .input-container{
                width : ${props.width};
                position : relative;
                overflow : hidden;
            }
        `}
      </style>
    </>
  );
};

export default Input;
