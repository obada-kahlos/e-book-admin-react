import React from "react";
import Button from "../../shared/button/ui/button";
import Paragraph from "../../shared/paragraph/ui/paragraph";
import { AlertProps } from "../data-access/alert";

const Alert: React.FC<AlertProps> = ({ ...props }) => {
  return (
    <>
      {props.isOpen ? (
        <>
          <div className="alert">
            <Paragraph
              text={"Are You Sure! You Want To Do This?"}
              color={"text-[#191919]"}
              fontSize={"18px"}
              className={"alert-text"}
            />
            <div className="flex gap-5">
              <Button
                className={"No"}
                buttonText={"No"}
                width={"120px"}
                padding={"10px 15px"}
                margin={"10px 0px 0px 0px"}
                borderRadius={"5px"}
                bgColor={""}
                color={"#333"}
                fontSize={"16px"}
                border={"1px solid #CC1016"}
                bgHover={"bg-error"}
                onClick={props.onClose}
              />
              <Button
                className={"Yes"}
                buttonText={"Yes"}
                width={"120px"}
                padding={"10px 15px"}
                margin={"10px 0px 0px 0px"}
                borderRadius={"5px"}
                bgColor={"bg-main-color"}
                color={"#fff"}
                fontSize={"16px"}
                border={"1px solid #31588a"}
                bgHover={"bg-hover-color"}
                onClick={props.onAction}
              />
            </div>
          </div>
          <div
            className="fixed top-0 left-0 w-full h-full z-[999] bg-[rgba(255,255,255,0.1)]"
            onClick={props.onClose}
          ></div>
          <style>
            {`
                  .alert{
                      position : fixed;
                      top : 50%;
                      left : 50%;
                      transform : translate(-50%,-50%);
                      background : #fff;
                      box-shadow : 0px 3px 20px 0px rgba(115,115,115,0.3),0px 3px 20px 0px rgba(115,115,115,0.3);
                      border-radius : 5px;
                      padding : 40px 10px;
                      display : flex;
                      justify-content : center;
                      align-items: center;
                      width : 500px;
                      height :auto;
                      z-index : 1000;
                      gap : 10px;
                      flex-direction: column;
                  }
                  @media(max-width : 600px){
                    .alert{
                      width : 90%;
                    }
                  }
              `}
          </style>
        </>
      ) : null}
    </>
  );
};

export default Alert;
