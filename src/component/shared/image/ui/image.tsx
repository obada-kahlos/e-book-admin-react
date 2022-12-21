import React from "react";
import { ImageProps } from "../data-access/image";

const Image: React.FC<ImageProps> = ({ ...props }) => {
  return (
    <>
      <img src={props.src} alt={props.alt} className={props.className} />
      <style>
        {`  
          img.${props.className}{
            width : ${props.width};
            height : ${props.height};
            border-raduis : ${props.borderRaduis};
            object-fit: contain;
          }
        `}
      </style>
    </>
  );
};
export default Image;
