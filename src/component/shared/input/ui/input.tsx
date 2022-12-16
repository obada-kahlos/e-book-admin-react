import React , {useState} from "react";
import Icon from "../../icon/ui/icon";
import { InputProps } from "../data-access/input";
import RemoveRedEyeOutlinedIcon from '@mui/icons-material/RemoveRedEyeOutlined';
import VisibilityOffOutlinedIcon from '@mui/icons-material/VisibilityOffOutlined';
const Input: React.FC<InputProps> = ({ ...props }) => {

  return (
    <>
        <div className={`input-container-${props.className}`}>
            <label className="lable" htmlFor={props.id}>
            {props.lable}
            </label>
          <input className={props.className} type={props.type} {...props} placeholder={props.placeholder} onChange={props.onChange}/>
          <span className="absolute top-[50%] left-[20px] -translate-x-[50%]">
            <Icon icon={props.icon} />
          </span>
          {
            props.name === 'password' ? <span> <RemoveRedEyeOutlinedIcon /> </span> : ''
          }
        </div>
      <style>
        {`
            .lable{
                color : ${props.color};
                font-size : ${props.fontSize};
            }
            input.${props.className}{
                width : 100%;
                padding : ${props.padding};
                margin : ${props.margin};
                background-color : ${props.bgcolor};
                border-radius : ${props.borderradius};
                border: ${props.border};
                color : ${props.color};
                font-size : ${props.fontSize};
                transition : 0.1s;
            }
            .input-container-${props.className}{
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
