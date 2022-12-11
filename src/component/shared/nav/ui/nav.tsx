import React from "react";
import { NavProps } from "../data-access/nav";

const Nav: React.FC<NavProps> = ({ ...props }) => {
  return (
    <>
      <nav className={`${props.className}-nav bg-main-color`}>{props.children}</nav>
      <style>
        {`
                .${props.className}-nav{
                    width : ${props.width};
                    height : ${props.height};
                    padding : ${props.padding};
                    margin : ${props.margin};
                    border-right-width : ${props.borderRightWidth};
                    border-right-style : ${props.borderRightStyle};
                    border-right-color : ${props.borderRightColor};
                    overflow: hidden; 
                    overflow-y :auto;
                    transition : 0.4s;
                }
                .${props.className}-nav a.active{
                  background-color : red;
                }
            `}
      </style>
    </>
  );
};

export default Nav;
