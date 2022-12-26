import React , {useState} from "react";
import Icon from "../../icon/ui/icon";
import { InputProps } from "../data-access/input";

const Input: React.FC<InputProps> = ({ ...props }) => {

  return (
    <>
        <div className={`input-container-${props.className} relative`}>
            <label className="lable " htmlFor={props.id}>
            {props.lable}
            </label>
          <input className={props.className}  type={props.type} {...props} placeholder={props.placeholder} onChange={props.onChange}/>
            <Icon className="input-icon" icon={props.icon} />
          {
            props.name === 'password' ? <Icon className="password-icon" icon={props.passwordIcon?.icon} onClick={props.passwordIcon?.onClick}/>: ''
          }
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
                background-color : ${props.bgcolor};
                border-radius : ${props.borderradius};
                border: ${props.border};
                color : ${props.color};
                font-size : ${props.fontSize};
                transition : 0.2s ease-in;
            }
            .input-icon{
              position: absolute;
              top: 50%;
              left: 20px;
              transform : translateX(-50%)
            }
            .password-icon{
              position: absolute;
              top: 50%;
              right: 0px;
              transform : translateX(-50%);
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
