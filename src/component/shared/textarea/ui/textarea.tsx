import React from "react";
import { TextareaProps } from "../data-access/textarea";
const TextArea: React.FC<TextareaProps> = ({ ...props }) => {
  return (
    <>
        <div className={`textarea-container-${props.className}`}>
            <label className="lable" htmlFor={props.id}>
            {props.lable}
            </label>
          <textarea className={props.className} {...props} placeholder={props.placeholder} />
          <div className="absolute top-[50%] right-[10px] -translate-x-[50%]">
          </div>
        </div>
      <style>
        {`
            .lable{
                color : ${props.color};
                font-size : ${props.fontSize};
            }
            textarea.${props.className}{
                width : ${props.width};
                height : ${props.height};
                padding : ${props.padding};
                margin : ${props.margin};
                background-color : ${props.bgcolor};
                border-radius : ${props.borderradius};
                border: ${props.border};
                color : ${props.color};
                font-size : ${props.fontSize};
                resize: none;
            }
            .textarea-container-${props.className}{
                width : ${props.width};
                height : ${props.height}
                position : relative;
                overflow : hidden;
            }
        `}
      </style>
    </>
  );
};

export default TextArea;
