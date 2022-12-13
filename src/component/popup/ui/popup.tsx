import { IconButton } from "@mui/material";
import React from "react";
import Icon from "../../shared/icon/ui/icon";
import { PopupProps } from "../data-access/popup";

const Popup: React.FC<PopupProps> = ({ ...props }) => {
  return (
    <>
      {props.isOpen && (
        <>
          <div className="popup-container">
            <div className="pupup-header">
              <p> {props.header.title} </p>
              <IconButton onClick={props.onClick}><Icon icon={props.icon} /></IconButton>
            </div>
            <div className="pupup-body">{props.children}</div>
          </div>
          <div className="layout" onClick={props.onClick}></div>
          <style>
            {`
                body{
                    overflow : hidden
                }
            `}
          </style>
        </>
      )}
      <style>
        {`
                .popup-container{
                    position : fixed;
                    top : ${props.top};
                    left: ${props.left};
                    right: ${props.right};
                    bottom: ${props.bottom};
                    transform : translate(-50% , -50%);
                    width : ${props.width};
                    height : ${props.height};
                    background-color : ${props.bgClor};
                    border-radius : ${props.borderRadius};
                    padding : ${props.padding};
                    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1), 0 2px 20px 0 rgba(0, 0, 0, 0.19);
                    overflow : hidden;
                    z-index : 1001;
                }
                @media(max-width : 600px){
                    .popup-container{
                        width : 100%;
                        height : 100%;
                        border-radius : 0px;
                    }
                }
                .pupup-header{
                    position : sticky;
                    top : 0;
                    width : 100%;
                    display : flex;
                    justify-content : space-between;
                    align-items : center;
                    padding : 20px 10px;
                    border-bottom : 1px solid #ccc;

                }
                .pupup-body{
                    overflow: hidden;
                    overflow-y: auto; 
                    height : ${props.height};
                    padding-bottom : 60px;
                }
                .layout{
                    position : fixed;
                    top : 0;
                    left : 0;
                    width : 100%;
                    height : 100%;
                    background-color : rgba(3, 3, 3,0.2);
                    z-index : 1000;
                }
            `}
      </style>
    </>
  );
};

export default Popup;
