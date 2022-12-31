import React from "react";
import { LiProps } from "../data-access/li";
import Icon from "../../icon/ui/icon";
import { NavLink } from "react-router-dom";

const Li: React.FC<LiProps> = ({ ...props }) => {
  return (
    <>
      <li className="" onClick={props.onClick}>
        <NavLink to={props.href} className={props.className}>
          <Icon icon={props.icon} />
          <span> {props.text} </span>
        </NavLink>
      </li>
      <style>
        {`
            .${props.className}{
                color : ${props.color};
                font-size : ${props.fontSize};
                padding : ${props.padding};
                margin : ${props.margin};
                cursor : pointer;
                display : flex;
                justify-content : start;
                align-items : center;
                gap: 10px;
                border-radius : ${props.borderRadius};
                transition : 0.4s;
            }
            .${props.className}:hover{
              background-color : #638ccc;
              color : #fff;
          }
            a.active{
              background-color : #638ccc;
              color : #fff;
            }
        `}
      </style>
    </>
  );
};

export default Li;
