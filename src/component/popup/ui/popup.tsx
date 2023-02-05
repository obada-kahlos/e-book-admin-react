import { IconButton } from "@mui/material";
import React from "react";
import Icon from "../../shared/icon/ui/icon";
import { PopupProps } from "../data-access/popup";
import CloseIcon from "@mui/icons-material/Close";

const Popup: React.FC<PopupProps> = ({ ...props }) => {
  return (
    <>
      {props.isOpen && (
        <>
          <div className={`${props.className}-popup-container`}>
            {props.headerTitle ? (
              <div className="pupup-header">
                <p> {props.headerTitle} </p>
                <IconButton color="primary" onClick={props.onClick}>
                  <Icon
                    icon={
                      <CloseIcon
                        sx={{
                          fontSize: "24px",
                          cursor: "pointer",
                          color: "#726c6c",
                        }}
                      />
                    }
                    className={"popup-close-icon"}
                  />
                </IconButton>
              </div>
            ) : (
              ""
            )}
            <div className="pupup-body">{props.children}</div>
          </div>
          <div className="overlay" onClick={props.onClick}></div>
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
                .${props.className}-popup-container{
                    position : fixed;
                    top : ${props.top};
                    left: ${props.left};
                    right: ${props.right};
                    bottom: ${props.bottom};
                    transform : ${props.translate};
                    width : ${props.width};
                    height : ${props.height};
                    background-color : ${props.bgClor};
                    border-radius : ${props.borderRadius};
                    padding : ${props.padding};
                    box-shadow: 0 3px 20px 0 rgba(0, 0, 0, 0.1), 0 2px 20px 0 rgba(0, 0, 0, 0.19);
                    overflow : hidden;
                    z-index : ${props.zIndex};
                }
                .pupup-header{
                    position : sticky;
                    top : 0;
                    width : 100%;
                    display : flex;
                    justify-content : space-between;
                    align-items : center;
                    padding : 15px 10px;
                    border-bottom : 1px solid #ccc;
                }
                .${props.className}-popup-container .pupup-body{
                    overflow: hidden;
                    overflow-y: auto; 
                    height : ${props.height};
                    padding-bottom : ${props.paddingBodyBottom};
                }
                @media(max-width : 768px){
                  .${props.className}-popup-container{
                      width : 100%;
                      height : 100%;
                      border-radius : 0px;
                  }
                  .${props.className}-popup-container .pupup-body{
                    overflow: hidden;
                    overflow-y: auto; 
                    height : 100%;
                    padding-bottom : 60px;
                }
              }
                .overlay{
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
