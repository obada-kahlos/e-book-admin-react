import React, { useState } from "react";
import Icon from "../../icon/ui/icon";
import { InputProps } from "../data-access/input";

const Input: React.FC<InputProps> = ({ ...props }) => {
  return (
    <>
      <label className="lable" htmlFor={props.id}>
        {props.lable}
      </label>
      <div className={`input-container-${props.className} relative`}>
        <input
          className={props.className}
          type={props.type}
          {...props}
          placeholder={props.placeholder}
          onChange={props.onChange}
        />
        <span className="input-icon">
          {" "}
          <Icon icon={props.icon} />{" "}
        </span>
        {props.name === "password" ? (
          <span className="password-icon">
            {" "}
            <Icon
              icon={props.passwordIcon?.icon}
              onClick={props.passwordIcon?.onClick}
            />
          </span>
        ) : (
          ""
        )}
      </div>
      <style>
        {`
            .lable{
                color : ${props.color};
                font-size : ${props.fontSize};
                display: block;
            }
            input.${props.className}{
                width : ${props.width};
                padding : ${props.padding};
                margin : ${props.margin};
                background-color : ${
                  props.disabled ? "rgb(204, 204, 204,0.5)" : props.bgcolor
                };
                border-radius : ${props.borderradius};
                border: ${props.border};
                color : ${props.color};
                font-size : ${props.fontSize};
                transition : 0.2s ease-in;
            }
            .input-icon{
              position: absolute;
              top: 50%;
              left: 10px;
              transform : translateY(-50%);
            }
            .password-icon{
              position: absolute;
              top: 50%;
              right: 10px;
              transform : translateY(-50%);
              cursor : pointer;
            }
            .input-container-${props.className}{
                position : relative;
                overflow : hidden;
            }
            input.${props.className}:focus{
              width : 100%;
            }
        `}
      </style>
    </>
  );
};

export default Input;
