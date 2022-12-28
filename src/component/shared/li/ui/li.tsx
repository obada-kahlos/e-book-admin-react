import React from "react";
import { LiProps } from "../data-access/li";
import Icon from "../../icon/ui/icon";
import { NavLink } from "react-router-dom";

const Li: React.FC<LiProps> = ({ ...props }) => {
  return (
    <>
      <NavLink
        to={props.href}
      >
        <li className="transition-all aside-list hover:bg-hover-color" onClick={props.onClick}>
          <Icon icon={props.icon} />
          <span> {props.text} </span>
        </li>
      </NavLink>
      <style>
        {`
            li.aside-list{
                color : ${props.color};
                font-size : ${props.fontSize};
                padding : ${props.padding};
                margin : ${props.margin};
                cursor : pointer;
                display : flex;
                justify-content : start;
                align-items : center;
                gap: 10px;
                border-radius : 4px;
                transition : 0.4s;
            }
        `}
      </style>
    </>
  );
};

export default Li;
