import React from "react";
import { ImageProps } from "../data-access/image";

const Image: React.FC<ImageProps> = ({ ...props }) => {
  return (
    <>
      <img
        src={props.src}
        alt={props.alt}
        className={`${props.className} ${props.border}`}
      />
      <style>
        {`  
          img.${props.className}{
            border-radius: ${props.borderRadius};
            width : ${props.width};
            height : ${props.height};
            cursor : pointer;
          }
          @media(max-width : 768px){
            img.${props.className}{
              width : ${props.SmWidth}
            }
          }
        `}
      </style>
    </>
  );
};
export default Image;
