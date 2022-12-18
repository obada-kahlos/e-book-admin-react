import React from "react";
import { ImageProps } from "../data-access/image";

const Image: React.FC<ImageProps> = ({ ...props }) => {
  return (
    <>
      <img src={props.src} alt={props.alt}/>
      <style>
        {`  
          img{
            width : ${props.width};
            height : ${props.height};
            border-raduis : ${props.borderRaduis}
          }
        `}
      </style>
    </>
  );
};
export default Image;