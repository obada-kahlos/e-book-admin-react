import React from "react";
import { UiProps } from "../data-access/ul";

const Ul: React.FC<UiProps> = ({ ...props }) => {
  return <>
    <ul className={`${props.className}-ul`}>{props.children}</ul>
    <style>
        {`
            .${props.className}-ul{
                margin : ${props.margin};
                padding : ${props.padding};
            }
            .${props.className}-ul a.active{
              background-color : red;
            }
        `}
    </style>
  </>
};

export default Ul;
